let cyfra_a = 0
let cyfra_c = 0
let cyfra_b = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(cyfra_a)
    cyfra_a = randint(1, 6)
})
input.onButtonPressed(Button.AB, function () {
    cyfra_c = cyfra_a + cyfra_b
    basic.showNumber(cyfra_c)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(cyfra_b)
    cyfra_b = randint(1, 6)
})
