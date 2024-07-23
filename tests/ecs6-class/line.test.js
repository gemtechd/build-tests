const Line = require('../../modules/ecs6-class/line');
const Point = require('../../modules/ecs6-class/point');
const mockGetPointByY = jest.fn(() => ({ x: 0, y: 0 }));
const mockGetPointByX = jest.fn(() => ({ x: 0, y: 5 }));
const point1 = new Point({ x: 4, y: 3 });
const point2 = new Point({ x: 3, y: 2 });
const line = new Line({ point1, point2 });
const line1 = new Line({});

describe('ERRORS', () => {
    test('should throw string error when argument are no point', () => {
        expect(() => new Line({ point1: new Line({}) })).toThrow('argument should be a point')
        expect(() => new Line({ point2: 'hello' })).toThrow('argument should be a point')
        expect(() => new Line({ point1: true })).toThrow('argument should be a point')
        expect(() => new Line({ point2: false })).toThrow('argument should be a point')
        expect(() => new Line({ point1: ['x', 'y'] })).toThrow('argument should be a point')
        expect(() => new Line({ point2: ['x', 'y'] })).toThrow('argument should be a point')
        expect(() => new Line({ point1: () => true })).toThrow('argument should be a point')
        expect(() => new Line({ point2: () => 'y' })).toThrow('argument should be a point')
    })

    test('should throw string error when argumonts are no number string', () => {
        expect(() => new Line({ slope: 'a' })).toThrow('slope should be a number')
        expect(() => new Line({ slope: true })).toThrow('slope should be a number')
        expect(() => new Line({ slope: ['a', 'b'] })).toThrow('slope should be a number')
        expect(() => new Line({ slope: value => (value) })).toThrow('slope should be a number')
    })

    test('should throw string error when argumonts are no number string', () => {
        expect(() => new Line({ n: 'a' })).toThrow('n should be a number')
        expect(() => new Line({ n: true })).toThrow('n should be a number')
        expect(() => new Line({ n: ['a', 'b'] })).toThrow('n should be a number')
        expect(() => new Line({ n: value => (value) })).toThrow('n should be a number')
    })
})

describe('CALCULATE_SLOPE', () => {
    test('should calculate the slope', () => {
        line.calculateSlope();
        expect(line.slope).toBe(1)
    })
})

describe('CALCULATE_N_OF_LINE_FUNCTION', () => {
    test('should calculate n of line', () => {
        line.calculateNOfLineFunction()
        expect(line.n).toBe(-1)
    })
})

describe('GET_POINT_ON_X_ASIS', () => {
    test('mocking getPointOnXAsis', () => {
        const LineInstance = new Line({});
        LineInstance.getPointByY = mockGetPointByY;
        const result = LineInstance.getPointOnXAsis();
        expect(mockGetPointByY).toHaveBeenCalledWith(0);
        expect(result).toEqual({ x: 0, y: 0 });
    });
})

describe('GET_POINT_ON_Y_ASIS', () => {
    test('mocking getPointOnYAsis', () => {
        const LineInstance = new Line(2, 3);
        LineInstance.getPointByX = mockGetPointByX;
        const result = LineInstance.getPointOnYAsis();
        expect(mockGetPointByX).toHaveBeenCalledWith(0);
        expect(result).toEqual({ x: 0, y: 5 });
    });
})

describe('GET_POINT_BY_X', () => {
    test('should return point x', () => {
        expect(line.getPointByX(5)).toEqual({ x: 5, y: 4 })
    })

    test('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
        expect(() => line1.getPointByX('a')).toThrow('argument is not a number')
        expect(() => line1.getPointByX(true)).toThrow('argument is not a number')
        expect(() => line1.getPointByX(['x', 'y'])).toThrow('argument is not a number')
        expect(() => line1.getPointByX()).toThrow('value is undefined')
        expect(() => line1.getPointByX(value => (value))).toThrow('argument is not a number')
    })
})

describe('GET_POINT_BY_Y', () => {
    test('should return point y', () => {
        expect(line.getPointByY(2)).toEqual({ x: 3, y: 2 })
    })

    test('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
        expect(() => line1.getPointByY('a')).toThrow('argument is not a number')
        expect(() => line1.getPointByY(true)).toThrow('argument is not a number')
        expect(() => line1.getPointByY(['x', 'y'])).toThrow('argument is not a number')
        expect(() => line1.getPointByY()).toThrow('value is undefined')
        expect(() => line1.getPointByY(value => (value))).toThrow('argument is not a number')
    })
})