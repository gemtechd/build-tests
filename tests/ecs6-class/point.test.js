const point = require('../../modules/ecs6-class/point')
let point1 = new point({})

describe('MOVE_VERTICAL', () => {
    test('add a number of y', () => {
        point1.moveVertical(5);
        expect(point1).toEqual({ x: 0, y: 5 });
    });
});

describe('MOVE_HORIZONTAL', () => {
    test('add a number of x', () => {
        point1.moveHorizontal(5);
        expect(point1).toEqual({ x: 5, y: 5 });
    });
});

describe('ERRORS', () => {
    test('check errors of moveVertical function', () => {
        expect(() => point1.moveVertical('c')).toThrow('the function should get a number')
        expect(() => point1.moveVertical([1, 2])).toThrow('the function should get a number')
        expect(() => point1.moveVertical(true)).toThrow('the function should get a number')
        expect(() => point1.moveVertical()).toThrow('the function should get a number')
        expect(() => point1.moveVertical((f) => f)).toThrow('the function should get a number')
    });
});

describe('ERRORS', () => {
    test('check errors of moveVertical function', () => {
        expect(() => point1.moveHorizontal('c')).toThrow('the function should get a number')
        expect(() => point1.moveHorizontal([1, 2])).toThrow('the function should get a number')
        expect(() => point1.moveHorizontal(true)).toThrow('the function should get a number')
        expect(() => point1.moveHorizontal()).toThrow('the function should get a number')
        expect(() => point1.moveHorizontal((f) => f)).toThrow('the function should get a number')
    });
});

describe('ERRORS', () => {
    test('check errors of constactor', () => {
        expect(() => new point({ x: 'c' })).toThrow('the constructor should get a number')
        expect(() => new point({ y: [1, 2] })).toThrow('the constructor should get a number')
        expect(() => new point({ x: true })).toThrow('the constructor should get a number')
        expect(() => new point({ y: (f) => f })).toThrow('the constructor should get a number')
        expect(() => new point({ x: () => f })).toThrow('the constructor should get a number')

    });
});