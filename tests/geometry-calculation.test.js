const Line = require("../modules/ecs6-class/line")
const Point = require("../modules/ecs6-class/point")
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require("../modules/geometry-calculation")


describe('calculateDistance', () => {
    it('should return the distance', () => {
        const p1 = new Point({ x: 1, y: 5 })
        const p2 = new Point({ x: 12, y: 5 })
        const result = calculateDistance(p1,p2)
        expect(result).toBeDefined()
        expect(typeof(result)).toBe('number')
    })
    it('should throw an error if no arguments where given',()=>{
        const p1 = new Point({ x: 1, y: 5 })
        expect(()=>calculateDistance(p1)).toThrow('must enter 2 points')
        expect(()=>calculateDistance()).toThrow('must enter 2 points')

    })
    it('should throw an error if points are not instances of Point',()=>{
        const p1 = { x: 1, y: 5 }
        const p2 = { x: 12, y: 5 }

        expect(()=>calculateDistance(p1,p2)).toThrow('points must be instances of Point')
        expect(()=>calculateDistance([new Point({ x: 1, y: 5 })],new Point({ x: 1, y: 5 }))).toThrow('points must be instances of Point')
        expect(()=>calculateDistance('p1',p2)).toThrow('points must be instances of Point')
        expect(()=>calculateDistance({point1:new Point({ x: 1, y: 5 })},{point2:new Point({ x: 1, y: 5 })})).toThrow('points must be instances of Point')
    })
})

describe('cacalculateJunctionPoint', () => {
    it('should return the Junction Point', () => {
        const p1 = new Point({ x: 1, y: 5 })
        const p2 = new Point({ x: 12, y: 5 })    
        line1 = new Line({p1,p2,n:5,slope:10})
        line2 = new Line({p1,p2,n:2,slope:12})

        const result = calculateJunctionPoint(line1,line2)
        expect(result).toBeDefined()
        expect(typeof(result)).toBe('object')
        expect(result instanceof Point).toBe(true)
    })
    it('should return false if slopes equales but not the ns',(()=>{
        const p1 = new Point({ x: 1, y: 5 })
        const p2 = new Point({ x: 12, y: 5 })  
        line1 = new Line({p1,p2,n:5,slope:10})
        line2 = new Line({p1,p2,n:2,slope:10})
        const result = calculateJunctionPoint(line1,line2)
        expect(result).toBeDefined()
        expect(typeof(result)).toBe('boolean')
        expect(result).toBe(false)

    }))
    it('should return true if both slopes and ns equals',(()=>{
        const p1 = new Point({ x: 1, y: 5 })
        const p2 = new Point({ x: 12, y: 5 })  
        line1 = new Line({p1,p2,n:5,slope:10})
        line2 = new Line({p1,p2,n:5,slope:10})
        const result = calculateJunctionPoint(line1,line2)
        expect(result).toBeDefined()
        expect(typeof(result)).toBe('boolean')
        expect(result).toBe(true)
        
    }))
    it('should throw an error if no arguments where given',()=>{
        const p1 = new Point({ x: 1, y: 5 })
        const p2 = new Point({ x: 12, y: 5 })  

        line2 = new Line({p1,p2,n:2,slope:10})

        expect(()=>calculateJunctionPoint(line2)).toThrow('must enter 2 lines')
        expect(()=>calculateJunctionPoint()).toThrow('must enter 2 lines')

    })
    it('should throw an error if lines are not instances of Line',()=>{

        const p1 = new Point({ x: 1, y: 5 })
        const p2 = new Point({ x: 12, y: 5 })  

        expect(()=>calculateJunctionPoint(p1,p2)).toThrow('lines must be instances of Line')
        expect(()=>calculateJunctionPoint([new Point({ x: 1, y: 5 })],new Point({ x: 1, y: 5 }))).toThrow('lines must be instances of Line')
        expect(()=>calculateJunctionPoint('p1',p2)).toThrow('lines must be instances of Line')
        expect(()=>calculateJunctionPoint({point1:new Point({ x: 1, y: 5 })},{point2:new Point({ x: 1, y: 5 })})).toThrow('lines must be instances of Line')
    })
})
describe('isPointOnLine',()=>{
    it('should return true if slope and n of  proxy line equals to the given line',()=>{
        const p1 = new Point({ x: 1, y: 5 })
        const p2 = new Point({ x: 12, y: 5 })  

        line2 = new Line({p1,p2,n:0,slope:5})
        const result =isPointOnLine(line2,p1)

        expect(result).toBeDefined()
        expect(result).toBe(true)

    })
    it('should return false when n of line and proxyline are not equales',()=>{
        const p1 = new Point({ x: 1, y: 5 })
        const p2 = new Point({ x: 12, y: 5 })  

        line2 = new Line({p1,p2,n:2,slope:5})
        const result =isPointOnLine(line2,p1)
        console.log(result);
        expect(result).toBeDefined()
        expect(result).toBe(false)
        line1 = new Line({p1,p2,n:2,slope:10})
        const result2 =isPointOnLine(line1,p1)
        console.log(result2);
        expect(result2).toBeDefined()
        expect(result2).toBe(false)

    })
    it('should throw an error if type doesnt match the exepted',()=>{
        const p1 = new Point({ x: 1, y: 5 })
        const p2 = new Point({ x: 12, y: 5 })  

        line2 = new Line({p1,p2,n:2,slope:10})
expect(()=>isPointOnLine(line2,'ll')).toThrow('point must be instance of Point')
expect(()=>isPointOnLine(line2,{point:p1})).toThrow('point must be instance of Point')
expect(()=>isPointOnLine(line2,[p1])).toThrow('point must be instance of Point')


expect(()=>isPointOnLine('line2',p1)).toThrow('line must be instance of Line')
expect(()=>isPointOnLine([line1],p1)).toThrow('line must be instance of Line')
expect(()=>isPointOnLine({line2},p1)).toThrow('line must be instance of Line')
    })
    it('should throw an error if arguments werent given',()=>{
        const p1 = new Point({ x: 1, y: 5 })
        const p2 = new Point({ x: 12, y: 5 })  

        line2 = new Line({p1,p2,n:2,slope:10})
        expect(()=>isPointOnLine()).toThrow('must get both line and point')
        expect(()=>isPointOnLine(line2)).toThrow('must get both line and point')
        expect(()=>isPointOnLine(p1)).toThrow('must get both line and point')

    })
})