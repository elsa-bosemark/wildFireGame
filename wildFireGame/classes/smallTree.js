
class SmallTree {
	constructor(x,y){ 
		    this.x = x;
            this.y = y;
	}
	drawSmallTree(){ 
        noStroke();
        fill(160, 212, 104);
        ellipse(this.x,this.y,120);
        strokeWeight(10);
        stroke(132, 71, 71);
        line(this.x-20,this.y+10,this.x,this.y+35);
        stroke(150, 83, 83)
        line(this.x,this.y,this.x,this.y+120);
	}
	burnSmallTree(){ 
	}
}