const Line = require("../modules/ecs6-class/line")
const Point = require("../modules/ecs6-class/point")
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require("../modules/geometry-calculation")

describe('CALCULATE_DISTANCE', () => {
    it('should return true if the arguments is true', () => {
        const result = calculateDistance(new Point({ x: 0, y: 5 }), new Point({ x: 0, y: 8 }))
        expect(result).toBe(3)
        expect(calculateDistance(new Point({ x: 1, y: 5 }), new Point({ x: 5, y: 8 }))).toBe(5)
    })

    describe('ERRORS', () => {
        test('should throw error if the parameters is false', () => {
            expect(() => calculateDistance()).toThrow('Not enough data')
            expect(() => calculateDistance(new Point({ x: 0, y: 5 }))).toThrow('Not enough data')
            expect(() => calculateDistance({ x: 0, y: 5 }, new Point({ x: 0, y: 5 }))).toThrow('The argument must be type point')
            expect(() => calculateDistance(2, 3)).toThrow('The argument must be type point')
        })
    })
})

describe('CALCULATE_JUCTION_POINT', () => {
    test('should return true if the points is equals', () => {
        let line1 = new Line({ point1: new Point({ x: 5, y: 8 }), point2: new Point({ x: 4, y: 7 }), n: 3, slope: 1 })
        let line2 = new Line({ point1: new Point({ x: 5, y: 8 }), point2: new Point({ x: 4, y: 7 }), n: 3, slope: 1 })
        const result = calculateJunctionPoint(line1, line2)
        expect(result).toEqual(true)
    })
    test('should return false if the lines is parallel lines', () => {
        let line1 = new Line({ point1: new Point({ x: 2, y: 10 }), point2: new Point({ x: 3, y: 11 }), slope: 1 })
        line1.calculateNOfLineFunction()
        let line2 = new Line({ point1: new Point({ x: 5, y: 8 }), point2: new Point({ x: 4, y: 7 }), n: 3, slope: 1 })
        const result = calculateJunctionPoint(line1, line2)
        expect(result).toEqual(false)
    })
    test('should return juction point', () => {
        let line1 = new Line({ point1: new Point({ x: 5, y: 9 }), point2: new Point({ x: 3, y: 11 })})
        line1.calculateSlope()
        line1.calculateNOfLineFunction()
        let line2 = new Line({ point1: new Point({ x: 5, y: 8 }), point2: new Point({ x: 4, y: 7 }), n: 3, slope: 1 })
        const result = calculateJunctionPoint(line1, line2)
        expect(result).toEqual({"x": 5.5, "y": 8.5})
    })

    describe('ERRORS', () => {
        test('should throw error if the parameters is false', () => {
            let line1=new Line({ point1: new Point({ x: 5, y: 8 }), point2: new Point({ x: 4, y: 7 })})
            expect(() => calculateJunctionPoint()).toThrow('Not enough data')
            expect(() => calculateJunctionPoint(line1)).toThrow('Not enough data')
            expect(() => calculateJunctionPoint(2, 3)).toThrow('The argument must be type line')
            expect(() => calculateJunctionPoint({point1: new Point({ x: 5, y: 8 }), point2: new Point({ x: 4, y: 7 })}, line1)).toThrow('The argument must be type line')
        })
    })
})

describe('IS_POINT_ON LINE_FUNCTION',()=>{
    test('should return true if the point on line',()=>{
        const p=new Point({x:5,y:6})
        const l=new Line({point1:new Point({x:4,y:5}),point2:new Point({x:6,y:7})})
        l.calculateSlope()
        l.calculateNOfLineFunction()
        expect(isPointOnLine(l,p)).toBe(true)
    })

    test('should return false if the point not on line',()=>{
        const p=new Point({x:5,y:6})
        const l=new Line({point1:new Point({x:4,y:7}),point2:new Point({x:6,y:5}),n:6})
        l.calculateSlope()
        expect(isPointOnLine(l,p)).toBe(false)
    })

    test('should return false if the point not on line',()=>{
        const p=new Point({x:7,y:6})
        const l=new Line({point1:new Point({x:4,y:5}),point2:new Point({x:6,y:7}),slope:1})
        l.calculateNOfLineFunction()
        expect(isPointOnLine(l,p)).toBe(false)
    })

    describe('ERRORS',()=>{
        test('should throw error if the parameters is false',()=>{
            expect(()=>isPointOnLine()).toThrow('Not enough data')
            expect(()=>isPointOnLine(new Point())).toThrow('Not enough data')
            expect(()=>isPointOnLine(2,3)).toThrow('The arguments must be type line and point')
            expect(()=>isPointOnLine(2,new Point())).toThrow('The argument must be type line')
            expect(()=>isPointOnLine({point1:new Point(),point2:new Point()},new Point())).toThrow('The argument must be type line')
            expect(()=>isPointOnLine(new Line(),3)).toThrow('The argument must be type point')
            expect(()=>isPointOnLine(new Line(),{x:1,y:4})).toThrow('The argument must be type point')
        })
    })
})