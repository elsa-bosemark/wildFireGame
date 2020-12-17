
function mouseClicked() {
    //SCREEN 1 3 4 
    if (screen == 1 || screen == 3 || screen == 4) {
        //red button start and end
        if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 210 &&
            mouseY >= wH * 15 / 100 + 150 && mouseY <= wH * 15 / 100 + 210) {
            buttonSound.play();
            if (screen == 1) { screen = 2 };
            //reset button
            if (screen == 4) {
                fireYear = floor(random(3,6));
                year = 1;
                bushGrass.splice(0, bushGrass.length - 4);
                fireForest.splice(0, fireForest.length);
                playerMoney.splice(0, playerMoney.length);
                choiceCB.resetChoicePrice();
                moneyX = wX - 50;

                for (let k = 0; k < bigForest.length; k++) {
                    bigForest[k].bigTreeGrow();
                }
                for (let j = 0; j < smallForest.length; j++) {
                    smallForest[j].smallTreeGrow();
                }
                for (let i = 0; i < 6; i++) {
                    playerMoney.push(new Money(moneyX, 40, color(140, 193, 82)));
                    moneyX -= 50;
                };
                for (let i = 0; i < playerMoney.length; i++) {
                    playerMoney[i].drawMoney();
                }
                //Landscape reset
                skyHeat[0] = 199;
                skyHeat[1] = 233;
                skyHeat[2] = 249;
                gColor = color(140, 193, 82);
                grColor = color(160, 212, 104);
                //reset the cb choice
                priceOverBudget = false;
                //choiceChangeMoneyColor = false;
                screen = 2;
            };
            if (screen == 3) {
                fireCausePlayOnce = 2;
                if(year==fireYear || playerMoney.length<=0){
                  screen = 4;
                }else{
                   screen = 2;
                }
                if (bushBurnControl == true) {
                    bushGrass.splice(0, 3);
                    bushBurnControl = false;
                }
            };
        }
    }
    //SCREEN 2
    //extignuish fire
    if (screen == 2) {
        if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 300 &&
            mouseY >= 75 && mouseY <= 110) {
            choiceActions(1);
            addBush();
            choiceCB.updateChoicePrice();
            checkIfPriceOverBudget();
            


        }
        //plant fire resistant trees
        if (playerMoney.length < 2) {
            return
        } else {
            if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 300 &&
                mouseY >= 135 && mouseY <= 135 + 40) {
                choiceActions(2);
                addBush();
                plantFireTree();
                choiceCB.updateChoicePrice();
                checkIfPriceOverBudget();

            }
        }

        //controle burning
        if (priceOverBudget == true) {
            return;
        } else {
            if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 300 &&
                mouseY >= 195 && mouseY <= 190 + 40) {
                bushBurnControl = true;

                choiceActions(choiceCB.returnChoicePrice());
                checkIfPriceOverBudget();
            }
        }
    }

    if (screen == 4) {
        if (mouseX >= wX * 5.8 / 10 + 10 && mouseX <= wX * 5.8 / 10 + 210 &&
            mouseY >= 170 && mouseY <= 170 + 40) {
            window.open("https://www.nationalgeographic.com/science/2019/12/how-will-california-prevent-more-mega-wildfire-disasters/");
        }
    }
};

function mouseHover() {
    //SCREEN 1 4
    //red button start and end
    if (screen == 1 || screen == 3 || screen == 4) {
        if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 210 &&
            mouseY >= wH * 15 / 100 + 150 && mouseY <= wH * 15 / 100 + 210) {
            startButton.hoverRedButton();
            continueButton.hoverRedButton();
        } else {
            startButton.notHoverRedButton();
            continueButton.notHoverRedButton();
        }
    }
    //SCREEN 2
    if (screen == 2) {
        //extignuish fire 
        if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 300 &&
            mouseY >= 75 && mouseY <= 75 + 40) {
            choiceER.hoverChoice();
        } else {
            choiceER.notHoverChoice();
        }
        //plant fire resistant trees
        if (playerMoney.length < 2) {
            choicePR.hoverChoice();
        } else {
            if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 300 &&
                mouseY >= 135 && mouseY <= 135 + 40) {
                choicePR.hoverChoice();
            } else {
                choicePR.notHoverChoice();
            }
        }

        //controle burning
        if (priceOverBudget == true) {
            choiceCB.hoverChoice();

        } else {
            if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 300 &&
                mouseY >= 195 && mouseY <= 190 + 40) {
                choiceCB.hoverChoice();
            } else {
                choiceCB.notHoverChoice();
            }
        }

    }
}



