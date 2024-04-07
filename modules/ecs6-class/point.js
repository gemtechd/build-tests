class Point {
    constructor({x, y}) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if(value==undefined)
            throw new Error("the y is undefined")
        this.y += value;
    }
    moveHorizontal(value) {
        if(value===undefined)
            throw new Error("the x is undefined")
        this.x += value;
    }

}

module.exports = Point