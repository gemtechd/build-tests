const { calculateDistance,calculateAngle,
    calculateSlope,
    calculateNOfLineFunction,
    calculateJunctionPoint,calculateNOfLineFunction2} = require("../modules/geometry-calculation")
    const Line=require("../modules/ecs6-class/line")
    describe('calculateDistance',()=>{
        it('calculateDistance',()=>{
            const res=calculateDistance({x:5,y:3},{x:3,y:4})
            expect(res).toBe(2)
 
        })
    })
    describe('calculateJunctionPoint',()=>{
        it('calculateJunctionPoint return true',()=>{
            const line1=new Line({point1:{x:3,y:4},point2:{x:2,y:3},slope:3,n:3})
            const line2=new Line({point1:{x:4,y:4},point2:{x:3,y:3},slope:3,n:3})
            const res=calculateJunctionPoint(line1,line2)
            expect(res).toBe(true)
 
        })
    
        it('calculateJunctionPoint return false',()=>{
            const line1=new Line({point1:{x:3,y:4},point2:{x:2,y:3},slope:3,n:3})
            const line2=new Line({point1:{x:4,y:4},point2:{x:3,y:3},slope:3,n:1})
            const res=calculateJunctionPoint(line1,line2)
            expect(res).toBe(false)
 
        })
    })

    describe('calculateNOfLineFunction2',()=>{
        it('get n',()=>{
            const res=calculateNOfLineFunction2({x:2,y:3},1)
            expect(res).toBe(1)
 
        })
    
    } )    
    describe('calculateSlope',()=>{
        it('get slope',()=>{
            const res=calculateSlope({x:4,y:7},{x:2,y:3})
            expect(res).toBe(2)
 
        })
    } )    
