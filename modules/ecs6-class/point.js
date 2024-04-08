class Point {
    constructor({ x, y }) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        //מזיז את הנקודה במאונך
        this.y += value;
    }
    moveHorizontal(value) {
        //מזיז את הנקודה אופקית
        this.x += value;
    }
}

module.exports = Point