const Line = require('../../../modules/ecs6-class/line');
const Point = require('../../../modules/ecs6-class/point');

const getPointByYMock = jest
    .spyOn(Line.prototype, 'getPointByY')

const getPointByXMock = jest
    .spyOn(Line.prototype, 'getPointByX')



describe('Check calculateSlope function', () => {
    test(' Should return the slope of the line', () => {
        let point1 = new Point({ x: 5, y: 7 });
        let point2 = new Point({ x: 3, y: 8 });
        let line1 = new Line({ point1, point2 });
        line1.calculateSlope();
        expect(line1.slope).toBe(-0.5)
    })
    test(' Should return 0 if the points are in the same position on the x-axis', () => {
        let point1 = new Point({ x: 5, y: 7 });
        let point2 = new Point({ x: 5, y: 8 });
        let line1 = new Line({ point1, point2 });
        line1.calculateSlope();
        expect(line1.slope).toBe(0)
    })
    test(' Should return 0 if the points are in the same position on the x-axis', () => {
        let point1 = new Point({ x: 5, y: 7 });
        let point2 = new Point({ x: 3, y: 7 });
        let line1 = new Line({ point1, point2 });
        line1.calculateSlope();
        expect(line1.slope).toBe(0)
    })

})

describe('Check calculateNOfLineFunction function', () => {
    test('Should return n of the line', () => {
        let point1 = new Point({ x: 5, y: 7 });
        let point2 = new Point({ x: 3, y: 8 });
        let line1 = new Line({ point1, point2, slope: -0.5 });
        line1.calculateNOfLineFunction();
        expect(line1.n).toBe(9.5)
    })
})

describe('Check getPointOnXAsis function', () => {
        test('It should be returned if in the call to the function the function getPointByY was called', () => {
            const line1 = new Line();
            line1.getPointOnXAsis();
            expect(getPointByYMock).toHaveBeenCalled();
        });
    })

    describe('Check getPointOnXYAsis function', () => {
        test('It should be returned if in the call to the function the function getPointByX was called', () => {
            const line1 = new Line();
            line1.getPointOnYAsis();
            expect(getPointByXMock).toHaveBeenCalled();
        });
    })


describe('Check getPointByX function', () => {
    test(' Should return point', () => {
        let line1 = new Line({ slope: 2, n: 7 });
        expect(line1.getPointByX(6)).toEqual({ x: 6, y: 19 })
    })
    describe('ERRORS', () => {
        test('should throw error when the type is not valid', () => {
            let point1 = new Point({ x: 5, y: 7 });
            let point2 = new Point({ x: 3, y: 8 });
            let line1 = new Line({ point1, point2 });
            expect(() => line1.getPointByX({ x: 1 })).toThrow('The value is of an invalid type')
            expect(() => line1.getPointByX('o')).toThrow('The value is of an invalid type')
            expect(() => line1.getPointByX(false)).toThrow('The value is of an invalid type')
            expect(() => line1.getPointByX([1, 2])).toThrow('The value is of an invalid type')
            expect(() => line1.getPointByX()).toThrow("The value is of an invalid type")
        })
    })
})

describe('Check getPointByY function', () => {
    test('Should return point ', () => {
        let line1 = new Line({ slope: 2, n: 7 });
        expect(line1.getPointByY(3)).toEqual({ x: -2, y: 3 })
    })
    describe('ERRORS', () => {
        test('should throw error when the type is not valid', () => {
            let point1 = new Point({ x: 5, y: 7 });
            let point2 = new Point({ x: 3, y: 8 });
            let line1 = new Line({ point1, point2 });
            expect(() => line1.getPointByY({ x: 2 })).toThrow('The value is of an invalid type')
            expect(() => line1.getPointByY('o')).toThrow('The value is of an invalid type')
            expect(() => line1.getPointByY(false)).toThrow('The value is of an invalid type')
            expect(() => line1.getPointByY([1, 2])).toThrow('The value is of an invalid type')
            expect(() => line1.getPointByY()).toThrow("The value is of an invalid type")
        })
    })
})

describe('ERRORS', () => {
    test('should throw error when the values of the line is not valid', () => {
        let point1 = new Point({ x: 2, y: 3 })
        let point2 = new Point({ x: 4, y: 5 })
        let line1;
        expect(() => line1 = new Line({ point1: 9, point2, n: 4, slope: 6 })).toThrow(' should have Point type')
        expect(() => line1 = new Line({ point1, point2: [1, 2], n: 4, slope: 6 })).toThrow(' should have Point type')
        expect(() => line1 = new Line({ point1, point2, n: 'c', slope: 6 })).toThrow('The n should have a number')
        expect(() => line1 = new Line({ point1, point2, n: 4, slope: false })).toThrow('The slope should have a number')

    })
})

