const Line = require("../../../modules/ecs6-class/line")
const Point = require("../../../modules/ecs6-class/point")
let point1 = new Point({ x: 3, y: 4 })
let point2 = new Point({ x: 1, y: 2 })
let line = new Line({ point1, point2 })
let line1 = new Line({ point1, point2 })
const myline = new Line({})

describe('ERROR_CONSTRUCTOR', () => {
    it('', () => {
        expect(() => new Line({ point1: new Line({}) })).toThrow("the object not instance of 'Point'!")
        expect(() => new Line({ point1: false })).toThrow("the object not instance of 'Point'!")
        expect(() => new Line({ n: 'hello' })).toThrow("n is not valid!")
        expect(() => new Line({ slope: 'iii' })).toThrow("slope is not valid!")
        expect(() => new Line({ point1: new Point['hello'] })).toThrow("Point.hello is not a constructor")

    })
})
describe('CALCULATE_SLOPE', () => {
    it('should calculate the slope', () => {
        line.calculateSlope()
        expect(line.slope).toBe(1)
    })
})

describe('CALCULATE_N_LINE_FUNCTION', () => {
    it('should calculate the n', () => {
        line.calculateNOfLineFunction()
        expect(line.n).toBe(1)
    })
})

describe('RETURN_THE_POINT_ON_X_ASIS', () => {
    it('should return the slope', () => {
        line.getPointOnXAsis()
        expect(line.getPointByY(2)).toEqual({ x: 1, y: 2 })
    })
    it('mock function on getPointOnXAsis function', () => {
        jest.spyOn(line1, 'getPointByY').mockImplementation((y) => {
            return { x: 0, y };
        });

        const points = line.getPointOnYAsis();

        expect(points).toEqual({ x: 0, y: 1 });
    })
})

describe('RETURN_THE_POINT_ON_Y_ASIS', () => {
    it('', () => {
        line.getPointOnYAsis()
        expect(line.getPointByX(2)).toEqual({ x: 2, y: 3 })
    })
    it('mock function on getPointOnYAsis function', () => {
        jest.spyOn(line1, 'getPointByX').mockImplementation((y) => {
            return { x: 0, y };
        });

        const points = line.getPointOnXAsis();

        expect(points).toEqual({ x: -1, y: 0 });
    })
})

describe('GET_POINT_BY_X', () => {
    it('', () => {
        expect(line.getPointByX(2)).toEqual({ x: 2, y: 3 })
    })
    describe('ERROR', () => {
        it('', () => {
            expect(() => line.getPointByX()).toThrow('x is undefined!')
            expect(() => line.getPointByX(true)).toThrow('x is not a number!')
            expect(() => line.getPointByX(() => false)).toThrow('x is not a number!')
            expect(() => line.getPointByX([1, 2, 3, 4])).toThrow('x is not a number!')
            expect(() => line.getPointByX({ x: 1, y: 2 })).toThrow('x is not a number!')
        })
    })
})

describe('GET_POINT_BY_Y', () => {
    it('', () => {
        expect(line.getPointByY(9)).toEqual({ x: 8, y: 9 })
    })
    describe('ERROR', () => {
        it('', () => {
            expect(() => line.getPointByY()).toThrow('y is undefined!')
            expect(() => line.getPointByY(true)).toThrow('y is not a number!')
            expect(() => line.getPointByY(() => false)).toThrow('y is not a number!')
            expect(() => line.getPointByY([1, 2, 3, 4])).toThrow('y is not a number!')
            expect(() => line.getPointByY({ x: 1, y: 2 })).toThrow('y is not a number!')
        })
    })
})




