
let fireCauseString = ['campfire left unattained', 'lightning strike', 'broken wire']
let fireCauseIndex;
let fireCausesIm;
let fireCause;
let fireCausePlayOnce = 2;
function verdictScreen() {
  continueButton.drawRedButton();
  continueButton.fadeInRedButton();
  mouseHover();
  randomFireCause();
  if (year == fireYear) {
    imageCard(wX * 5 / 100, 70, 380, 20, "There was a " + fireCause + " which started a fire!", fireCausesImage);
  } else {
    card(wX * 5 / 100, 70, 380, 20, "The climate has become hotter and drier, but there was no fire that year. This is Year: " + year)
  }
  if (bushBurnControl == true) {
    burnBush();
  }
}

function randomFireCause() {
  if (fireCausePlayOnce==1) {
    fireCause = fireCause;
    fireCausesIm = fireCausesIm;
  } else {
    fireCauseIndex= floor(random(0,3));
    fireCausesImage = loadImage(fireCausesArray[fireCauseIndex]);
    fireCause = fireCauseString[fireCauseIndex];
    fireCausePlayOnce = 1;
  }
}

function imageCard(x, y, w, s, t, i) {
  noStroke();
  fill(255, 255, 255);
  rect(x, y, w, 150, 20);
  fill(0, 0, 0);
  textSize(s);
  text(t, x + 15, y + 40, w - 150);
  image(i, x+250, y+20, 100, 100);
}

