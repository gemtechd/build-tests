const { Line, getPointByY, calculateNOfLineFunction, getPointOnXAsis, getPointOnYAsis, getPointByX } = require('../../../modules/ecs6-class/line');
const point = require('../../../modules/ecs6-class/point');
const { Point } = require('../../../modules/ecs6-class/point');
const mockConstructor = jest.fn(constructor);
let line;
describe('constructor', () => {
    it('should throw error when all isnt number  ', () => {
        expect(() => new Line({ point1: 'p', point2: 'new Point(1, 2)', n: '5', slope: '4' })).toThrow('all parametrs isnt number')
    });

    it('should throw error when point1 isnt object or point2 isnt object or n isnt number or slope isnt number  ', () => {
        expect(() => new Line({ point1: 'p', point2: new Point(1, 2), n: 5, slope: 4 })).toThrow('point1 must be objects')
        expect(() => new Line({ point1: new Point(1, 2), point2: '4', n: 5, slope: 4 })).toThrow('point2 must be objects')
        expect(() => new Line({ point1: new Point(1, 2), point2: new Point(1, 2), n: "invalid", slope: 4 })).toThrow('n must be a number');
        expect(() => new Line({ point1: new Point(1, 2), point2: new Point(1, 2), n: 4, slope: "invalid" })).toThrow('slope must be a number');
    });
    it('all isnt undefined', () => {
        line = new Line({ point1: new Point(1, 2) });
        expect(line.point1).toEqual(new Point(1, 2));
        expect(line.point2).toEqual({ x: 0, y: 0 });
        expect(line.n).toBe(undefined);
        expect(line.slope).toBe(undefined);
        line = new Line({ point2: new Point(1, 2) });
        expect(line.point1).toEqual({ x: 0, y: 0 });
        expect(line.point2).toEqual(new Point(4, 8));
        expect(line.n).toBe(undefined);
        expect(line.slope).toBe(undefined);
        line = new Line({ n: 4 });
        expect(line.point1).toEqual({ x: 0, y: 0 });
        expect(line.point2).toEqual({ x: 0, y: 0 });
        expect(line.n).toBe(4);
        expect(line.slope).toBe(undefined);
        line = new Line({ slope: 7 });
        expect(line.point1).toEqual({ x: 0, y: 0 });
        expect(line.point2).toEqual({ x: 0, y: 0 });
        expect(line.n).toBe(undefined);
        expect(line.slope).toBe(7);
        line = new Line({ point1: new Point(1, 2), point2: new Point(4, 5), n: 4, slope: 7 });
        expect(line.point1).toEqual(new Point(1, 2));
        expect(line.point2).toEqual(new Point(4, 5))
        expect(line.n).toBe(4);
        expect(line.slope).toBe(7);
    });
});

describe('calculateSlope', () => {
    it('should throw error when it try to cut with zero', () => {
        line = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 1, y: 2 })), point2: mockConstructor(new Point({ x: 1, y: 10 })), n: 5, slope: 4 }))
        expect(() => { line.calculateSlope() }).toThrow('cut with zero');
    })
    it('should be 3 when all is good', () => {
        line = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 10, y: 12 })), point2: mockConstructor(new Point({ x: 7, y: 3 })), n: 3, slope: 7 }));
        line.calculateSlope()
        expect(line.slope).toBe(3);
    })
});
describe('calculateNOfLineFunction', () => {
    it('should be 3 when all is good', () => {
        line = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 2, y: 7 })), point2: mockConstructor(new Point({ x: 5, y: 3 })), n: 2, slope: 2 }));
        line.calculateNOfLineFunction()
        expect(line.n).toBe(3);
    })
});

describe('getPointOnXAsis', () => {
    it('should return the point on the X axis with the correct y-coordinate', () => {
        line = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 2, y: 7 })), point2: mockConstructor(new Point({ x: 5, y: 3 })), n: 2, slope: 2 }));
        const result = line.getPointOnXAsis();
        expect(result.x).toBe(-1)
        expect(result.y).toBe(0);
    });
});
describe('getPointOnYAsis', () => {
    it('should return the point on the y axis with the correct x-coordinate', () => {
        line = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 2, y: 7 })), point2: mockConstructor(new Point({ x: 5, y: 3 })), n: 2, slope: 2 }));
        const result = line.getPointOnYAsis();
        expect(result.x).toBe(0)
        expect(result.y).toBe(2);
    });
});

describe('getPointByX', () => {
    it('should throw error when x is undefined', () => {
        line = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: undefined, y: 2 })), point2: mockConstructor(new Point({ x: undefined, y: 5 })), n: 5, slope: 4 }));
        expect(() => line.getPointByX()).toThrow("x is undefined");
    });
    it('should throw error when x isnt a number', () => {
        line = mockConstructor(new Line({ n: 5, slope: 4 }));
        expect(() => line.getPointByX("2")).toThrow('x isnt number');
    });
});
describe('getPointByY', () => {
    it('should throw error when y is undefined', () => {
        line = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 2 })), point2: mockConstructor(new Point({ x: 2 })), n: 5, slope: 4 }));
        expect(() => line.getPointByY()).toThrow("y is undefined");
    });
    it('should throw error when y isnt a number', () => {
        line = mockConstructor(new Line({ n: 5, slope: 4 }));
        expect(() => line.getPointByY("1")).toThrow('y isnt number');
    });
});