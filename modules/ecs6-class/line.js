const { calculateSlope, calculateNOfLineFunction } = require("../geometry-calculation");
const Point = require("./point");

class Line {
    constructor({ point1 = undefined, point2 = undefined, n = undefined, slope = undefined }) {
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }
    addPoint(point) {
        if (!point) {
           throw Error('eee')

        }
        else {
            if (this.point1 === undefined) {
                this.point1 = point
            }
            else {
                if (this.point2 === undefined) {
                    this.point2 = point
                }
            }
        }
    }

    get Points() {
        return { point1: this.point1, point2: this.point2 }
    }

    set Slope(slope) {
        this.slope = slope;
    }

    get Slope() {
        if (!this.slope) {
            if (this.point1 && this.point2) {
                this.slope = calculateSlope(this.point1, this.point2)
            }
        }
        return this.slope
    }

    set N(n) {
        this.n = n;
    }

    get N() {
        if (!this.n) {
            if ((this.point1 || this.point2) && this.slope)
                this.n = calculateNOfLineFunction({ point: this.point1 | this.point2, slope: this.slope })
        }
        return this.n
    }

    getPointOnXAsis() {
        if (this.slope) {
            return this.getPointByY(0)
        }
        return undefined
    }

    getPointOnYAsis() {
        if (this.slope) {
            return this.getPointByX(0)
        }
        return undefined
    }
    isPointOnLine(point) {
        const slope2 = calculateSlope(this.point1 | this.point2, point)
        if (this.slope === slope2) {
            const n2 = calculateNOfLineFunction({ point, slope: slope2 })
            if (this.n === n2) {
                return true
            }
        }
        return false
    }

    getPointByX(x) {
        if (this.slope && this.n) {
            let y = this.slope * x + this.n
            return new Point({ x, y })
        }
    }

    getPointByY(y) {
        if (this.slope && this.n) {
            let x = (y - this.slope) / this.n;
            return new Point({ x, y })
        }
    }
}

module.exports = Line