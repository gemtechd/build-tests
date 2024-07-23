class Point {
    constructor({ x = 0, y = 0 } = {}) {
        if(typeof(x)!=="number" || typeof(y)!=="number" ){
            throw new Error('argument is not a number!')
        }
        this.x = x;
        this.y = y;

    }
    moveVertical(value) {
        if (value === undefined) {
            throw new Error('the value is undefined!')
        }
        if (typeof (value) != "number") {
            throw new Error("the value is not a number!")
        }
        this.y += value;
    }
    moveHorizontal(value) {
        if (value === undefined) {
            throw new Error('the value is undefined!')
        }
        if (typeof (value) != "number") {
            throw new Error("the value is not a number!")
        }
        this.x += value;
    }
}

module.exports = Point