const Point = require("./point");

class Line {

    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined } = {}) {
        if (!(point1 instanceof Point && point2 instanceof Point) || !(point1 instanceof Point) || !(point2 instanceof Point)) {
            throw new Error("the type must to be instanceof Point")
        }
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope() {
        if (this.point1.x == this.point2.x) {
            throw new Error("A number cannot be divided by 0")
        }
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
    }

    calculateNOfLineFunction() {
        this.n = this.point1.y - this.slope * this.point1.x
    }

    getPointOnXAsis() {
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        return this.getPointByX(0)
    }

    getPointByX(x) {
        if (typeof (x) != "number") {
            throw new Error("type must be number")
        }
        if (this.slope === undefined && this.n === undefined) {
            throw new Error("must to send slope and n")
        }
        if (this.n === undefined) {
            throw new Error("must to send n")
        }
        if (this.slope === undefined) {
            throw new Error("must to send slope")
        }
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if (typeof (y) != "number") {
            throw new Error("type must be number")
        }
        if (this.slope === undefined && this.n === undefined) {
            throw new Error("must to send slope and n")
        }
        if (this.n === undefined) {
            throw new Error("must to send n")
        }
        if (this.slope === undefined) {
            throw new Error("must to send slope")
        }
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line
