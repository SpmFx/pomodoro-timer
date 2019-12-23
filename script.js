var timer = document.querySelector('#timer');
var despertador = '';
var min = 0;
var seg = 0;

var q = undefined;

let pom = 'file:///C:/Users/SpamDzn/Documents/js/tomato-timer/Alarm01.wav';
let shbr = 'file:///C:/Users/SpamDzn/Documents/js/tomato-timer/Alarm02.wav';
let lnbr = 'file:///C:/Users/SpamDzn/Documents/js/tomato-timer/Alarm03.wav';

function Pomodoro() {
	if (q!=undefined) {
		pause();
	}
	//25min
	min = 25;
	seg = 0;
	render();
	q = 0;
}


function ShortBreak() {
	if (q!=undefined) {
		pause();
	}
	//5min
	min = 5;
	seg = 0;
	render();
	q = 1;
}

function LongBreak() {
	if (q!=undefined) {
		pause();
	}
	min = 10;
	seg = 0;
	//10min
	render();
	q = 2;
}

function alarm(qualTocar) {
	var sound = new Audio(qualTocar);
	console.log(sound);
	sound.play();
}

function cronometro(qual) {
	if (seg<1) {
		seg = 60;
		min = min - 1;
	}
	seg--;
	console.log(min,':',seg);
	//Alarme.
	if (min == 0 & seg == 0) {
		timer.innerHTML = '00:00';
		clearInterval(repetidor);
		if (q === 0){
			alarm(pom);
		}
		else if(q === 1) {
			alarm(shbr);
		}
		else {
			alarm(lnbr);
		}
		
	}

	if (seg<10) {
		timer.innerHTML = min+':'+'0'+seg;
	}

	else {
		timer.innerHTML = min+':'+seg;
	}
}

function render() {
	repetidor = setInterval(cronometro, 100);
}

function stop() {
	min = 0;
	seg = 0;
	clearInterval(repetidor);
	timer.innerHTML = '00:00';
}

function pause() {
	clearInterval(repetidor);
}

function start() {
	pause();
	if(min>0) {
		render();
	}
}