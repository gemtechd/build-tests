const Point = require('../../modules/ecs6-class/point');
const point1 = new Point();

describe('CONSTRUCTOR', () => {
    it('should build point when get two arguments', () => {
        expect(new Point({ x: 2, y: 2 })).toEqual({ x: 2, y: 2 })
    })

    it('should build point when get no arguments', () => {
        expect(new Point()).toEqual({ x: 0, y: 0 })
    })

    describe('ERRORS', () => {
        it('should throw string error when argumonts no type of point', () => {
            expect(() => new Point({ x: 'x' })).toThrow('argument is not a number')
            expect(() => new Point({ y: false })).toThrow('argument is not a number')
            expect(() => new Point({ x: ['x', 'y'] })).toThrow('argument is not a number')
            expect(() => new Point({ x: () => true })).toThrow('argument is not a number')
            expect(() => new Point({ y: () => 'y' })).toThrow('argument is not a number')
        })
    })
})

describe('MOVE_VERTICAL', () => {
    it('should to add the value to y', () => {
        const point = new Point({ x: 2, y: 2 });
        point.moveVertical(2);
        expect(point).toEqual({ x: 2, y: 4 });
    })

    describe('ERRORS', () => {
        it('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
            expect(() => point1.moveVertical('a')).toThrow('argument is not a number')
            expect(() => point1.moveVertical(true)).toThrow('argument is not a number')
            expect(() => point1.moveVertical(['x', 'y'])).toThrow('argument is not a number')
            expect(() => point1.moveVertical()).toThrow('value is undefined')
            expect(() => point1.moveVertical(value => (value))).toThrow('argument is not a number')
        })
    })
})

describe('MOVE_HORIZONTAL', () => {
    it('should to add the value to x', () => {
        const point = new Point();
        point.moveHorizontal(2);
        expect(point).toEqual({ x: 2, y: 0 });
    })
    describe('ERRORS', () => {
        it('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
            expect(() => point1.moveHorizontal('a')).toThrow('argument is not a number')
            expect(() => point1.moveHorizontal(true)).toThrow('argument is not a number')
            expect(() => point1.moveHorizontal(['x', 'y'])).toThrow('argument is not a number')
            expect(() => point1.moveHorizontal()).toThrow('value is undefined')
            expect(() => point1.moveHorizontal(value => (value))).toThrow('argument is not a number')
        })
    })
})