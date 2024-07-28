// // Import this named export into your test file:
//  const mockcalculateSlope= jest.fn().mockImplementation(()=>{
//     this.slope = 5
// });
//  const mockcalculateNOfLineFunction= jest.fn().mockImplementation(()=>{
//     this.n = 0
// });

// const mock = jest.fn().mockImplementation(() => {
//   return {constructor:jest.fn().mockImplementation(()=>{console.log('in mocked constructor of line');}),
//     calculateSlope: mockcalculateSlope,
//     calculateNOfLineFunction:mockcalculateNOfLineFunction,
//     getPointByX:jest.fn().mockImplementation(()=>{
//         console.log("mocked!!!!!");
//     })
//   };
// });


const Point = require("./point");

class MockLine {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }={}) {
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope(){
        this.slope=2
        console.log('mocked:)))))))))))');
        console.log(this.slope);
        // this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
        return
    }

    calculateNOfLineFunction (){
        this.n=10
        // this.n = this.point1.y - this.slope * this.point1.x
        return
    }

    getPointOnXAsis() {
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        return this.getPointByX(0)
    }


    getPointByX(x=0) {
        if(typeof(x)!='number'){
            throw new Error('value must be a number')
        }
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y=0) {
        if(typeof(y)!='number'){
            throw new Error('value must be a number')
        }
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}



module.exports = MockLine