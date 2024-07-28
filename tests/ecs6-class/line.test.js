const Line = require('../../modules/ecs6-class/line')
const line = require('../../modules/ecs6-class/line')
const point = require('../../modules/ecs6-class/point')

const point1 = new point({ x: 1, y: 1 })
const point2 = new point({ x: 2, y: 2 })
const line1 = new line({ point1, point2, n: 2, slope: 2 })
const TLine = new line({})

describe('CALCULATE_SIOPE', () => {
    test('', () => {
        line1.calculateSlope()
        expect(line1.slope).toBe(1)
    });
});

describe('CALCULATE_N_OF_LINE_FUNCTION', () => {
    test('', () => {
        line1.calculateNOfLineFunction()
        expect(line1.n).toBe(0)
    });
});

describe('GET_POINT_ON_X_ASIS', () => {
    test('', () => {
        const line1 = new Line({ n: 2, slope: 2 })
        expect(line1.getPointOnXAsis()).toEqual({ x: -1, y: 0 })
    });
    test('mock on getPointOnXAsis', () => {
        let mPoint = new point({ x: 2, y: 1 });
        jest.spyOn(line1, 'getPointByX').mockImplementation((y) => {
            const x = (y - line1.n) / line1.slope;
            mPoint = new point({ x, y });
            return mPoint;
        });

        const result2 = line1.getPointOnYAsis();
        expect(result2).toEqual(mPoint);
    });
});


describe('GET_POINT_ON_Y_ASIS', () => {
    test('', () => {
        const line1 = new Line({ n: 2, slope: 2 })
        expect(line1.getPointOnYAsis()).toEqual({ x: 0, y: 2 })
    });
    test('mock on getPointOnYAsis', () => {
        let mPoint = new point({ x: 2, y: 1 });
        jest.spyOn(line1, 'getPointByX').mockImplementation((x) => {
            const y = line1.slope * x + line1.n;
            mPoint = new point({ x, y });
            return mPoint;
        });

        const result2 = line1.getPointOnYAsis();
        expect(result2).toEqual(mPoint);
    });

});


describe('GET_POINT_BY_Y', () => {
    test('', () => {
        const lin = new Line({ n: 0, slope: 1 })
        expect(lin.getPointByY(6)).toEqual({ x: 6, y: 6 })
    });
});

describe('ERRORS', () => {
    test('check errors of getPointByY function', () => {
        expect(() => TLine.getPointByY('c')).toThrow('the function should get a number')
        expect(() => TLine.getPointByY([1, 2])).toThrow('the function should get a number')
        expect(() => TLine.getPointByY(true)).toThrow('the function should get a number')
        expect(() => TLine.getPointByY()).toThrow('the function should get a number')
        expect(() => TLine.getPointByY(f => f)).toThrow('the function should get a number')
    });
});


describe('GET_POINT_BY_X', () => {
    test('', () => {
        const lin1 = new Line({ n: 2, slope: 3 })
        expect(lin1.getPointByX(5)).toEqual({ x: 5, y: 17 })
    });
});

describe('ERRORS', () => {
    test('check errors of getPointByX function', () => {
        expect(() => TLine.getPointByX('c')).toThrow('the function should get a number')
        expect(() => TLine.getPointByX([1, 2])).toThrow('the function should get a number')
        expect(() => TLine.getPointByX(true)).toThrow('the function should get a number')
        expect(() => TLine.getPointByX()).toThrow('the function should get a number')
        expect(() => TLine.getPointByX((f) => f)).toThrow('the function should get a number')
    });
});


describe('ERRORS', () => {
    test('check errors of constactor point1 and point2', () => {
        expect(() => new line({ point1: 'c' })).toThrow('the constructor should get two arguments of "Point"')
        expect(() => new line({ point1: [1, 2] })).toThrow('the constructor should get two arguments of "Point"')
        expect(() => new line({ point1: true })).toThrow('the constructor should get two arguments of "Point"')
        expect(() => new line({ point1: (f) => f })).toThrow('the constructor should get two arguments of "Point"')
        expect(() => new line({ point1: () => f })).toThrow('the constructor should get two arguments of "Point"')
        expect(() => new line({ point2: 'c' })).toThrow('the constructor should get two arguments of "Point"')
        expect(() => new line({ point2: [1, 2] })).toThrow('the constructor should get two arguments of "Point"')
        expect(() => new line({ point2: true })).toThrow('the constructor should get two arguments of "Point"')
        expect(() => new line({ point2: (f) => f })).toThrow('the constructor should get two arguments of "Point"')
        expect(() => new line({ point2: () => f })).toThrow('the constructor should get two arguments of "Point"')
    });
});

describe('ERRORS', () => {
    test('check errors of constactor n and slope', () => {
        expect(() => new line({ n: 'c' })).toThrow('the n and slope in constractor should get undefined or number')
        expect(() => new line({ n: [1, 2] })).toThrow('the n and slope in constractor should get undefined or number')
        expect(() => new line({ n: true })).toThrow('the n and slope in constractor should get undefined or number')
        expect(() => new line({ n: (f) => f })).toThrow('the n and slope in constractor should get undefined or number')
        expect(() => new line({ n: () => f })).toThrow('the n and slope in constractor should get undefined or number')
        expect(() => new line({ slope: 'c' })).toThrow('the n and slope in constractor should get undefined or number')
        expect(() => new line({ slope: [1, 2] })).toThrow('the n and slope in constractor should get undefined or number')
        expect(() => new line({ slope: true })).toThrow('the n and slope in constractor should get undefined or number')
        expect(() => new line({ slope: (f) => f })).toThrow('the n and slope in constractor should get undefined or number')
        expect(() => new line({ slope: () => f })).toThrow('the n and slope in constractor should get undefined or number')

    });
});