const Point = require('../../modules/ecs6-class/point');

describe('Point class', () => {
    test('should create a point with default coordinates (0, 0)', () => {
        const point = new Point();
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
    });

    test('should create a point with given coordinates', () => {
        const point = new Point({ x: 3, y: 4 });
        expect(point.x).toBe(3);
        expect(point.y).toBe(4);
    });

    test('should throw an error for invalid initial coordinates', () => {
        expect(() => new Point({ x: 'a', y: 4 })).toThrow('InvalidPointError: Coordinates must be numbers');
        expect(() => new Point({ x: 3, y: 'b' })).toThrow('InvalidPointError: Coordinates must be numbers');
        expect(() => new Point({ x: 'a', y: 'b' })).toThrow('InvalidPointError: Coordinates must be numbers');
    });

    test('should move vertically', () => {
        const point = new Point({ x: 0, y: 0 });
        point.moveVertical(5);
        expect(point.y).toBe(5);
    });

    test('should throw an error for invalid vertical move value', () => {
        const point = new Point({ x: 0, y: 0 });
        expect(() => point.moveVertical('a')).toThrow('InvalidValueError: Value must be a number');
    });

    test('should move horizontally', () => {
        const point = new Point({ x: 0, y: 0 });
        point.moveHorizontal(5);
        expect(point.x).toBe(5);
    });

    test('should throw an error for invalid horizontal move value', () => {
        const point = new Point({ x: 0, y: 0 });
        expect(() => point.moveHorizontal('a')).toThrow('InvalidValueError: Value must be a number');
    });
});
