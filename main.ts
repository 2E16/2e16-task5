let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    x = -1
    y = -1
    for (let index = 0; index < 2; index++) {
        x = -1
        y += 1
        for (let index = 0; index < 5; index++) {
            x += 1
            led.plot(x, y)
            basic.pause(200)
        }
        y += 1
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            x += -1
            basic.pause(200)
        }
    }
    y += 1
    for (let index = 0; index < 6; index++) {
        led.plot(x, y)
        x += 1
        basic.pause(200)
    }
})
