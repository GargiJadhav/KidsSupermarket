class Game{
constructor(){

}
start(){
   
    //background(0);
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
    gargi.x = gargi.x+8;
   
 }
 if(keyDown(LEFT_ARROW)){
  gargi.x = gargi.x-8;
 
}
if(keyDown(UP_ARROW)){
  gargi.y = gargi.y-8;
  //gargi.addAnimation(gargi_img);
}
if(keyDown(DOWN_ARROW)){
  gargi.y = gargi.y+8;
    //gargi.changeAnimation("gargiWalking",gargi_img);
 
 
}
/*this.buy1.style('color',"yellow");
this.buy1.style('font',"Arial Black");
this.buy1.position(width/2,500);
this.buy1 = createButton("😀 BUY 😀");*/
if(mousePressedOver(fridge1)){
 rect1.visible = true;
vanilla.visible = true;
next1.visible = true;
//buy1.visible = true;
} 
if(mousePressedOver(next1)){
  rect1.visible = false;
  vanilla.visible = false;
  next1.visible = false;
  //buy1.visible = false;
  //this.buy1.hide();
}
if(mousePressedOver(buy1)){
  //icecream.scale = 2;
  vanilla.visible = true;
  quantity = quantity+1;
  var a = createSprite(500,500,500,500);
  a.shapeColor = "red";
//vanilla.scale = 5;

}



}

if(mousePressedOver(fridge2)){
  rect2.visible = true;
  chocolate.visible = true;
  next2.visible = true;
  buy2.visible = true;
}

if(mousePressedOver(next2)){
  rect2.visible = false;
  chocolate.visible = false;
  next2.visible = false;
  buy2.visible = false;
}
/*if(mousePressedOver(buy2)){
  //icecream.scale = 2;
  chocolate.visible = true;
  
}*/
if(mousePressedOver(fridge3)){
  rect3.visible = true;
  mango.visible = true;
  next3.visible = true;
  buy3.visible = true;
  
}   
if(mousePressedOver(next3)){
  rect3.visible = false;
  mango.visible = false;
  next3.visible = false;
  buy3.visible = false;
}
/*if(mousePressedOver(buy3)){
  //icecream.scale = 2;
  mango.visible = true;
 
}*/
if(mousePressedOver(fridge4)){
  rect4.visible = true;
  kesarPista.visible = true;
  next4.visible = true;
  buy4.visible = true;
}   
if(mousePressedOver(next4)){
  rect4.visible = false;
  kesarPista.visible = false;
  next4.visible = false;
  buy4.visible = false;
}
/*if(mousePressedOver(buy4)){
  //icecream.scale = 2;
  kesarPista.visible = true;
  
} */
if(mousePressedOver(fridge5)){
  rect5.visible = true;
 strawberry.visible = true;
  next5.visible = true;
  buy5.visible = true;
}   
if(mousePressedOver(next5)){
  rect5.visible = false;
  strawberry.visible = false;
  next5.visible = false;
  buy5.visible = false;
}
/*if(mousePressedOver(buy5)){
  //icecream.scale = 2;
  strawberry.visible = true;
 
} */
if(gargi.isTouching(invisibleTheif)){
  theif.visible = true;
  theif.velocityX = 8;

 }
 if(gargi.x>1500){
  
   fridge1.visible = false;
   fridge2.visible = false;
   fridge3.visible = false;
   fridge4.visible = false;
   fridge5.visible = false;

   buy1.destroy();
   buy2.destroy();
   buy3.destroy();
   buy4.destroy();
   buy5.destroy();
   next1.destroy();
   next2.destroy();
   next3.destroy();
   next4.destroy();
   next5.destroy();
   background1.destroy();
   background2.destroy();
   background3.destroy();
   gameState = 2;
   theif.display();
   left.destroy();
  
   top1.destroy();
   bottom.destroy();
 }

