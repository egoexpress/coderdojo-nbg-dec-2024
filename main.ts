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
    basic.showString("NOAH UND PAPI ")
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
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
        musik()
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
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . # #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # # .
            . . . # .
            . . . # .
            . . . # #
            . . . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # # #
            . . # . #
            `)
        basic.pause(200)
        basic.showLeds(`
            # # . . .
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            # . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            . # . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # # . .
            . # . . .
            . # . . .
            # # . . .
            . # . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # # .
            . . # . .
            . . # . .
            # # # . .
            # . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            # # # . .
            # . # . .
            `)
        basic.pause(200)
        for (let index = 0; index < 3; index++) {
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_IO_P4,
            EventBusValue.MICROBIT_EVT_ANY
            )
            basic.showLeds(`
                . # # . .
                . . # . .
                . . # . .
                # # # . .
                # . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # # .
                . . # . .
                . . # . .
                # # # . .
                # . # . .
                `)
            basic.pause(100)
        }
        basic.showLeds(`
            . . . # #
            . . . # .
            . . . # .
            . # # # .
            . # . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . # # #
            . . # . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            . . . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P4, EventBusValue.MICROBIT_EVT_ANY, function () {
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
function musik () {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(250)
    music.playTone(349, music.beat(BeatFraction.Quarter))
    basic.pause(250)
    music.playTone(349, music.beat(BeatFraction.Quarter))
    basic.pause(250)
    music.playTone(349, music.beat(BeatFraction.Quarter))
    basic.pause(250)
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.pause(250)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.pause(250)
    music.playTone(440, music.beat(BeatFraction.Quarter))
    basic.pause(250)
    music.playTone(440, music.beat(BeatFraction.Half))
}
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
musik()
Licht = 1
Tannenbaum = 1
