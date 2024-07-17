const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        if (typeof (n) !== 'number' && typeof (n) !== 'undefined')
            throw Error('n is not a number')
        if (typeof (slope) !== 'number' && typeof (slope) !== 'undefined')
            throw Error('slope is not a number')
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope = () => {
        if (this.point1.x === this.point2.x)
            throw Error('Division error by zero')
        else {
            this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
        }
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
        if (typeof (x) !== 'number')
            throw Error('x is not a number')
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if (typeof (y) !== 'number')
            throw Error('y is not a number')
        if (this.slope === 0)
            throw Error('Division error by zero')
        else {
            let x = (y - this.n) / this.slope;
            return new Point({ x, y })
        }
    }
}

module.exports = Line