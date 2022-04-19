def on_button_pressed_a():
    basic.show_number(randint(1, 6))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(0 + 0)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_number(randint(1, 6))
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_number(0)

def on_forever():
    pass
basic.forever(on_forever)
