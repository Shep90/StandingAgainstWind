var img0, img1;
let line_array = [];
let var3 = 0;

function preload() {
	img0 = loadImage("BG1.jpg");
	img1 = loadImage("leaning2.png");
	line_array.push(createVector(526, 203));
	line_array.push(createVector(518, 219));
	line_array.push(createVector(514, 239));
	line_array.push(createVector(508, 246));
	line_array.push(createVector(513, 259));
	line_array.push(createVector(512, 273));
	line_array.push(createVector(538, 287));
	line_array.push(createVector(539, 316));
	line_array.push(createVector(539, 339));
	line_array.push(createVector(545, 368));
	line_array.push(createVector(564, 420));
	line_array.push(createVector(553, 388));
	line_array.push(createVector(569, 428));
	line_array.push(createVector(578, 454));
	line_array.push(createVector(629, 493));
	line_array.push(createVector(658, 520));
	line_array.push(createVector(712, 578));
	line_array.push(createVector(736, 578));
	line_array.push(createVector(772, 607));
	line_array.push(createVector(812, 647));
}

function setup() {
	createCanvas(1200, 800);
	image(img0, 0, 0);
	image(img1, 0, 0);

	button = createButton('Add/Remove');
	button.position();
	button.mousePressed(remove1);
}

function remove1() {
	if (var1 === 1) {
		push();
		image(img1, 0, 0);
		pop();
		var1 = 0;
	} else {
		var1 = 1;
		image(img0, 0, 0);
		redraw();
	}
}

function draw() {
	noFill();
	strokeWeight(4);
	stroke(255);
	

	for (let i = 0; i < line_array.length; i++) {
		let b = new slowLines(line_array[i].x, line_array[i].y, 1300);
		b.begin();
	}
	
	// for (let j = 0; j < line_array.length; j++) {
	// 	let c = new slowCurves(line_array[j].x, line_array[j].y, 250);
	// 	c.begin();
	// }

	// print(mouseX, mouseY);
	
}