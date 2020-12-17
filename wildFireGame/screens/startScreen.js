function startScreen(){
    startButton.drawRedButton();
    startButton.fadeInRedButton();
    card(wX * 5 / 100, 70, 380, 18, "You are the forest protector under a budget and scientists predict that there will be a fire some time in the next 5 years: What can you do to prevent wildfires before it's to late?");
    credit();
}
function credit() {
    fill(255);
    textSize(15);
    text('Icons by Good Ware and Freepik from Falticon', wX * 2 / 100, 20)
}