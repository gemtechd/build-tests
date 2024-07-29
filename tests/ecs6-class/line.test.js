const Line = require('../../modules/ecs6-class/line');
const point = require('../../modules/ecs6-class/point');

describe('CALCULATE_SIOPE', () => {
    it('', () => {
        const line1 = new Line({ point1: new point({ x: 1, y: 1 }), point2: new point({ x: 2, y: 2 }), n: 2, slope: 2 })
        line1.calculateSlope()
        expect(line1.slope).toBe(1)
    });
});

describe('ERRORS', () => {
    it('errors for calculateSlope function', () => {
        const line2 = new Line({})
        expect(() => line2.calculateSlope()).toThrow('the argument equal to 0')
    });
});

describe('CALCULATE_N_OF_LINE_FUNCTION', () => {
    it('', () => {
        const line1 = new Line({ point1: new point({ x: 1, y: 1 }), point2: new point({ x: 2, y: 2 }), slope: 2 })
        line1.calculateNOfLineFunction()
        expect(line1.n).toBe(-1)
    });
});
describe('ERRORS', () => {
    it('errors for calculateNOfLineFunction function', () => {
        const line2 = new Line({})
        expect(() => line2.calculateNOfLineFunction()).toThrow('The slope has not yet been defined')
    });
});

describe('GET_POINT_ON_X_ASIS', () => {
    it('', () => {
        const line1 = new Line({ n: 2, slope: 2 })
        expect(line1.getPointOnXAsis()).toEqual({ x: -1, y: 0 })
    });
    it('mock on getPointOnXAsis', () => {
        let mPoint = new point({ x: 2, y: 1 });
        const line1 = new Line({ point1: new point({ x: 1, y: 1 }), point2: new point({ x: 2, y: 2 }), n: 2, slope: 2 })
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
        const line1 = new Line({ point1: new point({ x: 1, y: 1 }), point2: new point({ x: 2, y: 2 }), n: 2, slope: 2 })
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
        const TLine = new Line({})
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
        const TLine = new Line({})
        expect(() => TLine.getPointByX('c')).toThrow('the function should get a number')
        expect(() => TLine.getPointByX([1, 2])).toThrow('the function should get a number')
        expect(() => TLine.getPointByX(true)).toThrow('the function should get a number')
        expect(() => TLine.getPointByX()).toThrow('the function should get a number')
        expect(() => TLine.getPointByX((f) => f)).toThrow('the function should get a number')
    });
});


describe('ERRORS', () => {
    test('check errors of constactor point1 and point2', () => {
        expect(() => new Line({ point1: 'c' })).toThrow('the constructor should get point1 arguments of "Point"')
        expect(() => new Line({ point1: [1, 2] })).toThrow('the constructor should get point1 arguments of "Point"')
        expect(() => new Line({ point1: true })).toThrow('the constructor should get point1 arguments of "Point"')
        expect(() => new Line({ point1: (f) => f })).toThrow('the constructor should get point1 arguments of "Point"')
        expect(() => new Line({ point1: () => f })).toThrow('the constructor should get point1 arguments of "Point"')
    });
    test('check errors of constactor point2', () => {
        expect(() => new Line({ point2: 'c' })).toThrow('the constructor should get point2 arguments of "Point"')
        expect(() => new Line({ point2: [1, 2] })).toThrow('the constructor should get point2 arguments of "Point"')
        expect(() => new Line({ point2: true })).toThrow('the constructor should get point2 arguments of "Point"')
        expect(() => new Line({ point2: (f) => f })).toThrow('the constructor should get point2 arguments of "Point"')
        expect(() => new Line({ point2: () => f })).toThrow('the constructor should get point2 arguments of "Point"')
    })
});

describe('ERRORS', () => {
    it('check errors of constactor n and slope', () => {
        expect(() => new Line({ slope: 'c' })).toThrow('the slope in constractor should get undefined or number')
        expect(() => new Line({ slope: [1, 2] })).toThrow('the slope in constractor should get undefined or number')
        expect(() => new Line({ slope: true })).toThrow('the slope in constractor should get undefined or number')
        expect(() => new Line({ slope: (f) => f })).toThrow('the slope in constractor should get undefined or number')
        expect(() => new Line({ slope: () => f })).toThrow('the slope in constractor should get undefined or number');

    });
    it('check errors of constactor slope', () => {
        expect(() => new Line({ n: 'c' })).toThrow('the n in constractor should get undefined or number')
        expect(() => new Line({ n: [1, 2] })).toThrow('the n in constractor should get undefined or number')
        expect(() => new Line({ n: true })).toThrow('the n in constractor should get undefined or number')
        expect(() => new Line({ n: (f) => f })).toThrow('the n in constractor should get undefined or number')
        expect(() => new Line({ n: () => f })).toThrow('the n in constractor should get undefined or number');
    });
});