const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {  
       if((point1 instanceof Point) )      
          if((point2 instanceof Point)){
            this.point1 = point1;
            this.point2 = point2;
            this.slope = slope;
            this.n = n;
    }
    else{
        throw new Error('the type of point2 is not Point')}
    else
        throw new Error('the type of point1 is not Point')
    }

    calculateSlope = () => {
        if((this.point1.y - this.point2.y) !== 0)
          this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
        else
          throw new Error('division by zero')
    }

    calculateNOfLineFunction = () => {
        this.n = this.point1.y - this.slope * this.point1.x
    }

    getPointOnXAsis() {
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        return this.getPointByX(0)
    }


    getPointByX(x) {
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if(this.slope !== 0){
            let x = (y - this.n) / this.slope;
            return new Point({ x, y })
       }
       else
         throw new Error('division by zero')
    }
}

module.exports = Line