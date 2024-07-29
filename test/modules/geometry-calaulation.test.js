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
    test("", () => {
        expect(calculateJunctionPoint(line1, line2)).toBe(true)

    })
    test("", () => {

        expect(calculateJunctionPoint(line1, line4)).toBe(false)
    })
    test("", () => {
        expect(calculateJunctionPoint(line1, line3)).toEqual({ x: NaN, y: NaN })
    })
})

describe("IS_POINT_ON_LINE", () => {

    test("", () => {
        expect(isPointOnLine(line1, point1)).toBe(false)
    })
    test("", () => {

        const point5 = new Point({ x: 2, y: 2 })
        const point6 = new Point({ x: 1, y: 1 })

        const line4 = new Line({ x: point5, y: point6, slope: 1, n: 0 })
        expect(isPointOnLine(line4, point6)).toBe(true)
    })
    test("", () => {

        const point5 = new Point({ x: 2, y: 2 })
        const point6 = new Point({ x: 1, y: 1 })

        const line4 = new Line({ x: point5, y: point6, slope: 1, n: 7 })
        expect(isPointOnLine(line4, point6)).toBe(false)
    })

})

// describe("ERROR", () => {
//     // it('', () => {
//     //     expect(() => line1.calculateJunctionPoint()).toThrow()
//     // })
// })
