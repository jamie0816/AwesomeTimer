var timer;
var t;
var beep = new Audio("beep.mp3");

function startTimer() {
	timer = prompt("Set Countdown");
	timedCount();
};

function timedCount(){
	document.getElementById('clock').innerHTML = timer;
	if (timer === 0) {
		beep.play();
		document.getElementById('clock').innerHTML = "Times Up!";
		//alert("Times Up!");
	}
	 else {
	timer--;
	t = setTimeout(function(){timedCount()},1000);
	};
};
