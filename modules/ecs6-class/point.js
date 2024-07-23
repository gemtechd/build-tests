class Point {
    constructor({ x = 0, y = 0 } = {}) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('InvalidPointError: values must be numbers');
        }
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if (typeof value !== 'number') {
            throw new Error('InvalidValueError: Value must be a number');
        }
        this.y += value;
    }
    moveHorizontal(value) {
        if (typeof value !== 'number') {
            throw new Error('InvalidValueError: Value must be a number');
        }
        this.x += value;
    }
}

module.exports = Point