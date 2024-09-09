const Point = require("../modules/ecs6-class/point")
const Line = require("../modules/ecs6-class/line")

describe('LINE', () => {
    const l =new Line({point1:new Point({ x: 5, y: 8 }),point2:new Point({ x: 4, y: 7 })})
    describe('CONSTRACTOR',()=>{
        test('should build a line with the entered values', () => {
            const l1 = new Line({point1:new Point({ x: 5,y:8 }),point2:new Point({ x: 3,y:5 }),n:4,slope:8})
            expect(l1).toMatchObject({"point1":{ "x": 5, "y": 8 },"point2":{ "x": 3, "y": 5 },"n":4,"slope":8})
        })
        test('should build a line with default parameters if not entered values',()=>{
            const l1=new Line()
            expect(l1).toMatchObject({"point1":{ "x": 0, "y": 0 },"point2":{ "x": 0, "y": 0 },"n":undefined,"slope":undefined})
        })
    })
    test('should calculate true of slope',()=>{
        l.calculateSlope()
        expect(l).toMatchObject({"slope":1})
    })
    test('should calculate true of n of line',()=>{
        l.calculateNOfLineFunction()
        expect(l).toMatchObject({"n":3})
    })
    test('should return a correct Y value for X',()=>{ 
        const result=l.getPointByX(3)
        expect(result).toEqual({"x":3,"y":6})
    })
    test('should return a correct X value for Y',()=>{ 
        const result=l.getPointByY(6)
        expect(result).toEqual({"x":3,"y":6})
    })
    test('should return a correct Y value for x=0',()=>{ 
        const result=l.getPointOnYAsis()
        expect(result).toEqual({"x":0,"y":3})
    })
    test('should return a correct X value for y=0',()=>{ 
        const result=l.getPointOnXAsis()
        expect(result).toEqual({"x":-3,"y":0})
    })

    describe('ERRORS',()=>{
        describe('CONSTRACTOR',()=>{
            test('should throw error if the parameters of wrong type',()=>{
                expect(()=>new Line({point1:{ x: 5, y: 8 }})).toThrow('the point must be point type')
                expect(()=>new Line({point2:4})).toThrow('the point must be point type')
                expect(()=>new Line({point2:"x:2,y:4"})).toThrow('the point must be point type')
                expect(()=>new Line({n:"3"})).toThrow('the n and slope must be number type')
                expect(()=>new Line({slope:true})).toThrow('the n and slope must be number type')
                expect(()=>new Line({slope:{slope:5}})).toThrow('the n and slope must be number type')
                expect(()=>new Line({slope:()=>{}})).toThrow('the n and slope must be number type')
            })
        })
        describe('GET_POINT_BY_X FUNCTION',()=>{
            test('should throw error if not data',()=>{
                expect(()=>l.getPointByX()).toThrow('not data')
            })
            test('should throw error if the parameter of wrong type',()=>{
                expect(()=>l.getPointByX("5")).toThrow('the parameter must be number type')
                expect(()=>l.getPointByX(true)).toThrow('the parameter must be number type')
                expect(()=>l.getPointByX(()=>{})).toThrow('the parameter must be number type')
                expect(()=>l.getPointByX({x:5})).toThrow('the parameter must be number type')
            })
        })
        describe('GET_POINT_BY_Y FUNCTION',()=>{
            test('should throw error if not data',()=>{
                expect(()=>l.getPointByY()).toThrow('not data')
            })
            test('should throw error if the parameter of wrong type',()=>{
                expect(()=>l.getPointByY("5")).toThrow('the parameter must be number type')
                expect(()=>l.getPointByY(true)).toThrow('the parameter must be number type')
                expect(()=>l.getPointByY(()=>{})).toThrow('the parameter must be number type')
                expect(()=>l.getPointByY({x:5})).toThrow('the parameter must be number type')
            })
        })
    })
})