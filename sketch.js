
function preload(){
}

function setup(){
    createCanvas(700, 300);
    background(50);

    stroke(0)
    strokeWeight(5);
    
    let firstSquare = new square(10,5,40,50,50);
    firstSquare.calculateMyPoints();
    firstSquare.drawMyself();

    console.log(firstSquare.points)
}

function draw(){
}