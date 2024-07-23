
const Line = require('../../modules/ecs6-class/line')
const Point = require('../../modules/ecs6-class/point')
const { calculateDistance,calculateJunctionPoint,isPointOnLine} = require('../../modules/geometry-calculation')



describe('CALCULATE_DISTANCE',() => {
   it('should return the correct answer', () => {
      const line = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:1})})
      const result =  calculateDistance(line.point1,line.point2)
      expect(result).toBe(5)   
   })
})
describe('CALCULATE_JUNCTION_POINT', () => {
   it('should return true when the 2 lines are equal', () =>{
      const line1 = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:1})})
      const line2 = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:1})})
      line1.calculateSlope()
      line2.calculateSlope()
      line1.calculateNOfLineFunction()
      line2.calculateNOfLineFunction()
      const result = calculateJunctionPoint(line1,line2)
      expect(result).toBeTruthy()
   })

   it('should return false when the 2 lines are parallels', () =>{
      const line1 = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:1})})
      const line2 = new Line({point1:new Point({x:5,y:3}),point2:new Point({x:1,y:0})})
      line1.calculateSlope()
      line2.calculateSlope()
      line1.calculateNOfLineFunction()
      line2.calculateNOfLineFunction()
      const result = calculateJunctionPoint(line1,line2)
      expect(result).toBeFalsy()
   })

   it('should return point when the 2 lines are not equal', () =>{
      const line1 = new Line({point1:new Point({x:8,y:3}),point2:new Point({x:6,y:1})})
      const line2 = new Line({point1:new Point({x:5,y:3}),point2:new Point({x:1,y:0})})
      line1.calculateSlope()
      line2.calculateSlope()
      line1.calculateNOfLineFunction()
      line2.calculateNOfLineFunction()
      const result = calculateJunctionPoint(line1,line2)
      expect(result).toEqual({ x: 17, y: 12 })
   })
})

describe('IS_POINT_ON_LINE',() => {
   it('should return true when the point on this line',() => {
      const line = new Line({point1:new Point({x:8,y:4}),point2:new Point({x:2,y:1})})
      line.calculateSlope()
      line.calculateNOfLineFunction()
      console.log({line});
      const point = new Point({x:6,y:3})
      const result = isPointOnLine(line,point)
      expect(result).toBeTruthy()
   })
   it('should return true when the point on this line',() => {
      const line = new Line({point1:new Point({x:10,y:10}),point2:new Point({x:8,y:2})})
      line.calculateSlope()
      line.calculateNOfLineFunction()
      console.log({line});
      const point = new Point({x:6,y:-6})
      const result = isPointOnLine(line,point)
      expect(result).toBeTruthy()
   })
   it('should return false when the point is not on this line',() => {
      const line = new Line({point1:new Point({x:8,y:3}),point2:new Point({x:6,y:1})})
      line.calculateSlope()
      line.calculateNOfLineFunction()
      const point = new Point({x:5,y:6})
      const result =  isPointOnLine(line,point)
      expect(result).toBeFalsy()
   })
})