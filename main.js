let computerNum =0
let playButton = document.getElementById("play-button")
console.log(playButton)
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")

playButton.addEventListener("click",play)

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1 // Math.random은 0부터 1사이 숫자를 랜덤으로 추출
    console.log("정답",computerNum)
}

pickRandomNum()

function play() {
    let userValue = userInput.value
    if(userValue < computerNum) {
        resultArea.textContent = "Up!"
    } else if(userValue > computerNum) {
        resultArea.textContent = "Down!"
    } else {
        resultArea.textContent = "정답!"
    }
    console.log(userValue)
}

play()