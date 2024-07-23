const Line = require('../modules/ecs6-class/line');
const Point = require('../modules/ecs6-class/point');
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../modules/geometry-calculation');
const point1 = new Point({ x: 4, y: 3 });
const point2 = new Point({ x: 3, y: 2 });
const line1 = new Line({ point1, point2, slope: 2, n: 3 });

const point3 = new Point({ x: 2, y: 2 });
const point4 = new Point({ x: 2, y: 1 });
const line2 = new Line({ point1: point3, point2: point4, slope: 2, n: 5 });
const line3 = new Line({ point1: point3, point2: point4, slope: 4, n: 3 });

const point5 = new Point({ x: 2, y: 2 });
const point6 = new Point({ x: 1, y: 1 });
const line4 = new Line({ point1: point5, point2: point6, slope: 1, n: 0 });
const line5 = new Line({ point1: point5, point2: point4, slope: 1, n: 3 });

describe('CALCULATE_DISTANCE', () => {
    test('should calculate distance', () => {
        expect(calculateDistance(point1, point2)).toEqual(1)
    })

    test('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
        expect(() => calculateDistance(new Line({}), new Line({}))).toThrow('the argument should be point')
        expect(() => calculateDistance(1, 2)).toThrow('the argument should be point')
        expect(() => calculateDistance(true)).toThrow('the function should get two arguments')
        expect(() => calculateDistance(['x', 'y'])).toThrow('the function should get two arguments')
        expect(() => calculateDistance(() => true)).toThrow('the function should get two arguments')
        expect(() => calculateDistance()).toThrow('the function should get two arguments')
    })
})

describe('CALCULATE_JUNCTION_POINT', () => {
    test('should return true', () => {
        expect(calculateJunctionPoint(line1, line1)).toEqual(true)
    })

    test('should return false', () => {
        expect(calculateJunctionPoint(line1, line2)).toEqual(false)
    })

    test('should return new point', () => {
        expect(calculateJunctionPoint(line2, line3)).toEqual({ x: 1, y: 7 })
    })

    test('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
        expect(() => calculateJunctionPoint(new Point(), new Point())).toThrow('the argument should be line')
        expect(() => calculateJunctionPoint(1, 2)).toThrow('the argument should be line')
        expect(() => calculateJunctionPoint(true)).toThrow('the function should get two arguments')
        expect(() => calculateJunctionPoint(['x', 'y'])).toThrow('the function should get two arguments')
        expect(() => calculateJunctionPoint(() => true)).toThrow('the function should get two arguments')
        expect(() => calculateJunctionPoint()).toThrow('the function should get two arguments')
    })
})

describe('IS_POINT_ON_LINE', () => {
    test('should return true if the slope and n equals', () => {
        expect(isPointOnLine(line4, point6)).toEqual(true)
    })

    test('should return false if the slope equal and n not equal', () => {
        expect(isPointOnLine(line5, point6)).toEqual(false)
    })

    test('should return true if the slope and n not equals', () => {
        expect(isPointOnLine(line1, point1)).toEqual(false)
    })

    test('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
        expect(() => isPointOnLine(new Point(), new Point())).toThrow('the argument should be line')
        expect(() => isPointOnLine(new Line({}), new Line({}))).toThrow('the argument should be point')
        expect(() => isPointOnLine(1, 2)).toThrow('the argument should be line')
        expect(() => isPointOnLine(true)).toThrow('the function should get two arguments')
        expect(() => isPointOnLine(['x', 'y'])).toThrow('the function should get two arguments')
        expect(() => isPointOnLine(() => true)).toThrow('the function should get two arguments')
        expect(() => isPointOnLine()).toThrow('the function should get two arguments')
    })
})