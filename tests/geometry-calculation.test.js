const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../modules/geometry-calculation');
const Line = require('../modules/ecs6-class/line');
const Point = require('../modules/ecs6-class/point');

describe('calculateDistance', () => {
    test('should calculate the correct distance between two points', () => {
        const point1 = { x: 0, y: 0 };
        const point2 = { x: 3, y: 4 };
        const distance = calculateDistance(point1, point2);
        expect(distance).toBe(5);
    });
     test('should throw an error for invalid input points', () => {
        expect(() => calculateDistance(null, { x: 3, y: 4 })).toThrow('Invalid input points');
        expect(() => calculateDistance({ x: 0, y: 0 }, null)).toThrow('Invalid input points');
        expect(() => calculateDistance({ x: 'a', y: 0 }, { x: 3, y: 4 })).toThrow('Invalid input points');
    });
});

describe('calculateJunctionPoint', () => {
    test('should return true if lines are the same', () => {
        const line1 = new Line({ slope: 1, n: 0 });
        const line2 = new Line({ slope: 1, n: 0 });
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toBe(true);
    });

    test('should return false if lines are parallel but not the same', () => {
        const line1 = new Line({ slope: 1, n: 0 });
        const line2 = new Line({ slope: 1, n: 1 });
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toBe(false);
    });

    test('should return the junction point if lines intersect', () => {
        const line1 = new Line({ slope: 1, n: 0 });
        const line2 = new Line({ slope: -1, n: 4 });
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toEqual({ x: 2, y: 2 });
    });
    test('should throw an error for invalid input lines', () => {
        expect(() => calculateJunctionPoint(null, new Line({ slope: 1, n: 0 }))).toThrow('Invalid input lines');
        expect(() => calculateJunctionPoint(new Line({ slope: 1, n: 0 }), null)).toThrow('Invalid input lines');
        expect(() => calculateJunctionPoint({}, new Line({ slope: 1, n: 0 }))).toThrow('Invalid input lines');
    });

});

describe('isPointOnLine', () => {
    test('should return true if the point is on the line', () => {
        const point1 = new Point({ x: 0, y: 0 });
        const point2 = new Point({ x: 4, y: 4 });
        const line = new Line({ point1: point1, point2: point2} );
        const point = new Point({ x: 2, y: 2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const result = isPointOnLine(line, point);
        expect(result).toBe(true);
    });
  
    
    test('should return false if the point is not on the line', () => {
        const point1 = new Point({ x: 0, y: 0 });
        const point2 = new Point({ x: 4, y: 4 });
        const line = new Line({ point1: point1, point2: point2 });
        const point = new Point({ x: 2, y: 3 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const result = isPointOnLine(line, point);
        expect(result).toBe(false);
    });
   
    test('should throw an error for invalid input line or point', () => {
        const point1 = new Point({ x: 0, y: 0 });
        const point2 = new Point({ x: 4, y: 4 });
        const point = new Point({ x: 2, y: 3 });
        const line = new Line({ point1:point1, point2: point2 });
        expect(() => isPointOnLine(null, point)).toThrow('Invalid input line or point');
        expect(() => isPointOnLine(line, null)).toThrow('Invalid input line or point');
        expect(() => isPointOnLine(line,{ x: 'a', y: 2 })).toThrow('Invalid input line or point');
        expect(() => isPointOnLine(line,new Point({ x: 'a', y: 2 }))).toThrow('InvalidPointError: Coordinates must be numbers');
    });
     
    
});
