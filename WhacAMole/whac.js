const mole = document.querySelectorAll('.mole');
const box = document.querySelectorAll('.box');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomBox() {
    box.forEach(className => {
        className.classList.remove('mole');
    })
    let randomPosition = box[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    // assiging the id of randomPosition to hitPosition
    hitPosition = randomPosition.id; 
}

box.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            result += 1;
            score.textContent = result;
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomBox, 1000);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0) {
        clearInterval(timerId);
        alert("Game over! Your score is " + result);
        location.reload();
    }
}

let timerId = setInterval(countDown, 1000);