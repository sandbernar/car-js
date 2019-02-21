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

function listenKeyboard(key) {
	// w
	if (mainCar.engineRunning) {
		if (key == 119) {
			mainCar.speed += 2;
			console.log('accelerating')
		} else if(key == 115) {
			mainCar.speed -= 1;
			console.log('decelerating')
		} else if(key == 97) {
			mainCar.wheel = -1;
			console.log('decelerating')
		} else if(key == 100) {
			mainCar.wheel = +1;
			console.log('decelerating')
		}
	} else {
		// stop car immideatly!
		mainCar.speed = 0
	}

	if (key == 101) {
		if (mainCar.engineRunning) {

			mainCar.engineRunning = false;

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


	// console.log(style);

	carMask.style = style;

	if (mainCar.engineRunning) {
		carMask.className = 'engine-on';
	} else {
		carMask.className = '';
	}

	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	// ctx.save();
	// ctx.translate(mainCar.coordX, mainCar.coordY);

	// ctx.fillRect(0, 0, mainCar.width, mainCar.height);
	// ctx.restore();

	// if (dir != mainCar.direction) {

	// 	dir = mainCar.direction
	// 	ctx.rotate(-mainCar.direction)

	// }


	// ctx.moveTo(mainCar.coordX, mainCar.coordY);
	// ctx.lineTo(mainCar.coordX + mainCar.width, mainCar.coordY);
	// ctx.lineTo(mainCar.coordX + mainCar.width, mainCar.coordY + mainCar.height);
	// ctx.lineTo(mainCar.coordX , mainCar.coordY + mainCar.height);
	// ctx.lineTo(mainCar.coordX , mainCar.coordY);
	// ctx.stroke();
	// console.log('log')
}

setInterval(redraw, 100);