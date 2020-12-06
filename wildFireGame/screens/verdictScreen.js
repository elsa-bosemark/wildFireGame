function verdictScreen() {
    continueButton.drawRedButton();
    continueButton.fadeInRedButton();
    mouseHover();
    continueCard.drawCard();
    continueCard.fadeInCard();
    if (bushBurnControl == true) {
        burnBush();
    }
}
