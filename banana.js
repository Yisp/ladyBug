function Banana(x, y, banana) {

	this.x = x;
	this.y = y;
	this.r = 20;
	this.banana = banana;

	this.show = function() {

		imageMode(CENTER);
		image(this.banana, this.x, this.y, this.r * 2, this.r * 2);

	}

	this.move = function() {

		this.y -= 10;

	}

	this.hits = function(rock) {

		var d = dist(this.x, this.y, rock.x, rock.y);

		if (d < this.r + this.r) {

			return true;

		} else {

			return false;

		}

	}

}