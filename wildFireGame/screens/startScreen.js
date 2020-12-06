
function startScreen() {
    loadFadeIn();
    mouseHover();
    introCard.drawCard();
    startButton.drawRedButton();
    fill(255, 0, 0)
}

function loadFadeIn() {
    if (introCard.fadeInCard() != 255) {
        print('fade')
        introCard.fadeInCard();
        if (startButton.fadeInRedButton() != 255) { 
            startButton.fadeInRedButton(); 
        }
    } else { noLoop(); }
}

