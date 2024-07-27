const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../../modules/geometry-calculation')


const Point = jest.requireActual('../../modules/ecs6-class/point');
const Line = jest.requireActual('../../modules/ecs6-class/line')

// jest.mock('../../modules/ecs6-class/line', () => {
//     return jest.fn().mockImplementation(({ point1, point2, n, slope }) => {
//         return {
//             getPointByX: jest.fn().mockImplementation((x) => {
//                 console.log('getPointByX-mock');
//                 return (x, (1 * x + 5))
//             }),
//             calculateSlope: jest.fn().mockImplementation(() => {
//                 console.log('calculateSlope-mock');
//                 return (slope, (point1.y - point2.y) / (point1.x - point2.x))
//             }),
//             calculateNOfLineFunction: jest.fn().mockImplementation(() => {
//                 console.log('calculateNOfLineFunction-mock');
//                 return (n, point1.y - slope * point1.x)
//             })
//         }
//     });
// });


describe('CALCULATE_DISTANCE', () => {
    it('should calculate the distance between two points', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 4, y: 5 });
        const distance = calculateDistance(point1, point2);
        expect(distance).toBe(5);
    });
    describe('check the points-object ', () => {
        it('should throw error when the points are undefined', () => {
            expect(() => calculateDistance(undefined,new Point(1, 1))).toThrow('point1 is undefined')
            expect(() => calculateDistance(new Point(1, 1), undefined)).toThrow('point2 is undefined')
            expect(() => calculateDistance(undefined, null)).toThrow('point1 and point2 are undefined')
        })
        it('should throw error when the point1 or point2 are not a Pointobject', () => {
            expect(() => calculateDistance({ x: 4, y: 2 }, '2')).toThrow('point1 and point2 are not a pointObject')
            expect(() => calculateDistance(new Point(1, 1), { x: 4, y: 2 })).toThrow('point2 is not a pointObject')
            expect(() => calculateDistance("45", new Point(1, 1))).toThrow('point1 is not a pointObject')
            expect(() => calculateDistance(7, new Point(1, 1))).toThrow('point1 is not a pointObject')
            expect(() => calculateDistance(["45", 56], new Point(1, 1))).toThrow('point1 is not a pointObject')
        })
    })
})

describe('CALCULATE_JUNCTION_POINT', () => {
    it('should return true if two lines have the same slope and n value', () => {
        const line1 = new Line({ slope: 1, n: 2 });
        const line2 = new Line({ slope: 1, n: 2 });
        expect(calculateJunctionPoint(line1, line2)).toBe(true);
    });
    it('should return false if two lines not have the same slope and n value', () => {
        const line1 = new Line({ slope: 1, n: 2 });
        const line2 = new Line({ slope: 1, n: 3 });
        expect(calculateJunctionPoint(line1, line2)).toBe(false);
    });
    it('should calculate the junction point of two lines with different slopes', () => {
        const line1 = new Line({ slope: 1, n: 8 });
        const line2 = new Line({ slope: 4, n: 2 });
        const junctionPoint = calculateJunctionPoint(line1, line2);
        expect(junctionPoint.x).toBe(2);
        expect(junctionPoint.y).toBe(10);
    });
    describe('check the lines-object ', () => {
        it('should throw error when the lines are undefined', () => {
            expect(() => calculateJunctionPoint(new Line({ slope: 1, n: 8 }), null)).toThrow('line2 is undefined')
            expect(() => calculateJunctionPoint(undefined, new Line({ slope: 1, n: 8 }))).toThrow('line1 is undefined')
            expect(() => calculateJunctionPoint(undefined, null)).toThrow('line1 and line2 are undefined')
        })
        it('should throw error when the line1 or line2 are not a LineObject', () => {
            expect(() => calculateJunctionPoint(new Line({ slope: 1, n: 8 }), '2')).toThrow('line2 is not a LineObject')
            expect(() => calculateJunctionPoint(2, new Line({ slope: 1, n: 8 }))).toThrow('line1 is not a LineObject')
            expect(() => calculateJunctionPoint(2, [3, '6'])).toThrow('line1 and line2 are not a lineObject')
            expect(() => calculateJunctionPoint(new Line({ slope: 1, n: 8 }), new Point({ slope: 1, n: 8 }))).toThrow('line2 is not a LineObject')
            expect(() => calculateJunctionPoint(new Line({ slope: 1, n: 8 }), { slope: 1, n: 8 })).toThrow('line2 is not a LineObject')
        })
    })
})

describe('IS_POINT_ON_LINE', () => {
    it('should return true if a point lies on a line', () => {
        const line = new Line({ point1: new Point({ x: 2, y: 5 }), slope: 2, n: 1 });
        const point = new Point({ x: 3, y: 7 });
        const result = isPointOnLine(line, point)
        expect(result).toBe(true);
    });
    it('should return false if a point does not lie on a line', () => {
        const line = new Line({ point1: new Point({ x: 2, y: 3 }), point2: new Point({ x: 7, y: 5 }) });
        const point = new Point({ x: 1, y: 10 });
        expect(isPointOnLine(line, point)).toBe(false);
    });
    it('should return false if a point does not lie on a line2', () => {
        const line = new Line({ point1: new Point({ x: 0, y: 0 }), slope: 4, n: -1 });
        const point = new Point({ x: 1, y: 4 });
        expect(isPointOnLine(line, point)).toBe(false);
    });
    describe('check the pointAndLine-objects ', () => {
        it('should throw error when the point or line are undefined', () => {
            expect(() => isPointOnLine(new Line({ slope: 4, n: 2 }), undefined)).toThrow('point is undefined')
            expect(() => isPointOnLine(undefined, new Point({ x: 1, y: 4 }))).toThrow('line is undefined')
            expect(() => isPointOnLine(undefined, null)).toThrow('line and point are undefined')
        })
        it('should throw error when the line or point are not a LineObject or PointObject', () => {
            expect(() => isPointOnLine(new Line({  slope: 4, n: -1 }),'2')).toThrow('point is not a pointObject')
            expect(() => isPointOnLine(2, new Point({ x: 1, y: 4 }))).toThrow('line is not a lineObject')
            expect(() => isPointOnLine(2, 3)).toThrow('line and point are not a lineObject and a pointObject')
        })
    })
})
