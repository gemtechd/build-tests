 const Line =require('../../../modules/ecs6-class/line')
 const Point = require('../../../modules/ecs6-class/point')
const{calculateSlope}=require('../../../modules/ecs6-class/line')

const mockConstructor1=jest.fn(constructor)
const mockConstructor=jest.fn(constructor)
const mockCalculateSlope=jest.fn(calculateSlope)

 describe('constructor tests',()=>{
   
   it('should create a Line instance with correct  slope, and n values',()=>{
       const l=new Line({n:4,slope:7})
       expect(l.slope).toBe(7)
       expect(l.n).toBe(4)
       
   })
it('should throw an error for invalid input types',()=>{
  const l=new Line({n:true,slope:7})
   expect(()=>l.toThrow('Invalid input should be numbers'))
   })
})
 describe('calculacalculateSlope function test',()=>{
    it('calculacalculateSlope should throw an error when dividing by zeroteSlope',()=>{
      const p1=mockConstructor(new Point({x:5,y:6}))
        const p2=mockConstructor(new Point({x:5,y:3}))
        const line=mockConstructor1(new Line({point1:p1,point2:p2}))
      expect(()=>line.calculateSlope()).toThrowError('error division by 0')
      
    })
    it('should return 2',()=>{
      const line=mockConstructor1(new Line({point1:new Point({x:4,y:8}),point2:new Point({x:5,y:10})}))
      line.calculateSlope()
      expect(line.slope).toBe(2)
      
    })
 })
 describe(' getPointByY',()=>{
    it('should return new point acoording the y value',()=>{
   const line=mockConstructor1(new Line({point1:new Point({x:0,y:4}),n:6,slope:2}));
   const l=line.getPointByY(line.point1.y)
   expect(l).toEqual(new Point({x:-1,y:4}))
    })
    it('shuold throw error when divison by zero',()=>{
      const line=mockConstructor1(new Line({point1:new Point({x:0,y:4}),point2:new Point({x:0,y:6}),slope:0}));
      expect(()=>line.getPointByY(line.point1.y)).toThrow("don't divide by 0")
    })
 })
 describe('getPointByX tests',()=>{
   it('check if the function return the currect value of y',()=>{
     const line=mockConstructor1(new Line({point1:new Point({x:8,y:0}),n:7,slope:5}))
     const l=line.getPointByX(line.point1.x)
     expect(l).toEqual(new Point({x:8,y:47}))
   })
 })

 describe('getPointOnXAsis tests', () => {
   it('should return the point on the x-axis with y-coordinate 0', () => {
     const line =mockConstructor1(new Line({ point1: new Point({ x: 8, y: 0 }), n: 7, slope: 5 })) 
     const pointOnXAxis = line.getPointOnXAsis();
     expect(pointOnXAxis).toEqual(new Point({ x: -1.4, y: 0 })); 
   });
 });
 describe('getPointOnYAsis tests', () => {
   it('should return the point on the y-axis with x-coordinate 0', () => {
     const line =mockConstructor1(new Line({ point1: new Point({ x: 0, y: 6 }), n: 7, slope: 5 })) ;
     const pointOnYAxis = line.getPointOnYAsis();
     expect(pointOnYAxis).toEqual(new Point({ x: 0, y: 7 }));
   });
 });
 
 describe('calculateNOfLineFunction tests',()=>{
   it('should update the n with the corrent value',()=>{
      const l=mockConstructor1(new Line({point1:new Point({x:0,y:0}),point2:new Point({x:2,y:2}),slope:5}))
      mockCalculateSlope(l.calculateSlope())
      l.calculateNOfLineFunction()
      expect(l.n).toEqual(0)
   })
 })
 