const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../modules/geometry-calculation')
const Point = require('../modules/ecs6-class/point')
const Line = require('../modules/ecs6-class/line')


describe('Check calculateDistance function', () => {
    it('sould return the distance between two points', () => {
        let p1 = new Point({x:3,y: 5})
        let p2 = new Point({x:4,y: 6})
        expect(calculateDistance(p1, p2)).toBeDefined()
        let disx = (p2.x - p1.x) ** 2
        let disy = (p2.y - p1.y) ** 2
        let result = Math.sqrt(disx + disy)
        expect(calculateDistance(p1, p2)).toBeCloseTo(result)
    })

    describe('Check errors', () => {
        it('should throw error when an argument is not match the required type', () => {
            expect(() => calculateDistance("string", new Point({x:3,y: 5}))).toThrow('argument not match the required type')
            expect(() => calculateDistance(new Point({x:3,y: 5}), [2])).toThrow('argument not match the required type')
            expect(() => calculateDistance({ value: 9 }, new Point({x:3,y: 5}))).toThrow('argument not match the required type')
            expect(() => calculateDistance(new Point({x:3,y: 5}), new Date())).toThrow('argument not match the required type')
            expect(() => calculateDistance(true, new Point({x:3,y: 5}))).toThrow('argument not match the required type')
            expect(() => calculateDistance(() => { }, new Point({x:3,y: 5}))).toThrow('argument not match the required type')
        })
        it('should throw error when missing one or more arguments', () => {
            expect(() => calculateDistance()).toThrow('missing required arguments')
            expect(() => calculateDistance(new Point({x:3,y: 5}))).toThrow('missing required arguments')
        })
    })

})

describe('Check calculateJunctionPoint function', () => {
    describe('Check errors', () => {
        it('should throw error when an argument is not match the required type', () => {
            expect(() => calculateDistance("string", new Line({}))).toThrow('argument not match the required type')
            expect(() => calculateDistance(new Line({}), [2])).toThrow('argument not match the required type')
            expect(() => calculateDistance({ value: 9 }, new Line({}))).toThrow('argument not match the required type')
            expect(() => calculateDistance(new Line({}), new Date())).toThrow('argument not match the required type')
            expect(() => calculateDistance(true, new Line({}))).toThrow('argument not match the required type')
            expect(() => calculateDistance(() => { }, new Line({}))).toThrow('argument not match the required type')
        })
        it('should throw error when missing one or more arguments', () => {
            expect(() => calculateDistance()).toThrow('missing required arguments')
            expect(() => calculateDistance(new Line({}))).toThrow('missing required arguments')
        })
    })
})

describe('Check isPointOnLine function', () => {
    it('should return true if the point is on line', () => {
        let ln = new Line({ point1: new Point({x:3, y:5}), point2: new Point({x:4, y:6}) })
        let point = new Point({x:4,y: 6}) 
        expect(isPointOnLine(ln, point)).toBe(true)
    })
    describe('Check errors', () => {
        it('should throw error when an argument is not match the required type', () => {
            expect(() => calculateDistance("string", "string")).toThrow('argument not match the required type')
            expect(() => calculateDistance([2], [2])).toThrow('argument not match the required type')
            expect(() => calculateDistance({ value: 9 }, { value: 9 })).toThrow('argument not match the required type')
            expect(() => calculateDistance(new Date(), new Date())).toThrow('argument not match the required type')
            expect(() => calculateDistance(true, true)).toThrow('argument not match the required type')
            expect(() => calculateDistance(() => { }, () => { })).toThrow('argument not match the required type')
        })
        it('should throw error when missing one or more arguments', () => {
            expect(() => calculateDistance()).toThrow('missing required arguments')
            expect(() => calculateDistance(new Line({}))).toThrow('missing required arguments')
            expect(() => calculateDistance(point = new Point({}))).toThrow('missing required arguments')
        })
    })
})