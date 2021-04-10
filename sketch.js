var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(500, 580, 180, 30);
    block3.shapeColor = "green";

    block4 = createSprite(690, 580, 180, 30);
    block4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 5;
    ball.velocityY = 8;
}

function draw() {
    background(rgb(169,169,169));

    music.play();

    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = block1.shapeColor;
    }
    
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = block2.shapeColor;
    }
    
    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)){
        ball.shapeColor = block3.shapeColor;
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    //write code to bounce off ball from the block4
    
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = block4.shapeColor;
    }
    drawSprites();
}
