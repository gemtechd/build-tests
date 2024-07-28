const Point = require('../../modules/ecs6-class/point');

describe('Point class', () => {
    test('should create a point with default values (0, 0)', () => {
        const point = new Point();
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
    });

    test('should create a point with given values', () => {
        const point = new Point({ x: 3, y: 4 });
        expect(point.x).toBe(3);
        expect(point.y).toBe(4);
    });

    test('should throw an error for invalid initial values', () => {
        expect(() => new Point({ x: 'a', y: 4 })).toThrow('InvalidPointError: values must be numbers');
        expect(() => new Point({ x: 3, y: 'b' })).toThrow('InvalidPointError: values must be numbers');
        expect(() => new Point({ x: 'a', y: 'b' })).toThrow('InvalidPointError: values must be numbers');
    });
 describe('moveVertical',()=>{
    test('should move vertically', () => {
        const point = new Point({ x: 0, y: 0 });
        point.moveVertical(5);
        expect(point.y).toBe(5);
    });

    test('should throw an error for invalid vertical move value', () => {
        const point = new Point({ x: 0, y: 0 });
        expect(() => point.moveVertical('a')).toThrow('InvalidValueError: Value must be a numbe');
        expect(() => point.moveVertical({})).toThrow('InvalidValueError: Value must be a number');
        expect(() => point.moveVertical()).toThrow('InvalidValueError: Value must be a number');
        expect(() => point.moveVertical([])).toThrow('InvalidValueError: Value must be a number');
    });
 })
 describe('moveHorizontal',()=>{
    test('should move horizontally', () => {
        const point = new Point({ x: 0, y: 0 });
        point.moveHorizontal(5);
        expect(point.x).toBe(5);
    });
    test('should throw an error for invalid horizontal move value', () => {
        const point = new Point({ x: 0, y: 0 });
        expect(() => point.moveHorizontal('a')).toThrow('InvalidValueError: Value must be a numbe');
        expect(() => point.moveHorizontal({})).toThrow('InvalidValueError: Value must be a number');
        expect(() => point.moveHorizontal()).toThrow('InvalidValueError: Value must be a number');
        expect(() => point.moveHorizontal([])).toThrow('InvalidValueError: Value must be a number');
    });
 });
   
});
