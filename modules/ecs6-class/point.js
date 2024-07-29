class Point {
    constructor({x=0, y=0}={}) {
        if((typeof(x)!="number" && typeof(y)!="number") || (typeof(x)!="number" && typeof(y)=="number") || (typeof(x)=="number" && typeof(y)!="number")){
            throw new Error("the type must to be number")
        }
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        if(value===undefined){
            throw new Error("didn't send parameter")
        }
        if(typeof(value)!="number") {
            throw new Error("type is not a number")
        }
        this.y += value;
    }
    moveHorizontal(value) {
        if(value===undefined){
            throw new Error("didn't send parameters")
        }
        if(typeof(value)!="number") {
            throw new Error("type is not a number")
        }
        this.x += value;
    }
}

module.exports = Point