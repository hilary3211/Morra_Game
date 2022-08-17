from threading import Thread
from reach_rpc import mk_rpc
import time
from os import name


Name = ['Hilary','James']
phrase = ['banana grow milk mercy record runway kitchen ability despair shine fringe dolphin describe sheriff indicate rubber push hurt smoke hour peace market palace about exhibit','sick guess crime sketch carry undo shallow used erase tilt business brush early mercy vague arrest brown approve vehicle voyage mobile stable begin abstract cabbage']
wagers = [3,'yes']
players_numguess = [5,5]
players_totalnumguess = [10,7]


def main():
    if Name == wagers:
        print('Dataset is empty')
    else:
        rpc, rpc_callbacks = mk_rpc()
        rpc("/stdlib/setProviderByName", "TestNet")
        User_1 = Name[0]
        User_2 =Name[1]
        p1acc_mnemonic = phrase[1]
        p2acc_mnemonic = phrase[0]
        acc_user1 = rpc("/stdlib/newAccountFromMnemonic", p1acc_mnemonic)
        acc_user2 = rpc("/stdlib/newAccountFromMnemonic", p2acc_mnemonic)
        def fmt(x):
            return rpc("/stdlib/formatCurrency", x, 4)

        def get_balance(w):
            return fmt(rpc("/stdlib/balanceOf", w))
        def get_address(s):
            return(rpc("/acc/getAddress", s))
        before_user1 = get_balance(acc_user1)
        before_user2 = get_balance(acc_user2)
        acc1 =  get_address(acc_user1)
        acc2 = get_address(acc_user2)
        print("%s starting balance is %s algo" %(User_1,before_user1))
        print("%s starting balance is %s algo"%(User_2,before_user2))
        print("%s's address is %s"%(User_1,acc1))
        print("%s's address is %s"%(User_2,acc2))

        ctc_user1 = rpc("/acc/contract", acc_user1)
        OUTCOME = [
            "Draw",
            "%s wins" %(User_1),
            "%s wins"%(User_2),
        ]
        def shared(who):
            def seeOutcome(n):
                print(
                    "%s saw outcome %s this round"
                    % (who, OUTCOME[rpc("/stdlib/bigNumberToNumber", n)])
                )
            return {
                "stdlib.hasRandom": True,
                "seeOutcome": seeOutcome,
            }



        def Usr1():
            wager = int(wagers[0])
            Alicenum = int(players_numguess[0])
            tng = int(players_totalnumguess[0])
            rpc_callbacks(
                "/backend/Alice",
                ctc_user1,
                dict(wager=rpc("/stdlib/parseCurrency", wager), Alice_num = Alicenum ,total_Number_guess = tng,deadline = 10, **shared(User_1))
            )

        user1 = Thread(target = Usr1)
        user1.start()

        def Usr2():
            wag = wagers[1]
            if wag == "yes" or wag == "y" or wag == "Y" or wag == "YES":

                def acceptWager(amt):
                    print("%s accepts the wager of %s" % (User_2, fmt(amt)))
                ctc_user2 =  rpc("/acc/contract", acc_user2, rpc("/ctc/getInfo", ctc_user1))
                bn = int(players_numguess[1])
                tng =  int(players_totalnumguess[1]) 
                rpc_callbacks(
                    "/backend/Bob",
                    ctc_user2,
                    dict(acceptwager=acceptWager,Bob_num=bn,total_Num_guess =tng, **shared(User_2))
                )
                rpc("/forget/ctc")
            else:
                print("wager not accepted")
                quit()

        user2 = Thread(target= Usr2)
        user2.start()
        user1.join()
        user2.join()

        after_user1 = get_balance(acc_user1)
        after_user2 = get_balance(acc_user2)

        print("%s went from %s to %s" % (User_1,before_user1, after_user1))
        print("%s went from %s to %s" % (User_2,before_user2, after_user2))

        rpc("/forget/acc", acc_user1, acc_user2)
        rpc("/forget/ctc", ctc_user1)

if __name__ == "__main__":
    main()
