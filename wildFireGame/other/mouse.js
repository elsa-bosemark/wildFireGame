
function mouseClicked() {
    //SCREEN 1 3 4 
    if (screen == 1 || screen == 3 || screen == 4) {
        //red button start and end
        if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 210 &&
            mouseY >= wH * 15 / 100 + 150 && mouseY <= wH * 15 / 100 + 210) {
            if (screen == 1) { screen = 2};
            if (screen == 3) { 
                screen = 2 
                if(bushBurnControl==true){
                    bushGrass.splice(0,3);
                    bushBurnControl=false;
                }
                
            };
            if (screen == 4) { screen = 1 };
        }
    }
    //SCREEN 2
    //extignuish fire
    if (screen == 2) {
        if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 300 &&
            mouseY >= 75 && mouseY <= 110) {
            choiceActions(1);
            addBush();
            
        }
        //plant fire resistant trees
        if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 300 &&
            mouseY >= 135 && mouseY <= 135 + 40) {
            choiceActions(2);
            addBush();
            plantFireTree();
        }
        //controle burning
        if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 300 &&
            mouseY >= 195 && mouseY <= 190 + 40) {
            bushBurnControl=true;
            choiceActions(choiceCB.updateChoicePrice()-1);
            
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
        if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 300 &&
            mouseY >= 135 && mouseY <= 135 + 40) {
            choicePR.hoverChoice();
        } else {
            choicePR.notHoverChoice();
        }
        //controle burning
        if (mouseX >= wX * 5 / 100 && mouseX <= wX * 5 / 100 + 300 &&
            mouseY >= 195 && mouseY <= 190 + 40) {
            choiceCB.hoverChoice();
        } else {
            choiceCB.notHoverChoice();
        }
    }

}

