const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope() {
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
        if (!this.slope) {
            this.slope = 0
        }
    }

    calculateNOfLineFunction() {
        if (!this.slope) {
            this.calculateSlope()
        }
        this.n = this.point1.y - this.slope * this.point1.x
    }

    getPointOnXAsis() {
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        return this.getPointByX(0)
        TODO//should i make here a mock testing , because of sendindg to another function?
    }


    getPointByX(x) {
        if (x === undefined) {
            throw new Error('no argument was sent')
        }
        if (typeof (x) !== "number") {
            throw new Error('argument is not a number')
        }
        if (!this.slope) {
            this.calculateSlope()
        }
        if (!this.n) {
            this.calculateNOfLineFunction()
        }
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if (y === undefined) {
            throw new Error('no argument was sent')
        }
        if (typeof (y) !== "number") {
            throw new Error('argument is not a number')
        }
        if (!this.slope) {
            this.calculateSlope()
        }
        if (!this.n) {
            this.calculateNOfLineFunction()
        }
        let x = (y - this.n) / this.slope;
        // console.log(x);
        // if (!x) {
        //     return new Point({ x: 0, y })
        // }
        //TODO what will i do with y=0? what does have to be in x?

        return new Point({ x, y })
    }
}

module.exports = Line