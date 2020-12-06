function endScreen(){
    winOrLose();
    burnBush();
}

function winOrLose(){
    niceText();
    textSize(30);
    if(bushGrass.length<=3||fireForest.length>=6){
        print('win')
        text('WIN',100,100)
        winScreen()
    }else{
        print('lose')
        text('LOSE',100,100)
        loseScreen()
    }
}

function winScreen(){
    skyHeat[0] = 199;
    skyHeat[1] = 233;
    skyHeat[2] = 249;
}

function loseScreen(){
    skyHeat[0] = 229;
    skyHeat[1] = 229;
    skyHeat[2] = 229;
    grColor = color(135, 155, 160);
    gColor = color(196, 196, 196);
}