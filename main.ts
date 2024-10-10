/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Corbyn da Gama
 * Created on: Oct 2024
 * This program plays the game Rock Paper Scissors
*/


// variables
let randomNumber: number = 0
let score: number = 0

score = 0

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

// if randomNumber was 0
if (randomNumber == 0) {
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
}


// if randomNumber was 1
if (randomNumber == 1) {
    basic.showIcon(IconNames.Square)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
}

// if randonNumber was 2
if (randomNumber == 2) {
     basic.showIcon(IconNames.Scissors)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
}
})

// pasue and show you are ready again
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    
    input.onButtonPressed(Button.A, function () {
    score = score + 1
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    })

    input.onButtonPressed(Button.B, function () {
        basic.clearScreen()
        basic.showString('Score: '+score)
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)

        randomNumber = -1
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    })