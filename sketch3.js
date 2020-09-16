class square {
    constructor(amountOfPointsX, amountOfPointsY, spacing, startPointX, startPointY){
        this.amountOfPointsX = amountOfPointsX,
        this.amountOfPointsY = amountOfPointsY,
        this.spacing = spacing,
        this.startPointX = startPointX,
        this.startPointY = startPointY
    };


    drawMyself(){
        console.log("drawing square")
        fill(255);
        beginShape();

        let step = {
            x: this.startPointX,
            y: this.startPointY
        }

        function drawPoint(){
            stroke('red');
            strokeWeight(5);
            point(step.x, step.y);
            strokeWeight(0);
        }

        for (var i = 0; i < this.amountOfPointsX; i++) {
            vertex(step.x, step.y);
            drawPoint();
            step.x += this.spacing;
        }
        for (var i = 0; i < this.amountOfPointsY; i++) {
            vertex(step.x , step.y);
            drawPoint();
            step.y += this.spacing;
        }
        for (var i = 0; i < this.amountOfPointsX; i++) {
            vertex(step.x, step.y);
            drawPoint();
            step.x -= this.spacing;
        }
        for (var i = 0; i < this.amountOfPointsY; i++) {
            vertex(step.x , step.y );
            drawPoint();
            step.y -= this.spacing;
        }
        endShape(CLOSE);
    };
}

let firstSquare = new square(3,3,20,50,50);

function preload(){
}

function setup(){
    createCanvas(700, 300);
    background(50);
    fill(255);
    strokeWeight(0);
    firstSquare.drawMyself();
}

function draw(){
}