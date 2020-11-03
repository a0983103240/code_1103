j = 0

def on_forever():
    global j
    for i in range(5):
        j = 0
        while j <= i:
            led.plot(j, 4 - i)
            led.plot(i, 4 - j)
            j += 1
        basic.pause(100)
    for k in range(5):
        for l in range(5):
            led.unplot(l, 4 - k)
            led.unplot(k, 4 - l)
        basic.pause(100)
basic.forever(on_forever)
