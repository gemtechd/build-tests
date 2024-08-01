// const geometryCalculation = require ('../../modules/geometry-calculation');

const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../../modules/geometry-calculation')
const Line = require('../../modules/ecs6-class/line');
const Point = require('../../modules/ecs6-class/point');
const pointTest1 = new Point({ x: 4, y: 7 });
const pointTest2 = new Point({ x: 8, y: 10 });
const pointTest3 = new Point({ x: 2, y: 9 });
const pointTest4 = new Point({ x: -1, y: 0 });
const pointTest5 = new Point({ x: 1, y: -17 });
const lineTest1 = new Line({point1: pointTest1, point2: pointTest2, n: 9, slope: 8});
const lineTest2 = new Line({point1: pointTest2, point2: pointTest1, n: 9, slope: 8});
const lineTest3 = new Line({point1: pointTest2, point2: pointTest1, n: 2, slope: 8});
const lineTest4 = new Line({point1: pointTest2, point2: pointTest1, n: 2, slope: 3});
const lineTest5 = new Line({point1: pointTest3, point2: pointTest1, n: 3, slope: 3}); 
const lineTest6 = new Line({point1: pointTest1, point2: pointTest2, n: 9});
describe('CALCULATE_DISTANCE', () => {
    it('calculate the distance', () => {   
        expect(calculateDistance(pointTest1, pointTest2)).toBe(5);
    });
})

describe('CALCULATE_JUNCTION_POINT', () => {
    it('n and slope are the same in both lines', () => {   
        expect(calculateJunctionPoint(lineTest1, lineTest2)).toBe(true);
    });

    it('slope is the same in both lines and n is not the same', () => {   
        expect(calculateJunctionPoint(lineTest2, lineTest3)).toBe(false);
    });

    it('slope is not the same', () => {   
        expect(calculateJunctionPoint(lineTest4, lineTest3)).toEqual({"x": 0, "y": 2});
    });
})

describe('IS_POINT_ON_LINE', () => {
    
    it('Slope and n are not the same on both lines', () => {   
        expect(isPointOnLine(lineTest4, pointTest4)).toBe(false);
    });

    it('Slope is the same and n is not the same on both lines', () => {   
        expect(isPointOnLine(lineTest1, pointTest5)).toBe(false);
    });
    
    it('Slope and n are not the same on both lines', () => {   
        expect(isPointOnLine(lineTest5, pointTest4)).toBe(true);
    });

})

describe('ERRORS', () => {

    describe('CALCULATE_DISTANCE_ERRORS', () => {
        
        it('Checks if the function received points', () => {

            expect(() => calculateDistance()).toThrow("Expect to get two points")
        })
        it('Checks if the function is missing a point', () => {
            
            expect(() => calculateDistance(pointTest1)).toThrow("Expect to get two points")
        })
        
    })

    describe('CALCULATE_JUNCTION_POINT_ERRORS', () => {
        
        it('Checks if the function received lines', () => {

            expect(() => calculateJunctionPoint()).toThrow("Expect to get two lines")
        })
        it('Checks if the function is missing a line', () => {
            
            expect(() => calculateJunctionPoint(lineTest1)).toThrow("Expect to get two lines")
        })
        it('Checks if the line has no slope', () => {
            
            expect(() => calculateJunctionPoint(lineTest1, lineTest6)).toThrow("Expect to get line with slope")
        })
        it('Checks if the line has no slope', () => {
            
            expect(() => calculateJunctionPoint(lineTest6, lineTest1)).toThrow("Expect to get line with slope")
        })

        
    })

    describe('IS_POINT_ON_LINE_ERRORS', () => {

        it('Checks if the function received line and point', () => {

            expect(() => isPointOnLine()).toThrow("Expect to get line and point")
        })
        it('Checks if the function is missing a line', () => {
            
            expect(() => isPointOnLine(lineTest1)).toThrow("Expect to get line and point")
        })
        it('Checks if the function is missing a point', () => {
            
            expect(() => isPointOnLine({line:undefined,point:pointTest1})).toThrow("Expect to get line and point")
        })
        
    })

})

