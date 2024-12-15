input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            # # # # #
            . # # # .
            . # # # .
            . # . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            # . # . #
            # # # # #
            . # # # .
            . # # # .
            . # . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            # # # # #
            # # # # #
            . # # # .
            . # . # .
            `)
        basic.pause(200)
    }
    basic.showLeds(`
        . . # . .
        # # # # #
        . # # # .
        . # # # .
        . # . # .
        `)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Licht) {
        basic.turnRgbLedOff()
        Licht = 0
    } else {
        basic.setLedColor(0x00ff00)
        Licht = 1
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showString("Noah")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Tannenbaum) {
        basic.showIcon(IconNames.Heart)
        Tannenbaum = 0
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        led.plot(2, 0)
        for (let Index = 0; Index <= 2; Index++) {
            led.plot(Index + 1, 1)
        }
        for (let Index = 0; Index <= 4; Index++) {
            led.plot(Index, 2)
        }
        for (let Index = 0; Index <= 4; Index++) {
            led.plot(Index, 3)
        }
        led.plot(2, 4)
        music.playMelody("C C F F F F - - ", 180)
        Tannenbaum = 1
    }
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
let Tannenbaum = 0
let Licht = 0
led.plot(2, 0)
for (let Index = 0; Index <= 2; Index++) {
    led.plot(Index + 1, 1)
}
for (let Index = 0; Index <= 4; Index++) {
    led.plot(Index, 2)
}
for (let Index = 0; Index <= 4; Index++) {
    led.plot(Index, 3)
}
led.plot(2, 4)
basic.setLedColor(0x00ff00)
Licht = 1
Tannenbaum = 1
