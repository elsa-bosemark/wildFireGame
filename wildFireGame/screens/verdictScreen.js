function verdictScreen() {
    continueButton.drawRedButton();
    continueButton.fadeInRedButton();
  
    mouseHover();
    if(year>3){
      card(wX * 5 / 100, 70, 380, 20,"Someone left their campfire unattained in your forest and started a fire!")  
    }else{
      card(wX * 5 / 100, 70, 380, 20,"The climate has become hotter and drier, but there was no fire that year. This is Year: "+ year)  
    }
    if (bushBurnControl == true) {
        burnBush();
    }
}
