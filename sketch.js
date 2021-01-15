var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var score=0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.loop();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x;
  star.y= starBody.position.y;

  textSize(25);
  fill("white");
  text("Score: "+ score, 30, 30);

  drawSprites();
  keyPressed();
}

function keyPressed() {
	if(keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 7;
	}

	if(keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 7;
	}
   
	if(fairy.x=520)
	if(starBody.position.y > 475) {
		starBody = Bodies.circle(650 , 470 , 5 , {restitution:0.5, isStatic:true});
		score +=10;
	}
}
