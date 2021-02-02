var canvas;
var music;
var block1, block2, block3, block4, square, edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(850,600);


    //create 4 different surfaces
    block1 = createSprite(100,590,200,20)
    block1.shapeColor = "blue"

    block2 = createSprite (320,590,200,20)
    block2.shapeColor = "orange"

    block3 = createSprite (540,590,200,20)
    block3.shapeColor = "green"

    block4 = createSprite (760,590,200,20)
    block4.shapeColor = "Brown"

    square = createSprite (random(20,750),100,40,40)
    square,shaoeColor = "white"

    square.velocityX = 2
    square.velocityY = 2





    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

edges = createEdgeSprites();
square.bounceOff(edges)

if (square.isTouching(block2))
{
    square.shapeColor = "orange"
}

if (square.isTouching(block3))
{
    square.shapeColor = "green"
}
if (square.isTouching(block4))
{
    square.shapeColor = "Brown"
}
if (square.isTouching(block1))
{
    square.shapeColor = "Blue" 
    square.velocityX = 0
    square.velocityY=0
}

    //add condition to check if box touching surface and make it box
    drawSprites();
}
