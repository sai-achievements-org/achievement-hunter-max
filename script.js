let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const workBtn = document.getElementById('work-mode');
const breakBtn = document.getElementById('break-mode');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert('Time is up!');
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer(minutes) {
    clearInterval(timer);
    isRunning = false;
    timeLeft = minutes * 60;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', () => {
    resetTimer(workBtn.classList.contains('active') ? 25 : 5);
});

workBtn.addEventListener('click', () => {
    workBtn.classList.add('active');
    breakBtn.classList.remove('active');
    resetTimer(25);
});

breakBtn.addEventListener('click', () => {
    breakBtn.classList.add('active');
    workBtn.classList.remove('active');
    resetTimer(5);
});

updateDisplay();
