const geometry = require('../modules/geometry-calculation')
const Point = require('../modules/ecs6-class/point')
const Line = require('../modules/ecs6-class/line')

const point1 = new Point({ x: 1, y: 1 })
const point2 = new Point({ x: 2, y: 2 })
const line1 = new Line({ point1, point2, n: 2, slope: 2 })



describe('CALCULATE_DISTANCE', () => {
    test('', () => {
        expect(geometry.calculateDistance(point1, point2)).toBe(1.4142135623730951)
    });
});

describe('ERRORS', () => {
    test('check errors of calculateDistance', () => {
        expect(() => geometry.calculateDistance({ point1: 'c' },{ point1: [1, 2] })).toThrow('the function should get two arguments of "Point"')
        expect(() => geometry.calculateDistance({ point1: [1, 2] },{ point1: true })).toThrow('the function should get two arguments of "Point"')
        expect(() => geometry.calculateDistance({ point1: true },{ point1: (f) => f })).toThrow('the function should get two arguments of "Point"')
        expect(() => geometry.calculateDistance({ point1: (f) => f },{ point1: () => f })).toThrow('the function should get two arguments of "Point"')
        expect(() => geometry.calculateDistance({ point1: () => f },{ point1: 'c' })).toThrow('the function should get two arguments of "Point"')
        expect(() => geometry.calculateDistance({ point1: 'c' })).toThrow('the function should get two arguments of "Point"')
        expect(() => geometry.calculateDistance({ point1: [1, 2] })).toThrow('the function should get two arguments of "Point"')
        expect(() => geometry.calculateDistance({ point1: true })).toThrow('the function should get two arguments of "Point"')
        expect(() => geometry.calculateDistance({ point1: (f) => f })).toThrow('the function should get two arguments of "Point"')
        expect(() => geometry.calculateDistance({ point1: () => f })).toThrow('the function should get two arguments of "Point"')
    });
});

describe('CALCULATE_JUNCTION_POINT', () => {
    test('check if line1.slope end n equal to line 2', () => {
        const line2 = new Line({ point1, point2, n: 2, slope: 2 })
        expect(geometry.calculateJunctionPoint(line1, line2)).toBe(true)
    });
    test('', () => {
        const line2 = new Line({ point1, point2, n: 3, slope: 2 })
        expect(geometry.calculateJunctionPoint(line1, line2)).toBe(false)
    });
    test('', () => {
        const line2 = new Line({ point1, point2, n: 2, slope: 6 })
        const x = (line1.n - line2.n) / (line2.slope - line1.slope)
        const junctionPoint = line1.getPointByX(x);
        expect(geometry.calculateJunctionPoint(line1, line2)).toEqual({ x: 0, y: 2 })
    });
});

describe('ERRORS', () => {
    test('check errors of calculateJunctionPoint', () => {
        expect(() => geometry.calculateJunctionPoint({ line1: 'c' }, { line2: [1, 2] })).toThrow('the function should get two arguments of "Line"')
        expect(() => geometry.calculateJunctionPoint({ line1: [1, 2] }, { line2: true })).toThrow('the function should get two arguments of "Line"')
        expect(() => geometry.calculateJunctionPoint({ line1: true }, { line2: (l) => l })).toThrow('the function should get two arguments of "Line"')
        expect(() => geometry.calculateJunctionPoint({ line1: (f) => f }, { line2: () => l })).toThrow('the function should get two arguments of "Line"')
        expect(() => geometry.calculateJunctionPoint({ line1: () => f }, { line2: 'jh' })).toThrow('the function should get two arguments of "Line"')
        expect(() => geometry.calculateJunctionPoint({ line1: () => f })).toThrow('the function should get two arguments of "Line"')
        expect(() => geometry.calculateJunctionPoint({ line1: 'c' })).toThrow('the function should get two arguments of "Line"')
        expect(() => geometry.calculateJunctionPoint({ line1: [1, 2] })).toThrow('the function should get two arguments of "Line"')
        expect(() => geometry.calculateJunctionPoint({ line1: true })).toThrow('the function should get two arguments of "Line"')
        expect(() => geometry.calculateJunctionPoint({ line1: (f) => f })).toThrow('the function should get two arguments of "Line"')

    });
});

describe('IS_POINT_ON LINE', () => {
    test('should return true if line1.slope end n equal to line 2', () => {
        const point = new Point({ x: 3, y: 3 })
        const line2 = new Line({ point1: line1.point1, point })
        line2.calculateSlope()
        line2.calculateNOfLineFunction()
        expect(geometry.isPointOnLine(line2, point)).toBe(true)
    });

    test('should return false if line1.slope not equal to line2', () => {
        const point = new Point({ x: 5, y: 3 })
        const line2 = new Line({ point1: line1.point1, point })
        line2.calculateSlope()
        line2.calculateNOfLineFunction()
        expect(geometry.isPointOnLine(line2, point)).toBe(false)
    });

    test('should return false if line1.n not equal to line2', () => {
        const point = new Point({ x: 6, y: 6 })
        const line2 = new Line({ point1, point2, n: 5 })
        line2.calculateSlope()
        expect(geometry.isPointOnLine(line2, point)).toBe(false)
    });
});

describe('ERRORS', () => {
    test('check errors of isPointOnLine', () => {
        expect(() => geometry.isPointOnLine({ point: 'c' }, { line: [1, 2] })).toThrow('the function should get arg of "Point" and arg of "Line"')
        expect(() => geometry.isPointOnLine({ point: [1, 2] }, { line: (f) => f })).toThrow('the function should get arg of "Point" and arg of "Line"')
        expect(() => geometry.isPointOnLine({ point: (f) => f }, { line: true })).toThrow('the function should get arg of "Point" and arg of "Line"')
        expect(() => geometry.isPointOnLine({ point: true }, { line: () => f })).toThrow('the function should get arg of "Point" and arg of "Line"')
        expect(() => geometry.isPointOnLine({ point: () => f }, { line: 'c' })).toThrow('the function should get arg of "Point" and arg of "Line"')
        expect(() => geometry.isPointOnLine({ line: 'c' })).toThrow('the function should get arg of "Point" and arg of "Line"')
        expect(() => geometry.isPointOnLine({ line: [1, 2] })).toThrow('the function should get arg of "Point" and arg of "Line"')
        expect(() => geometry.isPointOnLine({ line: true })).toThrow('the function should get arg of "Point" and arg of "Line"')
        expect(() => geometry.isPointOnLine({ line: (f) => f })).toThrow('the function should get arg of "Point" and arg of "Line"')
        expect(() => geometry.isPointOnLine({ line: () => f })).toThrow('the function should get arg of "Point" and arg of "Line"')
    });
});

