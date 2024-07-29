const geometry = require('../modules/geometry-calculation')
const Point = require('../modules/ecs6-class/point')
const Line = require('../modules/ecs6-class/line')

const line1 = new Line({ point1:new Point({ x: 1, y: 1 }), point2:new Point({ x: 2, y: 2 }), n: 2, slope: 2 });



describe('CALCULATE_DISTANCE', () => {
    it('should return distance ofthe points', () => {
        expect(geometry.calculateDistance(new Point({ x: 1, y: 1 }), new Point({ x: 2, y: 2 }))).toBe(1.4142135623730951)
    });
});

describe('ERRORS', () => {
    it('check errors of point1 in calculateDistance', () => {
        expect(() => geometry.calculateDistance('c', { point2: new Point({}) })).toThrow('point1 must be of the Point class')
        expect(() => geometry.calculateDistance([1, 2], new Point({}))).toThrow('point1 must be of the Point class')
        expect(() => geometry.calculateDistance({ point1: true }, { point2: new Point({}) })).toThrow('point1 must be of the Point class')
        expect(() => geometry.calculateDistance({ point1: (f) => f }, { point2: new Point({}) })).toThrow('point1 must be of the Point class')
        expect(() => geometry.calculateDistance({ point1: () => f }, { point2: new Point({}) })).toThrow('point1 must be of the Point class')
    });
    it('check errors of point2 in calculateDistance', () => {
        expect(() => geometry.calculateDistance(new Point({}), { point2: 'c' })).toThrow('point2 must be of the Point class')
        expect(() => geometry.calculateDistance(new Point({}), [1, 2])).toThrow('point2 must be of the Point class')
        expect(() => geometry.calculateDistance(new Point({}), true)).toThrow('point2 must be of the Point class')
        expect(() => geometry.calculateDistance(new Point({}), (f) => f)).toThrow('point2 must be of the Point class')
        expect(() => geometry.calculateDistance(new Point({}), () => f)).toThrow('point2 must be of the Point class')
    });
});

describe('CALCULATE_JUNCTION_POINT', () => {
    it('check if line1.slope end n equal to line 2', () => {
        const line2 = new Line({ point1:new Point({ x: 1, y: 1 }), point2:new Point({ x: 2, y: 2 }), n: 2, slope: 2 })
        const line1 = new Line({ point1:new Point({ x: 1, y: 1 }), point2:new Point({ x: 2, y: 2 }), n: 2, slope: 2 });
        expect(geometry.calculateJunctionPoint(line1, line2)).toBe(true)
    });
    it('', () => {
        const line2 = new Line({ point1:new Point({ x: 1, y: 1 }), point2:new Point({ x: 2, y: 2 }), n: 3, slope: 2 })
        const line1 = new Line({ point1:new Point({ x: 1, y: 1 }), point2:new Point({ x: 2, y: 2 }), n: 2, slope: 2 });
        expect(geometry.calculateJunctionPoint(line1, line2)).toBe(false)
    });
    it('', () => {
        const line2 = new Line({ point1:new Point({ x: 1, y: 1 }), point2:new Point({ x: 2, y: 2 }), n: 2, slope: 6 })
        const line1 = new Line({ point1:new Point({ x: 1, y: 1 }), point2:new Point({ x: 2, y: 2 }), n: 2, slope: 2 });
        expect(geometry.calculateJunctionPoint(line1, line2)).toEqual({ x: 0, y: 2 })
    });
    it('mock on calculateJunctionPoint', () => {
        const line2 = new Line({ n: 2, slope: 2 });
        const line1 = new Line({ point1:new Point({ x: 1, y: 1 }), point2:new Point({ x: 2, y: 2 }), n: 2, slope: 2 });
        jest.spyOn(line1, 'getPointByX').mockImplementation((x) => {
            const y = line1.slope * x + line1.n;
            return new Point({ x, y });
        });

        jest.spyOn(line2, 'getPointByX').mockImplementation((x) => {
            const y = line2.slope * x + line2.n;
            return new Point({ x, y });
        });
        const result = geometry.calculateJunctionPoint(line1, line2);
        expect(result).toBe(true)

    })
});

