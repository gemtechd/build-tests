const Line = require('../../modules/ecs6-class/line');
const Point = require('../../modules/ecs6-class/point');
const geometry = require('../../modules/geometry-calculation')


const getPointByXMock = jest
    .spyOn(Line.prototype, 'getPointByX').mockImplementation()
    .mockReturnValue({ x: -7, y: -40 })

const calculateSlopeMock = jest
    .spyOn(Line.prototype, 'calculateSlope').mockImplementation()
    .mockReturnValueOnce(0).mockReturnValueOnce(7).mockReturnValue(7)


const calculateNOfLineFunctionMock = jest
    .spyOn(Line.prototype, 'calculateNOfLineFunction').mockImplementation()
    .mockReturnValue(9)





describe('Check calculateDistance function', () => {
    test(' Should return the square root of the sum of the distances between x and y of the points', () => {
        let point1 = new Point({ x: 5, y: 7 });
        let point2 = new Point({ x: 3, y: 8 });
        expect(geometry.calculateDistance(point1, point2)).toBe(2.23606797749979);
    })
    describe('ERRORS', () => {
        test('should throw error when the type is not Point', () => {
            expect(() => geometry.calculateDistance(1, 2)).toThrow('The value is of an invalid type')
            expect(() => geometry.calculateDistance('o', 'p')).toThrow('The value is of an invalid type')
            expect(() => geometry.calculateDistance(false, true)).toThrow('The value is of an invalid type')
            expect(() => geometry.calculateDistance([1, 2], [2, 3])).toThrow('The value is of an invalid type')
            expect(() => geometry.calculateDistance()).toThrow('The value is of an invalid type')

        })
    })
})


describe('Check calculateJunctionPoint function', () => {
    test('Should return calculate Junction Point', () => {
        let point1 = new Point({ x: 5, y: 7 });
        let point2 = new Point({ x: 3, y: 8 });
        let point3 = new Point({ x: 7, y: 0 });
        let point4 = new Point({ x: 11, y: 8 });
        let line1 = new Line({ point1, point2, n: 9, slope: 7 });
        let line2 = new Line({ point3, point4, n: 2, slope: 6 });
        expect(geometry.calculateJunctionPoint(line1, line2)).toEqual({ x: -7, y: -40 });

    })

    test('Should return true if the lines are on the same axis', () => {
        let point1 = new Point({ x: 5, y: 7 });
        let point2 = new Point({ x: 3, y: 8 });
        let point3 = new Point({ x: 7, y: 0 });
        let point4 = new Point({ x: 11, y: 8 });
        let line1 = new Line({ point1, point2, n: 9, slope: 7 });
        let line2 = new Line({ point3, point4, n: 9, slope: 7 });
        expect(geometry.calculateJunctionPoint(line1, line2)).toBe(true);
    })

    test('Should return false if the lines are parallel', () => {
        let point1 = new Point({ x: 5, y: 7 });
        let point2 = new Point({ x: 3, y: 8 });
        let point3 = new Point({ x: 7, y: 0 });
        let point4 = new Point({ x: 11, y: 8 });
        let line1 = new Line({ point1, point2, n: 9, slope: 7 });
        let line2 = new Line({ point3, point4, n: 2, slope: 7 });
        expect(geometry.calculateJunctionPoint(line1, line2)).toBe(false);
    })

    describe('ERRORS', () => {
        test('should throw error when the type is not line', () => {
            expect(() => geometry.calculateJunctionPoint(1, 2)).toThrow('The value is of an invalid type')
            expect(() => geometry.calculateJunctionPoint('o', 'p')).toThrow('The value is of an invalid type')
            expect(() => geometry.calculateJunctionPoint(false, true)).toThrow('The value is of an invalid type')
            expect(() => geometry.calculateJunctionPoint([1, 2], [2, 3],)).toThrow('The value is of an invalid type')
            expect(() => geometry.calculateJunctionPoint()).toThrow('The value is of an invalid type')

        })
    })
})

describe('Check isPointOnLine function', () => {
    test(' Should return false if the point is not on the line nor on the same slope', () => {
        let point3 = new Point({ x: 7, y: 0 });
        let line1 = new Line();
        expect(geometry.isPointOnLine(line1, point3)).toBe(false);
    })
    test(' Should return false  if the point is on the same slope and not on the line', () => {
        let point1 = new Point({ x: 5, y: 16 });
        let point2 = new Point({ x: 3, y: 8 });
        let point3 = new Point({ x: 3, y: 2 });
        let line1 = new Line({ point1, point2, n: 11, slope: 7 });
        expect(geometry.isPointOnLine(line1, point3)).toBe(false);
    })

    test(' Should return true if the point on the same slope', () => {
        let point1 = new Point({ x: 5, y: 44 });
        let point2 = new Point({ x: 3, y: 8 });
        let point3 = new Point({ x: 3, y: 30 });
        let line1 = new Line({ point1, point2, n: 9, slope: 7 });
        expect(geometry.isPointOnLine(line1, point3)).toBe(true);
    })


    describe('ERRORS', () => {
        test('should throw error when the type is not valid', () => {
            expect(() => geometry.isPointOnLine(1, 2)).toThrow('The value is of an invalid type')
            expect(() => geometry.isPointOnLine('o', 'p')).toThrow('The value is of an invalid type')
            expect(() => geometry.isPointOnLine(false, true,)).toThrow('The value is of an invalid type')
            expect(() => geometry.isPointOnLine([1, 2], [2, 3])).toThrow('The value is of an invalid type')
            expect(() => geometry.isPointOnLine()).toThrow('The value is of an invalid type')

        })
    })
})


