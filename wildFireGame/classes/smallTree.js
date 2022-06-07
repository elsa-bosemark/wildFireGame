
class SmallTree {
        constructor(x, y, burned) {
                this.x = x;
                this.y = y;
                this.burned = burned;
        }
        drawSmallTree() {
                noStroke();
                if (this.burned == 'no') {
                        fill(160, 212, 104);
                        ellipse(this.x, this.y, 120);
                }
                strokeWeight(10);
                stroke(132, 71, 71);
                line(this.x - 20, this.y + 10, this.x, this.y + 35);
                stroke(150, 83, 83)
                line(this.x, this.y, this.x, this.y+(windowHeight/5.2));
        }
        smallTreeBurned() {
                this.burned = 'yes';
        }
        smallTreeGrow() {
                this.burned = 'no';
        }
}
