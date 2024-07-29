const Line = require("../../../modules/ecs6-class/line")
const Point = require("../../../modules/ecs6-class/point")

const point1 = new Point({ x: 9, y: 6 })
const point2 = new Point({ x: 7, y: 2 })
const line = new Line({ point1, point2 })

describe("CALCULATE_SLOPE", function () {

    test("should return calculateSlope for two points", () => {

        const point1 = new Point({ x: 9, y: 6 })
        const point2 = new Point({ x: 7, y: 2 })
        const line = new Line({ point1, point2 })

        line.calculateSlope()
        expect(line.slope).toBe(2)
    })


})

describe("CALCULATE_N_OF_LINE_FUNCTION", () => {
    test("", () => {
        line.calculateNOfLineFunction()
        expect(line.n).toBe(-12)

    })
})
describe("GET_POINT_ON_X_ASIS", () => {
    test("", () => {
        line.getPointOnXAsis()
        expect(line.point1.x).toBe(9)
    })
})
describe("GET_POINT_ON_Y_ASIS", () => {
    test("", () => {
        line.getPointOnYAsis()
        expect(line.point1.y).toBe(6)
    })
})
describe("GET_POINT_BY_X", () => {
    test("", () => {
        const point1 = new Point({ x: 9, y: 6 })
        const point2 = new Point({ x: 7, y: 2 })
        const line = new Line({ point1, point2 })


        line.getPointByX()
        expect(line.point1.x).toBe(9)
    })
})

describe("GET_POINT_BY_Y", () => {
    test("", () => {
        const point1 = new Point({ x: 9, y: 6 })
        const point2 = new Point({ x: 7, y: 2 })
        const line = new Line({ point1, point2 })

        line.getPointByY()
        expect(line.point1.y).toBe(6)
    })
})
describe("ERRORS", function () {
    test("", () => {

        expect(() => new Line({ point1: new Point({ x: 4, y: 3 }), point2: new Point({ x: 7, y: 5 }), n: '@', slope: 'chayale' })).toThrow("type of n and slope need be number")
    })
    it('', () => {
        expect(() => new Line({ point1: 'abc', point2: { x: 5, y: 9 } })).toThrow("points need be object of Point class")

    })
    it('should throw error when no points have been sent to the calculateSlope function', function () {
        ll1 = new Line({})
        expect(() => ll1.calculateSlope()).toThrow('It is impossible to divide by 0')
    })




})




