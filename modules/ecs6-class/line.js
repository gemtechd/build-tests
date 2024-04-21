const { calculateSlope, calculateNOfLineFunction } = require("../geometry-calculation");
const Point = require("./point");

class Line {
    constructor({ point1 = undefined, point2 = undefined, n = undefined, slope = undefined }) {
        this.point1 = point1;
        this.point2 = point2;
        this.n = n;
        this.slope = slope;
    }
    addPoint(point) {
        if (point == undefined) {
            throw new Error("the point isn't initializad")
        }
        if (this.point1 && this.point2)
            throw new Error("both points are initialized")
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
        if (this.point1 === undefined && this.point2 === undefined)
            throw new Error("both points are not initialized")
        if (this.point1 === undefined)
            throw new Error("point1 is not initialized")
        if (this.point2 === undefined)
            throw new Error("point2 is not initialized")
        return { point1: this.point1, point2: this.point2 }
    }

    set Slope(slope) {
        if (!slope)
            throw new Error("the value of slope is undefined")
        if(!typeof slope ==Number)
            throw new Error("the value of slopeis not a number")
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
            return this.getPointByX(0)
        }
        return undefined
    }

    getPointOnYAsis() {
        if (this.slope) {
            return this.getPointByY(0)
        }
        return undefined
    }
    isPointOnLine(point) {
        //מחשב שיפוע של הנקודה לפי הנקודה הנבדקת ואחת הנקודות שעל הישר
        const slope2 = calculateSlope(this.point1 || this.point2, point)
        //אם השיפוע של הישר ושל הנקודה שווים
        if (this.slope === slope2) {
            //תחשב את 
            //n
            //לפי הנקודה שהתקבלה והשיפוע השווה
            const n2 = calculateNOfLineFunction({ point, slope: slope2 })
            if (this.n === n2) {
                //הנקודה נמצאת על אותו ישר
                return true
            }
        }
        //נמצאת על ישר מקביל
        return false
    }
//מחזיר את נקודת המפגש של הנקודה עם ציר
//y- ה
    getPointByX(x) {
        if(this.point1==null||this.point2===undefined||this.point2==null||this.point2===undefined)
            throw new Error("an empty attribute exists")
        if (this.slope && this.n) {
            let y = this.slope * x + this.n
            return new Point({ x, y })
        }
    }
//מחזיר את נקודת המפגש של הנקודה עם ציר
//x- ה
    getPointByY(y) {
        if(this.point1==null||this.point2===undefined||this.point2==null||this.point2===undefined)
            throw new Error("an empty attribute exists")
        if (this.slope && this.n) {
            let x = (y - this.n) / this.slope;
            return new Point({ x, y })
        }
    }
}

module.exports = Line