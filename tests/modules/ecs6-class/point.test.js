const Point = require('../../../modules/ecs6-class/point');

describe('Point', () => {
    const mockConstructor = jest.fn(constructor);
    describe('Point Constructor Tests', () => {
        it('should create a point with default values when no parameters are provided', () => {
            const point = new Point();
            expect(point.x).toBe(0);
            expect(point.y).toBe(0);
        });

        it('should create a point with the specified x and y values', () => {
            const point = new Point({ x: 3, y: 5 });
            expect(point.x).toBe(3);
            expect(point.y).toBe(5);
        });

        it('should throw an error when non-numeric values are provided', () => {
            expect(() => new Point({ x: 'test', y: 5 })).toThrow('this value is not a number');
            expect(() => new Point({ x: 'test', y: 'test' })).toThrow('this value is not a number');
            expect(() => new Point({ x: 'test', y: 5 }, { x: 5, y: 8 })).toThrow('this value is not a number');
            expect(() => new Point({ x: 5, y: 'test' })).toThrow('this value is not a number');
        });
    });
    describe('moveVertical', () => {
        it('should move vertically correctly', () => {
            const point = mockConstructor(new Point({ x: 5, y: 5 }))
            point.moveVertical(5);
            expect(point.y).toBe(10);
            point.moveVertical(-3);
            expect(point.y).toBe(7);
        });

        it('should throw error when value is not number', () => {
            const point = mockConstructor(new Point({}));
            expect(() => point.moveVertical("abc")).toThrow('this value is not a number')
            expect(() => point.moveVertical([1, 2])).toThrow('this value is not a number')
            expect(() => point.moveVertical({ a: 1, b: 2 })).toThrow('this value is not a number')
        })
    })
    describe('moveHorizontal', () => {
        it('should move horizontally correctly', () => {
            const point = mockConstructor(new Point({ x: 5, y: 5 }))
            point.moveHorizontal(10);
            expect(point.x).toBe(15);
            point.moveHorizontal(-7);
            expect(point.x).toBe(8);
        });
        it('should throw error when value is not number', () => {
            const point = mockConstructor(new Point({}));
            expect(() => point.moveHorizontal("abc")).toThrow('this value is not a number')
            expect(() => point.moveHorizontal([1, 2])).toThrow('this value is not a number')
            expect(() => point.moveHorizontal({ a: 1, b: 2 })).toThrow('this value is not a number')
        })
    })
});


