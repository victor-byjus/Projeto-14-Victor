var bow , arrow,  background, redB, pinkB, greenB ,blueB ,grupodeflecha;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  // criar o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para atirar a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  grupodeflecha= new Group();  
}

function draw() {
 background(0);
  // movendo o fundo
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  //movendo o arco
  bow.y = World.mouseY
  
  // soltar a flecha quando a tecla de espaço for pressionada
  if (keyDown("space")) {
    createArrow();  
  }
  
  //criando inimigos contínuos
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (grupodeflecha.isTouching(redB)) {
    
    redB.destroyEach();
    
    grupodeflecha.destroyEach();
    score=score+1;
  }

  if (grupodeflecha.isTouching(greenB)) {
    greenB.destroyEach();
    grupodeflecha.destroyEach();
    score=score+3;
  }

  if (grupodeflecha.isTouching(blueB)) {
    blueB.destroyEach();
    grupodeflecha.destroyEach();
    score=score+2;
  }

  if (grupodeflecha.isTouching(pinkB)) {
    pinkB.destroyEach();
    grupodeflecha.destroyEach();
    score=score+1;
  }

  drawSprites();
  text("Pontuação: "+ score, 300,50);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}


// Criando flechas para o arco
 function createArrow() {
  var flecha= createSprite(100, 100, 60, 10);
  flecha.addImage(arrowImage);
  flecha.x = 360;
  flecha.y=bow.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
  
  grupodeflecha.add(flecha);
   
}
