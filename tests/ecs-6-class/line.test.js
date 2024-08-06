const Line = require('../../modules/ecs6-class/line')
const Point = require('../../modules/ecs6-class/point')
let ln = new Line({})

describe('check the functions in class Line', () => {
    it('"calculateSlope" should calculate and update the value of this.slope', () => {
        ln.calculateSlope()
        expect(ln.slope).toBeDefined()
        ln.point1.x = 5
        ln.point1.y = 3
        ln.point2.x = 2
        ln.point2.y = 4
        ln.calculateSlope()
        expect(ln.slope).toBe((3 - 4) / (5 - 2))
    })
    describe('"calculateNOfLineFunction" should calculate and update this.n by noLineFunction', () => {

        it('should update the value of this.n evevn if it is missing this.slope', () => {
            ln = new Line({ point1: new Point(2, 3), point2: new Point(4, 5) })
            ln.calculateNOfLineFunction()
            expect(ln.n).toBeDefined()
        })
        it('should calculate the correct value and update this.n', () => {
            ln = new Line({ point1: new Point(2, 3), point2: new Point(4, 5), slope: 2 })
            ln.calculateNOfLineFunction()
            let result = ln.point1.y - ln.slope * ln.point1.x
            expect(ln.n).toBe(result)
        })
    })
    describe('check getPointOnXAsis function', () => {
        it(' should return new point with no x sent, mean the point is on the Y axis ', () => {
            expect(ln.getPointOnXAsis()).toBeDefined()
        })
    })

    describe('check getPointOnYAsis function', () => {
        it(' should return new point with no y sent, mean the point is on the X axis ', () => {

        })
    })

    describe('check "getPointByX" function ', () => {
        it('should return a new point after caculating by x argument', () => {
            ln = new Line({ point1: new Point({ x: 2, y: 3 }), point2: new Point({ x: 4, y: 5 }) })
            let x = 3
            let result = ln.getPointByX(x)
            expect(result).toBeDefined()
            expect(result instanceof Point).toBe(true)
            expect(result).toEqual({ x, y: ln.slope * x + ln.n })
        })
        it('should return even if there are no slope or no n', () => {
            ln = new Line({ point1: new Point({ x: 2, y: 3 }), point2: new Point({ x: 4, y: 5 }), slope: 4 })
            expect(ln.getPointByX(1)).toBeDefined()
            ln = new Line({ point1: new Point({ x: 2, y: 3 }), point2: new Point({ x: 4, y: 5 }), n: 4 })
            expect(ln.getPointByX(1)).toBeDefined()
        })
        describe('check errors', () => {
            it('should throw error when the argument is not a number includes x=0', () => {
                expect(() => ln.getPointByX(true)).toThrow('argument is not a number')
                expect(() => ln.getPointByX('value')).toThrow('argument is not a number')
                expect(() => ln.getPointByX({ x: 8 })).toThrow('argument is not a number')
                expect(() => ln.getPointByX([9])).toThrow('argument is not a number')
                expect(() => ln.getPointByX(new Date())).toThrow('argument is not a number')
            })
            it('should throw error when no argument was sent', () => {
                expect(() => ln.getPointByX()).toThrow('no argument was sent')
            })
        })
    })
    describe('check "getPointByY" function', () => {
        it('should return a new point after caculating by y argument includes y=0', () => {
            let y = 3
            let result = ln.getPointByY(y)
            expect(result).toBeDefined()
            expect(result instanceof Point).toBe(true)
            expect(result).toEqual({ x: (y - ln.n) / (ln.slope), y })
           
        })

        describe('check errors', () => {
            it('should throw error when the argument is not a number', () => {
                expect(() => ln.getPointByY(true)).toThrow('argument is not a number')
                expect(() => ln.getPointByY('value')).toThrow('argument is not a number')
                expect(() => ln.getPointByY({ x: 8 })).toThrow('argument is not a number')
                expect(() => ln.getPointByY([9])).toThrow('argument is not a number')
                expect(() => ln.getPointByY(new Date())).toThrow('argument is not a number')
            })
            it('should throw error when no argument was sent', () => {
                expect(() => ln.getPointByY()).toThrow('no argument was sent')
            })
        })
    })
})