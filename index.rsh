'reach 0.1';

const winner = (alicenumb, bobnumb, aliceguess, bobguess) => {
    const mainnum = alicenumb + bobnumb
    const outcome =
        aliceguess == mainnum && bobguess != mainnum ? 1 :
            aliceguess != mainnum && bobguess == mainnum ? 2 :
                aliceguess == mainnum && bobguess == mainnum ? 0 :
                    0
    return outcome
}
const shared = {
    ...hasRandom,
    seeOutcome: Fun([UInt], Null),
}
export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...shared,
        wager: UInt,
        Alice_num: UInt,
        total_Number_guess: UInt,
        deadline: UInt
    })
    const Bob = Participant('Bob', {
        ...shared,
        acceptwager: Fun([UInt], Null),
        Bob_num: UInt,
        total_Num_guess: UInt
    })

    init()
    Alice.only(() => {
        const Wager = declassify(interact.wager)
        const dl = declassify(interact.deadline)
    })
    Alice.publish(Wager, dl)
        .pay(Wager)
    commit()
    Bob.only(() => {
        const Aw = declassify(interact.acceptwager(Wager))
    })
    Bob.publish(Aw)
        .pay(Wager)
        .timeout(relativeTime(dl), () => closeTo(Alice))
    commit()

    Alice.only(() => {
        const _alicenum = interact.Alice_num
        const [_commitalice, _saltalice] = makeCommitment(interact, _alicenum)
        const commitalice = declassify(_commitalice)
        const t_numalice = declassify(interact.total_Number_guess)
    })
    Alice.publish(commitalice, t_numalice)
    commit()
    unknowable(Bob, Alice(_alicenum, _saltalice))

    Bob.only(() => {
        const bobnum = declassify(interact.Bob_num)
        const t_numbob = declassify(interact.total_Num_guess)
    })
    Bob.publish(bobnum, t_numbob)
    commit()
    Alice.only(() => {
        const saltalice = declassify(_saltalice)
        const alicenum = declassify(_alicenum)
    })
    Alice.publish(saltalice, alicenum)
    checkCommitment(commitalice, saltalice, alicenum)

    const outcome = winner(alicenum, bobnum, t_numalice, t_numbob)
    each([Alice, Bob], () => {
        interact.seeOutcome(outcome)
    })
    const [foralice, forbob] =
        outcome == 1 ? [2, 0] :
            outcome == 2 ? [0, 2] :
                [1, 1]
    transfer(Wager * foralice).to(Alice)
    transfer(Wager * forbob).to(Bob)
    commit()

});