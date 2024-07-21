const Line = require('../modules/ecs6-class/line')
const Point = require('../modules/ecs6-class/point')

describe('LINE_CLASS', () => {
    describe('ctor', () => {
        it('should build a new obj', () => {
            l = new Line()
            expect(l).toBeDefined()
            expect(typeof (l)).toBe('object')
            expect(l instanceof Line).toBeTruthy()
        })
        it('point1 should be type of point ', () => {
            point1 = new Point({ x: 1, y: 2 })
            l = new Line({ point1 })
            l2 = new Line()
            expect(l).toBeDefined()
            expect(typeof (l)).toBe('object')
            expect(l.point1 instanceof Point).toBe(true)
            expect(l2).toBeDefined()
            expect(typeof (l2)).toBe('object')
            expect(l2.point2 instanceof Point).toBe(true)
        })
        it('point2 should be type of point ', () => {
            point2 = new Point({ x: 1, y: 2 })

            l = new Line({ point2 })
            l2 = new Line()
            expect(l).toBeDefined()
            expect(typeof (l)).toBe('object')
            expect(l.point2 instanceof Point).toBe(true)
            expect(l2).toBeDefined()
            expect(typeof (l2)).toBe('object')
            expect(l2.point2 instanceof Point).toBe(true)
        })
        it('should build an empty obj if no parameters were given', () => {

        })

    })
    describe('calculateSlope', () => {
        it('should put the calculated slope into slope', () => {
            const l = new Line()
            l.calculateSlope()
            expect(typeof (l.slope)).toBe('number')
        })


    })
    describe('calculateNOfLineFunction', () => {
        it('should put the calculate N Of Line into n',()=>{
            const l = new Line()
            l.calculateNOfLineFunction()
            expect(typeof (l.n)).toBe('number')
        })
      
    })
    describe('getPointByX', () => {
        it('should return a point',()=>{
            const l = new Line()
            const point = l.getPointByX(1)
            expect(point).toBeDefined()
            expect(typeof (point)).toBe('object')
            expect(point instanceof Point).toBeTruthy()
        })
   
    })
    it('should calculate x as 0 if no number was given', () => {
        const l = new Line()
        const point = l.getPointByX()
        expect(point).toBeDefined()
        expect(typeof (point)).toBe('object')
        expect(point instanceof Point).toBeTruthy()
        expect(point.x).toBe(0)
    })
    it('should throw an error if x is not type of number', () => {
        const l = new Line()

        expect(() => l.getPointByX('12')).toThrow('value must be a number')
        expect(() => l.getPointByX({ x: 12 })).toThrow('value must be a number')
        expect(() => l.getPointByX([12])).toThrow('value must be a number')

    })

    describe('getPointByY', () => {
        it('should return a point',()=>{
                const l = new Line()
        const point = l.getPointByX(1)
        expect(point).toBeDefined()
        expect(typeof (point)).toBe('object')
        expect(point instanceof Point).toBeTruthy() 
        })
   
    })
    it('should calculate y as 0 if no number was given', () => {
        const l = new Line()
        const point = l.getPointByY()
        expect(point).toBeDefined()
        expect(typeof (point)).toBe('object')
        expect(point instanceof Point).toBeTruthy()
        expect(point.y).toBe(0)
    })
    it('should throw an error if y is not type of number', () => {
        const l = new Line()

        expect(() => l.getPointByY('12')).toThrow('value must be a number')
        expect(() => l.getPointByY({ x: 12 })).toThrow('value must be a number')
        expect(() => l.getPointByY([12])).toThrow('value must be a number')

    })

    describe('getPointOnXAsis', () => {
        it('should call getPointByX',()=>{
            const l = new Line()
            const result = l.getPointOnXAsis()
            expect(result).toBeDefined()
            expect(typeof (result)).toBe('object')
            expect(result instanceof Point).toBeTruthy()

            expect(result).toEqual(l.getPointByY(0))

        })
      
    })
    describe('getPointOnYAsis', () => {
        it('should call getPointByY',()=>{
            const l = new Line()
            const result = l.getPointOnYAsis()
            expect(result).toBeDefined()
            expect(typeof(result)).toBe('object')
            expect(result instanceof Point).toBeTruthy()
            console.log({result});
            expect(result).toEqual(l.getPointByX(0))

        })
    })
   
})