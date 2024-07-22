const { Point } = require("./point");
class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        if (typeof (point1) !== "object" && typeof (point2) !== "object" && typeof (n) !== "number" && typeof (slope) != "number") {
            throw Error('all parametrs isnt number')
        }

        if (!(point1 instanceof Point)) {
            throw new Error('point1 must be objects');
        }
        if (!(point2 instanceof Point)) {
            throw new Error('point2 must be objects');
        }
        if (typeof n !== 'number' && n !== undefined) {
            throw new Error('n must be a number');
        }

        if (typeof slope !== 'number' && slope !== undefined) {
            throw new Error('slope must be a number');
        }

        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope = () => {
        if (this.point1.x === this.point2.x) {
            throw new Error("cut with zero");
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
        if (x === undefined) {
            throw new Error('x is undefined');
        }
        if (typeof x !== 'number') {
            throw new Error('x isnt number');
        }
    
        let y = this.slope * x + this.n;
        return new Point({ x, y });
    }
    getPointByY(y) {
        if (y === undefined) {
            throw new Error('y is undefined');
        }
        if (typeof y !== 'number') {
            throw new Error('y isnt number');
        }

        let x = (y - this.slope) / this.n;
        return new Point({ x, y })
    }
}

module.exports = {
    Line, getPointByY: Line.prototype.getPointByY,
    getPointByX: Line.prototype.getPointByX,
    getPointOnYAsis: Line.prototype.getPointOnYAsis,
    getPointOnXAsis: Line.prototype.getPointOnXAsis,
    calculateNOfLineFunction: Line.prototype.calculateNOfLineFunction,
    calculateSlope: Line.prototype.calculateSlope,
}