const Line = require("../../modules/ecs6-class/line")
const Point = require("../../modules/ecs6-class/point")
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require("../../modules/geometry-calculation")

let point1 = new Point({ x: 4, y: 3 })
let point2 = new Point({ x: 3, y: 2 })
let point3 = new Point({ x: 2, y: 2 })
let point4 = new Point({ x: 2, y: 1 })
let point5 = new Point({ x: 2, y: 2 })
let point6 = new Point({ x: 1, y: 1 })

let line1 = new Line({ point1, point2, slope: 2, n: 3 })
let line2 = new Line({ point3, point4, slope: 2, n: 5 })
let line3 = new Line({ point3, point4, slope: 4, n: 3 })
let line4 = new Line({ point5, point6, slope: 1, n: 0 })
let line5 = new Line({ point5, point4, slope: 1, n: 3 })
let line6 = new Line({ point5, point4, slope: 1, n: 3 })

describe('CALCULATE_DISTANCE', () => {
    it('return the sqrt for distance to point1 with point2', () => {
        expect(calculateDistance(point1, point2)).toBe(1.4142135623730951)
    })
    describe('ERROR', () => {
        it('shold throw error if the function "calculateDistance" not get/get not valid arguments', () => {
            expect(() => calculateDistance()).toThrow('the function must get an arguments: point1 and point2!')
            expect(() => calculateDistance(new Line({}), new Point({}))).toThrow("point1 is not instance of 'Point'!")
            expect(() => calculateDistance(new Point({}), new Line({}))).toThrow("point2 is not instance of 'Point'!")
            expect(() => calculateDistance('wow')).toThrow("the arguments: point1 and point2 are not instance of 'Point'!")
            expect(() => calculateDistance(['a', 'b'])).toThrow("the arguments: point1 and point2 are not instance of 'Point'!")
            expect(() => calculateDistance(new Line({}))).toThrow("the arguments: point1 and point2 are not instance of 'Point'!")
            expect(() => calculateDistance(true)).toThrow("the arguments: point1 and point2 are not instance of 'Point'!")
            expect(() => calculateDistance({})).toThrow("the arguments: point1 and point2 are not instance of 'Point'!")
            expect(() => calculateDistance(line1, line2)).toThrow("the arguments: point1 and point2 are not instance of 'Point'!")
            expect(() => calculateDistance(new Line({}), new Line({}))).toThrow("the arguments: point1 and point2 are not instance of 'Point'!")
            expect(() => calculateDistance([], [])).toThrow("the arguments: point1 and point2 are not instance of 'Point'!")
            expect(() => calculateDistance('a', 'b')).toThrow("the arguments: point1 and point2 are not instance of 'Point'!")
            expect(() => calculateDistance(1, 2)).toThrow("the arguments: point1 and point2 are not instance of 'Point'!")
        })
    })
})

