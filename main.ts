input.onButtonPressed(Button.A, function () {
    if (page == 1) {
        basic.showString("" + (time_hour))
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            `)
        if (time_minute < 10) {
            basic.showNumber(0)
            basic.showString("" + (time_minute))
        } else {
            basic.showString("" + (time_minute))
        }
    }
    if (page == 99) {
        if (changing_time == 1) {
            changing_hour += 1
            basic.showString("" + (changing_hour))
        }
        if (changing_time == 2) {
            changing_minute += 1
            basic.showString("" + (changing_minute))
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (page == 1) {
        basic.showString("" + (changing_hour))
        page = 99
        changing_time = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (page == 99) {
        if (changing_time == 1) {
            time_hour = changing_hour
            changing_time = 2
            basic.showString("" + (changing_minute))
        }
        if (changing_time == 2) {
            time_minute = changing_minute
            changing_time = 0
            page = 1
        }
    }
})
let changing_minute = 0
let changing_time = 0
let changing_hour = 0
let time_minute = 0
let time_hour = 0
let page = 0
page = 1
time_hour = 12
time_minute = 30
changing_hour = 1
// 0 =  Off
// 1 =  Setting the hour.
// 2 = Setting the minute.
changing_time = 0
changing_minute = 1
basic.forever(function () {
    if (time_minute == 60) {
        time_minute = 0
        time_hour += 1
    }
    if (time_hour == 13) {
        time_hour = 1
    }
})
basic.forever(function () {
    basic.pause(60000)
    time_minute += 1
})
basic.forever(function () {
    if (changing_hour == 13) {
        changing_hour = 1
    }
})
