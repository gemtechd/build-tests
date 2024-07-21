const { Line, getPointByX, getPointByY } = require('../../../modules/ecs6-class/line');
const { Point } = require('../../../modules/ecs6-class/point');
const mockConstructorLine = jest.fn(constructor)
const mockConstructorPoint = jest.fn(constructor)


describe('CONSTRUCTOR', () => {

    it('should initialize x and y to default values when no parameters are provided', () => {


        const line1 = new Line({ point1: new Point({ x: 2, y: 5 }) });
        expect(line1.point1).toStrictEqual(new Point({ x: 2, y: 5 }));
        expect(line1.point2).toStrictEqual(new Point());
        expect(line1.n).toBe(undefined);
        expect(line1.slope).toBe(undefined);


        const line2 = new Line({ point2: new Point({ x: 2, y: 5 }) });
        expect(line2.point1).toStrictEqual(new Point());
        expect(line2.point2).toStrictEqual(new Point({ x: 2, y: 5 }));
        expect(line2.n).toBe(undefined);
        expect(line2.slope).toBe(undefined);

        const line4 = new Line({ n: 3 });
        expect(line4.point1).toStrictEqual(new Point());
        expect(line4.point2).toStrictEqual(new Point());
        expect(line4.n).toBe(3);
        expect(line4.slope).toBe(undefined);

        const line3 = new Line({ slope: 5 });
        expect(line3.point1).toStrictEqual(new Point());
        expect(line3.point2).toStrictEqual(new Point());
        expect(line3.n).toBe(undefined);
        expect(line3.slope).toBe(5);

    })
});

it('should throw error when point1 is not Point ', () => {
    expect(() => new Line({ point1: "bbb", point2: new Point({ x: 2, y: 3 }), slope: 5, n: 3 })).toThrow('point1 should be an instance of Point');
})

it('should throw error when point2 is not Point ', () => {
    expect(() => new Line({ point1: new Point({ x: 2, y: 3 }), point2: "aaa", slope: 5, n: 3 })).toThrow('point2 should be an instance of Point');
})

it('should throw error when n  is not number or is not get the defualt value:undefined', () => {
    expect(() => new Line({ point1: new Point({ x: 2, y: 3 }), point2: new Point({ x: 2, y: 3 }), slope: 5, n: "3" })).toThrow('n should be a number or undefined');
})

it('should throw error when slope  is not number or is not get the defualt value:undefined', () => {
    expect(() => new Line({ point1: new Point({ x: 2, y: 3 }), point2: new Point({ x: 2, y: 3 }), slope: "5", n: 3 })).toThrow('slope should be a number or undefined');
})


it('Line constructor initialized correctly', () => {
    const line = new Line({ point1: new Point(1, 2), point2: new Point(3, 4), slope: 2, n: 3 });
    expect(line.point1).toEqual(new Point(1, 2));
    expect(line.point2).toEqual(new Point(3, 4));
    expect(line.slope).toBe(2);
    expect(line.n).toBe(3);
})

describe('CALCULATE_SLOPE', () => {


    it('should result in NaN for the same points (division by zero)', () => {
        const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 8, y: 5 })), point2: mockConstructorPoint(new Point({ x: 8, y: 5 })) }));
        expect(() => line.calculateSlope()).toThrow('Both points have the same values ​​so it is not a line')
    });

    it('throw error for points with the same x-coordinate', () => {
        const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 5, y: 2 })), point2: mockConstructorPoint(new Point({ x: 5, y: 7 })) }));
        expect(() => line.calculateSlope()).toThrow('x of Point1 is the same as x of point2. It is not a line')
    })


    it('should calculate slope as 0 for points with the same y-coordinate', () => {
        const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 5 })), point2: mockConstructorPoint(new Point({ x: 2, y: 5 })) }));
        line.calculateSlope();
        expect(line.slope).toBeCloseTo(0);
    });



    it('should calculate the slope correctly for different points with positive slope', () => {
        const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 2 })), point2: mockConstructorPoint(new Point({ x: 3, y: 8 })) }));
        line.calculateSlope();
        expect(line.slope).toEqual(3);
    });

    it('should calculate the slope correctly for different points with negative slope', () => {
        const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 0 })), point2: mockConstructorPoint(new Point({ x: 2, y: 6 })) }));
        line.calculateSlope();
        expect(line.slope).toBe(-3);
    });

})

describe('CALCULATENOFLINEFUNCTION', () => {

    it('calculates the correct n value ', () => {
        const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 2, y: 5 })), slope: 3 }));
        line.calculateNOfLineFunction();
        expect(line.n).toEqual(-1);
    });

})



describe('GET_POINT_ON_X_ASIS', () => {


    it('returns the correct point on the x-axis for the given slope and n value', () => {
        const line = mockConstructorLine(new Line({ slope: 2, n: -6 }));
        expect(line.getPointOnXAsis()).toEqual(mockConstructorPoint(new Point({ x: 3, y: 0 })));
    })

})

describe('GET_POINT_ON_Y_ASIS', () => {


    it('returns the correct point on the y-axis for the given slope and n value', () => {
        const line = mockConstructorLine(new Line({ slope: 5, n: 5 }));
        expect(line.getPointOnYAsis()).toEqual(mockConstructorPoint(new Point({ x: 0, y: 5 })));

    })
})

describe('GET_POINT_BY_X', () => {


    it('should throw error when x is undefined', () => {
        const line = mockConstructorLine(new Line({ slope: 5, n: 7 }));
        expect(() => line.getPointByX()).toThrow('x is undefined');
    })

    it('should throw error when x is not a number', () => {
        const line = mockConstructorLine(new Line({ slope: 5, n: 7 }));
        expect(() => line.getPointByX("aaa")).toThrow('x is not a number');
    })

    it('getPointByX returns the correct Point for the given x value', () => {
        const line = mockConstructorLine(new Line({ slope: 5, n: 7 }));
        expect(line.getPointByX(4)).toEqual(mockConstructorPoint(new Point({ x: 4, y: 27 })));
    })

})


describe('GET_POINT_BY_Y', () => {

    it('should throw error when y is undefined', () => {
        const line = mockConstructorLine(new Line({ slope: 5, n: 7 }));
        expect(() => line.getPointByY()).toThrow('y is undefined');
    })

    it('should throw error when y is not a number', () => {
        const line = mockConstructorLine(new Line({ slope: 5, n: 7 }));
        expect(() => line.getPointByY("aaa")).toThrow('y is not a number');
    })


    it('getPointByY returns the correct Point for the given y value', () => {
        const line = mockConstructorLine(new Line({ slope: 5, n: 5 }));
        expect(line.getPointByY(20)).toEqual(mockConstructorPoint(new Point({ x: 3, y: 20 })));
    })



})



