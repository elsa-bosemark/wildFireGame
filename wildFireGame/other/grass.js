function grass(){
    for(let i=20; i<wX; i+= 50){
        fill(140, 193, 82);
        ellipse(i,wH-20,20,20);
    }
    stroke(160, 212, 104);
    strokeWeight(20);
    line(0,wH-10, wX,wH-10);
}