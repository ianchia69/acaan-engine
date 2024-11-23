input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    basic.showNumber(keycardvalue)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showNumber(keycardsuit)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showNumber(_remove)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.clearScreen()
    led.plot(keycardvalue % 5 - 1, (keycardvalue - keycardvalue % 5) / 5)
    led.plot(keycardsuit, 3)
})
let keycardsuit = 0
let keycardvalue = 0
let _remove = 0
let namedvalue = 0
basic.showNumber(namedvalue)
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        namedvalue += 1
        basic.showNumber(namedvalue)
    } else {
        if (input.buttonIsPressed(Button.B)) {
            break;
        } else {
        	
        }
    }
}
let namedsuit = 0
basic.showNumber(namedsuit)
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        namedsuit += 1
        basic.showNumber(namedsuit)
    } else {
        if (input.buttonIsPressed(Button.B)) {
            break;
        } else {
        	
        }
    }
}
let namednumber = 0
basic.showNumber(namednumber)
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        namednumber += 1
        basic.showNumber(namednumber)
    } else {
        if (input.buttonIsPressed(Button.B)) {
            break;
        } else {
        	
        }
    }
}
let defaultnamedcardposn = namedvalue + 13 * (namedsuit - 1)
let namedcardposition = defaultnamedcardposn % 10 * 10 + (defaultnamedcardposn - defaultnamedcardposn % 10) / 10
if (defaultnamedcardposn == 6) {
    namedcardposition = 6
} else {
    if (defaultnamedcardposn == 7) {
        namedcardposition = 7
    } else {
        if (namedcardposition > 52) {
            namedcardposition += -45
        } else {
        	
        }
    }
}
_remove = namedcardposition - namednumber
if (_remove < 0) {
    _remove += 52
} else {
	
}
let keycarddefaultposn = _remove % 10 * 10 + (_remove - _remove % 10) / 10
if (keycarddefaultposn > 52) {
    keycarddefaultposn += -45
} else {
	
}
keycardvalue = keycarddefaultposn % 13
if (keycardvalue == 0) {
    keycardvalue = 13
} else {
	
}
keycardsuit = (keycarddefaultposn - keycardvalue) / 13
if (_remove == 6) {
    keycardvalue = 6
    keycardsuit = 0
} else {
    if (_remove == 7) {
        keycardvalue = 7
        keycardsuit = 0
    } else {
    	
    }
}
