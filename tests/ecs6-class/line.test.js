const Line = require('../../modules/ecs6-class/line');
const Point = require('../../modules/ecs6-class/point');
const mockGetPointByY = jest.fn(() => ({ x: 0, y: 0 }));
const mockGetPointByX = jest.fn(() => ({ x: 0, y: 5 }));
const point1 = new Point({ x: 4, y: 3 });
const point2 = new Point({ x: 3, y: 2 });
const line = new Line({ point1, point2 });
const line1 = new Line({});
line1.slope = 0;
const line2 = new Line({ point1, point2 });
line1.n = 0;
const line3 = new Line({});
line3.slope = 2;
const line4 = new Line({ point1, point2 });
line4.n = 0;

describe('ERRORS', () => {
    test('should throw string error when argument are no point', () => {
        expect(() => new Line({ point1: new Line({}) })).toThrow('point1 not valid')
        expect(() => new Line({ point2: 'hello' })).toThrow('point2 not valid')
        expect(() => new Line({ point1: ['x', 'y'] })).toThrow('point1 not valid')
        expect(() => new Line({ point2: false })).toThrow('point2 not valid')
        expect(() => new Line({ point1: () => true, point2: () => 'y' })).toThrow('point1 and point2 not valid')
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

    test('should throw string error when point1.x - point2.x equal 0', () => {
        expect(() => line1.calculateSlope()).toThrow('can`t divide by 0')
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
        LineInstance.getPointOnXAsis();
        expect(mockGetPointByY).toHaveBeenCalledWith(0);
    });
})

describe('GET_POINT_ON_Y_ASIS', () => {
    test('mocking getPointOnYAsis', () => {
        const LineInstance = new Line(2, 3);
        LineInstance.getPointByX = mockGetPointByX;
        LineInstance.getPointOnYAsis();
        expect(mockGetPointByX).toHaveBeenCalledWith(0);
    });
})

describe('GET_POINT_BY_X', () => {
    test('should return point x', () => {
        expect(line.getPointByX(5)).toEqual({ x: 5, y: 4 })
    })

    test('should to send to function: calculateSlope if slope is undefined', () => {
        expect(line2.getPointByX(5)).toEqual({ x: 5, y: 4 })
    })

    test('should to send to function: calculateNOfLineFunction if n is undefined', () => {
        expect(line1.getPointByX(5)).toEqual({ x: 5, y: 0 })
    })

    test('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
        expect(() => line.getPointByX('a')).toThrow('argument is not a number')
        expect(() => line.getPointByX(true)).toThrow('argument is not a number')
        expect(() => line.getPointByX(['x', 'y'])).toThrow('argument is not a number')
        expect(() => line.getPointByX()).toThrow('value is undefined')
        expect(() => line.getPointByX(value => (value))).toThrow('argument is not a number')
    })
})

describe('GET_POINT_BY_Y', () => {
    test('should return point y', () => {
        expect(line.getPointByY(2)).toEqual({ x: 3, y: 2 })
    })

    test('should to send to function: calculateSlope if slope is undefined', () => {
        expect(line3.getPointByY(2)).toEqual({ x: 1, y: 2 })
    })

    test('should to send to function: calculateNOfLineFunction if n is undefined', () => {
        expect(line4.getPointByY(2)).toEqual({ x: 2, y: 2 })
    })

    test('should throw string error when argumonts are no number string or undefined when argument is undefined', () => {
        expect(() => line.getPointByY('a')).toThrow('argument is not a number')
        expect(() => line.getPointByY(true)).toThrow('argument is not a number')
        expect(() => line.getPointByY(['x', 'y'])).toThrow('argument is not a number')
        expect(() => line.getPointByY()).toThrow('value is undefined')
        expect(() => line.getPointByY(value => (value))).toThrow('argument is not a number')
        expect(() => line1.getPointByY(2)).toThrow('slope can`t be 0')
    })
})