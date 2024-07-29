const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        if (n != undefined && typeof (n) != 'number' || slope != undefined && typeof (slope) != 'number')
            throw new Error('type of n and slope need be number')
        if (!(point1 instanceof Point) || !(point2 instanceof Point))
            throw new Error('points need be object of Point class')
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope = () => {

        if ((this.point1.x - this.point2.x) === 0) {
            throw ("It is impossible to divide by 0")
        }

        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)

    }

    calculateNOfLineFunction = () => {
        if (!this.slope)
            this.calculateSlope()
        this.n = this.point1.y - this.slope * this.point1.x
    }

    getPointOnXAsis() {
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        return this.getPointByX(0)
    }

    getPointByX(x) {
        if (this.slope == undefined)
            this.calculateSlope();
        if(this.n == undefined)
            this.calculateNOfLineFunction();
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if (this.slope == undefined)
            this.calculateSlope();
        if(this.n == undefined)
            this.calculateNOfLineFunction();
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line