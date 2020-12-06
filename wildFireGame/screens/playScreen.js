
let year = 1;
let bushBurnControl=false;

function playScreen(){
    niceText();
    text('Year: '+year, wX*5/100,50);
    choiceButtons(); 
    print('plays') 
    mouseHover();
    fill(255,0,0);
    endGameConditions();
}

function endGameConditions(){
 if(year>3 || playerMoney.length==0){
     print('money year')
    screen = 4;
 }
}

function choiceButtons(){
    choiceER.drawChoice();
    choicePR.drawChoice();
    choiceCB.drawChoice();
}

function choiceActions(p) {
    playerMoney.splice(playerMoney.length - p, playerMoney.length);
    choiceCB.updateChoicePrice();
    year++;
    changeSky();
    screen = 3;
}

function addBush(){
    for (let i = 0; i < 3; i++) {
        bushGrass.push(new Bush(random(0, wX), wH - 40));
    }
}

function burnBush(){
    for (let i = 0; i < 3; i++){
        let _x = round(bushGrass[i].x)+10
        let _y = round(bushGrass[i].y) -20
        image(fire, _x, _y);
    }
}

function plantFireTree(){
    for (let i = 0; i < 3; i++) {
		fireForest.push(new FireTree(random(0, wX), wH * 39 / 50));
	}
}
