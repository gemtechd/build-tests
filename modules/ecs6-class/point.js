class Point {
    constructor({x=0, y=0}={}) {
        if(typeof(x) !== "number")
            throw new Error('type of x is not number')
        if(typeof(y) !== "number")
            throw new Error('type of y is not number')
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if(typeof(value) !== "number")
            throw new Error('type of number is not number')
           this.y += value;
    }
    moveHorizontal(value) {
        if(typeof(value) !== "number")
            throw new Error('type of number is not number')
        this.x += value;

    }
}

module.exports = Point