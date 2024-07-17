const Line = require('../../../modules/ecs6-class/line')
const Point = require('../../../modules/ecs6-class/point')

const mockConstructorLine = jest.fn(constructor)
const mockConstructorPoint = jest.fn(constructor)

describe('LINE', () => {
    describe('CONSTRUCTOR', () => {
        it('should create a Line object with default values', () => {
            const line = new Line({ point1: new Point({}), point2: new Point({}) });
            expect(line.point1.x).toBe(0);
            expect(line.point1.y).toBe(0);
            expect(line.point2.x).toBe(0);
            expect(line.point2.y).toBe(0);
            expect(line.n).toBeUndefined();
            expect(line.slope).toBeUndefined();
        });
        it('should create a Line object with custom values', () => {
            const line = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 3, y: 4 }), n: 5, slope: 2 });
            expect(line.point1.x).toBe(1);
            expect(line.point1.y).toBe(2);
            expect(line.point2.x).toBe(3);
            expect(line.point2.y).toBe(4);
            expect(line.n).toBe(5);
            expect(line.slope).toBe(2);
        });
        it('should throw error when the values are not a numbers', () => {
            expect(() => Line(new Line({ n: 3, slope: "5" }))).toThrow('slope is not a number')
            expect(() => Line(new Line({ n: '3', slope: 3 }))).toThrow('n is not a number')
            expect(() => Line(new Line({ n: [5, 7], slope: 6 }))).toThrow('n is not a number')
            expect(() => Line(new Line({ n: 3, slope: { x: 7, y: 5 } }))).toThrow('slope is not a number')
        })
    })

    describe('CALCULATE_SLOPE', () => {
        it('should calculate the slope of the line', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 0, y: 0 })), point2: mockConstructorPoint(new Point({ x: 1, y: 2 })) }));
            line.calculateSlope();
            expect(line.slope).toBe(2);
        });


        it('should throw error when division by zero is performed', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 0 })), point2: mockConstructorPoint(new Point({ x: 1, y: 2 })) }));
            expect(() => line.calculateSlope()).toThrow('Division error by zero')
        })
    })

    describe('CALCULATE_N_OF_LINE_FUNCTION', () => {
        it('should calculate the n value of the line function', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 0, y: 1 })), point2: mockConstructorPoint(new Point({ x: 1, y: 3 })), slope: 2 }));
            line.calculateNOfLineFunction();
            expect(line.n).toBe(1);
        });
    })

    describe('GET_POINT_ON_X_ASIS', () => {
        it('should return a Point on the X-axis', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 1 })), point2: mockConstructorPoint(new Point({ x: 2, y: 2 })), slope: 1, n: 1 }));
            const point = line.getPointOnXAsis();
            expect(point.x).toBe(-1);
            expect(point.y).toBe(0);
        });
    })

    describe('GET_POINT_ON_Y_ASIS', () => {
        it('should return a Point on the Y-axis', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 1 })), point2: mockConstructorPoint(new Point({ x: 2, y: 2 })), slope: 1, n: 2 }));
            const point = line.getPointOnYAsis();
            expect(point.x).toBe(0);
            expect(point.y).toBe(2);
        });
    })

    describe('GET_POINT_BY_X', () => {
        it('should return a Point based on given X coordinate', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 1 })), point2: mockConstructorPoint(new Point({ x: 3, y: 3 })), slope: 1, n: 5 }));
            const point = line.getPointByX(2);
            expect(point.x).toBe(2);
            expect(point.y).toBe(7);
        });
        it('should throw error when the x is not a number', () => {
            const point = mockConstructorPoint(new Point({ x: 3, y: 5 }));
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 1 })), point2: mockConstructorPoint(new Point({ x: 3, y: 3 })), slope: 1, n: 5 }));
            expect(() => line.getPointByX('4')).toThrow('x is not a number')
            expect(() => line.getPointByX([2, 5])).toThrow('x is not a number')
            expect(() => line.getPointByX({ key: 5, desc: 'fghh' })).toThrow('x is not a number')
        })
    })

    describe('GET_POINT_BY_Y', () => {
        it('should return a Point based on given Y coordinate', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 0, y: 0 })), point2: mockConstructorPoint(new Point({ x: 1, y: 1 })) }));
            line.calculateSlope()
            line.calculateNOfLineFunction()
            const point = line.getPointByY(2);
            expect(point.x).toBe(2);
            expect(point.y).toBe(2);
        });
        it('should throw error when the y is not a number', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 1 })), point2: mockConstructorPoint(new Point({ x: 3, y: 3 })), slope: 7, n: 5 }));
            expect(() => line.getPointByY('4')).toThrow('y is not a number')
            expect(() => line.getPointByY([2, 5])).toThrow('y is not a number')
            expect(() => line.getPointByY({ key: 5, desc: 'fghh' })).toThrow('y is not a number')
        })
        it('should throw error when division by zero is performed', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 0 })), point2: mockConstructorPoint(new Point({ x: 1, y: 1 })), slope: 0, n: 0 }));
            expect(() => line.getPointByY(0)).toThrow('Division error by zero');
        })
    })
})



