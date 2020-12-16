
function endScreen() {
    winOrLose();
    playAgainButton.drawRedButton();
    playAgainButton.fadeInRedButton();
    credit();
    infoCard();
    articleCard();
    reasonForEnd();
}


function winOrLose() {
    niceText();
    textSize(30);
    if (bushGrass.length <= fireYear + 2 || fireForest.length >= fireYear + 4) {
        winScreen();
    } else {
        loseScreen();
    }
}

function winScreen() {
    skyHeat[0] = 199;
    skyHeat[1] = 233;
    skyHeat[2] = 249;

    card(wX * 5 / 100, 70, 380, 18, "Thanks to your precautions you prepared the forest to be more fire resilent so that when there was a fire, the forest survived! Well done.");

}
function loseScreen() {
    burnBush();
    skyHeat[0] = 229;
    skyHeat[1] = 229;
    skyHeat[2] = 229;
    grColor = color(135, 155, 160);
    gColor = color(196, 196, 196);

    card(wX * 5 / 100, 70, 380, 18, "Sadly the dry forest could not withstand the fire and burned out even with the efforts to extiguish the fire right away. Let this be a lesson learned in the importance of prevention.");
    infoCard();
    articleCard();
    for (let k = 0; k < bigForest.length; k++) {
        bigForest[k].bigTreeBurned();
    }
    for (let i = 0; i < smallForest.length; i++) {
        smallForest[i].smallTreeBurned();
    }
}

function infoCard() {
    card(wX * 4 / 10, 70, 200, 20, "Resistant Trees: " + fireForest.length + " Dry Bushes: " + bushGrass.length + ' Years: ' + year);
}

function articleCard() {
    card(wX * 6 / 10, 70, 250, 18, 'How will California prevent more mega-wildfire disasters?');
    articleButton(wX * 6.1 / 10 + 10, 170);
}

function articleButton(x, y) {
    noStroke();
    fill(248, 110, 51);
    rect(x, y, 200, 40, 40);
    fill(255, 255, 255);
    textSize(18);
    text('Read More', x + 50, y + 25);
    fill(0, 0, 0)
}

function reasonForEnd() {
    textSize(20);
    fill(0, 0, 0);
    print('here')
    if (playerMoney.length <= 0) {
        text("You ran out of money", wX * 4 / 10, 40)
    } else {
        text("There was a fire on year " + year, wX * 4 / 10, 40)
    }
}

function credit() {
    textSize(15);
    text('Icons by Good Ware and Freepik from Falticon', wX * 2 / 100, 20)
}