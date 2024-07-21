
const Point = require("../modules/ecs6-class/point")


describe('POINT_CLASS', () => {
    describe('ctor', () => {

        it('should build a new obj', () => {

            p1 = new Point()

            expect(p1).toBeDefined()
            expect(typeof (p1)).toBe('object')
            expect(p1 instanceof Point).toBe(true)
        })
        it('if x was given x should be defined else 0', () => {
            p1 = new Point({ x: 1 })
            p2 = new Point()
            expect(p1.x).toBeDefined()
            expect(p2.x).toBe(0)

        })
        it('if y was given y should be defined else 0', () => {
            p1 = new Point({ y: 1 })
            p2 = new Point()
            expect(p1.y).toBeDefined()
            expect(p2.y).toBe(0)
        })
        it('should start x and y with if no object argument was given',()=>{
            p1 = new Point(1,0)
           
            expect(p1).toBeDefined()
            expect(typeof(p1)).toBe('object')
            expect(p1 instanceof Point).toBe(true)
            expect(p1.x).toBe(0)
            expect(p1.y).toBe(0)

        })
    })

    describe('moveVertical', () => {
        it('should move the y with the given value and not change the x', () => {
            x = 1
            y = 1
            value = 5
            p1 = new Point({ x, y })
            p1.moveVertical(value)
            expect(p1.y).toBeDefined()
            expect(p1.y).toBe(y + value)
            expect(p1.x).toBe(x)

        })
        it('should do anything if value was not given', () => {
            x = 1
            y = 1

            p1 = new Point({ x, y })
            p1.moveVertical()
            expect(p1.y).toBeDefined()
            expect(p1.y).toBe(y)
            expect(p1.x).toBe(x)
        })

        it('should throw an error if value is not a number', () => {
            p1 = new Point({ w: 1, y: 0 })
            expect(()=>p1.moveVertical('1')).toThrow('value must be a number')
            expect(()=>p1.moveVertical({ value: 1 })).toThrow('value must be a number')
            expect(()=>p1.moveVertical([1])).toThrow('value must be a number')

        })
    })
    describe('moveHorizontal', () => {
        it('should move the x with the given value and not change the y', () => {
            x = 1
            y = 1
            value = 5
            p1 = new Point({ x, y })
            p1.moveHorizontal(value)
            expect(p1.x).toBeDefined()
            expect(p1.x).toBe(x + value)
            expect(p1.y).toBe(y)

        })
        it('should do anything if value was not given', () => {
            x = 1
            y = 1
            p1 = new Point({ x, y })
            p1.moveHorizontal()
            expect(p1.y).toBeDefined()
            expect(p1.y).toBe(y)
            expect(p1.x).toBe(x)
        })

        it('should throw an error if value is not a number', () => {
            p1 = new Point({ w: 1, y: 0 })
            expect(()=>p1.moveHorizontal('1')).toThrow('value must be a number')
            expect(()=>p1.moveHorizontal({ value: 1 })).toThrow('value must be a number')
            expect(()=>p1.moveHorizontal([1])).toThrow('value must be a number')

        })
    })



})