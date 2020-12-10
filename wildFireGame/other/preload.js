let font;
let fontBold;
let bigTreeLeaves;
let fire;
let fireIcon;
let fireex;
let plant;
let articleCover;
let buttonSound;

function preload() {
  soundFormats('mp3', 'm4a','wav');
  font = loadFont('fonts/Poppins-Regular.ttf');
  fontBold = loadFont('fonts/Poppins-Bold.ttf');
  bigTreeLeaves = loadImage('./assets/Vector.svg');
  fire = loadImage('./assets/fire.svg');
  fireIcon = loadImage('./assets/fireIcon.svg');
  fireex = loadImage('./assets/fireex.svg');
  plant = loadImage('./assets/plant.svg');
  articleCover = loadImage('./assets/fireArticleCover.png');
  buttonSound = createAudio('./assets/buttonPressSound.mp3');
}
