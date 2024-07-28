class MockPoint {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    moveVertical(value=0 ) {
        if(typeof(value)!='number'){
            throw new Error('value must be a number')
        }
        this.y += value;
    }
    moveHorizontal(value=0) {
        if(typeof(value)!='number'){
            throw new Error('value must be a number')
        }
        this.x += value;
    }
}

module.exports = MockPoint;
