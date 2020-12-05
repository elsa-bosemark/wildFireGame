
class Money {
	constructor(x,y){ 
		    this.x = x;
            this.y = y;
	}
	drawMoney(){ 
    		noStroke();
    		fill(140, 193, 82);
            ellipse(this.x,this.y,40,40);
            fill(255);
            textSize(18);
            textFont(font);
            text('$',this.x-5,this.y+5)
	}
	loseMoney(){ 
	}
}