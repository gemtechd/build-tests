const { Line } = require('../../modules/ecs6-class/line');
const { Point } = require('../../modules/ecs6-class/point');
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../../modules/geometry-calculation');

describe('calculateDistance', () => {
    it('should be good when point1 and point2 are object', () => {
        expect(calculateDistance(new Point({ x: 4, y: 3 }), new Point({ x: 8, y: 6 }))).toBe(5);
    });
    it('should throw error when point1 or point 2 is not an object or ', () => {
        expect(() => calculateDistance('vvv', 'ffff')).toThrow('point1 and point2 must be objects')
        expect(() => calculateDistance(new Point({ x: 4, y: 2 }), 'ffff')).toThrow('point2 must be objects')
        expect(() => calculateDistance('ffff', new Point({ x: 4, y: 2 }))).toThrow('point1 must be objects')
    });
});

describe('calculateJunctionPoint', () => {
    it('should throw error when point1 is not an object or ', () => {
        const Line8 = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 1, y: 10 }), n: 5, slope: 4 })
        expect(() => calculateJunctionPoint('vvv', 'ffff')).toThrow('line1 and line2 must be Line')
        expect(() => calculateJunctionPoint(Line8, 'ffff')).toThrow('line2 must be Line')
        expect(() => calculateJunctionPoint('ffff', Line8)).toThrow('line1 must be Line')
    });
    it('should get boolean result when slope1=slope2 ', () => {
        const Line8 = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 1, y: 10 }), n: 4, slope: 4 })
        const Line9 = new Line({ point1: new Point({ x: 2, y: 3 }), point2: new Point({ x: 4, y: 5 }), n: 5, slope: 4 })
        const Line10 = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 1, y: 10 }), n: 4, slope: 4 })
        expect(calculateJunctionPoint(Line8, Line9)).toBe(false)
        expect(calculateJunctionPoint(Line8, Line10)).toBe(true)
    });
    it('should return result when slope1!=slope2 ', () => {
        const Line8 = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 1, y: 10 }), n: 9, slope: 8 })
        const Line9 = new Line({ point1: new Point({ x: 2, y: 3 }), point2: new Point({ x: 4, y: 5 }), n: 5, slope: 10 })
        expect(calculateJunctionPoint(Line8, Line9)).toStrictEqual(new Point({ x: 2, y: 25 }))
    });
})


describe('isPointOnLine', () => {
    it('should thrwo error when point1 or point2 is not an object  ', () => {
        const Line8 = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 1, y: 10 }), n: 5, slope: 4 })
        const point = new Point({ x: 3, y: 4 });
        expect(() => isPointOnLine(Line8, 'ffff')).toThrow('point must be Point')
        expect(() => isPointOnLine('Line8', point)).toThrow('line must be Line')
        expect(() => isPointOnLine('ffff', 'Line8')).toThrow('line must be Line and point must be Point ')
    });
    it('should return boolean result when line.slope === proxyLine.slope ', () => {
        const Line7 = new Line({ point1: new Point({ x: 1, y: 2 }), n: 4, slope: -2 })//false
        const Line8 = new Line({ point1: new Point({ x: 1, y: 2 }), n: 4, slope: -1 })//false
        const Line9 = new Line({ point1: new Point({ x: 4, y: 6 }), n: 14, slope: -2 })//true
        const Line10 = new Line({ point1: new Point({ x: 4, y: 6 }), n: 13, slope: -2 })//true
        const point = new Point({ x: 3, y: 4 });
        const point2 = new Point({ x: 5, y: 4 });
        expect(isPointOnLine(Line7, point)).toBe(false)
        expect(isPointOnLine(Line8, point)).toBe(false)
        expect(isPointOnLine(Line10, point2)).toBe(false)
        expect(isPointOnLine(Line9, point2)).toBe(true)
    });
});