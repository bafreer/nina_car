cuteBot.trackEvent(cuteBot.MbPins.Right, cuteBot.MbEvents.LoseLine, function () {
    cuteBot.stopcar()
    basic.pause(500)
    left_wheel = left_wheel - 1
    right_wheel = right_wheel + 1
    cuteBot.motors(left_wheel, right_wheel)
})
cuteBot.trackEvent(cuteBot.MbPins.Left, cuteBot.MbEvents.LoseLine, function () {
    cuteBot.stopcar()
    basic.pause(500)
    left_wheel = left_wheel + 1
    right_wheel = right_wheel - 1
    cuteBot.motors(left_wheel, right_wheel)
})
let left_wheel = 0
let right_wheel = 0
cuteBot.closeheadlights()
right_wheel = 10
left_wheel = 10
if (cuteBot.trackSide(cuteBot.MbPins.Left, cuteBot.MbEvents.FindLine) && cuteBot.trackSide(cuteBot.MbPins.Right, cuteBot.MbEvents.FindLine)) {
    cuteBot.motors(left_wheel, right_wheel)
}
basic.forever(function () {
    if (input.lightLevel() < 1) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
    } else {
        cuteBot.closeheadlights()
    }
    basic.pause(100)
})
