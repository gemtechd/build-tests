const Point = require("../../../modules/ecs6-class/point");
const Line = require("../../../modules/ecs6-class/line");

describe('Line', () => {
    const mockConstructorLine = jest.fn(constructor);
    const mockConstructorPoint = jest.fn(constructor);

    const line = new Line({ point1: new Point({ x: 1, y: 1 }), point2: new Point({ x: 2, y: 2 }) });
    line.calculateSlope();
    line.calculateNOfLineFunction();

    describe('Line Constructor Tests', () => {
        it('should create a Line with default points if none provided', () => {
            const line = new Line({});
            expect(line.point1).toBeInstanceOf(Point);
            expect(line.point2).toBeInstanceOf(Point);
            expect(line.slope).toBeUndefined()
            expect(line.n).toBeUndefined()
        });
        it('should create a Line with specified points', () => {
            const point1 = new Point({ x: 1, y: 2 });
            const point2 = new Point({ x: 3, y: 4 });
            const line = new Line({ point1, point2, slope: 2, n: 1 });
            expect(line.point1).toBe(point1);
            expect(line.point2).toBe(point2);
            expect(line.slope).toBe(2)
            expect(line.n).toBe(1)
        });
        it('should create a Line with one point and default the other properties', () => {
            const point = new Point({ x: 1, y: 2 });
            const line = new Line({ point1: point });
            expect(line.point1).toBe(point);
            expect(line.point2).toBeInstanceOf(Point);
        });
        it('should throw error when value is not a number', () => {
            expect(() => new Line({ slope: "vbg" })).toThrow('this value is not a number')
            expect(() => new Line({ slope: [2] })).toThrow('this value is not a number')
            expect(() => new Line({ slope: { t: 5 } })).toThrow('this value is not a number')
            expect(() => new Line({ n: "vbg" })).toThrow('this value is not a number')
            expect(() => new Line({ n: [8] })).toThrow('this value is not a number')
            expect(() => new Line({ n: { i: 5 } })).toThrow('this value is not a number')
        })
    });

    describe('calculateSlope', () => {
        it('should calculate slope correctly', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint({ x: 5, y: 5 }), point1: mockConstructorPoint({ x: 10, y: 10 }) }))
            line.calculateSlope();
            expect(line.slope).toBe(1);
        });
        it('should handle division by zero properly', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 2, y: 3 })), point2: mockConstructorPoint(new Point({ x: 2, y: 7 })) }));
            expect(() => line.calculateSlope()).toThrow("Division by zero occurred");
        });
    })
    describe('calculateNOfLineFunction', () => {
        it('should calculate n correctly', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 1 })), point2: mockConstructorPoint(new Point({ x: 2, y: 2 })) }));
            line.calculateSlope();
            line.calculateNOfLineFunction();
            expect(line.n).toBe(0);
        });
    })
    describe('getPointOnXAsis', () => {
        it('should get point on X-axis correctly', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 1 })), point2: mockConstructorPoint(new Point({ x: 2, y: 2 })) }));
            line.calculateSlope();
            line.calculateNOfLineFunction();
            const pointOnXAxis = line.getPointOnXAsis();
            expect(pointOnXAxis.x).toBe(0);
            expect(pointOnXAxis.y).toBe(0);
        });
    })
    describe('getPointOnYAsis', () => {
        it('should get point on Y-axis correctly', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 1 })), point2: mockConstructorPoint(new Point({ x: 2, y: 2 })) }));
            line.calculateSlope();
            line.calculateNOfLineFunction();
            const pointOnYAxis = line.getPointOnYAsis();
            expect(pointOnYAxis.x).toBe(0);
            expect(pointOnYAxis.y).toBe(0);
        });
    })
    describe('getPointByX', () => {
        it('should calculate point by X correctly', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 1 })), point2: mockConstructorPoint(new Point({ x: 2, y: 2 })) }));
            line.calculateSlope();
            line.calculateNOfLineFunction();
            const point = line.getPointByX(3);
            expect(point.x).toBe(3);
            expect(point.y).toBe(3);
        });

        it('should throw error when value is not number', () => {
            const line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 1, y: 1 })), point2: mockConstructorPoint(new Point({ x: 2, y: 2 })) }));
            expect(() => line.getPointByX("abc")).toThrow('this value is not a number')
            expect(() => line.getPointByX([1, 2])).toThrow('this value is not a number')
            expect(() => line.getPointByX({ a: 1, b: 2 })).toThrow('this value is not a number')
        })
    })

    describe('getPointByY', () => {
        it('should calculate point by Y correctly', () => {
            const point = line.getPointByY(2);
            expect(point.x).toBe(2);
            expect(point.y).toBe(2);
        });
        it('should throw error when value is not number', () => {
            expect(() => line.getPointByY("abc")).toThrow('this value is not a number')
            expect(() => line.getPointByY([1, 2])).toThrow('this value is not a number')
            expect(() => line.getPointByY({ a: 1, b: 2 })).toThrow('this value is not a number')
        })
        it('should handle division by zero properly', () => {
            const line = new Line({ point1: { x: 1, y: 0 }, point2: { x: 1, y: 1 }, slope: 0, n: 0 });
            expect(() => line.getPointByY(0)).toThrow("Division by zero occurred");
        });
    })
});
