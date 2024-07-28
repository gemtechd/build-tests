class Point {
    constructor({ x = 0, y = 0 } = {}) {
        if (typeof (x) !== "number") {
            throw new Error('argument x must be type number')
        }
        if (typeof (y) !== "number") {
            throw new Error('argument y must be type number')
        }
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if (typeof (value) !== "number") {
            throw new Error('argument must be type number')
        }
        this.y += value;
    }
    moveHorizontal(value) {
        if (typeof (value) !== "number") {
            throw new Error('argument must be type number')
        }
        this.x += value;
    }
}

module.exports = Point