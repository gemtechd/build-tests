class Point {
    constructor({x=0, y=0}={}) {
        if(typeof(x)!='number' || typeof(y)!='number'){
            throw new Error('the parameter must be number type')
        }
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if(!value){
            throw new Error('not data')
        }
        if(typeof(value)!='number'){
            throw new Error('the parameter must be number type')
        }
        this.y += value;
    }
    moveHorizontal(value) {
        if(!value){
            throw new Error('not data')
        }
        if(typeof(value)!='number'){
            throw new Error('the parameter must be number type')
        }
        this.x += value;
    }
}

module.exports = Point