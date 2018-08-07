let countDown;
function timer(seconds) {
	const now = Date.now();
	const then = now + seconds * 1000;
	console.log({now, then});
	countDown = setInterval(() => {
		const secondsLeft = Math.round((then - now) / 1000);
		//check if stop
		if(secondsLeft < 0) {
			clearInterval(countDown);
			return;
		}
		console.log(secondsLeft);
	}, 1000);
}