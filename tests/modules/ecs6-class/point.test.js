const Point = require('../../../modules/ecs6-class/point')

describe('POINT', () => {
    describe('CONSTRUCTOR', () => {
        it('Check if a point is created with default values', () => {
            const point = new Point();
            expect(point.x).toBe(0);
            expect(point.y).toBe(0);
        });
        it('should return x=5 and y=6', () => {
            const point = new Point({ x: 5, y: 6 })
            expect(point.x).toBe(5)
            expect(point.y).toBe(6)
        })
        it('should return error.message if the values is not number type', () => {
            const invalidX = 'hello';
            const invalidY = true;
            expect(() => new Point({ x: invalidX, y: invalidY })).toThrowError('x and y must be of the number type');
        })
        it('should return error.message if the values is not number type', () => {
            const invalidX = 'hello';
            const invalidY = 5;
            expect(() => new Point({ x: invalidX, y: invalidY })).toThrowError('x and y must be of the number type');
        })
        it('should return error.message if the values is not number type', () => {
            const invalidX = 5;
            const invalidY = 'hello';
            expect(() => new Point({ x: invalidX, y: invalidY })).toThrowError('x and y must be of the number type');
        })
    }),
        describe('MOVE_VETRCAL', () => {
            it('should return error.meaasge if the value is not number type', () => {
                const point = new Point({ x: 1, y: 2 });
                const value = "3";
                expect(() => point.moveVertical(value)).toThrowError('value must be of the number type');
            })
            it('Move Point Vertically', () => {
                const point = new Point({ x: 1, y: 2 });
                point.moveVertical(3);
                expect(point.y).toBe(5);
            });
        }),
        describe('HORIZONTA', () => {
            it('should return error.meaasge if the value is not number', () => {
                const point = new Point({ x: 1, y: 2 });
                const value = "3";
                expect(() => point.moveHorizontal(value)).toThrowError('value must be of the number type');
            })
            it('Move Point Horizontally', () => {
                const point = new Point({ x: 2, y: 3 });
                point.moveHorizontal(-1);
                expect(point.x).toBe(1);
            });

        })
})
