const { calculateSlope, calculateNOfLineFunction } = require("../geometry-calculation");
const Point = require("./point");

class Line {
    constructor({ point1 = undefined, point2 = undefined, n = undefined, slope = undefined }) {
        this.point1 = point1;
        this.point2 = point2;
        if (slope) {
            if (this.point1 && this.point2) {
                try {
                    const slopeTemp = calculateSlope(this.point1, this.point2)
                    if (slopeTemp != slope) {
                        throw new Error('the slope you entered is not correct')
                    }
                }
                catch (err) {
                    throw err
                }

            }
        }
        this.slope = slope;
        if (n && !slope) {
            try {
                if ((this.point1 || this.point2) && this.Slope) {
                    const n2 = calculateNOfLineFunction({ point: this.point1 || this.point2, slope: this.slope })
                    if (n2 != n) {
                        throw new Error('the n you entered is not correct')
                    }
                }
            }
            catch (err) {
                throw err
            }
        }

        this.n = n;
    }

    addPoint(point) {
        if (this.point1 === undefined) {
            this.point1 = point
        }
        else {
            if (this.point2 === undefined) {
                this.point2 = point
            }
        }
    }

    get Points() {
        return { point1: this.point1, point2: this.point2 }
    }

    set Slope(slope) {
        if (this.point1 && this.point2) {
            try {
                const slopeTemp = calculateSlope(this.point1, this.point2)
                if (slopeTemp != slope) {
                    throw new Error('the slope you entered is not correct')
                }
            }
            catch (err) {
                throw err
            }
        }
        this.slope = slope
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
        try {
            if ((this.point1 || this.point2) && this.Slope) {
                const n2 = calculateNOfLineFunction({ point: this.point1 || this.point2, slope: this.slope })
                if (n2 != n) {
                    throw new Error('the n you entered is not correct')
                }
            }
        }
        catch (err) {
            throw err
        }
        this.n = n
    }

    get N() {
        if (!this.n) {
            if ((this.point1 || this.point2) && this.Slope) {
                this.n = calculateNOfLineFunction({ point: this.point1 || this.point2, slope: this.slope })
            }
        }
        return this.n
    }

    getPointOnXAsis() {
        if (this.Slope) {
            return this.getPointByX(0)
        }
        return undefined
    }

    getPointOnYAsis() {
        if (this.Slope) {
            return this.getPointByY(0)
        }
        return undefined
    }
    isPointOnLine(point) {
        const slope2 = calculateSlope(this.point1 || this.point2, point)
        if (this.Slope === slope2) {
            const n2 = calculateNOfLineFunction({ point, slope: slope2 })
            if (this.N === n2) {
                return true
            }
        }
        return false
    }

    getPointByX(x) {
        if (this.Slope && this.N) {
            let y = this.slope * x + this.n
            return new Point({ x, y })
        }
        else {
            throw new Error('there is not slope or n in this line for get point by x')
        }

    }

    getPointByY(y) {
        if (this.Slope && this.N) {
            let x = (y - this.slope) / this.n;
            return new Point({ x, y })
        }
        else {
            throw new Error('there is not slope or n in this line for get point by y')
        }
    }
}

module.exports = Line