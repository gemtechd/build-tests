const Line=require("../modules/ecs6-class/line")
const Point=require("../modules/ecs6-class/point")

describe('addPoint', () => {
    it('addPointErr', () => {
        try {
            const line = new Line({})
            expect(line.point2).toThrow()
        }
        catch (e) {
            console.log(e);
        }
    })
    it('addPoint1', () => {
        try {
            const line = new Line({})
            line.addPoint({ x: 2, y: 3 })
            expect(line.point1).toBe({ x: 2, y: 3 })
        }
        catch (e) {
            console.log(e);
        }
    })
})
describe('points',()=>{
    it('should return point',()=>{
    const line=new Line({point1:{x:1,y:3},point2:{x:3,y:4}})
    expect(line.Points).toEqual({point1:{x:1,y:3},point2:{x:3,y:4}})})
})
describe('setSlop',()=>{
    it('setslop',()=>{
        const line=new Line({slope:undefined})
       line.Slope=5
        expect(line.slope).toBe(5)

    })
})
 describe('getslope',()=>{
     it('should return slop',()=>{
         const line=new Line({point1:{x:3,y:4},point2:{x:2,y:3}})
         expect(line.Slope).toBe(1)})
 })
 describe('set N',()=>{
    it('setN',()=>{
        const line=new Line({n:5})
        expect(line.N).toBe(5)
    })
 })
 describe('get N',()=>{
    it('getN',()=>{
        const line=new Line({point1:{x:3,y:10},slope:3})
        expect(line.N).toBe(1)
    })
 })
 describe('getPointOnXAsis',()=>{
    it('get Point On X Asis',()=>{
        const line=new Line({slope:3,n:3})
        const res=line.getPointOnXAsis()
        expect(res.y).toBe(3)
    })
 })
 describe('getPointOnYAsis',()=>{
    it('get Point On Y Asis',()=>{
        const line=new Line({slope:3,n:3})
        const res=line.getPointOnYAsis()
        expect(res.x).toBe(-1)
    })
 })
 describe('isPointOnLine',()=>{
    it('is Point On Line false',()=>{
      const line=new Line({point1:{x:3,y:4},point2:{x:2,y:3},slope:3,n:3})
      const res=line.isPointOnLine()
      expect(res).toBe(false)
    })
    it('is Point On Line true',()=>{
        const line=new Line({point1:{x:3,y:4},point2:{x:2,y:3},slope:1,n:1})
        const res=line.isPointOnLine({x:2,y:3})
        expect(res).toBe(true)
      })
 })
 describe('getPointByX',()=>{
    it('get Point By X',()=>{
      const line=new Line({point1:{x:3,y:4},point2:{x:2,y:3},slope:3,n:3})
      const res=line.getPointByX(3)
      expect(res).toEqual({x: 3,y: 12})
    })
})
describe('getPointByY',()=>{
    it('get Point By Y',()=>{
      const line=new Line({point1:{x:3,y:4},point2:{x:2,y:3},slope:1,n:2})
      const res=line.getPointByY(3)
      expect(res).toEqual({x: 1,y: 3})
    })
})


