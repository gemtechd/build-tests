const Point = require('../../../modules/ecs6-class/point')
describe('CONSTRUCTORE', () => {
    it('should initialize x and y to 0 by default', () => {
        const point = new Point();
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
    })
    it('should create a Point object with the provided values', () => {
        const point = new Point({ x: 3, y: 8 });
        expect(point.x).toBe(3);
        expect(point.y).toBe(8);
    });  
    it('should throw an error when non-number values are provided', () => {
        expect(() => new Point({ x: '5', y: 8 })).toThrowError('the type of the numbers is not correctly')
    }); 
    it('should throw an error when non-number values are provided', () => {
        expect(() => new Point({ x: 5, y: '8' })).toThrowError('the type of the numbers is not correctly')
    });
})
describe('MOVE_POINT_VERTICALLY', () => {
    it('Checking that the vertical point movement is correct', () => {
        const point = new Point({ x: 1, y: 2 });
        point.moveVertical(3);
        expect(point.y).toBe(5);
    });
    it('should throw an error if the value is not a number', () => {
        const point = new Point();
        expect(() => point.moveVertical('5')).toThrowError('the type of the value is not correctly')
    });
})
describe('MOVE_POINT_HORIZONTALLY', () => {
    it('Checking that moving the horizontal point is correct', () => {
        const point = new Point({ x: 2, y: 3 });
        point.moveHorizontal(-1);
        expect(point.x).toBe(1);
    });
    it('should throw an error if the value is not a number', () => {
        const point = new Point();
        expect(() => point.moveHorizontal('5')).toThrowError('the type of the value is not correctly')
    });

})
