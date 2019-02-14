let var2;

class slowCurves {
	constructor(_x, _y, length) {
		this.x = _x;
		this.startanglex = _x - 100;
		this.startangley = _y - 20;
		this.y = _y;
		this.endx = _x + length;
		this.endy = _y + 10;
		this.endanglex = this.endx + 100;
		this.endangley = this.endy - 100;

		// this.color0 = round(random(0, 255));
		// this.color1 = round(random(0, 255));
		// this.color2 = round(random(0, 255));

	}

	begin() {
		
		// stroke(this.color0, this.color1, this.color2);

		bezier(this.x, this.y, this.startanglex, this.startangley, this.endx, this.endy, this.endanglex, this.endangley);

	}
}