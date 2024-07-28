const Line = require('../modules/ecs6-class/line');
const Point = require('../modules/ecs6-class/point');
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../modules/geometry-calculation');

describe('CALCULATE_DISTANCE', () => {
    it('should calculate distance', () => {
        const point1 = new Point({ x: 4, y: 3 });
        const point2 = new Point({ x: 3, y: 2 });
        expect(calculateDistance(point1, point2)).toEqual(1)
    })

    it('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
        expect(() => calculateDistance(new Line({}), new Line({}))).toThrow('the argument should be point')
        expect(() => calculateDistance(1, 2)).toThrow('the argument should be point')
        expect(() => calculateDistance(true)).toThrow('the function should get two arguments')
        expect(() => calculateDistance(['x', 'y'])).toThrow('the function should get two arguments')
        expect(() => calculateDistance(() => true)).toThrow('the function should get two arguments')
        expect(() => calculateDistance()).toThrow('the function should get two arguments')
    })
})

describe('CALCULATE_JUNCTION_POINT', () => {
    it('should return true', () => {
        const point1 = new Point({ x: 4, y: 3 });
        const point2 = new Point({ x: 3, y: 2 });
        const line1 = new Line({ point1, point2, slope: 2, n: 3 });
        expect(calculateJunctionPoint(line1, line1)).toEqual(true)
    })

    it('should return false', () => {
        const point1 = new Point({ x: 4, y: 3 });
        const point2 = new Point({ x: 3, y: 2 });
        const line1 = new Line({ point1, point2, slope: 2, n: 3 });
        const point3 = new Point({ x: 2, y: 2 });
        const point4 = new Point({ x: 2, y: 1 });
        const line2 = new Line({ point1: point3, point2: point4, slope: 2, n: 5 });
        expect(calculateJunctionPoint(line1, line2)).toEqual(false)
    })

    it('should return new point', () => {
        const point3 = new Point({ x: 2, y: 2 });
        const point4 = new Point({ x: 2, y: 1 });
        const line2 = new Line({ point1: point3, point2: point4, slope: 2, n: 5 });
        const line3 = new Line({ point1: point3, point2: point4, slope: 4, n: 3 });
        expect(calculateJunctionPoint(line2, line3)).toEqual({ x: 1, y: 7 })
    })

    it('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
        expect(() => calculateJunctionPoint(new Point(), new Point())).toThrow('the argument should be line')
        expect(() => calculateJunctionPoint(1, 2)).toThrow('the argument should be line')
        expect(() => calculateJunctionPoint(true)).toThrow('the function should get two arguments')
        expect(() => calculateJunctionPoint(['x', 'y'])).toThrow('the function should get two arguments')
        expect(() => calculateJunctionPoint(() => true)).toThrow('the function should get two arguments')
        expect(() => calculateJunctionPoint()).toThrow('the function should get two arguments')
    })
})

describe('IS_POINT_ON_LINE', () => {
    it('should return true if the slope and n equals', () => {
        const point5 = new Point({ x: 2, y: 2 });
        const point6 = new Point({ x: 1, y: 1 });
        const line4 = new Line({ point1: point5, point2: point6, slope: 1, n: 0 });
        expect(isPointOnLine(line4, point6)).toEqual(true)
    })

    it('should return false if the slope equal and n not equal', () => {
        const point4 = new Point({ x: 2, y: 1 });
        const point5 = new Point({ x: 2, y: 2 });
        const point6 = new Point({ x: 1, y: 1 });
        const line5 = new Line({ point1: point5, point2: point4, slope: 1, n: 3 });
        expect(isPointOnLine(line5, point6)).toEqual(false)
    })

    it('should return true if the slope and n not equals', () => {
        const point4 = new Point({ x: 2, y: 1 });
        const point1 = new Point({ x: 4, y: 3 });
        const point2 = new Point({ x: 3, y: 2 });
        const line1 = new Line({ point1, point2, slope: 2, n: 3 });
        expect(isPointOnLine(line1, point4)).toEqual(false)
    })

    it('should to send to function: calculateSlope if slope is undefined', () => {
        const point1 = new Point({ x: 4, y: 3 });
        const point5 = new Point({ x: 2, y: 2 });
        const point6 = new Point({ x: 1, y: 1 });
        const line6 = new Line({ point1: point5, point2: point6, n: 0 });
        expect(isPointOnLine(line6, point1)).toEqual(false)
    })

    it('should to send to function: calculateNOfLineFunction if n is undefined', () => {
        const point1 = new Point({ x: 4, y: 3 });
        const point4 = new Point({ x: 2, y: 1 });
        const point5 = new Point({ x: 2, y: 2 });
        const line7 = new Line({ point1: point5, point2: point4, slope: 1 });
        expect(isPointOnLine(line7, point1)).toEqual(false)
    })

    it('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
        expect(() => isPointOnLine(new Point(), new Point())).toThrow('the argument should be line')
        expect(() => isPointOnLine(new Line({}), new Line({}))).toThrow('the argument should be point')
        expect(() => isPointOnLine(1, 2)).toThrow('the argument should be line')
        expect(() => isPointOnLine(true)).toThrow('the function should get two arguments')
        expect(() => isPointOnLine(['x', 'y'])).toThrow('the function should get two arguments')
        expect(() => isPointOnLine(() => true)).toThrow('the function should get two arguments')
        expect(() => isPointOnLine()).toThrow('the function should get two arguments')
    })
})