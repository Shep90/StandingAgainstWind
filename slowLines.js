let var1;

class slowLines {
	constructor(_x, _y, length) {
		this.x = _x;
		this.y = _y;
		this.endx = length;
		
		// this.color0 = round(random(0, 255));
		// this.color1 = round(random(0, 255));
		// this.color2 = round(random(0, 255));
	}
	
	begin() {

		// stroke(this.color0, this.color1, this.color2);
		
		beginShape();
		vertex(this.x, this.y);
		vertex(this.endx, this.y);
		endShape();
	}
}