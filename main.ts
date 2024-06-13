input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(0)
    basic.pause(40)
    for (let index = 0; index <= 180; index++) {
        servos.P0.setAngle(index)
        basic.pause(2)
    }
    for (let index = 0; index <= 180; index++) {
        servos.P0.setAngle(180 - index)
        basic.pause(2)
    }
    servos.P0.setAngle(90)
    basic.pause(500)
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(0)
    basic.pause(400)
    for (let index = 0; index <= 180; index++) {
        servos.P1.setAngle(index)
        basic.pause(2)
    }
    for (let index = 0; index <= 180; index++) {
        servos.P1.setAngle(180 - index)
        basic.pause(2)
    }
    servos.P1.setAngle(90)
    basic.pause(500)
    servos.P1.stop()
})
servos.P0.setAngle(90)
servos.P1.setAngle(90)
basic.pause(500)
servos.P0.stop()
servos.P1.stop()
basic.forever(function () {
	
})
