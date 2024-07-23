const Line = require("../../modules/ecs6-class/line")
const Point = require("../../modules/ecs6-class/point")
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require("../../modules/geometry-calculation")

let point1 = new Point({ x: 4, y: 3 })
let point2 = new Point({ x: 3, y: 2 })
let point3 = new Point({ x: 2, y: 2 })
let point4 = new Point({ x: 2, y: 1 })
let point5 = new Point({ x: 2, y: 2 })
let point6 = new Point({ x: 1, y: 1 })


let line1 = new Line({point1, point2,slope:2,n:3})
let line2 = new Line({point3, point4,slope:2,n:5})
let line3 = new Line({point3, point4,slope:4,n:3})
let line4 = new Line({point5, point6,slope:1,n:0})
let line5 = new Line({point5, point4,slope:1,n:3})
let line6 = new Line({point5, point4,slope:1,n:3})




describe('CALCULATE_DISTANCE', () => {
    it('return the sqrt for distance to point1 with point2', () => {
        expect(calculateDistance(point1,point2)).toBe(1.4142135623730951)
    })
    describe('ERROR',()=>{
        it('',()=>{
            expect(()=>calculateDistance()).toThrow('the function must get an arguments!')
            expect(()=>calculateDistance(new Point({}),new Line({}))).toThrow("the arguments is not instance of 'Point'!")
            expect(()=>calculateDistance('wow')).toThrow('the function must get an arguments!')
            expect(()=>calculateDistance(['a','b'])).toThrow('the function must get an arguments!')
            expect(()=>calculateDistance(new Line({}))).toThrow('the function must get an arguments!')
            expect(()=>calculateDistance(true)).toThrow('the function must get an arguments!')
            expect(()=>calculateDistance({})).toThrow('the function must get an arguments!')
            expect(()=>calculateDistance(line1,line2)).toThrow("the arguments is not instance of 'Point'!")
            expect(()=>calculateDistance(new Line({}),new Line({}))).toThrow("the arguments is not instance of 'Point'!")
            expect(()=>calculateDistance([],[])).toThrow("the arguments is not instance of 'Point'!")
            expect(()=>calculateDistance('a','b')).toThrow("the arguments is not instance of 'Point'!")
            expect(()=>calculateDistance(1,2)).toThrow("the arguments is not instance of 'Point'!")
        })
    })
})

describe('CALCULATE_JUNCTION_POINT', () => {
    it('', () => {
        expect(calculateJunctionPoint(line1,line1)).toBe(true)
    })
    
    it('', () => {
        expect(calculateJunctionPoint(line1,line2)).toBe(false)
    })

    it('', () => {
        expect(calculateJunctionPoint(line2,line3)).toEqual({x: 1, y: 7})
    })
    it('mock function on calculateJunctionPoint function', () => {
        jest.spyOn(line1, 'getPointByX').mockImplementation((y) => {
            return { x: 0, y };
        });

        const lines = calculateJunctionPoint(line6,line6);

        expect(lines).toEqual(true);
    })
    describe('ERROR',()=>{
        it('',()=>{
            expect(()=>calculateJunctionPoint()).toThrow('the function must get an arguments!')
            expect(()=>calculateJunctionPoint(new Point({}),new Line({}))).toThrow("the arguments is not instance of 'Line'!")
            expect(()=>calculateJunctionPoint('wow')).toThrow('the function must get an arguments!')
            expect(()=>calculateJunctionPoint(['a','b'])).toThrow('the function must get an arguments!')
            expect(()=>calculateJunctionPoint(new Line({}))).toThrow('the function must get an arguments!')
            expect(()=>calculateJunctionPoint(true)).toThrow('the function must get an arguments!')
            expect(()=>calculateJunctionPoint({})).toThrow('the function must get an arguments!')
            expect(()=>calculateJunctionPoint(point1,point2)).toThrow("the arguments is not instance of 'Line'!")
            expect(()=>calculateJunctionPoint(new Point({}),new Point({}))).toThrow("the arguments is not instance of 'Line'!")
            expect(()=>calculateJunctionPoint([],[])).toThrow("the arguments is not instance of 'Line'!")
            expect(()=>calculateJunctionPoint('a','b')).toThrow("the arguments is not instance of 'Line'!")
            expect(()=>calculateJunctionPoint(1,2)).toThrow("the arguments is not instance of 'Line'!")
        })
    })

})

describe('IS_POINT_ON_LINE', () => {
    it('', () => {
        expect(isPointOnLine(line4,point6)).toBe(true)
    })

    it('', () => {
        expect(isPointOnLine(line5,point6)).toBe(false)
    })
    it('', () => {
        expect(isPointOnLine(line1,point1)).toBe(false)
    })

    describe('ERROR',()=>{
        it('',()=>{
            expect(()=>isPointOnLine()).toThrow('the function must get an arguments!')
            expect(()=>isPointOnLine(new Point({}),new Line({}))).toThrow("the arguments is not instance of 'Line' and 'Point!")
            expect(()=>isPointOnLine('wow')).toThrow('the function must get an arguments!')
            expect(()=>isPointOnLine(['a','b'])).toThrow('the function must get an arguments!')
            expect(()=>isPointOnLine(new Line({}))).toThrow('the function must get an arguments!')
            expect(()=>isPointOnLine(true)).toThrow('the function must get an arguments!')
            expect(()=>isPointOnLine({})).toThrow('the function must get an arguments!')
            expect(()=>isPointOnLine(point1,point2)).toThrow("the arguments is not instance of 'Line' and 'Point!")
            expect(()=>isPointOnLine(line1,line2)).toThrow("the arguments is not instance of 'Line' and 'Point!")
            expect(()=>isPointOnLine(new Line({point1:new Line({})}),new Line({}))).toThrow("the object not instance of 'Point'!")
            expect(()=>isPointOnLine(new Point({}),new Point({}))).toThrow("the arguments is not instance of 'Line' and 'Point!")
            expect(()=>isPointOnLine(point1,line1)).toThrow("the arguments is not instance of 'Line' and 'Point!")
            expect(()=>isPointOnLine([],[])).toThrow("the arguments is not instance of 'Line' and 'Point!")
            expect(()=>isPointOnLine('a','b')).toThrow("the arguments is not instance of 'Line' and 'Point!")
            expect(()=>isPointOnLine(1,2)).toThrow("the arguments is not instance of 'Line' and 'Point!")
        })
    })
})