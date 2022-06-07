
class BigTree {
	constructor(x,y,burned){ 
	    this.x = x;
            this.y = y;
            this.burned= burned;
	}
	drawBigTree(){ 
        noStroke();
        fill(160, 212, 104);
        if (this.burned == 'no'){
          image(bigTreeLeaves, this.x-50, this.y-100);      
        }
        strokeWeight(10);
        stroke(132, 71, 71);
        line(this.x+20,this.y+10,this.x,this.y+35);
        stroke(150, 83, 83)
        line(this.x,this.y,this.x,this.y+(windowHeight/5.2)); 
	}
	bigTreeBurned(){ 
        this.burned = 'yes';
        }
        bigTreeGrow(){
          this.burned = 'no';      
        }
}