basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(j, 4 - i)
            led.plot(i, 4 - j)
        }
        basic.pause(100)
    }
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4 - i; j++) {
            led.unplot(j, i)
            led.unplot(4 - i, j + i)
        }
        basic.pause(100)
    }
})
