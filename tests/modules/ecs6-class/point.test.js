const Point=require('../../../modules/ecs6-class/point')
// const { calculateSlope } = require('../../../modules/ecs6-class/line')

describe('constructor', () => {
    it('should initialize x or y to default values when no parameters are provided', () => {
        const point = new Point({x:5});
        expect(point.x).toBe(5);
        expect(point.y).toBe(0);
        const point1 = new Point({y:5});
        expect(point1.x).toBe(0);
        expect(point1.y).toBe(5);
        const point2= new Point();
        expect(point2.x).toBe(0);
        expect(point2.y).toBe(0);
    });
    it('should be ok when x and y are numbers', () => {
        const point = new Point({x: 3, y: 4});
        expect(point.x).toBe(3);
        expect(point.y).toBe(4);
    });
    it('should throw error when x or y isnt a number ',()=>{
        expect(()=>new Point({x:'2',y:4})).toThrow('x isnt number')
        expect(()=>new Point({x:4,y:'2'})).toThrow('y isnt number')
        expect(()=>new Point({x:'2',y:'4'})).toThrow('x and y isnt number')
    })
});
describe('moveVertical', () => { 
    it('should throw error when value is undefined', () => {
        const point2= (new Point());
        expect(()=>point2.moveVertical()).toThrow('value is undefined');
    });
    it('should throw error when value isnt a number ',()=>{
        const point=(new Point())
        expect(()=>point.moveVertical('dddd')).toThrow('value isnt number');
    })
    it('should be ok when value is number ',()=>{
        const point =(new Point({x:5,y:4}))
        point.moveVertical(5);
        expect(point.y).toBe(9);
    })
});

describe('moveHorizontal', () => { 
    
    it('should throw error when value is undefined', () => {
        const point2= (new Point());
        expect(()=>point2.moveHorizontal()).toThrow('value is undefined');
    });
    it('should throw error when value isnt a number ',()=>{
        const point=(new Point())
        expect(()=>point.moveHorizontal('dddd')).toThrow('value isnt number');
    })
    it('should be ok when value is number ',()=>{
        const point =(new Point({x:5,y:4}))
        point.moveHorizontal(5);
        expect(point.x).toBe(10);
    })
});