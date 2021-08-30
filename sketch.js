var canvas;
var music;
var block1, block2, block3, block4
var ball, edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   block1 = createSprite(0, 580, 360, 30)
   block1.shapecolor = "red"
   block2 = createSprite(295, 580, 200, 30)
   block2.shapecolor = "blue"
   block3 = createSprite(740, 580, 200, 30)
   block3.shapecolor = "green"
   block4 = createSprite(740, 580, 220, 30)
   block4.shapecolor = "yellow"

   ball = createSprite(random(20, 750), 100, 40, 40)
   ball.shapecolor = "white"




    ball.velocityX = 4
    ball.velocityY = 9


}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites(
        ball.bounceOff(edges)
    )
if(block1.isTouching(ball)&&ball.bounceoffblock1){
    ball.shapeColor = "red"
}
if(block2.isTouching(ball)){
    ball.shapeColor = "blue"
    ball.velocityX = 0
}
if(block3.isTouching(ball)&&ball.bounceoffblock3){
ball.shapeColor = "green"
}
if(block4.isTouching(ball)&&ball.bounceoffblock4){
    ball.shapeColor = "yellow"
}


    //add condition to check if box touching surface and make it box
}
