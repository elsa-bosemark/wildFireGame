
function button(x,y,buttonText){
fill(255, 162, 95,fade);
rect(x, y, 200, 50, 40);
fill(0, 0, 0,fade);
textSize(19);
text(buttonText, x+75, y+30);
}

mouseClicked = function() {
    if (mouseX >= wX*2/100+2 && mouseX <= wX*2/150+205 &&
        mouseY >= wH*15/100+170+5 && mouseY <= wH*15/100+215) {
        print("Still pretty useless");    
    }
};
