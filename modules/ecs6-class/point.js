class Point {
    constructor({x=0, y=0}={}) {
     if (!(typeof (x) === "number") || !(typeof (y) === "number"))
          throw new Error('x and y must be of the number type')
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if (typeof value !== 'number') {
            throw new Error('Invalid input. value should be a number.');
          }
        this.y += value;
    }
    moveHorizontal(value) {
        if (typeof value !== 'number') {
            throw new Error('Invalid input. value should be a number.');
          }
        this.x += value;
    }
}


    

module.exports = Point