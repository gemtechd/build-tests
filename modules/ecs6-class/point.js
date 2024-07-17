class Point {
    constructor({ x = 0, y = 0 } = {}) {
        if (typeof (x) !== 'number')
            throw Error('x is not a number')
        if (typeof (y) !== 'number')
            throw Error('y is not a number')
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