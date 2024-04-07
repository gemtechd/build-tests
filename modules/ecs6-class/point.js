class Point {
    constructor({ x, y }) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        // if (value === null || value === undefined)
        //     throw new Error('the value is null')
        this.y += value;
    }
    moveHorizontal(value) {
        this.x += value;
    }
}

module.exports = Point