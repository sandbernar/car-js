

class Car extends Entity {
	constructor(coordX, coordY, direction, width, height) {

		super(coordX, coordY, direction);
		this.width = width;
		this.height = height;
		this.wheelDir = 0; // руль смотрит вперед положения -3, 3

		this.engineRunning = false;
		this.maxSpeed = 15;
		this.minSpeed = -5;
	}

	set wheel(dir) {

		let currentDir = this.wheelDir
		currentDir = currentDir + dir

		if (currentDir < -3) {
			currentDir = -3
		}

		if (currentDir > 3) {
			currentDir = 3
		}

		this.wheelDir = currentDir;

	}

	refresh() {

		if (this.speed > this.maxSpeed) {
			this.speed = this.maxSpeed
		}

		if (this.speed < this.minSpeed) {
			this.speed = this.minSpeed
		}

		let spin = this.speed * this.wheelDir * 0.1
		this.direction += spin
		Entity.prototype.refresh.call(this)

	}
}