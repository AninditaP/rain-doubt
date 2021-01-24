const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ball
var rain=[];
var thunderCreatedFrame;

function preload(){
    img1=loadImage("thunderbolt/1.png");
    img2=loadImage("thunderbolt/2.png");
    img3=loadImage("thunderbolt/3.png");
    img4=loadImage("thunderbolt/4.png");
    
}

function setup(){
 createCanvas(800,1200)   
 engine = Engine.create();
 world = engine.world;

 for (var i=0; i<100;i++){
    rain.push(new Particle(random(1,800),random(1,400),5));
}
}

function draw(){

    background("black");
    Engine.update(engine);
    var options={
        isStatic:true
    }
    ball = Bodies.circle(200,600,100,options);  
    World.add(world,ball);
    ellipse(ball.position.x,ball.position.y,200,200);
   


   /* if(frameCount%5===0)
    {
        rain.push(new Particle(random(1,200),-10,5))
    }
    if(frameCount%5===0)
    {
        rain.push(new Particle(random(200,400),-10,5))
    }

    if(frameCount%5===0)
    {
        rain.push(new Particle(random(400,600),-10,5))
    }
    if(frameCount%5===0)
    {
        rain.push(new Particle(random(600,800),-10,5))
    }*/

    for (var x= 0; x< rain.length; x++) 
    { 
        rain[x].display();
        rain[x].update();
    }  
   
    if(frameCount%120===0){
        rand = Math.round(random(1,4)); 
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(200,600),random(100,200),10,10);
       switch(rand){
           case 1: thunder.addImage(img1);
           break;
           case 2: thunder.addImage(img2);
           break;
           case 3: thunder.addImage(img3);
           break;
           case 4: thunder.addImage(img4);
           break;
           default:break;
       }
    }
    if(thunderCreatedFrame+12===frameCount && thunder){
        thunder.destroy();
    }

   
   
    fill("white")
    ellipseMode(CENTER);
   
   
  //  console.log(ball);





  drawSprites();
}   



