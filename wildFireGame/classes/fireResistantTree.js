
class FireTree {
	constructor(x,y){ 
		    this.x = x;
            this.y = y;
	}
	drawFireTree(){ 
        noStroke();
        fill(86, 140, 27);
        ellipse(this.x,this.y,120);
        strokeWeight(10);
        stroke(132, 71, 71);
        line(this.x-20,this.y+10,this.x,this.y+35);
        stroke(150, 83, 83)
        line(this.x,this.y,this.x,this.y+(windowHeight/5.2));
	}
	burnFireTree(){ 
	}
}