let cyfra_a = 0
let cyfra_c = 0
let cyfra_b = 0
input.onButtonPressed(Button.A, function () {
    cyfra_a = randint(1, 6)
    basic.showNumber(cyfra_a)
})
input.onButtonPressed(Button.AB, function () {
    cyfra_c = cyfra_a + cyfra_b
    basic.showNumber(cyfra_c)
})
input.onButtonPressed(Button.B, function () {
    cyfra_b = randint(1, 6)
    basic.showNumber(cyfra_b)
})
