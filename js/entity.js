
/**
 * Basic entity of the world
 *
 * It has coordinates, direction in which it should move and speed
 */
class Entity {

	constructor(coordX, coordY, direction) {

		this.coordX 	= coordX;
		this.coordY 	= coordY;

		this.direction 	= direction;
		this.speed = 0;
		this.vector = {
			x: 100,
			y: 0
		};

	}

	// calculate movements of the entity
	refresh() {

		// cut direction - it must be between 0 and 359
		if (this.direction < 0) {
			this.direction += 360;
		}

		if (this.direction > 359) {
			this.direction -= 360
		}


		// find vector
		// based on speed, direction and current location we update it's location
		// by linear function f(y) = a * | x - 180 | - 100
		this.vector = Physix.prototype.calculateVector(this.direction)


		// calculate movement
		let changeByY = this.vector.y * this.speed / 100;
		let changeByx = this.vector.x * this.speed / 100;


		// set updatetions
		this.coordX += changeByx;
		this.coordY += changeByY;

	}

}