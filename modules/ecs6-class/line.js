const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope = () => {
      
        // if (!this.point1 || !this.point2) {
        //     throw("aaaa")
        // }
        // if(typeof())
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)


    }

    calculateNOfLineFunction = () => {
        // if (!this.slope) {
        //     throw new Error("the slope must be defined")
        // }
    //    console.log(this.slope);
    //       if (this.point1 === undefined) {
    //         throw ("must give isn\t argument")
    //     }
        // if (typeof (this.slope) != "number") {
        //     throw new Error("the slope must to number")
        // }
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
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line