class Point {
    constructor({ x = 0, y = 0 } = {}) {
        if (typeof (x) !== 'number' || typeof (y) !== 'number')
            throw Error('x or y are not a number')
        this.x = x;
        this.y = y;
    }

    moveVertical(value) {
        if (typeof (value) !== 'number')
            throw Error('value is not a number')
        this.y += value;

    }

    moveHorizontal(value) {
        if (typeof (value) !== 'number')
            throw Error('value is not a number')
        this.x += value;
    }
}

module.exports = Point