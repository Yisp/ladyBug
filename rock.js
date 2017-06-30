function Rock(x, y, rock) {

	this.x = x;
	this.y = y;
	this.r = 37.5;
	this.health = 3;
	this.rock = rock;

	this.xdir = .3;

	this.show = function() {

		imageMode(CENTER);
		image(this.rock, this.x, this.y, this.r * 2, this.r * 2);

	}

	this.move = function() {

		this.x += this.xdir;

	}

	this.shiftDown = function() {

		this.xdir *= -1;
		this.y += this.r;

	}

}