const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../../modules/geometry-calculation')
const Line = require('../../modules/ecs6-class/line')
const Point = require('../../modules/ecs6-class/point')

const mockConstructorPoint = jest.fn(constructor);
const mockConstructorLine = jest.fn(constructor);

describe('CALCULATE_DISTANCE', () => {
    it('should calculate the distance between two points', () => {
        const point1 = mockConstructorPoint(new Point({ x: 1, y: 1 }));
        const point2 = mockConstructorPoint(new Point({ x: 4, y: 5 }));
        const distance = calculateDistance(point1, point2);
        expect(distance).toBe(5);
    });
    describe('check the points-object ', () => {
        it('should throw error when the points are undefined', () => {
            expect(() => calculateDistance(undefined, mockConstructorPoint(new Point(1, 1)))).toThrow('point1 is undefined')
            expect(() => calculateDistance(mockConstructorPoint(new Point(1, 1)), null)).toThrow('point2 is undefined')
            expect(() => calculateDistance(undefined, null)).toThrow('point1 and point2 are undefined')
        })
        it('should throw error when the point1 or point2 are not a Pointobject', () => {
            expect(() => calculateDistance({ x: 4, y: 2 }, '2')).toThrow('point1 and point2 are not a pointObject')
            expect(() => calculateDistance(mockConstructorPoint(new Point(1, 1)), { x: 4, y: 2 })).toThrow('point2 is not a pointObject')
            expect(() => calculateDistance("45", mockConstructorPoint(new Point(1, 1)))).toThrow('point1 is not a pointObject')
            expect(() => calculateDistance(7, mockConstructorPoint(new Point(1, 1)))).toThrow('point1 is not a pointObject')
            expect(() => calculateDistance(["45", 56], mockConstructorPoint(new Point(1, 1)))).toThrow('point1 is not a pointObject')
        })
    })
})

describe('CALCULATE_JUNCTION_POINT', () => {
    it('should return true if two lines have the same slope and n value', () => {
        const line1 = mockConstructorLine(new Line({ slope: 1, n: 2 }));
        const line2 = mockConstructorLine(new Line({ slope: 1, n: 2 }));
        expect(calculateJunctionPoint(line1, line2)).toBe(true);
    });
    it('should return false if two lines not have the same slope and n value', () => {
        const line1 = mockConstructorLine(new Line({ slope: 1, n: 2 }));
        const line2 = mockConstructorLine(new Line({ slope: 1, n: 3 }));
        expect(calculateJunctionPoint(line1, line2)).toBe(false);
    });
    it('should calculate the junction point of two lines with different slopes', () => {
        const line1 = mockConstructorLine(new Line({ slope: 1, n: 8 }));
        const line2 = mockConstructorLine(new Line({ slope: 4, n: 2 }));
        const junctionPoint = calculateJunctionPoint(line1, line2);
        expect(junctionPoint.x).toBe(2);
        expect(junctionPoint.y).toBe(10);
    });
    describe('check the lines-object ', () => {
        it('should throw error when the lines are undefined', () => {
            expect(() => calculateJunctionPoint(mockConstructorLine(new Line({ slope: 1, n: 8 })), null)).toThrow('line2 is undefined')
            expect(() => calculateJunctionPoint(undefined, mockConstructorLine(new Line({ slope: 1, n: 8 })))).toThrow('line1 is undefined')
            expect(() => calculateJunctionPoint(undefined, null)).toThrow('line1 and line2 are undefined')
        })
        it('should throw error when the line1 or line2 are not a LineObject', () => {
            expect(() => calculateJunctionPoint(mockConstructorLine(new Line({ slope: 1, n: 8 })), '2')).toThrow('line2 is not a LineObject')
            expect(() => calculateJunctionPoint(2, mockConstructorLine(new Line({ slope: 1, n: 8 })))).toThrow('line1 is not a LineObject')
            expect(() => calculateJunctionPoint(2, [3, '6'])).toThrow('line1 and line2 are not a lineObject')
            expect(() => calculateJunctionPoint(mockConstructorLine(new Line({ slope: 1, n: 8 })), mockConstructorPoint(new Point({ slope: 1, n: 8 })))).toThrow('line2 is not a LineObject')
            expect(() => calculateJunctionPoint(mockConstructorLine(new Line({ slope: 1, n: 8 })), { slope: 1, n: 8 })).toThrow('line2 is not a LineObject')
        })
    })
})

describe('IS_POINT_ON_LINE', () => {
    it('should return true if a point lies on a line', () => {
        const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 2, y: 5 })), slope: 2, n: 1 }));
        const point = mockConstructorPoint(new Point({ x: 3, y: 7 }));
        const result = isPointOnLine(line, point)
        expect(result).toBe(true);
    });
    it('should return false if a point does not lie on a line', () => {
        const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 2, y: 3 })), point2: mockConstructorPoint(new Point({ x: 7, y: 5 })) }));
        const point = mockConstructorPoint(new Point({ x: 1, y: 10 }));
        expect(isPointOnLine(line, point)).toBe(false);
    });
    it('should return false if a point does not lie on a line2', () => {
        const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 0, y: 0 })), slope: 4, n: -1 }));
        const point = mockConstructorPoint(new Point({ x: 1, y: 4 }));
        expect(isPointOnLine(line, point)).toBe(false);
    });
    describe('check the pointAndLine-objects ', () => {
        it('should throw error when the point or line are undefined', () => {
            expect(() => isPointOnLine(mockConstructorLine(new Line({ slope: 4, n: 2 })), null)).toThrow('point is undefined')
            expect(() => isPointOnLine(undefined, mockConstructorPoint(new Point({ x: 1, y: 4 })))).toThrow('line is undefined')
            expect(() => isPointOnLine(undefined, null)).toThrow('line and point are undefined')
        })
        it('should throw error when the line or point are not a LineObject or PointObject', () => {
            expect(() => isPointOnLine(mockConstructorLine(new Line({ slope: 4, n: 2 })), '2')).toThrow('point is not a pointObject')
            expect(() => isPointOnLine(2, mockConstructorPoint(new Point({ x: 1, y: 4 })))).toThrow('line is not a lineObject')
            expect(() => isPointOnLine(2, 3)).toThrow('line and point are not a lineObject and a pointObject')
        })
    })
})
