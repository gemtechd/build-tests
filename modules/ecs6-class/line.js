const { Point } = require('./point');

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {

        if (!(point1 instanceof Point)) {
            throw new Error('point1 should be an instance of Point');
        }

        if (!(point2 instanceof Point)) {
            throw new Error('point2 should be an instance of Point');
        }

        if (n !== undefined && typeof n !== 'number') {
            throw new Error('n should be a number or undefined');
        }

        if (slope !== undefined && typeof slope !== 'number') {
            throw new Error('slope should be a number or undefined');
        }

        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope = () => {

        if (this.point1.x === this.point2.x && this.point1.y === this.point2.y) {
            throw Error('Both points have the same values ​​so it is not a line');
        }

        if (this.point1.x === this.point2.x) {
            throw Error('x of Point1 is the same as x of point2. It is not a line');

        }

        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x);
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
        if (x === undefined)
            throw new Error('x is undefined')

        if (typeof x !== 'number')
            throw new Error('x is not a number')

        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if (y === undefined)
            throw Error('y is undefined')

        if (typeof y !== 'number')
            throw Error('y is not a number')

        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = {
    Line, calculateSlope: Line.prototype.calculateSlope,
    calculateNOfLineFunction: Line.prototype.calculateNOfLineFunction,
    getPointOnXAsis: Line.prototype.getPointOnXAsis,
    getPointOnYAsis: Line.prototype.getPointOnYAsis,
    getPointByX: Line.prototype.getPointByX,
    getPointByY: Line.prototype.getPointByY
};

