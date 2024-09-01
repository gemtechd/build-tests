class Point {
    constructor({x=0, y=0}={}) {
        if(typeof(x)!="number")
            throw new Error('the x is invalid')
        if(typeof(y)!="number")
            throw new Error('the y is invalid')
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if(typeof(value)!="number")
            throw new Error("the value is not type of number")
        this.y += value;
    }
    moveHorizontal(value) {
        if(typeof(value)!="number")
            throw new Error("the value is not type of number")
        this.x += value;
    }
}

module.exports = Point