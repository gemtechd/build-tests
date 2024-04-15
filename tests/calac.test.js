const Point =require('../modules/ecs6-class/point')
const Line =require ('../modules/ecs6-class/line')

const { calculateDistance,calculateSlope,calculateJunctionPoint,calculateNOfLineFunction } = require("../modules/geometry-calculation");

describe('calculateDistance',()=>{
    it('should return distance',()=>{
        const response=calculateDistance(new Point({x:1,y:1}),new Point({x:3,y:3})) 

        expect(response).toBe(Math.sqrt(8))
    })
})

describe('calculateJunctionPoint',()=>{
    //FIXME
    it('should return true',()=>{
        const response= calculateJunctionPoint(new Line(new Point({x:4,y:1}),new Point({x:1,y:4})),new Line (new Point({x:-4,y:4}),new Point({x:-1,y:1})))
        expect(response).toBe(true)                                                                         
    })      
    it('should return false',()=>{
        const response= calculateJunctionPoint(new Line({point1:{x:-5,y:3} ,point2:undefined,n:-2,slope:-1}),new Line({point1:{x:-3,y:7} ,point2:undefined,n:4,slope:-1}))
        expect(response).toBe(false)                                                                                                   
    })
    //TODO
    // it('should return ',()=>{
    //     const response =calculateJunctionPoint(new Line(new Point({x:4,y:2}) ,new Point({x:1,y:4})),new Line (new Point({x:-1,y:1}),new Point({x:-4,y:1})))
    //     expect(response).toBe()
    // })
})


describe('calculateNOfLineFunction',()=>{
    it(' should return calculateNOfLineFunction',()=>{
        const response =calculateNOfLineFunction({point:{x:2,y:2},slope:-1})
        expect(response).toBe(4)
    })
})


describe('calculateSlope',()=>{
    it('should return slop',()=>{
        const response=calculateSlope({x:1,y:1},{x:2,y:2})
        expect(response).toBe(1)
    })
})











    