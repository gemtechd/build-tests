
const Point = require("../../modules/ecs6-class/point")
const Line = require("../../modules/ecs6-class/line")
const Geomatry = require("../../modules/geometry-calculation")

describe("GEOMATRY_CALCULATE_FUNCTION", function () {
    describe("CALCULATE_DISTANSE", function () {
        it("should return distance between 2 points", function () {
            let point1 = new Point({ x: 4, y: 5 })
            let point2 = new Point({ x: 6, y: 7 })


            expect(Geomatry.calculateDistance(point1, point2)).toEqual(2.8284271247461903)
            expect(Geomatry.calculateDistance(point1, point2)).toBe(2.8284271247461903)

        })
    })

    describe("CALCULATE_JUNCTION_POINT", function () {
        it("should return true when the 2 lines the same", function () {
            let line1 = new Line(new Point({ x: 1, y: 1 }), new Point({ x: 2, y: 2 }), 2, -1)
            let line2 = new Line(new Point({ x: 1, y: 1 }), new Point({ x: 2, y: 2 }), 2, -1)


            expect(Geomatry.calculateJunctionPoint(line1, line2)).toBe(true)

        })
        it("should return false when the n isn't same", function () {
            let line1 = new Line({ point1: new Point({ x: 1, y: 1 }), point2: new Point({ x: 2, y: 2 }), n: 2, slope: -1 })
            let line2 = new Line({ point1: new Point({ x: 1, y: 1 }), point2: new Point({ x: 2, y: 2 }), n: 5, slope: -1 })
           
            expect(Geomatry.calculateJunctionPoint(line1, line2)).toBe(false)

        })
        it("should return junctionPoint when the slope isn't equale", function () {
            let line1 = new Line({ point1: new Point({ x: 10, y: 0 }), point2: new Point({ x: 5, y: 0 }), n: 5, slope: 2 })
            let line2 = new Line({ point1: new Point({ x: 10, y: 0 }), point2: new Point({ x: 5, y: 0 }), n: 1, slope: 3 })
            expect(Geomatry.calculateJunctionPoint(line1, line2)).toEqual({ "x": 4, "y": 13 })

        })
    })

    describe("IS_POINT_ON_LINE", function () {
        it("should return false if the lineSlope and proxyLineSlope isn't equales", function () {

            let point = new Point({ x: 5, y: 2 })
            let line = new Line({ point1: new Point({ x: 10, y: 4 }), point2: new Point({ x: 5, y: 0 }), n: 5, slope: 2 })

            expect(Geomatry.isPointOnLine(line, point)).toBe(false)

        })

        it("should return false if the lineSlope and proxyLineSlope isn't equales", function () {

            let point = new Point({ x: 5, y: 2 })
            let line = new Line({ point1: new Point({ x: 10, y: 4 }), point2: new Point({ x: 5, y: 2 }) })
            let p = new Point({ x: 10, y: 9 })
            let l = new Line({ point1: new Point({ x: 30, y: 10 }), point2: new Point({ x: 10, y: 9 }) })
            line.calculateSlope()
            line.calculateNOfLineFunction()
            l.calculateSlope()
            l.calculateNOfLineFunction()
            expect(Geomatry.isPointOnLine(line, point)).toBe(true)
            expect(Geomatry.isPointOnLine(l, p)).toBe(true)

        })

    })
    it("should return false if only line.n not equale to  proxyLine.n", function () {

        let point = new Point({ x: 5, y: 2 })
        let line = new Line({ point1: new Point({ x: 10, y: 4 }), point2: new Point({ x: 5, y: 0 }), n: 5, slope: 0.4 })
        

        expect(Geomatry.isPointOnLine(line, point)).toBe(false)

    })

})