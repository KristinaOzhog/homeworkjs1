let numberToGuess = Math.floor(Math.random() * 1000)

console.log('Загаданное число:', numberToGuess)

while (true) {

    let numberFromUser = prompt('Введите число от 0 до 999 или q для выхода:')

    console.log('Введенное число:', numberFromUser)

    
    if  (numberFromUser === 'q') {
        break
    } else if (isNaN(numberFromUser) || !(numberFromUser >= 0 && numberFromUser <= 999)) {
        alert('Вы введи не число от 0 до 999!')
    } else if (+numberFromUser > numberToGuess) {
        alert('Вы ввели число больше.')
    } else if (+numberFromUser < numberToGuess) {
        alert('Вы ввели число меньше.')
    } else if (+numberFromUser === numberToGuess) {
        alert('Вы угадали!')
        break
    }
}