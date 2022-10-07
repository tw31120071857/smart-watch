input.onButtonPressed(Button.A, function () {
    if (page == 1) {
        basic.showString("" + (time_minute))
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            `)
        basic.showString("" + (time_hour))
    }
    if (page == 99) {
        changing_hour += 1
        basic.showString("" + (changing_hour))
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
        }
    }
})
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
