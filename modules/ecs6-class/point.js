

class Point {

    constructor({ x = 0, y = 0 } = {}) {

        if (typeof (x) !== 'number' && typeof (y) !== 'number')
            throw new Error('x and y are not number')
        if (typeof (x) !== 'number')
            throw new Error('x is not number')
        if (typeof (y) !== 'number')
            throw new Error('y is not number')
        this.x = x;
        this.y = y;
    }

    moveVertical(value) {

        if (!value)
            throw new Error('value is undefined')
        if (typeof value !== 'number')
            throw new Error('value is not number')
        this.y += value;
    }


    moveHorizontal(value) {
        if (!value)
            throw Error('value is undefined')
        if (typeof value !== 'number')
            throw Error('value is not number')

        this.x += value;
    }
}

module.exports =Point
