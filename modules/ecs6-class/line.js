const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }) {
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope = () => {
        if( this.point1.x==0 && this.point1.y==0 || this.point2.x==0 &&  this.point2.y==0)
            throw new Error("Expect to get two points");
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x);
    }
    
    calculateNOfLineFunction = () => {
        if(this.point1.x==0 && this.point1.y==0)
            throw new Error("Expect to get point");
        if(this.slope==undefined)
            throw new Error("Expect to get slope");
        this.n = this.point1.y - this.slope * this.point1.x
    }

    getPointOnXAsis() {
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        return this.getPointByX(0)
    }

    getPointByX(x) {
        if(x===undefined)
            throw new Error("Expect to get x");
        if(this.slope===undefined && this.n===undefined)
            throw new Error("Expect to get line with slope and n");
        if(this.slope===undefined)
            throw new Error("Expect to get line with slope");
        if(this.n===undefined)
            throw new Error("Expect to get line with n");
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if(y===undefined)
            throw new Error("Expect to get y");
        if(this.slope===undefined && this.n===undefined)
            throw new Error("Expect to get line with slope and n");
        if(this.slope===undefined)
            throw new Error("Expect to get line with slope");
        if(this.n===undefined)
            throw new Error("Expect to get line with n");
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line