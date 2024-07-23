const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        if(typeof(point1)!="object" && point1 !=undefined || typeof(point2)!="object" && point2 !=undefined){
            throw new Error('argument must be type point')
        }
        if (typeof(n)!="number"&& n !=undefined|| typeof(slope)!="number" && slope !=undefined){
            throw new Error('argument must be type number')
        }
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope = () => {
        if( this.point1.x==this.point1.y && this.point1.y==0 || this.point2.x==this.point2.y &&  this.point2.y==0){
            throw new Error("missing data")
        }
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
    }

    calculateNOfLineFunction = () => {
        if(this.slope==undefined || this.point1==undefined){
            throw new Error("missing data")
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
        if(typeof(x)!="number"){
            throw new Error('argument must be type number')
        }
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if(typeof(y)!="number"){
            throw new Error('argument must be type number')
        }
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line
