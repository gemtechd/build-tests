const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        if ((!(point1 instanceof Point)) || (!(point2 instanceof Point))) {
            throw new Error('the constructor should get two arguments of "Point"')
        }
        if ((typeof (n) !== "undefined" && typeof (n) !== "number") || (typeof (slope) !== 'number' && typeof (slope) !== "undefined")) {
            throw new Error('the n and slope in constractor should get undefined or number')
        }
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope = () => {//שיפוע
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
    }

    calculateNOfLineFunction = () => {//מרחק
        this.n = this.point1.y - this.slope * this.point1.x
        // console.log("n "+this.n);
        // console.log("this.point1.y " +this.point1.y);
        // console.log("this.slope "+ this.slope);
        // console.log("this.point1.x "+ this.point1.x);

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