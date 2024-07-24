
const Line = require("../../modules/ecs6-class/line");
const Point = require("../../modules/ecs6-class/point");
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require("../../modules/geometry-calculation")

describe("CALCULATE_DISTANCE", function () {
    it("should return the distance between 2 points", function () {
        const x = new Point({ x: 4, y: 3 })
        const y = new Point({ x: 5, y: 6 })
        expect(calculateDistance(x, y)).toBe(3.1622776601683795);
    })
    it("should return 0 if the 2 points is same", function () {
        const x = new Point({ x: 5, y: 3 })
        expect(calculateDistance(x, x)).toBe(0);
    })
    describe("EERORS", function () {
        it("should return error if not get 2 points", function () {
            expect(function () { calculateDistance(new Point({ x: 4, y: 3 })) }).toThrow(new Error("missing data"));

        })
        it("should return error if not get attribute", function () {
            expect(function () { calculateDistance() }).toThrow(new Error("missing data"))
        })
        it("should return error if argument is not number", function () {
            expect(function () { calculateDistance("rtry", 9) }).toThrow(new Error("argument must by type point"))
            expect(function () { calculateDistance(true, 9) }).toThrow(new Error("argument must by type point"))
            expect(function () { calculateDistance(() => { }, 9) }).toThrow(new Error("argument must by type point"))
            expect(function () { calculateDistance(1.8, 9) }).toThrow(new Error("argument must by type point"))
            expect(function () { calculateDistance(2, "uioyi") }).toThrow(new Error("argument must by type point"))
            expect(function () { calculateDistance(2, [1, 2, 3]) }).toThrow(new Error("argument must by type point"))
            expect(function () { calculateDistance([1, 2, 3], 1) }).toThrow(new Error("argument must by type point"))

        })

    })


});


describe("CALCULATE_JUNCTION_POINT", function () {
    it("should returen a junction point ", function () {
        const px = new Point({ x: 4, y: 3 })
        const py = new Point({ x: 5, y: 6 })
        const pz = new Point({ x: 3, y: 7 })
        const line1 = new Line({ point1: px, point2: py })
        const line2 = new Line({ point1: py, point2: pz })
        line1.calculateSlope()
        line1.calculateNOfLineFunction()
        line2.calculateSlope()
        line2.calculateNOfLineFunction()
        expect(calculateJunctionPoint(line1, line2)).toStrictEqual(new Point({ x: 5, y: 6 }));
    })
    it("should returen false if not contain a junction point ", function () {
        const line1 = new Line({ n: 4 })
        const line2 = new Line({ n: 6 })
        expect(calculateJunctionPoint(line1, line2)).toBe(false);
    })
    it("should returen true if n in line is same ", function () {
        const x = new Point({ x: 4, y: 3 })
        const y = new Point({ x: 5, y: 6 })
        const line1 = new Line({ x, y })
        expect(calculateJunctionPoint(line1, line1)).toBe(true);
    })

    describe("EERORS", function () {
        it("should returen error if not get 2 points", function () {
            const x = new Point({ x: 4, y: 3 })
            expect(function () { calculateJunctionPoint(x) }).toThrow("missing data")
        })
        it("should returen error in not get attribute", function () {
            expect(function () { calculateJunctionPoint() }).toThrow("missing data")
        })
    })


});

describe("IS_POINT_IN_LINE", function () {
    it("should returen true if point on line", function () {
        const px = new Point({ x: 4, y: 3 })
        const py = new Point({ x: 5, y: 6 })
        const line1 = new Line({ point1: px, point2: py })
        line1.calculateSlope()
        line1.calculateNOfLineFunction()
        expect(isPointOnLine(line1, py)).toBe(true);
    })
    it("should returen false if n of point no same n of new point", function () {
        const px = new Point({ x: 4, y: 16 })
        const py = new Point({ x: 3, y: 9 })
        const pz = new Point({ x: 2, y: 2 })
        const line1 = new Line({ point1: px, point2: py, n: 6 })
        line1.calculateSlope()
        expect(isPointOnLine(line1, pz)).toBe(false);
    })
    it("should returen false if point no on line", function () {
        const px = new Point({ x: 4, y: 3 })
        const py = new Point({ x: 5, y: 6 })
        const pz = new Point({ x: 1, y: 2 })
        const line1 = new Line({ point1: px, point2: py })
        line1.calculateSlope()
        line1.calculateNOfLineFunction()
        expect(isPointOnLine(line1, pz)).toBe(false);
    })

    describe("EERORS", function () {
        it("should returen error if not get 2 points", function () {
            const x = new Point({ x: 4, y: 3 })
            expect(function () { isPointOnLine(x) }).toThrow("missing data")
        })
        it("should returen error in not get attribute", function () {
            expect(function () { isPointOnLine() }).toThrow("missing data")
        })
    })
});
