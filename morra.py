import threading
from tkinter import *
from turtle import bgcolor
from threading import Thread
from reach_rpc import mk_rpc
import time

Deployer_list = []
Attacher_list = []
Names = []
Bal_before = []
Bal_after = []

colour = "black"
colour2 = "white"
root = Tk()
root.title("Morra game")
root.configure(background=colour)


def Deployer():
    def nexttab():
        Deployer_list.append(funds.get())
        top.destroy()
        newtop = Toplevel()
        newtop.configure(background=colour)
        newtop.title("DEPLOYER")

        def final():
            Deployer_list.append(D_totalnum.get())
            newtop.destroy()
            lasttop = Toplevel()
            lasttop.configure(background=colour)
            lasttop.title("Attacher")


            def getwin():
                num = int(Deployer_list[3]) + int(Attacher_list[3])
                Textbox1.insert(END, "\nThe Total number is %s" % num)
                if num == int(Deployer_list[4]) and num != int(Attacher_list[4]):
                    Textbox1.insert(
                        END, "\n%s won by guessing %s" % (Deployer_list[0], num)
                    )
                elif num != int(Deployer_list[4]) and num == int(Attacher_list[4]):
                    Textbox1.insert(
                        END, "\n%s won by guessing %s" % (Attacher_list[0], num)
                    )
                elif num == int(Deployer_list[4]) and num == int(Attacher_list[4]):
                    Textbox1.insert(
                        END,
                        "\nBoth players guessed the number %s\n game ends in a draw"
                        % num,
                    )
                else:
                    Textbox1.insert(
                        END,
                        "\nBoth couldn't players guess the number %s\n game ends in a draw"
                        % num,
                    )
                rpc, rpc_callbacks = mk_rpc()
                rpc("/stdlib/setProviderByName", "TestNet")
                User_1 = Deployer_list[0]
                User_2 = Attacher_list[0]
                p1acc_mnemonic = Deployer_list[1]
                p2acc_mnemonic = Attacher_list[1]
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
                    wager = int(Deployer_list[2])
                    Alicenum = int(Deployer_list[3])
                    tng = int(Deployer_list[4])
                    rpc_callbacks(
                        "/backend/Alice",
                        ctc_user1,
                        dict(wager=rpc("/stdlib/parseCurrency", wager), Alice_num = Alicenum ,total_Number_guess = tng,deadline = 10, **shared(User_1))
                    )

                user1 = Thread(target = Usr1)
                user1.start()

                def Usr2():
                    wag = Attacher_list[2]
                    if wag == "yes" or wag == "y" or wag == "Y" or wag == "YES":

                        def acceptWager(amt):
                            print("%s accepts the wager of %s" % (User_2, fmt(amt)))
                        ctc_user2 =  rpc("/acc/contract", acc_user2, rpc("/ctc/getInfo", ctc_user1))
                        bn = int(Attacher_list[3])
                        tng =  int(Attacher_list[4]) 
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

                Bal_before.append(before_user1)
                Bal_before.append(before_user2)
                Bal_after.append(after_user1)
                Bal_after.append(after_user2)

                print("%s went from %s to %s" % (User_1,before_user1, after_user1))
                print("%s went from %s to %s" % (User_2,before_user2, after_user2))

            def see_bal():
                Textbox1.insert(
                    END, "\nDeployer Starting Balance: %s Algo" % Bal_before[0]
                )
                Textbox1.insert(
                    END, "\nDeployer Ending Balance: %s Algo" % Bal_after[0]
                )

            def exitt():
                root.destroy()

            label = Label(
                lasttop,
                text="Deployer\nClick the button 'View winner' to see winner\nClick the button 'see balance' to view your balance\nClick the 'exit' button to exit game",
                font=50,
                width=40,
                height=8,
                bg=colour,
                fg=colour2,
            ).pack()
            Textbox1 = Text(
                lasttop,
                height=10,
                width=30,
                bg=colour,
                fg=colour2,
            )
            Textbox1.pack(expand=True)
            btn1 = Button(lasttop, text="View winner", command=getwin).pack()
            btn2 = Button(lasttop, text="See balance", command=see_bal).pack()
            btn3 = Button(lasttop, text="exit", command=exitt).pack()

        def getnum():
            if len(Deployer_list) == 3:
                Deployer_list.append(D_number.get())
            else:
                Deployer_list[3] = D_number.get()

        label = Label(
            newtop,
            text="Deployer!!",
            font=50,
            width=40,
            height=10,
            bg=colour,
            fg=colour2,
        ).pack()
        label1 = Label(
            newtop, text="Enter your number guess", font=50, bg=colour, fg=colour2
        ).pack()
        D_number = StringVar()
        D_number_entry = Entry(newtop, textvariable=D_number, width=15).pack()
        btn = Button(newtop, text="Enter", command=getnum).pack()
        label2 = Label(
            newtop, text="Enter your total number guess", font=50, bg=colour, fg=colour2
        ).pack()
        D_totalnum = StringVar()
        D_totalnum_entry = Entry(newtop, textvariable=D_totalnum, width=15).pack()
        btn1 = Button(newtop, text="Enter", command=final).pack()

    top = Toplevel()
    top.configure(background=colour)
    top.title("DEPLOYER")

    def nameg():
        if len(Deployer_list) < 1:
            Deployer_list.append(name.get())
        else:
            Deployer_list[0] = name.get()

    def mnemonicg():
        if len(Deployer_list) < 2:
            Deployer_list.append(mnemonic_phrase.get())
        else:
            Deployer_list[1] = mnemonic_phrase.get()

    my_label = Label(
        top,
        font=50,
        text="Welcome Deployer!",
        width=50,
        height=12,
        bg=colour,
        fg=colour2,
    ).pack()
    Name = Label(top, font=50, text="Enter Name", bg=colour, fg=colour2).pack()
    name = StringVar()
    enter_name = Entry(top, textvariable=name, width=20).pack()
    name_btn = Button(top, text="Enter", command=nameg).pack()
    mnemonic = Label(
        top, font=50, text="Enter mnemonic phrase", bg=colour, fg=colour2
    ).pack()
    mnemonic_phrase = StringVar()
    enter_mnemonic = Entry(top, textvariable=mnemonic_phrase, width=30).pack()
    mnemonic_btn = Button(top, text="Enter", command=mnemonicg).pack()
    funds_label = Label(
        top, font=50, text="Enter wager to deploy contract", bg=colour, fg=colour2
    ).pack()
    funds = StringVar()
    funds_entry = Entry(top, font=50, textvariable=funds).pack()
    Deploy = Button(top, text="Deploy", command=nexttab).pack()


