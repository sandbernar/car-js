let width = 120;
let height = 50;
var mainCar = new Car(50, 50, 0, width, height);


// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// 	ctx.fillRect(mainCar.coordX, mainCar.coordY, mainCar.width, mainCar.height);

// var dir;
var carMask = document.getElementById('car');


document.addEventListener('keypress',function(event) {
	var key = event.keyCode;
	console.log(key)
	listenKeyboard(key)
})


function mcForward() {
	if (mainCar.engineRunning)
		mainCar.speed += 2;
}
function mcLeft() {
	mainCar.wheel = -1;
}
function mcBack() {
	if (mainCar.engineRunning)
		mainCar.speed -= 1;

}
function mcRight() {
	mainCar.wheel = 1;
}
function mcEngine() {
	if (mainCar.engineRunning) {
		mainCar.engineRunning = false
		mainCar.speed = 0
	} else {
		mainCar.engineRunning = true
	}
}

function listenKeyboard(key) {
	// w
	if (mainCar.engineRunning) {
		if (key == 119) {
			mainCar.speed += 2;
			console.log('accelerating')
		} else if(key == 115) {
			mainCar.speed -= 1;
			console.log('decelerating')
	}

	} if(key == 97) {
		mainCar.wheel = -1;
	} else if(key == 100) {
		mainCar.wheel = +1;
	}

	if (key == 101) {
		if (mainCar.engineRunning) {

			mainCar.engineRunning = false;
			// stop car immideatly!
			mainCar.speed = 0

		} else {
			
			mainCar.engineRunning = true;

		}
	}
	
}

function redraw() {
	mainCar.refresh();



	var style = 'left: ' + mainCar.coordX + 'px; '
	+ 'top: ' + mainCar.coordY + 'px; '
	+ 'transform: rotate(' + mainCar.direction + 'deg)'
	;

	carMask.style = style;

	if (mainCar.engineRunning) {
		carMask.className = 'engine-on';
	} else {
		carMask.className = '';
	}

}

setInterval(redraw, 300);