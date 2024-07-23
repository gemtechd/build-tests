const Line  = require('../../../modules/ecs6-class/line')
const Point = require('../../../modules/ecs6-class/point')

describe('CONSTRUCTOR',() => {
    it('should build an object with default values',() => {
        const line = new Line({slope:5,n:4})
        expect(line.slope).toBe(5)
        expect(line.n).toBe(4)
        expect(line.point1.x).toBe(0)
    })
})


describe('CALCULATE_SLOPE',()=>{
    it('should return the correct answer',() => {
     const line = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:2})})
     line.calculateSlope()
     expect(line.slope).toBe(0.5)
    })
    it('An error should be thrown when the counter equals 0', () => {
        const line = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:4})})       
        expect(()=>line.calculateSlope()).toThrowError('division by zero')
    })
})

describe('CALCULATE_N_OF_LINE_FUNCTION',() => {
    it('should return the correct answer',() => {
        const line = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:2})})
        line.calculateSlope()
        line.calculateNOfLineFunction()
        expect(line.n).toBe(1)
    })
})

describe('GET_POINT_ON_X_ASIS', () =>{
    it('should return the correct answer',() => {
        const line = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:2}),slope:2,n:-8})
        const result = line.getPointOnXAsis()
        expect(result).toEqual({x:4,y:0})
    })
})

describe('GET_POINT_ON_Y_ASIS', () =>{
    it('should return the correct answer',() => {
        const line = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:2}),slope:2,n:-8})
        const result = line.getPointOnYAsis()
        expect(result).toEqual({x:0,y:-8})
    })
})

describe('GET_POINT_BY_X', () =>{
    it('should return the correct answer',() => {
        const line = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:2}),slope:2,n:-8})
        const result = line.getPointByX(2)
        expect(result).toEqual({x:2,y:-4})
    })
})

describe('GET_POINT_BY_Y', () =>{
    it('should return the correct answer',() => {
        const line = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:2}),slope:2,n:-8})
        const result = line.getPointByY(2)
        expect(result).toEqual({x:5,y:2})
    })
})