def Attacher():
    def newtab():
        Attacher_list.append(ans.get())
        print(Attacher_list)
        top.destroy()
        newtop = Toplevel()
        newtop.configure(background=colour)
        newtop.title("Attacher")

        def final():
            Attacher_list.append(A_totalnum.get())
            newtop.destroy()
            lasttop = Toplevel()
            lasttop.configure(background=colour)
            lasttop.title("Attacher")

            def getwin():
                num = int(Deployer_list[3]) + int(Attacher_list[3])
                Textbox1.insert(END, "\nThe Total number is %s" % num)
                if num == int(Deployer_list[4]) and num != int(Attacher_list[4]):
                    Textbox1.insert(
                        END, "\n%s won by guessing %s" % (Deployer_list[0], num)
                    )
                elif num != int(Deployer_list[4]) and num == int(Attacher_list[4]):
                    Textbox1.insert(
                        END, "\n%s won by guessing %s" % (Attacher_list[0], num)
                    )
                elif num == int(Deployer_list[4]) and num == int(Attacher_list[4]):
                    Textbox1.insert(
                        END,
                        "\nBoth players guessed the number %s\n game ends in a draw"
                        % num,
                    )
                else:
                    Textbox1.insert(
                        END,
                        "\nBoth couldn't players guess the number %s\n game ends in a draw"
                        % num,
                    )

            def see_bal():
                Textbox1.insert(
                    END, "\nAttacher Starting Balance: %s Algo" % Bal_before[1]
                )
                Textbox1.insert(
                    END, "\nAttacher Ending Balance: %s Algo" % Bal_after[1]
                )

            def exitt():
                root.destroy()

            label = Label(
                lasttop,
                text="Attacher\nClick the button 'View winner' to see winner\nClick the button 'see balance' to view your balance\nClick the 'exit' button to exit game",
                font=50,
                width=40,
                height=7,
                bg=colour,
                fg=colour2,
            ).pack()
            Textbox1 = Text(
                lasttop,
                height=10,
                width=30,
                bg=colour,
                fg=colour2,
            )
            Textbox1.pack(expand=True)
            btn1 = Button(lasttop, text="View winner", command=getwin).pack()
            btn2 = Button(lasttop, text="See balance", command=see_bal).pack()
            btn3 = Button(lasttop, text="exit", command=exitt).pack()

        def getnum():
            if len(Attacher_list) == 3:
                Attacher_list.append(A_number.get())
            else:
                Attacher_list[3] = A_number.get()

        label = Label(
            newtop,
            text="Attacher!!",
            font=50,
            width=40,
            height=10,
            bg=colour,
            fg=colour2,
        ).pack()
        label1 = Label(
            newtop, text="Enter your number guess", font=50, bg=colour, fg=colour2
        ).pack()
        A_number = StringVar()
        D_number_entry = Entry(newtop, textvariable=A_number, width=15).pack()
        btn = Button(newtop, text="Enter", command=getnum).pack()
        label2 = Label(
            newtop, text="Enter your total number guess", font=50, bg=colour, fg=colour2
        ).pack()
        A_totalnum = StringVar()
        A_totalnum_entry = Entry(newtop, textvariable=A_totalnum, width=15).pack()
        btn1 = Button(newtop, text="Enter", command=final).pack()

    top = Toplevel()
    top.configure(background=colour)
    top.title("Attacher")

    def nameg():
        if len(Attacher_list) < 1:
            Attacher_list.append(Aname.get())
        else:
            Attacher_list[0] = Aname.get()

    def mnemonicg():
        if len(Attacher_list) < 2:
            Attacher_list.append(Amnemonic_phrase.get())
        else:
            Attacher_list[1] = Amnemonic_phrase.get()

    my_label = Label(
        top,
        font=50,
        width=50,
        height=12,
        text="Welcome ATTACHER!",
        bg=colour,
        fg=colour2,
    ).pack()
    AName = Label(top, font=50, text="Enter Name", bg=colour, fg=colour2).pack()
    Aname = StringVar()
    Aenter_name = Entry(top, textvariable=Aname, width=20).pack()
    Aname_btn = Button(top, text="Enter", command=nameg).pack()
    Amnemonic = Label(
        top, font=50, text="Enter mnemonic phrase", bg=colour, fg=colour2
    ).pack()
    Amnemonic_phrase = StringVar()
    enter_mnemonic = Entry(top, textvariable=Amnemonic_phrase, width=30).pack()
    Attach = Button(top, text="Enter", command=mnemonicg).pack()
    acwag_label = Label(
        top, font=50, text="Do you accept wager", bg=colour, fg=colour2
    ).pack()
    ans = StringVar()
    funds_entry = Entry(top, font=50, textvariable=ans).pack()
    Attach = Button(top, text="Attach", command=newtab).pack()

img = Label(
    root,
    text="Welcome to MORRA GAME",
    bg="black",
    fg="white",
    width=50,
    height=20,
    font=50,
).pack()
User_state = Label(
    root,
    text="Select player state Deployer /Attacher below",
    font=100,
    bg=colour,
    fg=colour2,
).pack()
btn1 = Button(root, text="Deployer", font=50, command=Deployer).pack()
btn2 = Button(root, text="Attacher", font=50, command=Attacher).pack()

root.mainloop()