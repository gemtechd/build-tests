class Point {
    constructor({ x = 0, y = 0 } = {}) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if (typeof (value) !== "number") {
            throw new Error("value is NaN")
        }
        this.y += value;
    }
    moveHorizontal(value) {
        if (typeof (value) !== "number") {
            throw new Error("value is NaN")
        }
        this.x += value;
    }
}

module.exports = Point