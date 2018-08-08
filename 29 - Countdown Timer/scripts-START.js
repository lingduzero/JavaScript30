let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
function timer(seconds) {
	clearInterval(countDown);
	const now = Date.now();
	const then = now + seconds * 1000;
	dispalyTimeLeft(seconds);
	displayEndTime(then);
	countDown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		//check if stop
		if(secondsLeft < 0) {
			clearInterval(countDown);
			return;
		}
		dispalyTimeLeft(secondsLeft);
	}, 1000);
}

function dispalyTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const displaySeconds = seconds % 60;
	const display = `${minutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`;
	document.title = display;
	timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
	const end = new Date(timestamp);
	const hour = end.getHours();
	const minutes = end.getMinutes();
	endTime.textContent = `Be back at ${hour > 12 ? hour - 12: hour}:${minutes < 10 ? '0':''}${minutes}`;
}

function startTimer(){
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}

buttons.forEach(button => {
	button.addEventListener('click', startTimer);
})

document.customForm.addEventListener('submit', function(e){
	e.preventDefault();
	const minutes = this.minutes.value;
	timer(minutes * 60);
	this.reset();
})