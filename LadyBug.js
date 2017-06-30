function LadyBug(img) {

	this.x = width / 2;
	this.y = height - 100;
	this.img = img;

	this.show = function() {

		imageMode(CENTER);
		image(this.img, this.x, this.y, 75, 75);

	}

	this.move = function (direction) {

		this.x += direction;

	}

}