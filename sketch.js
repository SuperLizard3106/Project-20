var bgImage, bg;

var cat, catImage, catImage2, catImage3;

var mouse, mouseImage, mouseImage2;

function preload() {
    //load the images here

    bgImage = loadImage("garden.png");

    catImage = loadImage("cat1.png");

    catImage2 = loadAnimation("cat2.png","cat3.png");
    
    catImage3 = loadImage("cat4.png");

    mouseImage = loadImage("mouse1.png");

    mouseImage2 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    bg = createSprite(width/2,height/3,width,height);
    bg.addImage("background", bgImage);
    bg.scale = 1.3;

    cat = createSprite(900,550);
    cat.addImage("sitting", catImage);
    cat.scale = 0.2;

    mouse = createSprite(150,550);
    mouse.addImage("standing", mouseImage);
    mouse.scale=0.15;
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    if (cat.x - mouse.x < 200) {
        cat.addAnimation("catSitting", catImage3);
        cat.changeAnimation("catSitting");
        cat.velocityX = 0;

        mouse.addAnimation("mouseFight", mouseImage2);
        mouse.changeAnimation("mouseFight");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW) {
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catImage2);
      cat.changeAnimation("catRunning");
  }
}
