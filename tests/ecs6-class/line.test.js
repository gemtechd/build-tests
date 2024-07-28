const Line = require('../../modules/ecs6-class/line');
const Point = require('../../modules/ecs6-class/point');

describe('Line class', () => {
    test('should create a line with default points and undefined slope and n', () => {
        const line = new Line({});
        expect(line.point1).toBeInstanceOf(Point);
        expect(line.point2).toBeInstanceOf(Point);
        expect(line.slope).toBeUndefined();
        expect(line.n).toBeUndefined();
    });
    test('should create a line with selected values and undefined slope and n', () => {
        const point1=new Point({x:5,y:3});
        const point2=new Point({x:4,y:6});
        const line = new Line({point1:point1,point2:point2});
        expect(line.point1).toEqual(point1);
        expect(line.point2).toEqual(point2);
        expect(line.slope).toBeUndefined();
        expect(line.n).toBeUndefined();
    });
    test('should create a line with selected values', () => {
        const point1=new Point({x:5,y:3});
        const point2=new Point({x:4,y:6});
        const line = new Line({point1:point1,point2:point2,n:5,slope:3});
        expect(line.point1).toEqual(point1);
        expect(line.point2).toEqual(point2);
        expect(line.slope).toEqual(3);
        expect(line.n).toEqual(5);
    });

    test('should throw an error for invalid point1 or point2', () => {
        expect(() => new Line({ point1: {}, point2: new Point() })).toThrow('InvalidPointError: point1 and point2 must be instances of Point');
        expect(() => new Line({ point1: new Point(), point2: {} })).toThrow('InvalidPointError: point1 and point2 must be instances of Point');
    });

    test('should throw an error for invalid n ', () => {
        expect(() => new Line({ point1: new Point(), point2: new Point() ,n:'n',slope:5})).toThrow('InvalidError: n must be a number');
        expect(() => new Line({ point1: new Point(), point2: new Point() ,n:{},slope:5})).toThrow('InvalidError: n must be a number');
        expect(() => new Line({ point1: new Point(), point2: new Point() ,n:[],slope:5})).toThrow('InvalidError: n must be a number');
        expect(() => new Line({ point1: new Point(), point2: new Point() ,n:true,slope:5})).toThrow('InvalidError: n must be a number');
    });
    test('should throw an error for invalid slope ', () => {
        expect(() => new Line({ point1: new Point(), point2: new Point() ,n:5,slope:{}})).toThrow('InvalidError: slope must be a number');
        expect(() => new Line({ point1: new Point(), point2: new Point() ,n:5,slope:'5'})).toThrow('InvalidError: slope must be a number');
        expect(() => new Line({ point1: new Point(), point2: new Point() ,n:5,slope:[]})).toThrow('InvalidError: slope must be a number');
        expect(() => new Line({ point1: new Point(), point2: new Point() ,n:5,slope:true})).toThrow('InvalidError: slope must be a number');
    });
    describe('calculateSlope', () => {
        test('should calculate the slope of the line', () => {
            const point1 = new Point({ x: 0, y: 0 });
            const point2 = new Point({ x: 4, y: 4 });
            const line = new Line({ point1, point2 });
            line.calculateSlope();
            expect(line.slope).toBe(1);
        });

        test('should throw an error for undefined slope (vertical line)', () => {
            const point1 = new Point({ x: 0, y: 0 });
            const point2 = new Point({ x: 0, y: 4 });
            const line = new Line({ point1, point2 });
            expect(() => line.calculateSlope()).toThrow('UndefinedSlopeError: Slope is undefined for vertical lines');
        });
    })

    describe('calculateNOfLineFunction', () => {
        test('should calculate the n of the line function', () => {
            const point1 = new Point({ x: 0, y: 0 });
            const point2 = new Point({ x: 4, y: 4 });
            const line = new Line({ point1, point2 });
            line.calculateNOfLineFunction();
            expect(line.n).toBe(0);
        });
        test('should throw an error for undefined slope (vertical line)', () => {
            const point1 = new Point({ x: 4, y: 0 });
            const point2 = new Point({ x: 4, y: 4 });
            const line = new Line({ point1, point2 });
            expect(() => line.calculateNOfLineFunction()).toThrow('UndefinedSlopeError: Slope is undefined for vertical lines');
        });
    });
    describe('getPointOnXAsis', () => {
        test('should get point on X axis', () => {
            const point1 = new Point({ x: 0, y: 1 });
            const point2 = new Point({ x: 1, y: 0 });
            const line = new Line({ point1, point2 });
            const pointOnXAxis = line.getPointOnXAsis();
            expect(pointOnXAxis.x).toBe(1);
            expect(pointOnXAxis.y).toBe(0);
        });
       
    
        test('should handle horizontal lines correctly by throwing an error', () => {
            const point1 = new Point({ x: 1, y: 0 });
            const point2 = new Point({ x: 3, y: 0 });
    
            const line = new Line({
                point1: point1,
                point2: point2,
                slope: 0,  
                n: 0
            });
    
            expect(() => line.getPointOnXAsis()).toThrow('InvalidSlopeError: Slope cannot be zero for calculating X by Y');
        });
        test('should throw an error for undefined slope (vertical line)', () => {
            const point1 = new Point({ x: 4, y: 0 });
            const point2 = new Point({ x: 4, y: 4 });
            const line = new Line({ point1, point2 });
            expect(() => line.getPointOnXAsis()).toThrow('UndefinedSlopeError: Slope is undefined for vertical lines');
        });
    })
    describe('getPointOnYAsis',()=>{
        test('should get point on Y axis', () => {
            const point1 = new Point({ x: 1, y: 0 });
            const point2 = new Point({ x: 2, y: 1 });
            const line = new Line({ point1, point2 });
            const pointOnYAxis = line.getPointOnYAsis();
            expect(pointOnYAxis.x).toBe(0);
            expect(pointOnYAxis.y).toBe(-1);
        });

        test('should return the Y-intercept for horizontal lines', () => {
            const point1 = new Point({ x: 1, y: 5 });
            const point2 = new Point({ x: 3, y: 5 });
            const line = new Line({ point1: point1, point2: point2, slope: 0, n: 5 });
            const expectedPoint = new Point({ x: 0, y: 5 });
            const result = line.getPointOnYAsis();
    
            expect(result).toEqual(expectedPoint);
        });
        test('should throw an error for undefined slope (vertical line)', () => {
            const point1 = new Point({ x: 4, y: 0 });
            const point2 = new Point({ x: 4, y: 4 });
            const line = new Line({ point1, point2 });
            expect(() => line.getPointOnYAsis()).toThrow('UndefinedSlopeError: Slope is undefined for vertical lines');
        });
    })

describe('getPointByX',()=>{
    test('should get point by X', () => {
        const point1 = new Point({ x: 0, y: 0 });
        const point2 = new Point({ x: 4, y: 4 });
        const line = new Line({ point1, point2 });
        const point = line.getPointByX(2);
        expect(point.x).toBe(2);
        expect(point.y).toBe(2);
    });
    test('should throw an error for invalid x input in getPointByX', () => {
        const line = new Line({});
        expect(() => line.getPointByX('a')).toThrow('InvalidInputError: x must be a number');
        expect(() => line.getPointByX()).toThrow('InvalidInputError: x must be a number');
        expect(() => line.getPointByX({})).toThrow('InvalidInputError: x must be a number');
        expect(() => line.getPointByX([])).toThrow('InvalidInputError: x must be a number');
    });
})
describe('getPointByY',()=>{
    test('should get point by Y', () => {
        const point1 = new Point({ x: 0, y: 0 });
        const point2 = new Point({ x: 4, y: 4 });
        const line = new Line({ point1, point2 });
        const point = line.getPointByY(2);
        expect(point.x).toBe(2);
        expect(point.y).toBe(2);
    });
    test('should throw an error for invalid slope (slope is zero) in getPointByY', () => {
        const point1 = new Point({ x: 0, y: 0 });
        const point2 = new Point({ x: 4, y: 0 });
        const line = new Line({ point1, point2 });
        expect(() => line.getPointByY(2)).toThrow('InvalidSlopeError: Slope cannot be zero for calculating X by Y');
    });

    test('should throw an error for invalid y input in getPointByY', () => {
        const line = new Line({});
        expect(() => line.getPointByY('a')).toThrow('InvalidInputError: y must be a number');
        expect(() => line.getPointByY()).toThrow('InvalidInputError: y must be a number');
        expect(() => line.getPointByY({})).toThrow('InvalidInputError: y must be a number');
        expect(() => line.getPointByY([])).toThrow('InvalidInputError: y must be a number');
    });
})    

   

   

   
 
   

});
