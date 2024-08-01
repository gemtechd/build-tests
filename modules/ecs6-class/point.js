class Point {
    constructor({x=0, y=0}={}) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value) { 
       if(typeof(value) == "number"){
            this.y += value
        }  
        else{
            throw new Error("Expect to get a number")
        };
    }

    moveHorizontal(value) {
        if(typeof(value) == "number"){
            this.x += value
        } 
        else{
            throw new Error("Expect to get a number")

        }; 
    }
}

module.exports = Point