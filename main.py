cyfra_a = 0
cyfra_c = 0
cyfra_b = 0

def on_button_pressed_a():
    global cyfra_a
    cyfra_a = randint(1, 6)
    basic.show_number(cyfra_a)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global cyfra_c
    cyfra_a = 0
    cyfra_c = cyfra_a + cyfra_b
    basic.show_number(cyfra_c)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global cyfra_b
    cyfra_b = randint(1, 6)
    basic.show_number(cyfra_b)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_number(0)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
