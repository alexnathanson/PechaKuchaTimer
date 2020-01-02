/*
	Pacha Kucha timer

	to do:
	mute for each slide or final sound\
	
*/

let sTime, slideNum;
let started = false;
let startButton;
let nextSound;
let deck,num,totTime,remTime;


function preload() {
  nextSound = loadSound('assets/clap.wav');
}


function setup(){
	//createCanvas(windowWidth, 400);

	slideNum = 0;
	startButton = createButton("Start Presentation");
	startButton.mousePressed(start);
	deckURL = createInput("input deck url");
	deck = document.getElementById("deck");

	num = document.getElementById("num")
	totTime = document.getElementById("totTime");
	remTime = document.getElementById("remTime");
	textSize(32);
}

function draw(){
	num.innerHTML="Slide # " + slideNum;
	if(started == true){
		let ellapsedSeconds = floor((millis()-sTime)*0.001);
		let totalEllapsedSeconds = ((slideNum-1)*20)+ellapsedSeconds;
		totTime.innerHTML='Total Remaining Time: ' + String(400-totalEllapsedSeconds);
		remTime.innerHTML='Time Remaining: ' + String(20-ellapsedSeconds);
		if(ellapsedSeconds>19 && totalEllapsedSeconds < 400){
			next();
		} else if (totalEllapsedSeconds >= 400){
			end();
		}
	}	
}

function start(){
	console.log(deckURL.value());
	deck.src=deckURL.value() + '/embed?start=false&loop=false&delayms=30000';
	started = true;
	slideNum = 0;
	sTime = millis();
	next();
}

function next(){
	if(slideNum!=0){
		nextSound.play();
	}
	sTime = millis();
	slideNum++;
	console.log(slideNum);
}

function end(){
	console.log("end of presentation");
	started = false;

	nextSound.setVolume(1);
 	nextSound.loop();

 	setTimeout(function(){
 		nextSound.stop();
 		alert('end of presentation');
	},5000);
}