const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        console.log(point1, point2, "p1p2p2p1p");

        // if (typeof(point1)!=Point||typeof(point2)!=Point||typeof(n)!="number"||typeof(slope)!="number") {
        //     throw new Error("the constractor of line must get 2 points of type number")
        // }
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope = () => {
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
    }

    calculateNOfLineFunction = () => {

        if (this.slope === undefined) {
            throw new Error("the slope must be defined")
        }
        if (typeof (this.slope) != "number") {
            throw new Error("the slope must be number")
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
            throw new Error("the function getPointByX must get x")
        }
        if (typeof (x) != "number") {
            throw new Error("the function getPointByX must get x of type number")
        }
        let y = this.slope * x + this.n
        return new Point({ x: x, y: y })
    }

    getPointByY(y) {
        if (y === undefined) {
            throw new Error("the function getPointByY must get y")
        }
        if (typeof (y) != "number") {
            throw new Error("the function getPointByY must get y of type number")
        }

        let x = (y - this.n) / this.slope;
        return new Point({ x: x, y: y })
    }
}

module.exports = Line