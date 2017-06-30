var img;

var ladyBug;
var rocks = [];
var bananas = [];
var points = 0;

function preload() {

	ladybug = loadImage("Images/ladyBug.png");
	rock = loadImage("Images/rock.png");
	banana = loadImage("Images/banana.png");

	rockmp3 = loadSound("Sounds/rock.mp3");
	bananamp3 = loadSound("Sounds/banana.mp3");
	song = loadSound("Sounds/spaceInvaders.mp3");
}

function setup() {

	createCanvas(500, 500);
	ladyBug = new LadyBug(ladybug);

	for (var i = 0; i < 5; i++) {

		rocks.push(new Rock(i * 80 + 80, 30, rock));

	}
}

function draw() {

	if (!song.isPlaying()) {

		song.setVolume(3);
		song.play();

	}

	background(255, 0, 255);
	frameRate(60);

	textSize(24);
	text("Points: " + points, 2, 475);

	if (rocks.length == 0) {

		for (var i = 0; i < 5; i++) {

			rocks.push(new Rock(i * 80 + 80, 30, rock));

		}

	}

	for (var i = 0; i < bananas.length; i++) {

		bananas[i].move();
		bananas[i].show();

		if (bananas[i].y <= 0) {

			bananas.splice(i, 1);
			break;

		}

		for (var j = 0; j < rocks.length; j++) {

			if (bananas[i].hits(rocks[j])) {

				console.log("BOOM");
				bananas.splice(i, 1);

				rockmp3.setVolume(2);
				rockmp3.play();
				rocks[j].health -= 1;
				rocks[j].r -= 10;

				if (rocks[j].health == 0) {

					rocks.splice(j, 1);
					points += 10;

				}

				break;
			}

		}

	}

	var edge = false;
	
	for (var i = 0; i < rocks.length; i++) {

		rocks[i].show();
		rocks[i].move();

		if (rocks[i].x > width - 50 || rocks[i].x < 0) {

			edge = true;

		}

		if (rocks[i].y >= ladyBug.y) {

			for (var i = 0; i < rocks.length; i++) {

				rocks.splice(i, rocks.length);

			}

			for (var i = 0; i < 5; i++) {

				rocks.push(new Rock(i * 80 + 80, 30, rock));

			}

			points = 0;

		}

	}

	if (edge) {

		for (var i = 0; i < rocks.length; i++) {

			rocks[i].shiftDown();

		}

		for (var i = 0; i < 5; i++) {

			rocks.push(new Rock(i * 80 + 80, 30, rock));
			edge = false;

		}

	}

	if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {

		ladyBug.move(3);

	} else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {

		ladyBug.move(-3);

	}

	if (ladyBug.x <= 0) {

		ladyBug.x = 0;

	} else if (ladyBug.x >= width) {

		ladyBug.x = width;

	}

	ladyBug.show();
	
}

function keyPressed() {

	if (keyCode == 32) {

		bananamp3.setVolume(.1);
		bananamp3.play();

		bananas.push(new Banana(ladyBug.x, ladyBug.y, banana));

	}

}