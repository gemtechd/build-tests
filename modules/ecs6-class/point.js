class Point {
    constructor({x=0, y=0}={}) {
        if(typeof(x)!='number'||typeof(y)!='number'){
            throw Error('The values should have a number')
        }
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if(typeof(value)!= 'number'){
            throw Error('The value is of an invalid type')
        }
        this.y += value;
    }
    moveHorizontal(value) {
        if(typeof(value)!= 'number'){
            throw Error('The value is of an invalid type')
        }
        this.x += value;
    }
}

module.exports = Point