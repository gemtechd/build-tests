const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        if (!(point1 instanceof Point) || !(point2 instanceof Point)) {
            throw new Error('InvalidPointError: point1 and point2 must be instances of Point');
        }
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope = () => {
        if (this.point1.x === this.point2.x) {
            throw new Error('UndefinedSlopeError: Slope is undefined for vertical lines');
        }
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
    }

    calculateNOfLineFunction = () => {
        if (this.slope === undefined) {
            this.calculateSlope();
        }
        this.n = this.point1.y - this.slope * this.point1.x
    }

    getPointOnXAsis() {
        if (this.slope === undefined || this.n === undefined) {
            this.calculateNOfLineFunction();
        }
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        if (this.slope === undefined || this.n === undefined) {
            this.calculateNOfLineFunction();
        }
        return this.getPointByX(0)
    }


    getPointByX(x) {
        if (typeof x !== 'number') {
            throw new Error('InvalidInputError: x must be a number');
        }
        if (this.slope === undefined || this.n === undefined) {
            this.calculateNOfLineFunction();
        }
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if (typeof y !== 'number') {
            throw new Error('InvalidInputError: y must be a number');
        }
        if (this.slope === undefined || this.n === undefined) {
            this.calculateNOfLineFunction();
        }
        if (this.slope === 0) {
            throw new Error('InvalidSlopeError: Slope cannot be zero for calculating X by Y');
        }
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line