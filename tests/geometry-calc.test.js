const Line = require("../modules/ecs6-class/line")
const Point = require("../modules/ecs6-class/point")
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require("../modules/geometry-calculation")
const myMockPoint1 = jest.fn()

describe('CALCULATE_DISTANCE', () => {
    it("should return the distance when send two points", () => {
        expect(calculateDistance(new Point({ x: 1, y: 3 }), new Point({ x: 3, y: 5 }))).toEqual(2.8284271247461903)
    })
    describe('ERROR', () => {
        it("throw new error when point1 and point2 not instance of Point", () => {
            expect(() => calculateDistance("string", "string")).toThrow("send in point1 and in point2 instance of point")
        })
        it("throw new error when point1 not instance of Point", () => {
            expect(() => calculateDistance("string", new Point())).toThrow("send in point1 instance of point")
        })
        it("throw new error when point2 not instance of Point", () => {
            expect(() => calculateDistance(new Point(), "string")).toThrow("send in point2 instance of point")
        })
    })
})

describe('CALCULATE_JUNCTION_POINT', () => {
    it("should return true when line1.slope equal to line2.slope and line1.n equal to line2.n", () => {
        expect(calculateJunctionPoint(new Line({ slope: 1, n: 2 }), new Line({ slope: 1, n: 2 }))).toBeTruthy()
    })
    it("should return false when line1.slope equal to line2.slope and line1.n not equal to line2.n", () => {
        expect(calculateJunctionPoint(new Line({ slope: 1, n: 2 }), new Line({ slope: 1, n: 3 }))).toBeFalsy()
    })
    it("should return new Point when line1.slope not equal to line2.slope", () => {
        const line1 = new Line({ slope: 5, n: 5 })
        const line2 = new Line({ slope: 10, n: 3 })
        const response = calculateJunctionPoint(line1, line2)
        expect(response instanceof Point).toBeTruthy()
    })
    describe('ERROR', () => {
        it("throw new error when line1 and line2 not instance of Line", () => {
            expect(() => calculateJunctionPoint("string", "string")).toThrow("send in line1 and in line2 instance of Line")
        })
        it("throw new error when line1 not instance of Line", () => {
            expect(() => calculateJunctionPoint("string", new Line())).toThrow("send in line1 instance of Line")
        })
        it("throw new error when line2 not instance of Line", () => {
            expect(() => calculateJunctionPoint(new Line(), "string")).toThrow("send in line2 instance of Line")
        })
    })
})

describe('IS_POINT_ON_LINE', () => {
    it("should return true when line.slope equal to proxyLine.slope and line.n equal to proxyLine.n", () => {
        const line = new Line({ point1: new Point({ x: 1, y: 2 }), n: 0 });
        const point=new Point({x:2,y:3})
        const calcSlope = myMockPoint1.mockResolvedValue(line.slope=1)
        const calcN= myMockPoint1.mockResolvedValue(line.n=1)
        expect(isPointOnLine(line,point)).toBeTruthy()
    })
    it("should return false when line.slope not equal to proxyLine.slope", () => {
        const line = new Line({ point1: new Point({ x: 1, y: 2 }), n: 0 });
        const point=new Point({x:2,y:3})
        const calcSlope = myMockPoint1.mockResolvedValue(line.slope=2)
        expect(isPointOnLine(line,point)).toBeFalsy()
    })
    describe('ERROR', () => {
        it("throw new error when line not instance of Line and point not instance of Point", () => {
            expect(() => isPointOnLine("string", "string")).toThrow("line must to be instance of Line and point instance of Point")
        })
        it("throw new error when line not instance of Line", () => {
            expect(() => isPointOnLine("string", new Point({}))).toThrow("line must to be instance of Line")
        })
        it("throw new error when point not instance of Point", () => {
            expect(() => isPointOnLine(new Line({}), "string")).toThrow("point must to be instance of Point")
        })
    })
})