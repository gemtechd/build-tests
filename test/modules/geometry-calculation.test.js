const Line = require('../../modules/ecs6-class/line')
const Point = require('../../modules/ecs6-class/point')
const {calculateDistance,calculateJunctionPoint,isPointOnLine}=require('../../modules/geometry-calculation')

const mockConstructor=jest.fn(constructor)
const mockConstructor1=jest.fn(constructor)

describe('calculateDistance tests',()=>{
    it('should return the distance',()=>{
       const line=mockConstructor1(new Line({point1:new Point({x:0,y:0}),point2:new Point({x:0,y:0})})) 
       const dis=calculateDistance(line.point1,line.point2)
       expect(dis).toBe(0)
    })
    it('should throw error when the function calculateDistance get values that not from point type',()=>{
       const point1=mockConstructor1(new Line({n:7,slope:4}))
       const point2=mockConstructor1(new Line({n:7,slope:4}))
       expect(()=>calculateDistance(point1,point2)).toThrowError('point1 and point2 must be of the Point type')
    })
    it('should throw error when point1 is not of point type',()=>{
        const point1=mockConstructor1(new Line({n:7,slope:4}))
        const point2=mockConstructor(new Point({x:5,y:9}))
        expect(()=>calculateDistance(point1,point2)).toThrowError('point1 must be of the Point type')
    })
    it('should throw error when point2 is not of point type',()=>{
        const point1=mockConstructor(new Point({x:5,y:9}))
        const point2= mockConstructor1(new Line({n:7,slope:4}))
        expect(()=>calculateDistance(point1,point2)).toThrowError('point2 must be of the Point type')
    })
})
describe('calculateJunctionPoint tests',()=>{
    it('should throw error when line1 and line2 is not of line type',()=>{
        const line1=mockConstructor(new Point({x:1,y:2}))
        const line2=mockConstructor(new Point({x:1,y:2}))
        expect(()=>calculateJunctionPoint(line1,line2)).toThrowError('line1 and line2 must be of the Line type')
    })
    it('should throw error when line1 is not of line type',()=>{
        const line1=mockConstructor(new Point({x:1,y:2}))
        const line2=mockConstructor1(new Line({point1:new Point({x:1,y:2})}))
        expect(()=>calculateJunctionPoint(line1,line2)).toThrowError('line1 must be of the Line type')
    })
    it('should throw error when line2 is not of line type',()=>{
        const line1=mockConstructor1(new Line({point1:new Point({x:1,y:2})}))
        const line2=mockConstructor(new Point({x:1,y:2}))
        expect(()=>calculateJunctionPoint(line1,line2)).toThrowError('line2 must be of the Line type')
    })

    it('',()=>{
       const line1=new Line({n:8,slope:7}) 
       const line2=new Line({n:8,slope:7}) 
       const t=calculateJunctionPoint(line1,line2)
       expect(t).toBe(true)
    })
    it('',()=>{
        const line1=new Line({n:8,slope:7}) 
        const line2=new Line({n:5,slope:7}) 
        const t=calculateJunctionPoint(line1,line2)
        expect(t).toBe(false)
    })
    it('',()=>{
        const line1=new Line({n:8,slope:9}) 
        const line2=new Line({n:5,slope:7}) 
        const t=calculateJunctionPoint(line1,line2)
        expect(t).toEqual(new Point({x:-1.5,y:-5.5}))
    })
})
describe('isPointOnLine tests',()=>{
    it('should throw error when line is not of line type &point is not of point type ',()=>{
        const line=mockConstructor1(new Point({x:4,y:6}))
        const point=mockConstructor(new Line({n:1,slope:8}))
        expect(()=>isPointOnLine(line,point)).toThrowError("The object line should be of the Line type and object point must be of the Point type")
    })
    it('should throw error when line is not of line type',()=>{
        const line=mockConstructor1(new Point({x:4,y:6}))
        const point=mockConstructor(new Point({x:1,y:8}))
        expect(()=>isPointOnLine(line,point)).toThrowError("The object line should be of the Line type")
    })
    it('should throw error when point is not of point type',()=>{
        const line=mockConstructor1(new Line({n:4,slope:6}))
        const point=mockConstructor(new Line({n:1,slope:8}))
        expect(()=>isPointOnLine(line,point)).toThrowError("The object point should be of the Point type")
    })
    it('',()=>{
        const line=new Line({point1:new Point({x:7,y:10}),slope:1})
        const point=new Point({x:4,y:8})
        const result=isPointOnLine(line,point)
        expect(result).toBe(false)
    })
    it('',()=>{
        const line=new Line({point1:new Point({x:7,y:10}),slope:1,n:4})
        const point=new Point({x:6,y:9})
        const result=isPointOnLine(line,point)
        expect(result).toBe(false)
    })
    it('',()=>{
        const line=new Line({point1:new Point({x:7,y:10}),slope:1,n:3})
        const point=new Point({x:6,y:9})
        const result=isPointOnLine(line,point)
        expect(result).toBe(true)
    })
    
})
