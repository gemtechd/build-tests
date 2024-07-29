const Point = require("../../modules/ecs6-class/point")
const Line = require("../../modules/ecs6-class/line")
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require("../../modules/geometry-calculation")
let n = 7
let n1 = 3
let slope = -6
let slope1 = 2

const point1 = new Point({ x: 5, y: 8 })
const point2 = new Point({ x: 1, y: 9 })
const point3 = new Point({ x: 6, y: 2 })
const line1 = new Line({ point1, point2, slope, n })
const line2 = new Line({ point1, point3, slope, n })
const line3 = new Line({ point2, point3, slope1, n })
const line4 = new Line({ point2, point3, slope, n1 })


describe("CALCULATE_DISTANCE", () => {
    test("", () => {
        expect(calculateDistance(point1, point2)).toEqual(4.123105625617661)
    })

})


describe("CALCULATE_JUNCTION_POINT", () => {
    test("should return ", () => {
        expect(calculateJunctionPoint(line1, line2)).toBe(true)

    })
    test("should ", () => {

        expect(calculateJunctionPoint(line1, line4)).toBe(false)
    })
    test("", () => {
        let l1 = new Line({ point1: new Point({ x: 1, y: 4 }), point2: new Point({ x: 2, y: 7 }) });
        let l2 = new Line({ point1: new Point({ x: 6, y: 12 }), point2: new Point({ x: 3, y: 8 }) });
        expect(calculateJunctionPoint(l1, l2)).toEqual({ x: 1.7999999999999998, y: 6.3999999999999995 })
    })
})


describe("IS_POINT_ON_LINE", () => {
 
    const point5 = new Point({ x: 2, y: 2 })
    const point6 = new Point({ x: 1, y: 1 })

    const line4 = new Line({ x: point5, y: point6, slope: 1, n: 0 })

    test("",()=>{
        expect(isPointOnLine(line4, point5)).toBe(true)
    })
    it("", () => {
        let l = new Line({ point1: new Point({ x: 1, y: 4 }), point2: new Point({ x: 2, y: 2 }) });
        let p = new Point({ x: 3, y: 7 });
        expect(isPointOnLine(l, p)).toBe(false)
    })
    it("", () => {

        expect(isPointOnLine(line4, point6)).toBe(true)
    })
    it("", () => {

        const point5 = new Point({ x: 2, y: 2 })
        const point6 = new Point({ x: 1, y: 1 })

        const line4 = new Line({ x: point5, y: point6, slope: 1, n: 7 })
        expect(isPointOnLine(line4, point6)).toBe(false)
    })

})

describe("ERROR", () => {
    it('', () => {
        expect(() => calculateDistance(point1)).toThrow("two points were not received")
    })
    it('', () => {
        expect(() => calculateJunctionPoint(line2)).toThrow("It should take two arguments")
    })
    it('', () => {
        let l = new Point()
        expect(() => isPointOnLine(l)).toThrow("line were not received")
    })
    it('', () => {
        let p = new Line({})
        expect(() => isPointOnLine(p)).toThrow("point were not received")
    })

})
