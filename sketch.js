var form,game,gameState=0;
var bg,bg1,bg2,button_img,backgroundImg,background1,background2,background3,fridge1,fridge_img;
var gargi_img,gargi;
var button;
var menu,rect1;
var fridge2,gargi2_img;
var vanilla;
var left,right,bottom,top1,invisbletop1;
function preload(){
bg = loadImage("Images/bg.jpg");
gargi_img = loadAnimation("Images/frock (1).png","Images/frock (2).png","Images/frock (3).png","Images/frock (4).png","Images/frock (5).png");
bg3 = loadImage("Images/supermarket.jpg");
bg4 = loadImage("Images/bg4.jpg");
button_img = loadImage("Images/start.png");
backgroundImg = loadImage("Images/Background.jpg");
fridge_img = loadImage("Images/fridge.png");
rectImg = loadImage("Images/RECT.PNG");
vanilla = loadImage("Images/vanilla.png");
gargi2_img = loadAnimation("Images/frock (1).png","Images/frock (2).png","Images/frock (2).png");
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-180);
form = new Form();
game = new Game();
menu = new Menu();
background1 = createSprite(width/2-400,height/2,width,height);
  background1.addImage(backgroundImg);
  background1.visible = false;
  background2 = createSprite(width/2+400,height/2,width,height);
  background2.addImage(backgroundImg);
  background2.visible = false;
  background3 = createSprite(width/2+200,height/2,width,height);
  background3.addImage(backgroundImg);
  background3.visible = false;
  gargi = createSprite(100,displayHeight-180,100,200);
  gargi.addAnimation("gargi",gargi2_img);
  gargi.debug = true;
    gargi.visible = false;
    gargi.scale = 0.7;
    fridge1 = createSprite(width/2-550,150,100,50);
    fridge1.addImage(fridge_img);
    fridge1.scale = 0.7;
    fridge1.visible = false;

    fridge2 = createSprite(width/2-100,150,100,50);
    fridge2.addImage(fridge_img);
    fridge2.scale = 0.7;
    fridge2.visible = false;
    fridge2.debug = true;

    fridge3 = createSprite(width/2+400,150,100,50);
    fridge3.addImage(fridge_img);
    fridge3.scale = 0.7;
    fridge3.visible = false;
    fridge3.debug = true;

    fridge4 = createSprite(width/2+150,600,100,50);
    fridge4.addImage(fridge_img);
    fridge4.scale = 0.7;
    fridge4.visible = false;
    fridge4.debug = true;

    fridge5 = createSprite(width/2-380,600,100,50);
    fridge5.addImage(fridge_img);
    fridge5.scale = 0.7;
    fridge5.visible = false;
    fridge5.debug = true;
    rect1 = createSprite(width/2,340,width-500,height);
    // rect.shapeColor = "cyan";
     rect1.addImage(rectImg);
     rect1.visible = false;
 
left = createSprite(0,width/2-420,10,height+20);
left.shapeColor = "black";
top1 = createSprite(width/2,0,displayHeight+720,10);
top1.shapeColor= "black";
bottom = createSprite(width/2,685,displayHeight+720,10);
bottom.shapeColor = "black";
bottom.visible = false;


}
function draw(){
    if(gameState == 0){
        form.display();
     
    }
    else{
        clear();
game.start();

    }
    gargi.bounceOff(left);
    gargi.bounceOff(top1);
    gargi.bounceOff(bottom);
    gargi.bounceOff(fridge1);
    gargi.bounceOff(fridge2);
    gargi.bounceOff(fridge3);
    gargi.bounceOff(fridge4);
    gargi.bounceOff(fridge5);
drawSprites();

}