describe('CALCULATE_JUNCTION_POINT', () => {
    it('should return true if the slope and the n equal in line1 and line2', () => {
        expect(calculateJunctionPoint(line1, line1)).toBe(true)
    })

    it('should return false if the slope equal and the n not in line1 and line2', () => {
        expect(calculateJunctionPoint(line1, line2)).toBe(false)
    })

    it('should return the junction point', () => {
        expect(calculateJunctionPoint(line2, line3)).toEqual({ x: 1, y: 7 })
    })
    it('mock function on calculateJunctionPoint function', () => {
        jest.spyOn(line1, 'getPointByX').mockImplementation((y) => {
            return { x: 0, y };
        });

        const lines = calculateJunctionPoint(line6, line6);

        expect(lines).toEqual(true);
    })
    describe('ERROR', () => {
        it('shold throw error if the function "calculateJunctionPoint" not get/get not valid arguments', () => {
            expect(() => calculateJunctionPoint()).toThrow('the function must get an arguments:line1 and line2!')
            expect(() => calculateJunctionPoint(new Point({}), new Line({}))).toThrow("line1 is not instance of 'Line'!")
            expect(() => calculateJunctionPoint(new Line({}), new Point({}))).toThrow("line2 is not instance of 'Line'!")
            expect(() => calculateJunctionPoint(new Line({ point3, point3, n: 3, slope: undefined }), new Line({ point3, point3, slope: undefined }))).toThrow("slope is undefined!")
            expect(() => calculateJunctionPoint(new Line({ point3, point3, n: undefined, slope: 2 }), new Line({ point3, point3, n: undefined, slope: 2 }))).toThrow("n is undefined!")
            expect(() => calculateJunctionPoint('wow')).toThrow('the function must get an arguments:line1 and line2!')
            expect(() => calculateJunctionPoint(['a', 'b'])).toThrow('the function must get an arguments:line1 and line2!')
            expect(() => calculateJunctionPoint(new Line({}))).toThrow('the function must get an arguments:line1 and line2!')
            expect(() => calculateJunctionPoint(true)).toThrow('the function must get an arguments:line1 and line2!')
            expect(() => calculateJunctionPoint({})).toThrow('the function must get an arguments:line1 and line2!')
            expect(() => calculateJunctionPoint(point1, point2)).toThrow("line1 and line2 are not instance of 'Line'!")
            expect(() => calculateJunctionPoint(new Point({}), new Point({}))).toThrow("line1 and line2 are not instance of 'Line'!")
            expect(() => calculateJunctionPoint([], [])).toThrow("line1 and line2 are not instance of 'Line'!")
            expect(() => calculateJunctionPoint('a', 'b')).toThrow("line1 and line2 are not instance of 'Line'!")
            expect(() => calculateJunctionPoint(1, 2)).toThrow("line1 and line2 are not instance of 'Line'!")
        })
    })
})

describe('IS_POINT_ON_LINE', () => {
    it('should return true if the point on line', () => {
        expect(isPointOnLine(line4, point6)).toBe(true)
    })

    it('should return false if the point on line', () => {
        expect(isPointOnLine(line5, point6)).toBe(false)
    })
    it('should return false if the point on line', () => {
        expect(isPointOnLine(line1, point1)).toBe(false)
    })

    it('mock function on "isPointOnLine" function',()=>{
        jest.mock('../../modules/ecs6-class/line', () => {
            return jest.fn().mockImplementation(({ point1, point2, slope, n }) => ({
                point1,
                point2,
                slope,
                n,
                calculateSlope: jest.fn().mockImplementation(function () {
                    this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x);
                }),
                calculateNOfLineFunction: jest.fn().mockImplementation(function () {
                    this.n = this.point1.y - this.slope * this.point1.x;
                }),
              
            }));
            
        });
    })

    describe('ERROR', () => {
        it('shold throw error if the function "isPointOnLine" not get/get not valid arguments', () => {
            expect(() => isPointOnLine()).toThrow('the function must get an arguments: line and point!')
            expect(() => isPointOnLine(new Point({}), new Line({}))).toThrow("line and point are not instance of 'Line' and 'Point!")
            expect(() => isPointOnLine('wow')).toThrow('the function must get an arguments: line and point!')
            expect(() => isPointOnLine(['a', 'b'])).toThrow('the function must get an arguments: line and point!')
            expect(() => isPointOnLine(new Line({}))).toThrow('the function must get an arguments: line and point!')
            expect(() => isPointOnLine(true)).toThrow('the function must get an arguments: line and point!')
            expect(() => isPointOnLine({})).toThrow('the function must get an arguments: line and point!')
            expect(() => isPointOnLine(point1, point2)).toThrow("line is not instance of 'Line'")
            expect(() => isPointOnLine(line1, line2)).toThrow("point is not instance of 'Point!")
            expect(() => isPointOnLine(new Line({ point1: new Line({}) }), new Line({}))).toThrow("point1 not instance of 'Point'!")
            expect(() => isPointOnLine(new Point({}), new Point({}))).toThrow("line is not instance of 'Line'!")
            expect(() => isPointOnLine(point1, line1)).toThrow("line and point are not instance of 'Line' and 'Point!")
            expect(() => isPointOnLine([], [])).toThrow("line and point are not instance of 'Line' and 'Point!")
            expect(() => isPointOnLine('a', 'b')).toThrow("line and point are not instance of 'Line' and 'Point!")
            expect(() => isPointOnLine(1, 2)).toThrow("line and point are not instance of 'Line' and 'Point!")
        })
    })
})
