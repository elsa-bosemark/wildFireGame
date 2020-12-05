let fade=0;

function fadeInCard(x,y,text) {
  if (fade<255){
   fade+=5;
  }
  card(x,y,text);
}

function card(x,y,t){
    noStroke();
    fill(255, 255, 255, fade);
    rect(x,y,380,157,20);
    fill(0,0,0,fade);
    textSize(18);
    text(t,x+10,y+20,371,157);
}