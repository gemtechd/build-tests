class Point {
    constructor({ x = 0, y = 0 } = {}) {
        this.x = x;
        this.y = y;
    }

    moveVertical(value) {
        if (!value) {
            throw ("must give isn\t argument")
        }
        if (typeof (value) != "number") {
            throw ("type value isn\t number")
        }

        this.y += value;

    }

    moveHorizontal(value) {
        if (!value) {
            throw ("must give isn\t argument")
        }
        if (typeof (value) != "number") {
            throw ("type value isn\t number")
        }
        this.x += value;

    }
}

module.exports = Point