
const Line = require('../../modules/ecs6-class/line')
const Point = require('../../modules/ecs6-class/point')
const { calculateDistance,calculateJunctionPoint,isPointOnLine} = require('../../modules/geometry-calculation')


describe('CALCULATE_DISTANCE',() => {
   it('should return the correct answer', () => {
      const line = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:1})})
      const result =  calculateDistance(line.point1,line.point2)
      expect(result).toBe(5)   
   })
   it('An error should be thrown when point1 is not of type Point', () => {
      expect(()=>calculateDistance('k',new Point({x:6,y:4}))).toThrowError('the type of point1 is not Point')
   })
   it('An error should be thrown when point2 is not of type Point', () => {
      expect(()=>calculateDistance(new Point({x:6,y:4}),'k')).toThrowError('the type of point2 is not Point')
   })
})

describe('CALCULATE_JUNCTION_POINT', () => {
   it('should return true when the 2 lines are equal', () =>{
      const line1 = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:1}),n:-0.5,slope:0.75})
      const line2 = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:1}),n:-0.5,slope:0.75})
      const result = calculateJunctionPoint(line1,line2)
      expect(result).toBeTruthy()
   })
   it('should return false when the 2 lines are parallels', () =>{
      const line1 = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:1}),n:-0.5,slope:0.75})
      const line2 = new Line({point1:new Point({x:5,y:3}),point2:new Point({x:1,y:0}),n:-0.75,slope:0.75})
      const result = calculateJunctionPoint(line1,line2)
      expect(result).toBeFalsy()
   })
   it('should return false when the 2 lines are parallels', () =>{
      const line1 = new Line({point1:new Point({x:6,y:4}),point2:new Point({x:2,y:1})})
      const line2 = new Line({point1:new Point({x:5,y:3}),point2:new Point({x:1,y:0})})
      const result = calculateJunctionPoint(line1,line2)
      expect(result).toBeFalsy()
   })
   it('should return point when the 2 lines are not equal', () =>{
      const line1 = new Line({point1:new Point({x:8,y:3}),point2:new Point({x:6,y:1}),slope:1})
      const line2 = new Line({point1:new Point({x:5,y:3}),point2:new Point({x:1,y:0}),slope:0.75})
      line1.calculateNOfLineFunction()
      line2.calculateNOfLineFunction()
      const result = calculateJunctionPoint(line1,line2)
      expect(result).toEqual({ x: 17, y: 12 })
   })
   it('An error should be thrown when line2 is not of type Line', () =>{
      const line1 = new Line({point1:new Point({x:8,y:3}),point2:new Point({x:6,y:1}),slope:1})
      line1.calculateNOfLineFunction()
      expect(()=>calculateJunctionPoint(line1,[])).toThrowError('the type of line2 is not Line')
   })
   it('An error should be thrown when line1 is not of type Line', () =>{
      const line2 = new Line({point1:new Point({x:8,y:3}),point2:new Point({x:6,y:1}),slope:1})
      line2.calculateNOfLineFunction()
      expect(()=>calculateJunctionPoint('g',line2)).toThrowError('the type of line1 is not Line')
   })
})


describe('IS_POINT_ON_LINE',() => {
   it('should return true when the point on this line',() => {
      const line = new Line({point1:new Point({x:8,y:4}),point2:new Point({x:2,y:1}),slope:0.5})
      line.calculateNOfLineFunction()
      const point = new Point({x:6,y:3})
      const result = isPointOnLine(line,point)
      expect(result).toBeTruthy()
   })
   
   it('should return true when the point on this line',() => {
      const line = new Line({point1:new Point({x:10,y:10}),point2:new Point({x:8,y:2}),slope:4})
      line.calculateNOfLineFunction()
      const point = new Point({x:6,y:-6})
      const result = isPointOnLine(line,point)
      expect(result).toBeTruthy()
   })
   it('should return false when the point is not on this line',() => {
      const line = new Line({point1:new Point({x:8,y:3}),point2:new Point({x:6,y:1}),slope:1})
      line.calculateNOfLineFunction()
      const point = new Point({x:5,y:6})
      const result =  isPointOnLine(line,point)
      expect(result).toBeFalsy()
   })
   it('An error should be thrown when the point is not of type Point', () =>{
      const line = new Line({point1:new Point({x:8,y:3}),point2:new Point({x:6,y:1}),slope:1})
      line.calculateNOfLineFunction()
      expect(()=>isPointOnLine(line,'k')).toThrowError('the type of point is not Point')
   })
   it('An error should be thrown when line is not of type Line', () => {
      const point = new Point({x:6,y:4})
      expect(()=>isPointOnLine('k',point)).toThrowError('the type of line is not Line')
   })
   it('An error should be thrown when the slope is undefined', () => {
      const line = new Line({point1:new Point({x:8,y:4}),point2:new Point({x:6,y:1})})
      const point = new Point({x:6,y:4})
      expect(() => isPointOnLine(line,point)).toThrowError('division by zero')
   })
})