describe('ERRORS', () => {
    it('check errors of line1 in calculateJunctionPoint', () => {
        expect(() => geometry.calculateJunctionPoint({ line1: 'c' }, { line2: new Line({}) })).toThrow('line1 must be of the Line class')
        expect(() => geometry.calculateJunctionPoint({ line1: [1, 2] }, { line2: new Line({}) })).toThrow('line1 must be of the Line class')
        expect(() => geometry.calculateJunctionPoint({ line1: true }, { line2: new Line({}) })).toThrow('line1 must be of the Line class')
        expect(() => geometry.calculateJunctionPoint({ line1: (f) => f }, { line2: new Line({}) })).toThrow('line1 must be of the Line class')
        expect(() => geometry.calculateJunctionPoint({ line1: () => f }, { line2: new Line({}) })).toThrow('line1 must be of the Line class');
    });
    it('check errors of line1 in calculateJunctionPoint', () => {
        expect(() => geometry.calculateJunctionPoint(new Line({}), 'c')).toThrow('line2 must be of the Line class')
        expect(() => geometry.calculateJunctionPoint(new Line({}), [1, 2])).toThrow('line2 must be of the Line class')
        expect(() => geometry.calculateJunctionPoint(new Line({}), true)).toThrow('line2 must be of the Line class')
        expect(() => geometry.calculateJunctionPoint(new Line({}), (f) => f)).toThrow('line2 must be of the Line class')
        expect(() => geometry.calculateJunctionPoint(new Line({}), () => f)).toThrow('line2 must be of the Line class');
    });
    it('errors for calculateSlope function', () => {
        expect(() => geometry.calculateJunctionPoint(new Line({ slope: 2 }), new Line({}))).toThrow('The slope in line2 has not yet been defined');
    });
    it('errors for calculateSlope function', () => {
        expect(() => geometry.calculateJunctionPoint(new Line({}), new Line({ slope: 2 }))).toThrow('The slope in line1 has not yet been defined');
    });
    it('errors for calculateSlope function', () => {
        expect(() => geometry.calculateJunctionPoint(new Line({slope: 2, n: 2 }), new Line({slope: 2}))).toThrow('The n in line2 has not yet been defined');
    });
    it('errors for calculateSlope function', () => {
        expect(() => geometry.calculateJunctionPoint(new Line({slope: 2}), new Line({ slope: 2,n: 2 }))).toThrow('The n in line1 has not yet been defined');
    });
});

describe('IS_POINT_ON LINE', () => {
    it('should return true if line1.slope end n equal to line 2', () => {
        const point = new Point({ x: 3, y: 3 })
        const line1 = new Line({ point1:new Point({ x: 1, y: 1 }), point2:new Point({ x: 2, y: 2 }), n: 2, slope: 2 });
        const line2 = new Line({ point1: line1.point1, point })
        line2.calculateSlope()
        line2.calculateNOfLineFunction()
        expect(geometry.isPointOnLine(line2, point)).toBe(true)
    });

    it('should return false if line1.slope not equal to line2', () => {
        const point = new Point({ x: 5, y: 3 })
        const line1 = new Line({ point1:new Point({ x: 1, y: 1 }), point2:new Point({ x: 2, y: 2 }), n: 2, slope: 2 });
        const line2 = new Line({ point1: line1.point1, point })
        line2.calculateSlope()
        line2.calculateNOfLineFunction()
        expect(geometry.isPointOnLine(line2, point)).toBe(false)
    });

    it('should return false if line1.n not equal to line2', () => {
        const point = new Point({ x: 6, y: 6 })
        const line2 = new Line({ point1:new Point({ x: 1, y: 1 }), point2:new Point({ x: 2, y: 2 }), n: 5 })
        line2.calculateSlope()
        expect(geometry.isPointOnLine(line2, point)).toBe(false)
    });
    it('mock on isPointOnLine', () => {

    });
});

describe('ERRORS', () => {
    it('check errors of point in isPointOnLine', () => {
        expect(() => geometry.isPointOnLine(new Line({}), 'c')).toThrow('the function should get arg of "Point"');
        expect(() => geometry.isPointOnLine(new Line({}), [1, 2])).toThrow('the function should get arg of "Point"');
        expect(() => geometry.isPointOnLine(new Line({}), (f) => f)).toThrow('the function should get arg of "Point"');
        expect(() => geometry.isPointOnLine(new Line({}), true)).toThrow('the function should get arg of "Point"');
        expect(() => geometry.isPointOnLine(new Line({}), () => f)).toThrow('the function should get arg of "Point"');
    });
    it('check errors of line in isPointOnLine', () => {
        expect(() => geometry.isPointOnLine({ point: new Point({ x: 1, y: 1 }) }, { line: 'c' })).toThrow('the function should get arg of "Line"')
        expect(() => geometry.isPointOnLine({ point: new Point({ x: 1, y: 1 }) }, { line: [1, 2] })).toThrow('the function should get arg of "Line"')
        expect(() => geometry.isPointOnLine({ point: new Point({ x: 1, y: 1 }) }, { line: true })).toThrow('the function should get arg of "Line"')
        expect(() => geometry.isPointOnLine({ point: new Point({ x: 1, y: 1 }) }, { line: (f) => f })).toThrow('the function should get arg of "Line"')
        expect(() => geometry.isPointOnLine({ point: new Point({ x: 1, y: 1 }) }, { line: () => f })).toThrow('the function should get arg of "Line"');
    });
    it('errors for calculateSlope function', () => {
        expect(() => geometry.isPointOnLine(new Line({}),new Point({ x: 1, y: 1 }))).toThrow('The slope in line has not yet been defined');
    });
});

