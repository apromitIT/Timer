const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
timerEl.innerText = '00:00:00';
let timer;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
	return (seconds) => {
		clearInterval(timer);
		timer = setInterval(function () {
			seconds--;
			timerEl.innerText = getTimeFromSeconds(seconds);
			if (seconds === 0) {
				clearInterval(timer);
				setTimeout(function(){
					timerEl.innerText = 'Время истекло!'}, 1000);			
			}
		}, 1000);
	};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
	str = inputEl.value.replace(/[^0-9]/g, '');
	inputEl.value = str;
	console.log(inputEl.value);
	// Очистите input так, чтобы в значении
	// оставались только числа
});

buttonEl.addEventListener('click', () => {
	const seconds = Number(inputEl.value);

	if (seconds != "") {
		animateTimer(seconds);
	}
	inputEl.value = '';
});

function getTimeFromSeconds(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC"
  });
}