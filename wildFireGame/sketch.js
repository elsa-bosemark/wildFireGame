
let moneyX;
let playerMoney = [];
let smallForest = [];
let bigForest = [];
let wX;
let wH;

function setup() {
	createCanvas(windowWidth, windowHeight);
	wX = windowWidth;
	wH = windowHeight;
	moneyX = wX-50;
	for(let i=0;i<6;i++){
		playerMoney.push(new Money(moneyX,40));
		moneyX-= 50;
	}
	for(let i=0;i<3;i++){
		smallForest.push(new SmallTree(random(0,wX),wH*39/50));
		bigForest.push(new BigTree(random(0,wX),wH*39/50));
	}
  }
  
  function draw() {
	sky();
	budgetBar();
	forest();
	startScreen();
  }

  function budgetBar(){
	for(let i=0;i<playerMoney.length;i++){
		playerMoney[i].drawMoney();	
	}
  }
  function forest(){
	grass();
	for(let a=0;a<smallForest.length;a++){
		smallForest[a].drawSmallTree();	
	}
	for(let b=0;b<bigForest.length;b++){
		bigForest[b].drawBigTree();	
	}
  }