class Point {
    constructor({ x = 0, y = 0 } = {}) {
        this.x = x;
        this.y = y;
    }

    moveVertical(value) {
        if(typeof (value) != "number"){
            throw new Error("the type must be a number"); 
        }
        this.y += value;
    }

    moveHorizontal(value) {
        if(typeof (value) != "number"){
            throw new Error("the type must be a number"); 
        }
        this.x += value;
    }
}
module.exports = Point