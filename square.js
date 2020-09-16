class square {
    constructor(amountOfPointsX, amountOfPointsY, spacing, startPointX, startPointY){
        this.amountOfPointsX = amountOfPointsX,
        this.amountOfPointsY = amountOfPointsY,
        this.spacing = spacing,
        this.startPointX = startPointX,
        this.startPointY = startPointY

        this.points = [[],[],[],[]]

        // this.calculatePoints();
    };

    calculateMyPoints(){
        for (let i = 0; i < this.amountOfPointsX; i++) {
            this.points[0].push({
                x:this.startPointX + this.spacing * i, 
                y:this.startPointY
            });
        }
        for (let i = 0; i < this.amountOfPointsY; i++) {
            this.points[1].push({
                x: this.startPointX + this.spacing * (this.amountOfPointsX - 1), 
                y:this.startPointY + this.spacing * i
            });
        }
        for (let i = 0; i < this.amountOfPointsX; i++) {
            this.points[2].push({
                x: this.startPointX + this.spacing * (this.amountOfPointsX - 1) - this.spacing * i,
                y: this.startPointY + this.spacing * (this.amountOfPointsY - 1)
            });
        }
        for (let i = 0; i < this.amountOfPointsY; i++) {
            this.points[3].push({
                x: this.startPointX, 
                y: this.startPointY + this.spacing * (this.amountOfPointsY - 1) - this.spacing * i
            });
        }
    }

    drawMyself(){
        console.log('drawing myself');
        stroke(255);
        strokeWeight(5);

        beginShape(POINTS);
            for (let i = 0; i < this.amountOfPointsX; i++) {
                vertex(this.points[0][i].x,this.points[0][i].y);
            }
            stroke(255,0,0);
            for (let i = 0; i < this.amountOfPointsY; i++) {
                vertex(this.points[1][i].x,this.points[1][i].y);
            }
            stroke(0,255,0);
            for (let i = 0; i < this.amountOfPointsX; i++) {
                vertex(this.points[2][i].x,this.points[2][i].y);
            }
            stroke(0,0,255);
            for (let i = 0; i < this.amountOfPointsY; i++) {
                vertex(this.points[3][i].x,this.points[3][i].y);
            }
        endShape();
    };
}