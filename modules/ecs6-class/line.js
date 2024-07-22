const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        if (!(point1 instanceof Point))
            throw new Error('point1 is not point')
        this.point1 = point1;
        if (!(point2 instanceof Point))
            throw new Error('point2 is not point')
        this.point2 = point2;
        if (slope !== undefined && typeof slope !== 'number')
            throw new Error('slope is not number')
        this.slope = slope;
        if (n !== undefined && typeof (n) !== 'number')
            throw new Error('n is not number')
        this.n = n;
    }

    calculateSlope = () => {
      if(this.point1.x === this.point2.x&&this.point1.y === this.point2.y){
        throw new Error('Both points have the same values so it is not a line'
        )
      }
        if(this.point1.x === this.point2.x){
          throw new Error('The x of point1 is equal to the x of point2 so this line is not function')
        }
       
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
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
        if(x===undefined){
            throw Error('x is not a defined')
        }
        if(typeof(x)!=="number"){

            throw Error('x is not a number')
        }
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if(y===undefined){
            throw Error('y is not  defined')
        }
        if(typeof(y)!=="number"){

            throw Error('y is not  number')
        }
        
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line
  
    
