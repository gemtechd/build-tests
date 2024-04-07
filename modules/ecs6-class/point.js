class Point {
    constructor({ x=undefined, y=undefined }) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if (value == undefined)
            throw new Error("the value is undefined")
        if (!typeof value == Number)
            throw new Error("the value is not a number")
        this.y += value;
    }
    moveHorizontal(value) {
        if (value == undefined)
            throw new Error("the value is undefined")
        if (!typeof value == Number)
            throw new Error("the value is not a number")
        this.x += value;
    }

}
module.exports = Point