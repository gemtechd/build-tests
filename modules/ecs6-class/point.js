class Point {
    constructor({ x, y }) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        // if (value === null || value === undefined)
        //     throw new Error('the value is null')

        // if (!value.isInteger()) {
        //     throw new Error('The value is not an Integer')
        // }
        if (isNaN(value)) {
            throw new Error('The value is Nan')
        }
        this.y += value;
    }
    moveHorizontal(value) {
        this.x += value;
    }
}

module.exports = Point