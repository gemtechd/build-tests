const Point = require("./point");


class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined } = {}) {
        if (!(point1 instanceof Point)) {
            throw Error('The point1 should be a Point type')
        }
        if (!(point2 instanceof Point)) {
            throw Error('The point2 should be a Point type')
        }
        if (typeof (n) !== 'number' && typeof (n) !== 'undefined') {
            throw Error('The n should have a number')
        }
        if (typeof (slope) !== 'number' && typeof (slope) !== 'undefined') {
            throw Error('The slope should have a number')
        }
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope() {
        if (this.point1.x === this.point2.x) {
            throw Error("it isn't a real geometry line")
        }
        else {

            return this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)

        }

    }

    calculateNOfLineFunction() {
        this.calculateSlope()
        return this.n = this.point1.y - this.slope * this.point1.x


    }

    getPointOnXAsis() {
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        return this.getPointByX(0)
    }


    getPointByX(x) {
        if (typeof (x) !== 'number') {
            throw Error('The value is of an invalid type')
        }
            this.calculateSlope()
            this.calculateNOfLineFunction()
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if (typeof (y) !== 'number') {
            throw Error('The value is of an invalid type')
        }
        this.calculateSlope()
        this.calculateNOfLineFunction()
        if(this.slope===0){
            throw Error('The slope cannot be 0')
        }
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line