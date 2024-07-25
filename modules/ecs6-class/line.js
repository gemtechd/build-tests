const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        if (!(point1 instanceof (Point)) && !(point2 instanceof (Point)))
            throw new Error('point1 and point2 not valid')
        if (!(point1 instanceof (Point)))
            throw new Error('point1 not valid')
        if (!(point2 instanceof (Point)))
            throw new Error('point2 not valid')
        if (typeof (slope) !== 'number' && typeof (slope) !== 'undefined')
            throw new Error('slope should be a number');
        if (typeof (n) !== 'number' && typeof (n) !== 'undefined')
            throw new Error('n should be a number');
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }
    calculateSlope = () => {
        if ((this.point1.x - this.point2.x) === 0)
            throw new Error('can`t divide by 0')
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
        if (x === undefined)
            throw new Error('value is undefined')
        if (typeof (x) !== 'number')
            throw new Error('argument is not a number')
        if (this.slope === undefined)
            this.calculateSlope()
        if (this.n === undefined)
            this.calculateNOfLineFunction()
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if (y === undefined)
            throw new Error('value is undefined')
        if (typeof (y) !== 'number')
            throw new Error('argument is not a number')
        if (this.slope === undefined)
            this.calculateSlope()
        if (this.slope === 0)
            throw new Error('slope can`t be 0')
        if (this.n === undefined)
            this.calculateNOfLineFunction()
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line