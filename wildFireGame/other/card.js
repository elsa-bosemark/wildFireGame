function card(x,y,w,s,t){
    noStroke();
    fill(255, 255, 255);
    rect(x,y,w,150,20);
    fill(0,0,0);
    textSize(s);
    text(t,x+15,y+15,w-20,157);
}