class Point {
    constructor({ x = 0, y = 0 } = {}) {
        if (typeof (x) === "number" && typeof (y) === "number") {
            this.x = x;
            this.y = y;
        } else {
            throw new Error('the type of the numbers is not correctly')
        }
    }
    moveVertical(value) {
        if (typeof (value) === "number") {
            this.y += value;
        } else {
            throw new Error('the type of the value is not correctly')
        }
    }
    moveHorizontal(value) {
        if (typeof (value) === "number") {
            this.x += value;
        } else {
            throw new Error('the type of the value is not correctly')
        }
    }
}

module.exports = Point