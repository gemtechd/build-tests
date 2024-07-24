class Point {
    constructor({ x = 0, y = 0 } = {}) {
        if (typeof (x) !== "number" && typeof (y) != "number") {
            throw Error('x and y isnt number')
        }
        if (typeof (x) != "number") {
            throw Error('x isnt number')
        }
        if (typeof (y) != "number") {
            throw Error('y isnt number')

        }
        this.x = x;
        this.y = y;
    }

    moveVertical(value) {
        if (!value) {
            throw Error('value is undefined')
        }
        if (typeof (value) !== "number") {
            throw Error('value isnt number')
        }
        this.y += value;
    }
    moveHorizontal(value) {
        if (!value) {
            throw Error('value is undefined')
        }
        if (typeof (value) !== "number") {
            throw Error('value isnt number')
        }
        this.x += value;
    }
}
module.exports = Point