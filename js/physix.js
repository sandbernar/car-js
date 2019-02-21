

class Physix {
	// direction from 0 to 359
	calculateVector (direction = 0) {

		var vector = {
			x: 100,
			y: 0
		};

		var a = 1.1111;

		let x = a * Math.abs(direction - 180) - 100;
		vector.x = Math.round(x);


		// для расчета по игрику нужна хитрость для менее чем 90 поворота
		if (direction < 90) {
			direction += 360;
		}

		let y = a * Math.abs(direction - 270) - 100;
		vector.y = Math.round(y);


		return vector;

	}
	
}



