class Point {
    constructor({x, y}) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if (!value) {
            throw new Error("no value given");
        }
        this.y += value;
    }
    moveHorizontal(value) {
        if (!value) {
            throw new Error("no value given");
        }
        this.x += value;
    }
}
















module.exports = Point