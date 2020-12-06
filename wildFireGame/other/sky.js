let skyHeat=[199,233,249];

function sky(){
	background(skyHeat[0], skyHeat[1], skyHeat[2]);
  }

function changeSky(){
  skyHeat[0] += 20;
  skyHeat[1] -= 10;
  skyHeat[2] -= 40;
}
