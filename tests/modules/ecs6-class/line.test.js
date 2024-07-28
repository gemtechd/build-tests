const Line  = require('../../../modules/ecs6-class/line')
const Point = require('../../../modules/ecs6-class/point')

let mockCalculatSlope = jest.fn()

// jest.mock('../../modules/ecs6-class/line',()=>{
//    return{
//       calculateSlope:mockCalculatSlope
//    }
// })

// mockCalculatSlope.mockImplementation()

describe('CONSTRUCTOR',() => {
    it('should build an object with default values',() => {
        const line = new Line({slope:5,n:4})
        expect(line.slope).toBe(5)
        expect(line.n).toBe(4)
        expect(line.point1.x).toBe(0)
    })
    it('An error should be thrown when the point1 is not of type Point',() => {
        expect(()=> new Line({point1:[],point2:new Point({x:2,y:2})})).toThrowError('the type of point1 is not Point')
    })
    
    it('An error should be thrown when the point2 is not of type Point',() => {
        expect(()=> new Line({point1:new Point({x:2,y:2}),point2:[]})).toThrowError('the type of point2 is not Point')
    })

    it('An error should be thrown when the slope is not of type number',() => {
        expect(()=> new Line({point1:new Point({x:2,y:2,}),point2:new Point({x:2,y:2}),slope:'a'})).toThrowError('the type of slope is not number')
    })
    it('An error should be thrown when the n is not of type number',() => {
        expect(()=> new Line({point1:new Point({x:2,y:2}),point2:new Point({x:2,y:2}),n:'a'})).toThrowError('the type of n is not number')
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
    it('An error should be thrown when the slope equals 0', () => {
        const line = new Line({point1:new Point({x:2,y:6}),point2:new Point({x:1,y:6}),n:6,slope:0})       
        expect(()=>line.getPointByY(11)).toThrowError('division by zero')
    })
})