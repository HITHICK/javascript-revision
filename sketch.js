//arrays
//alphabet concept
/*var string="This is a string";
 console.log(string);
  var num=100; 
  console.log(num);
  //either true or false
   var bool=true;
    console.log(bool);
     var object;
      console.log(object);
       object=null;
        console.log(null);

//examples of array //integers //
var arr1=[1,2,3,4];
 console.log(arr1)
  var arr2=["name",12,true];
   console.log(arr2); 
    var arr3=[[1,2],[2,3],[3,4]];
    console.log(arr3);
     //access the first element of an array //
     console.log(arr3[1]);
      //access the second element of the first element of the array
       console.log(arr3[1][1]);
      //inserting elements 
        arr3.push("my name");
         console.log(arr3);
         //releasing the element
          arr3.pop(); 
          console.log(arr3);
     var man=createSprites(200,200,100,100);
    //functions declaration
        //eating();
        //defining function
     function eating(){

     }
   console.log("hi hithick");
console.log(bool);
//looping function
for(var i=0; i<300;i++){
console.log(i);
}
//random numbers
var rand=randomnumber(1,3);
//switch statements
switch(rand){
    case 1:console.log("where");
    break;
    case 2:console.log("hi");
    break;
    case 3:console.log("bye");
    break;
      default:console.log("default");
      break;
}
//if conditions
   var score=10;
   if(score<100){
  console.log("score<100");
   }
  //first we need to load and add image
  //loadImage and addImage
  //playSound();
  //physics engine
  //important concept of physics engine=engine,world and bodies
  //classes is an blueprint of an object
  //inheritance 
  //baseclass and extends
  //class childclass extend baseclass
  //api=application programming interface
  //json=javascript object notation
  //database.ref,on,val,read,write,
  //camera position,marking the player and rank*/






const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState="onSling";


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}