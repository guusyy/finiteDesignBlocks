class square {
    constructor(amountOfPointsX, amountOfPointsY, spacing, startPointX, startPointY){
        this.amountOfPointsX = amountOfPointsX,
        this.amountOfPointsY = amountOfPointsY,
        this.spacing = spacing,
        this.startPointX = startPointX,
        this.startPointY = startPointY

        this.points = []

        // this.calculatePoints();
    };

    drawMyself(){
        console.log('drawing myself');
        stroke(255);
        strokeWeight(5);

        beginShape(POINTS);
            for (let i = 0; i < this.amountOfPointsX; i++) {
                vertex(this.startPointX + this.spacing * i, this.startPointY);
            }
            stroke(255,0,0);
            for (let i = 0; i < this.amountOfPointsY; i++) {
                vertex(this.startPointX + this.spacing * (this.amountOfPointsX - 1), this.startPointY + this.spacing * i);
            }
            stroke(0,255,0);
            for (let i = 0; i < this.amountOfPointsX; i++) {
                vertex(this.startPointX + this.spacing * (this.amountOfPointsX - 1) - this.spacing * i, this.startPointY + this.spacing * (this.amountOfPointsY - 1));
            }
            stroke(0,0,255);
            for (let i = 0; i < this.amountOfPointsY; i++) {
                vertex(this.startPointX, this.startPointY + this.spacing * (this.amountOfPointsY - 1) - this.spacing * i);
            }
        endShape();
    };
}