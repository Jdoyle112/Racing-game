var time = 0;
var running = 0;
var counter = 0;
var timerTime;

function startTimer(){
	if(running == 0){
	running = 1;
	increment();
	}else{
	running = 0;
	}
}

function reset(){
	$("#img").animate({left: 10});
	counter = 0;
	running = 0;
	time = 0;
	document.getElementById("output").innerHTML = "00:00:00";
}

function increment(){
	if(running == 1){
	setTimeout(function(){
	time++;
	var mins = Math.floor(time/10/60);
	var secs = Math.floor(time/10 % 60);
	var tenths = time % 10;
						
	if(mins < 10){
		mins = "0" + mins;
	}
	if(secs < 10){
		secs = "0" + secs;
	}
	timerTime = document.getElementById("output").innerHTML = mins + ":" + secs + ":" + "0" + tenths;
	increment();
						
		},100);
	}
}


$(document).ready(function(){

	$("#reset").click(function(){
		reset();
	});

	$("#timer").click(function(){
		startTimer();
	});

	$("#start").click(function(){
		$("#img").animate({"left": "+=75px"});
		counter++;
		if (counter >= 15) {
			reset();
			alert("Your time: " + timerTime);
		};
	});
});