const Line = require('../../modules/ecs6-class/line');
const Point = require('../../modules/ecs6-class/point');
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../../modules/geometry-calculation')

describe('geometry-calculation', () => {
    const mockConstructorLine = jest.fn(constructor)
    const mockConstructorPoint = jest.fn(constructor)
    
    describe('calculateDistance', () => {
        it('should calculate distance between two points correctly', () => {
            const point1 = mockConstructorPoint(new Point({ x: 2, y: 3 }));
            const point2 = mockConstructorPoint(new Point({ x: 5, y: 7 }));
            const distance = calculateDistance(point1, point2);
            expect(distance).toBe(5);
        });

        it('should return 0 for the same point', () => {
            const point1 = mockConstructorPoint(new Point({ x: 2, y: 3 }));
            const point2 = mockConstructorPoint(new Point({ x: 2, y: 3 }));
            const distance = calculateDistance(point1, point2);
            expect(distance).toBe(0);
        });

        it('should throw error when values is not an object', () => {
            expect(() => calculateDistance(5, 8)).toThrow('this point is not a Point')
            expect(() => calculateDistance([1, 2], { x: 1, y: 3 })).toThrow('this point is not a Point')
            expect(() => calculateDistance(1, { x: 1, y: 3 })).toThrow('this point is not a Point')
            expect(() => calculateDistance({ x: 1, y: 3 }, 5)).toThrow('this point is not a Point')
            expect(() => calculateDistance([1, 2], [4, 5])).toThrow('this point is not a Point')
            expect(() => calculateDistance({ x: 1, y: 3 }, [1, 8])).toThrow('this point is not a Point')
            expect(() => calculateDistance([1, 2], 5)).toThrow('this point is not a Point')
            expect(() => calculateDistance(5, [1, 8])).toThrow('this point is not a Point')
        });
    });

    describe('calculateJunctionPoint', () => {
        it('should return true when lines are the same', () => {
            const line1 = mockConstructorLine(new Line({ slope: 2, n: 5 }));
            const line2 = mockConstructorLine(new Line({ slope: 2, n: 5 }));
            const result = calculateJunctionPoint(line1, line2);
            expect(result).toBe(true);
        });

        it('should return false when lines have different slope and n values', () => {
            const line1 = mockConstructorLine(new Line({ slope: 2, n: 5 }));
            const line2 = mockConstructorLine(new Line({ slope: 2, n: 7 }));
            const result = calculateJunctionPoint(line1, line2);
            expect(result).toBe(false);
        });

        it('should calculate junction point correctly for intersecting lines', () => {
            const line1 = mockConstructorLine(new Line({ slope: 2, n: 5 }));
            const line2 = mockConstructorLine(new Line({ slope: 3, n: 7 }));
            const result = calculateJunctionPoint(line1, line2);
            expect(result.x).toBeCloseTo(-2);
            expect(result.y).toBe(1);
        });
        it('should throw error when value is not an object', () => {
            expect(() => calculateJunctionPoint("abc", "lkj")).toThrow('this line is not a Line')
            expect(() => calculateJunctionPoint([1, 2], [4, 5])).toThrow('this line is not a Line')
            expect(() => calculateJunctionPoint(1, 5)).toThrow('this line is not a Line')
            expect(() => calculateJunctionPoint("abc", 5)).toThrow('this line is not a Line')
            expect(() => calculateJunctionPoint(5, [4, 5])).toThrow('this line is not a Line')
            expect(() => calculateJunctionPoint(1, { point1: ({ x: 1, y: 0 }), point2: ({ x: 1, y: 0 }), slope: 0, n: 0 })).toThrow('this line is not a Line')
            expect(() => calculateJunctionPoint({ point1: ({ x: 1, y: 0 }), point2: ({ x: 1, y: 0 }), slope: 0, n: 0 }, "abc")).toThrow('this line is not a Line')
        })
    });

    describe('isPointOnLine', () => {
        it('should return true for a point lying on the line', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 2, y: 3 })), point2: mockConstructorPoint(new Point({ x: 4, y: 7 })) }));
            line.calculateSlope();
            line.calculateNOfLineFunction();
            const point = mockConstructorPoint(new Point({ x: 4, y: 7 }));
            const isOnLine = isPointOnLine(line, point);
            expect(isOnLine).toBe(true);
        });

        it('should return false for a point not lying on the line', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 2, y: 3 })), point2: mockConstructorPoint(new Point({ x: 7, y: 5 })) }));
            line.calculateSlope();
            line.calculateNOfLineFunction();
            const point = mockConstructorPoint(new Point({ x: 1, y: 10 }));
            const isOnLine = isPointOnLine(line, point);
            expect(isOnLine).toBe(false);
        });

        it('should throw error when value is not an object', () => {
            expect(() => isPointOnLine("abc", "mkj")).toThrow("this object is not an Line or Point")
            expect(() => isPointOnLine([1, 2])).toThrow("this object is not an Line or Point")
            expect(() => isPointOnLine(1, 5)).toThrow("this object is not an Line or Point")
        })

    })
});









