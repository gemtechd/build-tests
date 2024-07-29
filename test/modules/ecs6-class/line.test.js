const Line = require("../../../modules/ecs6-class/line")
const Point = require("../../../modules/ecs6-class/point")

const point1 = new Point({ x: 9, y: 6 })
const point2 = new Point({ x: 7, y: 2 })
const line = new Line({ point1, point2 })

describe("CALCULATE_SLOPE", function () {

    test("should return calculateSlope for two points", () => {

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
        line.getPointByX()
        expect(line.point1.x).toBe(9)
    })
})

describe("GET_POINT_BY_Y", () => {
    test("", () => {
        line.getPointByY()
        expect(line.point1.y).toBe(6)
    })
})
describe("ERRORS", function () {
    test("", () => {

        expect(() => line555.calculateNOfLineFunction().toThrow('must give isn\t argument'))
        // expect(()=>line.calculateSlope(point1,"abc").toThrow('type value isn\t number'))
        // expect(()=>line.calculateSlope(point1,'true').toThrow('type value isn\t number'))
    })

})




