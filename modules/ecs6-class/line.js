const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        if ((!(point1 instanceof Point))) {
            throw new Error('the constructor should get point1 arguments of "Point"')
        }
        if ((!(point2 instanceof Point))) {
            throw new Error('the constructor should get point2 arguments of "Point"')
        }
        if ((typeof (slope) !== 'number' && typeof (slope) !== "undefined")) {
            throw new Error('the slope in constractor should get undefined or number')
        }
        if ((typeof (n) !== "undefined" && typeof (n) !== "number")) {
            throw new Error('the n in constractor should get undefined or number')
        }
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope() {//שיפוע
        if ((this.point1.x - this.point2.x) === 0) {
            throw new Error('the argument equal to 0');
        }
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
    }

    calculateNOfLineFunction() {//מרחק
        if(this.slope===undefined){
            throw new Error('The slope has not yet been defined')
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
        if (x === undefined) {
            throw new Error('the function should get a number')
        }
        if (typeof (x) != 'number') {
            throw new Error('the function should get a number')
        }
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if (y === undefined) {
            throw new Error('the function should get a number')
        }
        if (typeof (y) != 'number') {
            throw new Error('the function should get a number')
        }
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line