const Line = require("../../../modules/ecs6-class/line")
const Point = require("../../../modules/ecs6-class/point")
let point1 = new Point({ x: 3, y: 4 })
let point2 = new Point({ x: 1, y: 2 })
let line = new Line({ point1, point2 })
let line1 = new Line({ point1, point2 })
const myline = new Line({})

describe('LINE_CONSTRUCTOR', () => {
   
    it('should check the line object', () => {
        expect(line1.point1.x).toBe(3)
        expect(line1.point1.y).toBe(4)
        expect(line1.point2.x).toBe(1)
        expect(line1.point2.y).toBe(2)
        expect(line1.n).toBe(undefined)
        expect(line1.slope).toBe(undefined)
    })

    describe('ERROR_LINE_CONSTRUCTOR', () => {
        it('should throw error if the line not valid', () => {
            expect(() => new Line({ point1: new Line({}) })).toThrow("point1 not instance of 'Point'!")
            expect(() => new Line({ point1: [1, 2, 3] })).toThrow("point1 not instance of 'Point'!")
            expect(() => new Line({ point1: 'aaa' })).toThrow("point1 not instance of 'Point'!")
            expect(() => new Line({ point2: new Line({}) })).toThrow("point2 not instance of 'Point'!")
            expect(() => new Line({ point1: false })).toThrow("point1 not instance of 'Point'!")
            expect(() => new Line({ n: 'hello' })).toThrow("n is not valid!")
            expect(() => new Line({ slope: 'iii' })).toThrow("slope is not valid!")
            expect(() => new Line({ point1: 'hello' , point2: 'hello' })).toThrow("point1 and point2 not instance of 'Point'!")
            expect(() => new Line( {point1: 111 ,  point2: 222 })).toThrow("point1 and point2 not instance of 'Point'!")
        })
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
    it('should return a point on x axis', () => {
        expect(line.getPointOnXAsis()).toEqual({ x: -1, y: 0 })
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
    it('should return a point on y axis', () => {
        expect(line.getPointOnYAsis()).toEqual({ x: 0, y: 1 })
    })
    it('mock function on getPointOnYAsis function', () => {
        jest.spyOn(line1, 'getPointByX').mockImplementation((x) => {
            return { x, y: 0 };
        });
        const points = line.getPointOnXAsis();
        expect(points).toEqual({ x: -1, y: 0 });
    })
})

describe('GET_POINT_BY_X', () => {
    it('should return y by x', () => {
        expect(line.getPointByX(2)).toEqual({ x: 2, y: 3 })
    })
    describe('ERROR', () => {
        it('should throw error if the function:"getPointByX" not get/get not valid arguments', () => {
            expect(() => line.getPointByX()).toThrow('x is undefined!')
            expect(() => line.getPointByX(true)).toThrow('x is not a number!')
            expect(() => line.getPointByX(() => false)).toThrow('x is not a number!')
            expect(() => line.getPointByX([1, 2, 3, 4])).toThrow('x is not a number!')
            expect(() => line.getPointByX({ x: 1, y: 2 })).toThrow('x is not a number!')
        })
    })
})

describe('GET_POINT_BY_Y', () => {
    it('should return x by y', () => {
        expect(line.getPointByY(9)).toEqual({ x: 8, y: 9 })
    })
    describe('ERROR', () => {
        it('should throw error if the function:"getPointByY" not get/get not valid arguments', () => {
            expect(() => line.getPointByY()).toThrow('y is undefined!')
            expect(() => line.getPointByY(true)).toThrow('y is not a number!')
            expect(() => line.getPointByY(() => false)).toThrow('y is not a number!')
            expect(() => line.getPointByY([1, 2, 3, 4])).toThrow('y is not a number!')
            expect(() => line.getPointByY({ x: 1, y: 2 })).toThrow('y is not a number!')
        })
    })
})




