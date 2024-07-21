class Point {
    constructor({ x = 0, y = 0 } = {}) {
        if (typeof (x) !== "number" || typeof (y) !== "number")
            throw Error("this value is not a number")
        else {
            this.x = x;
            this.y = y;
        }
    }

    moveVertical(value) {
        if (typeof (value) !== "number")
            throw Error("this value is not a number")
        this.y += value;
    }
    moveHorizontal(value) {
        if (typeof (value) !== "number")
            throw Error("this value is not a number")
        this.x += value;
    }
}

module.exports = Point
