const Line = require('../../modules/ecs6-class/line')
const Point = require('../../modules/ecs6-class/point')
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../../modules/geometry-calculation')

const point1 = new Point({ x: 4, y: 3 })
const point2 = new Point({ x: 3, y: 2 })
const point3 = new Point({ x: 2, y: 2 })
const point4 = new Point({ x: 2, y: 1 })
const point5 = new Point({ x: 2, y: 2 })
const point6 = new Point({ x: 1, y: 1 })

const line1 = new Line({ point1, point2, slope: 2, n: 3 })
const line2 = new Line({ point1: point3, point2: point4, slope: 2, n: 5 })
const line3 = new Line({ point1: point3, point2: point4, slope: 4, n: 3 })
const line4 = new Line({ point1: point5, point2: point6, slope: 1, n: 0 })
const line5 = new Line({ point1: point5, point2: point4, slope: 1, n: 3 })


describe('CALCULATE_DISTANCE', () => {
    it('should distance ', () => {
        expect(calculateDistance(point1, point2)).toEqual(1.4142135623730951)
    })
})
describe('ERRORS', () => {
    it('Error checker for function calculateDistance', () => {
        expect(() => calculateDistance('aaa')).toThrow('the function must get an arguments')
        expect(() => calculateDistance(['a', 'b'])).toThrow('the function must get an arguments')
        expect(() => calculateDistance(new Line({}))).toThrow('the function must get an arguments')
        expect(() => calculateDistance(true)).toThrow('the function must get an arguments')
        expect(() => calculateDistance({})).toThrow('the function must get an arguments')
        expect(() => calculateDistance(line1, line2)).toThrow("the arguments is not instance of 'Point'")
        expect(() => calculateDistance(new Line({}), new Line({}))).toThrow("the arguments is not instance of 'Point'")
        expect(() => calculateDistance([], [])).toThrow("the arguments is not instance of 'Point'")
        expect(() => calculateDistance('a', 'b')).toThrow("the arguments is not instance of 'Point'")
        expect(() => calculateDistance(1, 2)).toThrow("the arguments is not instance of 'Point'")

    })
})

describe('CALCULATE_JUNCTION_POINT', () => {
    it('should return true', () => {
        expect(calculateJunctionPoint(line1, line1)).toEqual(true)
    })
    it('should return false', () => {
        expect(calculateJunctionPoint(line1, line2)).toEqual(false)
    })
    it('should return junctionPoint', () => {
        expect(calculateJunctionPoint(line2, line3)).toEqual({ x: 1, y: 7 })
    })
   
    it('should slope line1',()=>{
        const line=new Line({point1,point2,slope:undefined,n:5})
        expect(calculateJunctionPoint(line, line1)).toEqual({ x: 2, y: 7 })

    })
    it('should slope line2',()=>{
        const line=new Line({point1,point2,slope:undefined,n:5})
         expect(calculateJunctionPoint(line1, line)).toEqual({ x: 2, y: 7 })

    })

    it('should n line1',()=>{
        const line=new Line({point1,point2,slope:3,n:undefined})
        expect(calculateJunctionPoint(line, line1)).toEqual({ x: 12, y: 27 })

    })
    it('should n line2',()=>{
        const line=new Line({point1,point2,slope:4,n:undefined})
         expect(calculateJunctionPoint(line1, line)).toEqual({ x: 8, y: 19 })

    })
   

    it('mocking calculateJunctionPoint function', () => {
        const line1 = new Line({});
        const line2 = new Line({});
        line1.slope = 2;
        line2.slope = 3;
        line1.n = 1;
        line2.n = 2;

        line1.getPointByX = jest.fn().mockReturnValue({ x: 3, y: 5 });

        const result = calculateJunctionPoint(line1, line2);

        expect(result).toEqual({ x: 3, y: 5 });
    })

   
})

describe('ERRORS', () => {
    it('Error checker for function calculateJunctionPoint', () => {

        expect(() => calculateJunctionPoint()).toThrow('the function must get line1 and line2')
        expect(() => calculateJunctionPoint(new Point({}), new Line({}))).toThrow("line1 should be of type 'Line'")
        expect(() => calculateJunctionPoint(new Line({}), new Point({}))).toThrow("line2 should be of type 'Line'")
        expect(() => calculateJunctionPoint(['a', 'b'])).toThrow('the function must get line1 and line2')
        expect(() => calculateJunctionPoint(new Line({}))).toThrow('the function must get line1 and line2')
        expect(() => calculateJunctionPoint(true)).toThrow("the function must get line1 and line2")
        expect(() => calculateJunctionPoint({})).toThrow('the function must get line1 and line2')
        expect(() => calculateJunctionPoint(point1, point2)).toThrow("line1 and line2 should be of type 'Line'")
        expect(() => calculateJunctionPoint(new Point({}), new Point({}))).toThrow("line1 and line2 should be of type 'Line'")
        expect(() => calculateJunctionPoint([], [])).toThrow("line1 and line2 should be of type 'Line'")
        expect(() => calculateJunctionPoint('a', 'b')).toThrow("line1 and line2 should be of type 'Line'")
        expect(() => calculateJunctionPoint(1, 2)).toThrow("line1 and line2 should be of type 'Line'")
        expect(() => calculateJunctionPoint(new Line({ point1: {}, point2: {}, n: 5 }), new Line({}))).toThrow("The entered argument  point1 is not valid!")
        expect(() => calculateJunctionPoint(new Line({}), new Line({ point1: {}, point2: {}, slope: 5 }))).toThrow("The entered argument  point1 is not valid!")
       
    })
})

describe('IS_POINT_ON_LINE', () => {
    it('should return true if the slope and n equals', () => {
        
        expect(isPointOnLine(line4, point6)).toEqual(true)
    })
    it('should return false if the slope equal and n not equal', () => {
        expect(isPointOnLine(line5, point6)).toEqual(false)
    })
    it('should return true if the slope and n not equals', () => {
        expect(isPointOnLine(line1, point1)).toEqual(false)

    })
  
    it('should return slope if was missing',()=>{
        const line=new Line({point1,point2,slope:undefined,n:5})
        
        expect(isPointOnLine(line,point1)).toBe(false)
        console.log(line.slope);
    })



    it('mocking isPointOnLine function', () => {
        const line = new Line({});
        const point = new Point({});
        line.slope = 1;
        line.n = 2;

        const proxyLine = new Line({});
        proxyLine.slope = 1;
        proxyLine.n = 2;
        proxyLine.calculateNOfLineFunction = jest.fn();

        const result = isPointOnLine(line, point);

        expect(result).toBe(false);
    })


})
describe('Errors', () => {
    it('Error checker for function isPointOnLine', () => {
    expect(() => (isPointOnLine())).toThrow("the function must get an two arguments")
    expect(() => (isPointOnLine(new Line({}), 'aaa'))).toThrow("the arguments is not instance of 'point'")
    expect(() => (isPointOnLine(new Point(), new Point()))).toThrow("the arguments is not instance of 'line'")
    expect(() => (isPointOnLine({ line: new Line({}) }))).toThrow( "the function must accept a point")
    expect(() => (isPointOnLine(undefined,new Point({}) ))).toThrow('the function must accept a line')
    expect(() => (isPointOnLine( () => (false) ))).toThrow('the function must accept a point')
    

   
})
})
