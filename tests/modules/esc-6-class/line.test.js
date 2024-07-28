const Line = require('../../../modules/ecs6-class/line')
const Point = require('../../../modules/ecs6-class/point')
const point1 = new Point({ x: 1, y: 2 })
const point2 = new Point({ x: 3, y: 4 })
const line = new Line({ point1, point2,n:2,slope:4 })
const line1 = new Line({})
let lineTest=new Line({})

describe ('ERRORS',()=>{
    it('Error checker for constructor',()=>{
        expect(()=>new Line({point1:new Line({})})).toThrow('The entered arguments is not valid!')
        expect(()=>new Line({n:"abc"})).toThrow('n should get a number')
        expect(()=>new Line({point2:true})).toThrow('The entered arguments is not valid!')
        expect(()=>new Line({point2:new Point['hello']})).toThrow('Point.hello is not a constructor')
        expect(()=>new Line({slope:"sss"})).toThrow('slop should get a number')

    })
})

describe('CALCULATE_SLOP', () => {
    it('should calculate the slop', () => {
        line.calculateSlope()
        expect(line.slope).toBe(1)

    })
})


describe('CALCULATE_N_OF_LINE_FUNCTION', () => {
    it('should calculate n of line', () => {
        line.calculateNOfLineFunction()
        expect(line.n).toBe(1)
    })
})
describe('GET_POINT_ON_Y_ASIS',()=>{
    it('should return getPointOnYAsis as per 0',()=>{
        expect(line.getPointOnYAsis()).toEqual({x:0,y:1})
    })
})
describe('GET_POINT_ON_X_ASIS',()=>{
    it('should return getPointOnXAsis as per 0',()=>{
        expect(line.getPointOnXAsis()).toEqual({x:-1,y:0})
    })
}) 
describe('GET_POINT_BY_X',()=>{
    it('should retutn y by x',()=>{
       expect(line.getPointByX(3)).toEqual({x:3,y:4})
    })
})   

describe('ERRORS',()=>{
    it('Error checker for function getPointByX',()=>{
        expect(()=>lineTest.getPointByX('a')).toThrow('the function should get number')
        expect(()=>lineTest.getPointByX(['acc','add'])).toThrow('the function should get number')
        expect(()=>lineTest.getPointByX(true)).toThrow('the function should get number')
        expect(()=>lineTest.getPointByX()).toThrow('the function should get number')
        expect(()=>lineTest.getPointByX((v)=>v)).toThrow('the function should get number')
  
     })

   
})

describe ('GET_POINT_BY_Y',()=>{
    it('should return x by y',()=>{
        expect(line.getPointByY(5)).toEqual({x:4,y:5})
    })
})

describe('ERRORS',()=>{
    it('Error checker for function getPointByY',()=>{
        expect(()=>lineTest.getPointByY('a')).toThrow('the function should get number')
        expect(()=>lineTest.getPointByY(['acc','add'])).toThrow('the function should get number')
        expect(()=>lineTest.getPointByY(true)).toThrow('the function should get number')
        expect(()=>lineTest.getPointByY()).toThrow('the function should get number')
        expect(()=>lineTest.getPointByY((v)=>v)).toThrow('the function should get number')
  
     })
   
})


