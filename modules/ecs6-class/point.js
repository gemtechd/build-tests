class Point {
    constructor({ x, y }) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        this.y += value;
    }
    moveHorizontal(value) {
        this.x += value;
    }
}

module.exports = Point