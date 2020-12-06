
class Bush {
        constructor(x, y) {
                this.x = x;
                this.y = y;
        }
        drawBush() {
                noStroke();
                fill(228, 178, 0);
                rect(this.x, this.y, 60, 25);
                ellipse(this.x + 10, this.y, 20, 20)
                ellipse(this.x + 30, this.y, 20, 20)
                ellipse(this.x + 30, this.y - 5, 20, 20)
                ellipse(this.x + 50, this.y, 20, 20)
        }
        burnBush() {
        }
}