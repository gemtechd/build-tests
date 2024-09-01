const Point = require('./point');

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope() {
        if (this.point1.x == this.point2.x) {
            throw new Error("it is not possible to divide by zero")
        }
        this.slope = (this.point2.y - this.point1.y) / (this.point2.x - this.point1.x)

    }
    calculateNOfLineFunction() {
        if(!this.slope){
            this.calculateSlope()
        }
        if (this.point1 == undefined) {
            throw new Error('must to be two points')
        }
        this.n = this.point1.y - this.slope * this.point1.x

    }
    getPointOnXAsis() {
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        return this.getPointByX(0)
    }

    getPointByX(x) {

        if (!this.slope) {
            this.calculateSlope()
        }
        if (!this.n) {
            this.calculateNOfLineFunction()
        }
        if (typeof (x) !== "number") {
            throw new Error("x must be a number");
        }
        if (this.slope === 0) {
            throw new Error("cant divide by zero");
        }
        else {
            let y = this.slope * x + this.n;
            return new Point({ x, y })
        }
    }

    getPointByY(y) {
        if (!this.slope) {
            this.calculateSlope()
        }
        if (!this.n) {
            this.calculateNOfLineFunction()
        }
        if (typeof (y) !== "number") {
            throw new Error("y must be a number");
        }
        if (this.slope === 0) {
            throw new Error("cant divide by zero");
        }
        else {
            let x = (y - this.n) / this.slope;
            return new Point({ x, y })
        }
    }
}

module.exports = Line
