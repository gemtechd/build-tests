const Point = require("../modules/ecs6-class/point")

describe('POINT', () => {
    const p = new Point({ x: 5, y: 8 })
    describe('CONSTRACTOR',()=>{
        it('should build a point with the entered values', () => {
            const p1 = new Point({ x: 5, y: 8 })
            expect(p1).toEqual({ "x": 5, "y": 8 })
        })
        it('A point with the value 0 should be built if there is not enough data', () => {
            const p1 = new Point({ x: 5 })
            expect(p1).toEqual({ "x": 5, "y": 0 })
            const p2 = new Point({ y: 5 })
            expect(p2).toEqual({ "x": 0, "y": 5 })
            const p3 = new Point({})
            expect(p3).toEqual({ "x": 0, "y": 0 })
            const p4 = new Point()
            expect(p4).toEqual({ "x": 0, "y": 0 })
        })
    })
    describe('MOVE_POINT_HORIZONTAL', () => {
        it('The point should be moved according to the entered value', () => { 
            const p1 = new Point({ x: 5, y: 8 })
            p1.moveHorizontal(5)
            expect(p1).toEqual({ "x": 10, "y": 8 })
        })
    })
    describe('MOVE_POINT_VERTICAL', () => {
        it('The point should be moved according to the entered value', () => {
            const p1 = new Point({ x: 5, y: 8 })
            p1.moveVertical(5)
            expect(p1).toEqual({ "x": 5, "y": 13 })
        })
    })

    describe('ERRORS',()=>{
        describe('CONSTRACTOR',()=>{
            test('should throw error if the parameters not of number type',()=>{
                expect(()=>new Point({x:'5'})).toThrow('the parameter must be number type')
                expect(()=>new Point({x:()=>{}})).toThrow('the parameter must be number type')
                expect(()=>new Point({x:true})).toThrow('the parameter must be number type')
                expect(()=>new Point({x:{x:5}})).toThrow('the parameter must be number type')
            })
        })
        describe('MOVE_POINT_HORIZONTAL',()=>{
            test('should throw error if no data entered',()=>{
                expect(()=>p.moveHorizontal()).toThrow('not data')
            })
            test('should throw error if the parameter not of number type',()=>{
                expect(()=>p.moveHorizontal('5')).toThrow('the parameter must be number type')
                expect(()=>p.moveHorizontal(()=>{})).toThrow('the parameter must be number type')
                expect(()=>p.moveHorizontal(true)).toThrow('the parameter must be number type')
                expect(()=>p.moveHorizontal({x:5})).toThrow('the parameter must be number type')
            })
        })
        describe('MOVE_POINT_VERTICAL',()=>{
            test('should throw error if no data entered',()=>{
                expect(()=>p.moveVertical()).toThrow('not data')
            })
            test('should throw error if the parameter not of number type',()=>{
                expect(()=>p.moveVertical('5')).toThrow('the parameter must be number type')
                expect(()=>p.moveVertical(()=>{})).toThrow('the parameter must be number type')
                expect(()=>p.moveVertical(true)).toThrow('the parameter must be number type')
                expect(()=>p.moveVertical({x:5})).toThrow('the parameter must be number type')
            })
        })
    })
})