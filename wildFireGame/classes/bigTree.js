
class BigTree {
	constructor(x,y){ 
		    this.x = x;
            this.y = y;
	}
	drawBigTree(){ 
        noStroke();
        fill(160, 212, 104);
        image(bigTreeLeaves, this.x-50, this.y-100);
        strokeWeight(10);
        stroke(132, 71, 71);
        line(this.x+20,this.y+10,this.x,this.y+35);
        stroke(150, 83, 83)
        line(this.x,this.y,this.x,this.y+120); 
	}
	burnBigTree(){ 
	}
}