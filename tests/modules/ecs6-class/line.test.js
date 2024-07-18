
const { Line, calculateSlope, calculateNOfLineFunction, getPointOnXAsis, getPointOnYAsis, getPointByX, getPointByY } = require('../../../modules/ecs6-class/line');
const { Point } = require('../../../modules/ecs6-class/point')
const mockConstructorPoint = jest.fn(constructor);
const mockConstructorLine = jest.fn(constructor);
let line
describe('CONSTRUCTORE', () => { })


it('should initialize to default values when no parameters are provided', () => {
    line = new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 5 })) });
    expect(line.point1).toStrictEqual(mockConstructorPoint(new Point({ x: 1, y: 5 })))
    expect(line.point2).toStrictEqual(mockConstructorPoint(new Point()))
    expect(line.n).toBe(undefined)
    expect(line.slope).toBe(undefined)
    line = new Line({ point2: mockConstructorPoint(new Point({ x: 1, y: 5 })) });
    expect(line.point1).toStrictEqual(mockConstructorPoint(new Point()))
    expect(line.point2).toStrictEqual(mockConstructorPoint(new Point({ x: 1, y: 5 })))
    expect(line.n).toBe(undefined)
    expect(line.slope).toBe(undefined)
    line = new Line({ n: 5 });
    expect(line.point1).toStrictEqual(mockConstructorPoint(new Point()))
    expect(line.point2).toStrictEqual(mockConstructorPoint(new Point()))
    expect(line.n).toBe(5)
    expect(line.slope).toBe(undefined)
    line = new Line({ slope: 5 });
    expect(line.point1).toStrictEqual(mockConstructorPoint(new Point()))
    expect(line.point2).toStrictEqual(mockConstructorPoint(new Point()))
    expect(line.n).toBe(undefined)
    expect(line.slope).toBe(5)
    line = new Line({})
    expect(line.point1).toStrictEqual(mockConstructorLine(new Point()))
    expect(line.point2).toStrictEqual(mockConstructorPoint(new Point()))
    expect(line.n).toBe(undefined)
    expect(line.slope).toBe(undefined)

})
it('Checks if the parameters are of the correct type', () => {

    expect(() => new Line({ point1: "ab", point2: new Point({ x: 5, y: 5 }), slope: 1, n: 5 })).toThrow('point1 is not point');
    expect(() => new Line({ point1:mockConstructorPoint( new Point({ x: 5, y: 5 })), point2: "ab", slope: 1, n: 5 })).toThrow('point2 is not point');
    expect(() => new Line({ point1: new Point({ x: 5, y: 5 }), point2:mockConstructorPoint( new Point({ x: 5, y: 5 })), slope: "d", n: 5 })).toThrow('slope is not number');
    expect(() => new Line({ point1: new Point({ x: 5, y: 5 }), point2: mockConstructorPoint(new Point({ x: 5, y: 5 })), slope: 1, n: "d" })).toThrow('n is not number');
})
it('Point constructor initializes point1 and point2 and slope and n correctly', () => {
    line = new Line({ point1:mockConstructorPoint( new Point({ x: 5, y: 8 })), point2:mockConstructorPoint( new Point({ x: 5, y: 8 })), slope: 5, n: 8 });
    expect(line.point1).toEqual(mockConstructorPoint(new Point({ x: 5, y: 8 })));
    expect(line.point2).toEqual(mockConstructorPoint(new Point({ x: 5, y: 8 })));
    expect(line.slope).toBe(5);
    expect(line.n).toBe(8);

});
describe('CALCULATE_SLOPE', () => {

    it('should The slope is 0 as the line is vertical (point1= point2) ', () => {
        line = mockConstructorLine(new Line(({ point1: mockConstructorPoint(new Point({ x: 5, y: 8 })), point2: mockConstructorPoint(new Point({ x: 5, y: 8 })), n: 8 })))
        expect(() => line.calculateSlope()).toThrow('The point1 is equal to the point2 so it is not a line');

    })

    it('should The slope is undefined as the line is vertical (y1 = y2) ', () => {
        line = mockConstructorLine(new Line(({ point1: mockConstructorPoint(new Point({ x: 5, y: 8 })), point2: mockConstructorPoint(new Point({ x: 3, y: 8 })), slope: 5, n: 8 })))
        line.calculateSlope()
        expect(line.slope).toBeCloseTo(0);

    })
    it('should The slope is undefined as the line is vertical (x1=x2)', () => {
        line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 5, y: 9 })), point2: mockConstructorPoint(new Point({ x: 5, y: 8 })), n: 8 }));
        expect(() => line.calculateSlope()).toThrow('The x of point1 is equal to the x of point2 so it is not a line');
    });

    it('should move vertically correctly', () => {
        line = mockConstructorLine(new Line(({ point1: mockConstructorPoint(new Point({ x: -1, y: 8 })), point2: mockConstructorPoint(new Point({ x: 2, y: 5 })), slope: 5, n: 8 })));
        line.calculateSlope()
        expect(line.slope).toBe(-1);

    })

})
describe('CALCULATE_N_OF_LINE_FUNCTION', () => {
    it(' should move vertically correctly', () => {
        line = mockConstructorLine(new Line(({ point1: mockConstructorPoint(new Point({ x: 5, y: 8 })), point2: mockConstructorPoint(new Point({ x: 5, y: 5 })), slope: 1, n: 8 })));
        line.calculateNOfLineFunction()
        expect(line.n).toBe(3);

    })

})

