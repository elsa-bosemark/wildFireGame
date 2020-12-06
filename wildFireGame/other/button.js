class RedButton {
	constructor(x,y,buttonText, color, fade){ 
		    this.x = x;
            this.y = y;
            this.buttonText = buttonText;
            this.color = color;
            this.fade = fade;
	}
	drawRedButton(){ 
        noStroke();
        fill( this.color);
        rect( this.x,  this.y, 200, 50, 40);
        fill(255, 255, 255, this.fade);
        textSize(19);
        text(this.buttonText,this.x+75-this.buttonText.length*2,  this.y+30);
  }
  notHoverRedButton(){
    if (screen == 3){
      this.color = color(104, 199, 240, this.fade);
    }else{
      this.color = color(255, 162, 95, this.fade);
    }
	}
  hoverRedButton(){
    if (screen == 3){
      this.color = color(71, 174, 219, this.fade);
    }else{
      this.color = color(227, 141, 78, this.fade);
    }
  }
  fadeInRedButton() {
    if (this.fade < 255) {
      this.fade += 5;
    }else{
      return 255;
    }
  }
  fadeOutRedButton() {
    if (this.fade > 0) {
      this.fade -= 5;
    }
  }
}


