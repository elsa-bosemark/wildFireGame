
class Money {
	constructor(x,y,color){ 
		    this.x = x;
			this.y = y;
			this.color = color;
	}
	drawMoney(){ 
			noStroke();
			fill(this.color);
            ellipse(this.x,this.y,40,40);
            fill(255);
            textSize(18);
            textFont(font);
            text('$',this.x-5,this.y+5)
	}
	greenMoney(){
		this.color = color(140, 193, 82);
	}
	greyMoney(){
		this.color = color(196, 196, 196);
	}
}