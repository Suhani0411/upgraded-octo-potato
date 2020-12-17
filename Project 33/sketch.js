const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var turn=0; 
var GAMEOVER;
var gameState = "start";
var particles;
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   

    

    
}
 


function draw() {
  background("black");
  //textSize(20)
  //text("Score : "+score,20,30);
  Engine.update(engine);


  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   textSize(23)
   text(" 500 ", 5, 550);
   text(" 500 ", 80, 550);
   text(" 500 ", 160, 550);
   text(" 500 ", 240, 550);
   text(" 100 ", 320, 550);
   text(" 100 ", 400, 550);
   text(" 100 ", 480, 550);
   text(" 200 ", 560, 550);
   text(" 200 ", 640, 550);
   text(" 200 ", 720, 550);

   if ( gameState =="end") {
    
    textSize(90);
    text("GameOver", 150, 300);
    //return
  }

   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
                 if ( turn>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( turn>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                   if ( turn>= 5)  gameState ="end";

             }      
             
       }
 
     }




  /* if(turn==5){
     textSize(45);
     fill("white")
     text("Game Over",300,400);
     gameState="end";
   }*/

   
   
  }


function mousePressed(){
 if(gameState !== "end"){
   turn++;
   //particle.push(new Particle(mouseX,10,10,10));
   particle=new Particle(mouseX,10,10,10);
 }
}