describe('GET_POINT_BY_X', () => {
    it('should x is not define ', () => {
        const line = new Line({})
        expect(() => line.getPointByX()).toThrow('x is not a defined');
    })

    it('should x is not number ', () => {
        const line = new Line({})
        expect(() => line.getPointByX("abc")).toThrow('x is not a number');
    })

    it(' should check that the returned value is of type point', () => {
        const line = new Line({})
        const point = line.getPointByX(5)
        expect(point).toBeInstanceOf(Point)

    })
    it('should checks that point is returned with correct values', () => {
        const line = new Line(({ point1: new Point({ x: 5, y: 8 }), point2: new Point({ x: 5, y: 5 }), slope: 1, n: 8 }))
        initialx = line.point1.x
        const point = line.getPointByX(5)
        expect(point.x).toBe(initialx)
        expect(point.y).toBe(13)
    })
})
describe('GET_POINT_B_Y', () => {
    it('should y is not define ', () => {
        const line = new Line({})
        expect(() => line.getPointByY()).toThrow('y is not  defined');
    })
})

it('should y is not number ', () => {
    const line = new Line({})
    expect(() => line.getPointByY("abc")).toThrow('y is not  number');
})

it(' should check that the returned value is of type point', () => {
    const line = new Line({})
    const point = line.getPointByY(5)
    expect(point).toBeInstanceOf(Point)

})
it('should checks that point is returned with correct values', () => {
    const line = new Line(({ point1: new Point({ x: 8, y: 6 }), point2: new Point({ x: 5, y: 5 }), slope: 1, n: 3 }))
    initialy = line.point1.y
    const point = line.getPointByY(6)
    expect(point.x).toBe(3)
    expect(point.y).toBe(initialy)
})

describe('GET_POINT_ON_X_ASIS', () => {

    it('returns the correct point on the y-axis for the given slope and n value', () => {

        const line = new Line(({ slope: 2, n: -6 }))
        const point = line.getPointOnXAsis()
        expect(point.y).toBe(0)
        expect(point.x).toBe(3)



    })
})
describe('GET_POINT_ON_Y_ASIS', () => {
    it('returns the correct point on the y-axis for the given slope and n value', () => {
        const line = new Line({ slope: 5, n: 5 })
        const point = line.getPointOnYAsis()
        expect(point.y).toBe(5)
        expect(point.x).toBe(0)


    })
})



