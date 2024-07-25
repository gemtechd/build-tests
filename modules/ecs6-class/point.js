class Point {
    constructor({ x = 0, y = 0 } = {}) {
        if (typeof (x) != "number" || typeof (y) != "number") {
            throw new Error("the argument must be type number")
        }
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if (!value) {
            throw new Error("the function must get argument")
        }


        if (typeof (value) != "number") {
            throw new Error("the argument must be type number")
        }

        this.y += value;
    }
    moveHorizontal(value) {
        if (!value) {
            throw new Error("the function must get argument")
        }
        if (typeof (value) != "number") {
            throw new Error("the argument must be type number")
        }
        this.x += value;
    }
}


module.exports = Point