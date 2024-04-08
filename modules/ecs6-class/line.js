const { calculateSlope, calculateNOfLineFunction } = require("../geometry-calculation");
const Point = require("./point");

class Line {
    constructor({ point1 = undefined, point2 = undefined, n = undefined, slope = undefined }) {
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        if ((this.point1 || this.point2) && this.slope) {
            console.log('in if');
            this.n = calculateNOfLineFunction({ point: this.point1 || this.point2, slope: this.slope })
        }
        else
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
        //שיפוע
        if (this.point1 && this.point2) {
            const slopeTemp = calculateSlope(this.point1, this.point2)
            if (slope != slopeTemp)
                throw new Error('this slope is not correct')
            this.slope = slopeTemp
        }
        else
            this.slope = slope;
    }

    get Slope() {
        // console.log("before- slope=" + this.slope)
        if (!this.slope) {
            if (this.point1 && this.point2) {
                this.slope = calculateSlope(this.point1, this.point2)
            }
        }
        // console.log("after- slope=" + this.slope)
        return this.slope
    }

    set N(n) {
        if (!this.n) {
            if ((this.point1 || this.point2) && this.Slope) {
                const newN = calculateNOfLineFunction({ point: this.point1 || this.point2, slope: this.Slope })
                this.n = newN
            }
        }
        if (this.n != n) {
            return new Error('this is not the correct n')
        }

    }

    get N() {
        console.log("before- n=" + this.n)
        if (!this.n) {
            // console.log('in if 1');
            // console.log('this:' + this);
            // console.log('this.point1: ' + this.point1);
            // console.log('this.point2: ' + this.point2);
            // console.log('slope: ' + this.Slope);
            if ((this.point1 || this.point2) && this.Slope) {
                // console.log('in if 2');
                console.log('befor function point: ', this.point1 || this.point2, ' slope: ' + this.slope);
                this.n = calculateNOfLineFunction({ point: this.point1 || this.point2, slope: this.slope })
            }
        }
        console.log("after- n=" + this.n)
        return this.n
    }

    getPointOnXAsis() {
        console.log('slope: ' + this.Slope);
        if (this.slope) {
            console.log('slope in if: ' + this.slope);
            return this.getPointByX(0)
        }
        // console.log(this.slope);
        return undefined
    }

    getPointOnYAsis() {
        if (this.Slope) {
            return this.getPointByY(0)
        }
        return undefined
    }
    isPointOnLine(point) {
        //מקבל נקודה ובודק האם היא קיימת על הישר
        const slope2 = calculateSlope(this.point1 || this.point2, point)
        console.log('slope2: ' + slope2, this.Slope);
        if (this.Slope === slope2) {
            const n2 = calculateNOfLineFunction({ point, slope: slope2 })
            console.log('n2: ' + n2, this.N);
            if (this.N === n2) {
                return true
            }
        }
        return false
    }

    getPointByX(x) {
        //אם יש שיפוע ונקודת מפגש עם ציר ה x הוא מחזיר נקודה חדשה עם ה y המחושב
        console.log('N: ' + this.N);
        if (this.Slope && this.N) {
            console.log('this.slope, this.n: ' + this.Slope, this.N)
            let y = this.slope * x + this.n
            console.log("y: " + y)
            return new Point({ x, y })
        }
        else {
            console.log('this.slope,this.n: ' + this.slope, this.n)
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