class Card {
  constructor(x, y, text, fade) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.fade = fade;
  }
  drawCard() {
    noStroke();
    fill(255, 255, 255, this.fade);
    rect(this.x, this.y, 380, 157, 20);
    fill(0, 0, 0, this.fade);
    textSize(18);
    text(this.text, this.x + 10, this.y + 20, 371, 157);
  }
  fadeInCard() {
    if (this.fade < 255) {
      this.fade += 5;
    } 
    }


  fadeOutCard() {
    if (this.fade > 0) {
      this.fade -= 5;
    }
  }
}