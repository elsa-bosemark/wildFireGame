let year = 1;
let bushBurnControl = false;

function playScreen() {
    niceText();
    text('Year: ' + year, wX * 5 / 100, 50);
    choiceButtons();
    mouseHover();
    fill(255, 0, 0);
    //endGameConditions();
}

function endGameConditions() {
    // if (playerMoney.length < 0) {
    //     screen = 4;
    // }
}

function choiceButtons() {
    choiceER.drawChoice();
    choicePR.drawChoice();
    choiceCB.drawChoice();
}

function checkIfPriceOverBudget() {
    //choiceER.isPriceOverBudget();
    //choicePR.isPriceOverBudget();
    choiceCB.isPriceOverBudget();
}

function choiceActions(p) {
    fireCausePlayOnce = 2;
    buttonSound.play();
    playerMoney.splice(playerMoney.length - p, playerMoney.length);
    // for(let i = 0; i<=p; i++){
    //     print(playerMoney.length - i)
    //     playerMoney[playerMoney.length-1 - i].greyMoney();
    // }
    year++;
    changeSky();
    screen = 3;
}

function addBush() {
    for (let i = 0; i < 3; i++) {
        bushGrass.push(new Bush(random(0, wX), wH - 40));
    }
}

function burnBush() {
    if (bushGrass.length >= 3) {
        for (let i = 0; i < 3; i++) {
            let _x = round(bushGrass[i].x) + 10
            let _y = round(bushGrass[i].y) - 20
            image(fire, _x, _y);
        }

    }
}

function plantFireTree() {
    for (let i = 0; i < 3; i++) {
        fireForest.push(new FireTree(random(0, wX), wH * 39 / 50));
    }
}

