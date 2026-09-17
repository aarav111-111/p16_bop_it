function endGame () {
    basic.showIcon(IconNames.Yes)
    basic.showString("you died Reason : bad")
    basic.showNumber(userPoints)
}
input.onButtonPressed(Button.A, function () {
    userButtonChoice = "A"
})
input.onButtonPressed(Button.AB, function () {
    userButtonChoice = "+"
})
input.onButtonPressed(Button.B, function () {
    userButtonChoice = "B"
})
input.onGesture(Gesture.Shake, function () {
    userButtonChoice = "S"
})
function checkIfCorrrectInput () {
    if (userButtonChoice == computerButtonChoice) {
        music.play(music.createSoundExpression(WaveShape.Square, 806, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        userPoints += 1
    } else {
        music.play(music.createSoundExpression(WaveShape.Square, 806, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        winning = false
        endGame()
    }
}
/**
 * Not fun
 */
let computerButtonChoice = ""
let userButtonChoice = ""
let userPoints = 0
let winning = false
basic.showString("BOP IT")
winning = true
userPoints = 0
let buttonChoices = [
"A",
"B",
"S",
"+"
]
basic.forever(function () {
    if (winning == true) {
        computerButtonChoice = buttonChoices[Math.randomRange(0, buttonChoices.length - 1)]
    }
    basic.showString("" + (computerButtonChoice))
    basic.pause(2000)
    checkIfCorrrectInput()
})
