class Point {
    constructor({x=0, y=0}={}) {
        if(typeof(x)!=='number'){
            throw Error('The first value should be a number')
        }
        if(typeof(y)!=='number'){
            throw Error('The second value should be a number')
        }
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if(typeof(value)!== 'number'){
            throw Error('The value is of an invalid type')
        }
        this.y += value;
    }
    moveHorizontal(value) {
        if(typeof(value)!== 'number'){
            throw Error('The value is of an invalid type')
        }
        this.x += value;
    }
}

module.exports = Point