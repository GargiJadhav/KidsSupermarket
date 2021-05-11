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
  gargi.addAnimation(gargi_img);
}
if(keyDown(UP_ARROW)){
  gargi.y = gargi.y-4;
  gargi.addAnimation(gargi_img);
}
if(keyDown(DOWN_ARROW)){
    gargi.addAnimation("gargi2",gargi_img);
  gargi.y = gargi.y+4;
 
}

if(mouseIsOver(fridge1)){
 rect1.visible = true;
  var icecream = createSprite(width/2,340,50,50);
  icecream.addImage(vanilla);
} 
//rect1.visible = false;

 
    
   
}
}