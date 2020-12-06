class Choice {
	constructor(x,y,icon,choiceText, price, color){ 
		    this.x = x;
            this.y = y;
            this.icon = icon;
            this.choiceText = choiceText;
            this.price = price;
            this.color = color;
	}
	drawChoice(){ 
        noStroke();
        fill(this.color);
        rect(this.x,this.y,300,50,40)
        image(this.icon, this.x+20, this.y+10);
        fill(0);
        text(this.choiceText,this.x+60,this.y+30);
        let newMoney=[];
        for (let a =0; a<this.price; a++){
        newMoney.push(new Money(this.x+330+(a*50),this.y+25));
        for(let b=0;b<newMoney.length;b++){
            newMoney[b].drawMoney();
        }
     }
  }
   notHoverChoice(){
    this.color = color(255, 255, 255);
	}
	hoverChoice(){
    this.color = color(240, 240, 240);
    }
    updateChoicePrice(){
        this.price++;
        return this.price;
    }
}