/*
	Pacha Kucha timer
*/

let sTime, slideNum;
let started = false;
let startButton;
let nextSound;


function preload() {
  nextSound = loadSound('assets/clap.wav');
}


function setup(){
	createCanvas(windowWidth, 600);
	slideNum = 0;
	startButton = createButton("Start Presentation");
	startButton.mousePressed(start);
	startButton.position(100, 250);
	textSize(32);
}

function draw(){
	background(255);
	text("Pecha Kucha Timer", 100, 50);
	text("Slide # " + slideNum, 100, 100);
	if(started == true){
		let ellapsedSeconds = floor((millis()-sTime)*0.001);
		let totalEllapsedSeconds = ((slideNum-1)*20)+ellapsedSeconds;
		text('Total Remaining Time: ' + String(400-totalEllapsedSeconds),100,150);
		text('Time Remaining: ' + String(20-ellapsedSeconds), 100,200);
		if(ellapsedSeconds>19 && totalEllapsedSeconds < 400){
			next();
		} else if (totalEllapsedSeconds >= 400){
			end();
		}
	}	
}

function start(){
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

/*function pause(){
	pauseB == !pauseB;

	if(pauseB == true){
		pauseTime = millis();
		console.log('paused');
	} else {
		pauseTime = millis() - pauseTime;
		pauseSeconds = floor(pauseTime*0.001);
	}
}*/