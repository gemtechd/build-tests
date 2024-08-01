const Line = require('../../../modules/ecs6-class/line');
const Point = require('../../../modules/ecs6-class/point');
const pointTest1 = new Point({ x: 10, y: 30 });
const pointTest2 = new Point({ x: 3, y: 9 });
let lineTest = new Line({point1: pointTest1, point2: pointTest2})


describe('CALCULATE_SLOPE', () => {

    it('Enters a value for slope', () => {
        lineTest.calculateSlope()
        expect(lineTest.slope).toBe(3)    
    })
})

describe('CALCULATE_N_OF_LINE_FUNCTION', () => {

    it('Enters a value for n', () => {
        
        lineTest.calculateNOfLineFunction()
        expect(lineTest.n).toBe(0)
        
    })
})


describe('GET_POINT_BY_X', () => {

    it('get point by x', () => {   
        let np = lineTest.getPointByX(8)
        expect(np).toEqual({"x": 8, "y": 24})   
    })
    it('get negative point by x', () => {   
        let np = lineTest.getPointByX(-8)
        expect(np).toEqual({"x": -8, "y": -24})   
    })
})

describe('GET_POINT_BY_Y', () => {
    
    it('get point by y', () => {
        let np = lineTest.getPointByY(9)
        expect(np).toEqual({"x": 3, "y": 9})  
    })

    it('get negative point by y', () => {
        let np = lineTest.getPointByY(-9)
        expect(np).toEqual({"x": -3, "y": -9}) 
    })
})


describe('GET_POINT_ON_X_ASIS', () => {
    
    it('get point', () => {
        let np = lineTest.getPointOnXAsis()
        expect(np).toEqual({"x": 0, "y": 0})  
    })
})

describe('GET_POINT_ON_Y_ASIS', () => {
    
    it('get point', () => {
        let np = lineTest.getPointOnYAsis()
        expect(np).toEqual({"x": 0, "y": 0})  
    })
})

    
describe('ERRORS', () => {
    
    let lineTest1 = new Line({point1: pointTest1})
    let lineTest2 = new Line({slope: 7})
    let lineTest3 = new Line({point1: pointTest1, point2: pointTest2, slope:9})
    let lineTest4 = new Line({point1: pointTest1, point2: pointTest2, n:5})
    let lineTest5 = new Line({point1: pointTest1, point2: pointTest2})

    it('calculateSlope expect get line with 2 points', () => {
        expect(() => lineTest1.calculateSlope()).toThrow("Expect to get two points")
    })

    it('calculateNOfLineFunction expect get line with point', () => {
        expect(() => lineTest2.calculateNOfLineFunction()).toThrow("Expect to get point")
    })

    it('calculateNOfLineFunction expect get line with slope', () => {
        expect(() => lineTest1.calculateNOfLineFunction()).toThrow("Expect to get slope")
    })

    it('getPointByX expect get x', () => {
        expect(() => lineTest3.getPointByX()).toThrow("Expect to get x")
    })

    it('getPointByX expect get line with n', () => {
        expect(() => lineTest3.getPointByX(6)).toThrow("Expect to get line with n")
    })

    it('getPointByX expect get line with slope', () => {
        expect(() => lineTest4.getPointByX(6)).toThrow("Expect to get line with slope")
    })

    it('getPointByX expect get line with slope and n', () => {
        expect(() => lineTest5.getPointByX(6)).toThrow("Expect to get line with slope and n")
    })

    it('getPointByY expect get y', () => {
        expect(() => lineTest3.getPointByY()).toThrow("Expect to get y")
    })

    it('getPointByY expect get line with n', () => {
        expect(() => lineTest3.getPointByY(6)).toThrow("Expect to get line with n")
    })

    it('getPointByY expect get line with slope', () => {
        expect(() => lineTest4.getPointByY(6)).toThrow("Expect to get line with slope")
    })

    it('getPointByY expect get line with slope and n', () => {
        expect(() => lineTest5.getPointByY(6)).toThrow("Expect to get line with slope and n")
    })
})

