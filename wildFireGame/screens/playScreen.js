
let year = 1;
function playScreen(){
    niceText();
    text('Year: '+year, wX*5/100,50);
    choiceButtons(); 
    print('plays') 
    mouseHover();
    fill(255,0,0);
}

function choiceButtons(){
    choiceER.drawChoice();
    choicePR.drawChoice();
    choiceCB.drawChoice();
}

