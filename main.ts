input.onButtonPressed(Button.A, function () {
    if (page == 1) {
        basic.showString("" + (time))
    }
    if (page == 99) {
        selecting_hour += 1
        basic.showString("" + (selecting_hour))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (page == 1) {
        basic.showString("" + (selecting_hour))
        page = 99
    }
})
input.onButtonPressed(Button.B, function () {
    finished_selecting_hour_2 = 1
    if (page == 99) {
        if (time > 1159) {
            time = time - 1200
        }
        if (time > 1059) {
            time = time - 1100
        }
        if (time > 959) {
            time = time - 1000
        }
        if (time > 859) {
            time = time - 900
        }
        if (time > 759) {
            time = time - 800
        }
        if (time > 659) {
            time = time - 700
        }
        if (time > 559) {
            time = time - 600
        }
        if (time > 459) {
            time = time - 500
        }
        if (time > 359) {
            time = time - 400
        }
        if (time > 259) {
            time = time - 300
        }
        if (time > 159) {
            time = time - 200
        }
        if (time > 59) {
            time = time - 100
        }
    }
})
let finished_selecting_hour = 0
let finished_selecting_hour_2 = 0
let selecting_hour = 0
let time = 0
let page = 0
page = 1
time = 1160
selecting_hour = 1
finished_selecting_hour_2 = 0
basic.forever(function () {
    if (time == 1160) {
        time = 1200
    }
    if (time == 1260) {
        time = 100
    }
    if (time == 160) {
        time = 200
    }
    if (time == 260) {
        time = 300
    }
    if (time == 360) {
        time = 400
    }
    if (time == 460) {
        time = 500
    }
    if (time == 560) {
        time = 600
    }
    if (time == 660) {
        time = 700
    }
    if (time == 760) {
        time = 800
    }
    if (time == 860) {
        time = 900
    }
    if (time == 960) {
        time = 1000
    }
    if (time == 1060) {
        time = 1100
    }
})
basic.forever(function () {
    if (selecting_hour == 13) {
        selecting_hour = 1
    }
})
basic.forever(function () {
    if (finished_selecting_hour_2 == 1) {
        if (selecting_hour == 1) {
            finished_selecting_hour = 100
        }
        if (selecting_hour == 2) {
            finished_selecting_hour = 200
        }
        if (selecting_hour == 3) {
            finished_selecting_hour = 300
        }
        if (selecting_hour == 4) {
            finished_selecting_hour = 400
        }
        if (selecting_hour == 5) {
            finished_selecting_hour = 500
        }
        if (selecting_hour == 6) {
            finished_selecting_hour = 600
        }
        if (selecting_hour == 7) {
            finished_selecting_hour = 700
        }
        if (selecting_hour == 8) {
            finished_selecting_hour = 800
        }
        if (selecting_hour == 9) {
            finished_selecting_hour = 900
        }
        if (selecting_hour == 10) {
            finished_selecting_hour = 1000
        }
        if (selecting_hour == 11) {
            finished_selecting_hour = 1100
        }
        if (selecting_hour == 12) {
            finished_selecting_hour = 1200
        }
    }
})
