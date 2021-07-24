var bgImg;
var cat, catImg;
var mouseImg, mouse, mouseImg2, mouseImg3;
function preload() {
    //load the images here
bgImg=loadImage("garden.png");
catImg=loadImage("cat1.png");
mouseImg1=loadAnimation("mouse1.png");
mouseImg2=loadAnimation("mouse2.png", "mouse3.png");
mouseImg3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,650);
    //create tom and jerry sprites here
cat=createSprite(800,500,10,10);
cat.addImage("tom",catImg);
cat.scale=0.2;
mouse=createSprite(100,500,10,10);
mouse.addAnimation("jerryStanding",mouseImg1);
mouse.scale=0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if (keycode === LEFT_ARROW) {
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseTeasing");
    
     
 }

}
