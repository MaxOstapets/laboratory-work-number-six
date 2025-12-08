const numberSpan = document.querySelector('.number');
const userNumber = document.querySelector('.input');
const tryBtn = document.querySelector('.try');
const start = document.querySelector('.start')
const restart = document.querySelector('.restart')
const result = document.querySelector('.result');

let correctNumber = 0

start.addEventListener("click", () => {
    correctNumber = Math.floor(Math.random() * 100) 
    console.log("CORRECT NUMBER:", correctNumber)
    result.innerText = "The game has started. Enter the number";
})

tryBtn.addEventListener("click", () => {
    const userValue = Number(userNumber.value)
    if (userValue === correctNumber) {
        result.innerText = `Good job. Correct number is ${correctNumber}`;
    } else {
        result.innerText = "Incorrect";
        userNumber.value = "";
    }
});

restart.addEventListener("click", () => {
    correctNumber = Math.floor(Math.random() * 100) 
    console.log("CORRECT NUMBER:", correctNumber)
    userNumber.value = "";
    result.innerText = "";
})