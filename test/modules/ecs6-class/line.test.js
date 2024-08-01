const { default: expect } = require("expect")
const Line = require("../../../modules/ecs6-class/line")
const Point = require("../../../modules/ecs6-class/point")

describe("LINE_FUNCTION", function () {
    describe("BUILD_LINE", function () {
        it("should show the points of line after build the line", function () {
            let p1 = new Point({ x: 1, y: 2 })
            let p2 = new Point({ x: 3, y: 4 })
            let point1 = new Point({ x: 5, y: 5 })
            let point2 = new Point({ x: 6, y: 6 })
            let l1 = new Line({ point1: p1, point2: p2, n: 2, slope: -3 })
            let l2 = new Line({ point1: point1, point2: point2, })
            let l3 = new Line({ point1: undefined, point2: undefined })
            expect(l3.n).toBe(undefined)
            expect(l1.point1.x).toEqual(1)
            expect(l1.point1.y).toEqual(2)
            expect(l1.point2.x).toEqual(3)
            expect(l1.point2.y).toEqual(4)
            expect(l2.point1.x).toEqual(5)
            expect(l2.point1.y).toEqual(5)
            expect(l2.point2.x).toEqual(6)
            expect(l2.point2.y).toEqual(6)
        })

        it("should show the n and slope of line after build the line", function () {
            let p1 = new Point({ x: 1, y: 2 })
            let p2 = new Point({ x: 3, y: 4 })
            let point1 = new Point({ x: 5, y: 5 })
            let point2 = new Point({ x: 6, y: 6 })
            let l1 = new Line({ point1: p1, point2: p2, n: 2, slope: -3 })
            let l2 = new Line({ point1: point1, point2: point2, })
            let l3 = new Line({ point1: undefined, point2: undefined })
            expect(l1.n).toEqual(2)
            expect(l1.slope).toEqual(-3)
            expect(l2.n).toBe(undefined)
            expect(l2.slope).toBe(undefined)
        })
    })
    describe("CALCULATE_SLOPE", function () {
        it("should calculate the slope between 2 points", function () {
            let p1 = new Point({ x: 1, y: 2 })
            let p2 = new Point({ x: 3, y: 4 })
            let point1 = new Point({ x: 10, y: 100 })
            let point2 = new Point({ x: 5, y: 50 })
            let l1 = new Line({ point1: p1, point2: p2, n: 2, slope: -3 })
            let l2 = new Line({ point1: point1, point2: point2 })
            expect(l1.slope).toEqual(-3)
            l1.calculateSlope()
            l2.calculateSlope()
            expect(l1.slope).toEqual(1)
            expect(l2.slope).toEqual(10)
        })
    })

    describe("CALCULATE_N_OF_LINE_FUNCTION", function () {
        it("should calculate the n of line function according to  point1 and point2 and slope", function () {
            let p1 = new Point({ x: 1, y: 2 })
            let p2 = new Point({ x: 3, y: 4 })
            let point1 = new Point({ x: 5, y: 5 })
            let point2 = new Point({ x: 6, y: 6 })
            let l1 = new Line({ point1: p1, point2: p2, n: 2, slope: -3 })
            let l2 = new Line({ point1: point1, point2: point2, })
            l1.calculateSlope()
            l2.calculateSlope()
            l1.calculateNOfLineFunction()
            l2.calculateNOfLineFunction()
            expect(l1.n).toEqual(1)
            expect(l2.n).toEqual(0)

        })
    })

    describe("GET_POINT_ON_Y_ASIS", function () {
        it("should retutn a new point on y", function () {
            let line1 = new Line({ point1: new Point({ x: 1, y: 6 }), point2: new Point({ x: 2, y: 3 }), n: 9, slope: -3 })
            expect(line1.getPointOnYAsis()).toStrictEqual(new Point({ x: 0, y: 9 }))
        })
    })

    describe("GET_POINT_ON_X_ASIS", function () {
        it("should retutn a new point on x", function () {
            let line1 = new Line({ point1: new Point({ x: 1, y: 6 }), point2: new Point({ x: 2, y: 3 }), n: 9, slope: -3 })
            expect(line1.getPointOnXAsis()).toStrictEqual(new Point({ x: 3, y: 0 }))
        })
    })

    describe("GET_POINT_BY_X", function () {
        it("should calculate y of point on line according to x", function () {
            let l2 = new Line({ point1: new Point({ x: 5, y: 6 }), point2: new Point({ x: 7, y: 8 }), n: 1, slope: 1 })
            expect(l2.getPointByX(1)).toEqual({ x: 1, y: 2 })

        })
    })


    describe("GET_POINT_BY_Y", function () {
        it("should calculate x of point on line according to y", function () {
            let l2 = new Line({ point1: new Point({ x: 5, y: 6 }), point2: new Point({ x: 7, y: 8 }), n: 1, slope: 1 })

            expect(l2.getPointByY(1)).toEqual({ x: 0, y: 1 })
        })
    })

    describe("ERROR", function () {
        let line = new Line({ point1: new Point({ x: 3, y: 7 }), point2: new Point({ x: 9, y: 7 }), n: 9 })
        let line2 = new Line({ point1: new Point({ x: 3, y: 7 }), point2: new Point({ x: 9, y: 7 }), n: 9, slope: "jskjk" })
        let line3 = new Line({ point1: new Point({ x: 3, y: 7 }), point2: new Point({ x: 9, y: 7 }), n: 9, slope: 6 })
        let line4 = new Line({ point1: "huhj", point2: "jij", n: "9", slope: "ijdi" })
        let line5 = new Line({ point1: new Point({ x: 3, y: 7 }), point2: new Point({ x: 9, y: 7 }), n: 9, slope: "jhj" })
        let line6 = new Line({ point1: new Point({ x: 3, y: 7 }), point2: new Point({ x: 9, y: 7 }), slope: 99 })
        let line7 = new Line({ point1: new Point({ x: 3, y: 7 }), point2: new Point({ x: 9, y: 7 }), n: "ghg", slope: 99 })
       
        it("the slope of line must be defined", function () {
            expect(() => { line.calculateNOfLineFunction() }).toThrow("the slope must be defined")
        })

        it("the slope of line must be number", function () {
            expect(() => { line2.calculateNOfLineFunction() }).toThrow("the slope must be number")
        })
        it("the function getPointByX must get x", function () {
            expect(() => { line3.getPointByX() }).toThrow("the function getPointByX must get x")
        })
        it("the function getPointByX must get x of type number", function () {
            expect(() => { line3.getPointByX("iui") }).toThrow("the function getPointByX must get x of type number")
        })
        it("the function getPointByX must get n of type number", function () {
            expect(() => { line6.getPointByX(1) }).toThrow("n must be defined")
        })
        it("the function getPointByX must get n of type number", function () {
            expect(() => { line7.getPointByX(1) }).toThrow("n must be number")
        })
        it(" in function getPointByX slope must be defined", function () {
            expect(() => { line.getPointByX(4) }).toThrow("slope must be defined")
        })
        it(" in function getPointByX slope must of type number", function () {
            expect(() => { line5.getPointByX(4) }).toThrow("slope must of type number")
        })
        it("the function getPointByY must get y", function () {
            expect(() => { line3.getPointByY() }).toThrow("the function getPointByY must get y")
        })
        it("the function getPointByY must get y of type number", function () {
            expect(() => { line3.getPointByY("iui") }).toThrow("the function getPointByY must get y of type number")
        })

    })
})