class Game{
constructor(){

}
start(){
   
    background(0);
    background1.visible = true;
    background2.visible = true;
    background3.visible = true;
  gargi.visible = true;
  
  fridge1.visible = true;
  fridge2.visible = true;
  fridge3.visible = true;
  fridge4.visible = true;
  fridge5.visible = true;
  if(keyDown(RIGHT_ARROW)){
    gargi.x = gargi.x+4;
    gargi.addAnimation(gargi_img);
 }
 if(keyDown(LEFT_ARROW)){
  gargi.x = gargi.x-4;
 
}
if(keyDown(UP_ARROW)){
  gargi.y = gargi.y-4;
  //gargi.addAnimation(gargi_img);
}
if(keyDown(DOWN_ARROW)){
  gargi.y = gargi.y+4;
    gargi.changeAnimation("gargiWalking",gargi_img);
 
 
}

if(mouseIsOver(fridge1)){
 rect1.visible = true;
icecream.visible = true;
next1.visible = true;
} 

//rect1.visible = false;

 
    
   
}
}