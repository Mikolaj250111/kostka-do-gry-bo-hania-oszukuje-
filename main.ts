input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    cyfra_a = randint(1, 6)
    basic.showNumber(cyfra_a)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    let cyfra_a2 = 0
    cyfra_c = cyfra_a2 + cyfra_b
    basic.showNumber(cyfra_c)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    cyfra_b = randint(1, 6)
    basic.showNumber(cyfra_b)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showNumber(0)
})
let cyfra_b = 0
let cyfra_c = 0
let cyfra_a = 0
basic.showNumber(0)
