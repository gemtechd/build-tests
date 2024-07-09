// "calculates the distance between two points correctly"

const { Line } = require("../../modules/ecs6-class/line");
const { Point } = require("../../modules/ecs6-class/point");
const { isPointOnLine, calculateDistance, calculateJunctionPoint } = require('../../modules/geometry-calculation')

describe('CALCULATEDISTANCE', () => {
    it(' should checks if the parameters are of the correct type', () => {
        expect(() => calculateDistance('ab', 'df')).toThrow('point1 or  point2  is not point');
        expect(() => calculateDistance('ab', new Point())).toThrow('point1 or  point2  is not point');
        expect(() => calculateDistance(new Point(), 'av')).toThrow('point1 or  point2  is not point');
    })
    it(' should checks the distance between two lines if it correct', () => {

        const line = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 9 }), slope: 1, n: 5 })
        const distance = calculateDistance(line.point1, line.point2)
        expect(distance).toBe(5)
    })
})
    describe('CALCULATEJUNCTIONPOINT', () => {
        it(' should checks if the parameters are of the correct type', () => {
            expect(() => calculateJunctionPoint('ab', 'df')).toThrow('line1 or line2 is not a line');
            expect(() => calculateJunctionPoint('ab', new Point())).toThrow('line1 or line2 is not a line');
            expect(() => calculateJunctionPoint(new Point(), 'av')).toThrow('line1 or line2 is not a line');
        })
        it('should return true for specific input', () => {

            const line = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 9 }), slope: 1, n: 5 })
            const line1 = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 5 }), slope: 1, n: 5 })
            const result = calculateJunctionPoint(line, line1)
            expect(result).toBeTruthy();
        });
        it('should return false for specific input', () => {

            const line = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 9 }), slope: 1, n: 5 })
            const line1 = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 5 }), slope: 1, n: 6 })
            const result = calculateJunctionPoint(line, line1)

            expect(result).toBeFalsy();
        });
        // it(' should check that the returned value is of type point', () => {
        //     const line = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 9 }), slope: 1, n: 10 })
        //     const line1 = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 5 }), slope: 5, n: 2 })
        //     const result = calculateJunctionPoint(line, line1)
        //     expect(result).toBeInstanceOf(Point)

        // })
        it(' should calculateJunctionPoint return the correct junction point for the given lines', () => {

            const line = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 9 }), slope: 1, n: 10 })
            const line1 = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 5 }), slope: 5, n: 2 })
            const result = calculateJunctionPoint(line, line1)
            expect(result).toEqual(new Point({ x: 2, y: 12 }));

        });


    })
   
        it(' should checks if the parameters are of the correct type', () => {
            const line = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 9 }), slope: 1, n: 10 })
            const point = new Point({ x: 4, y: 6 })
            expect(() => isPointOnLine("k", "j")).toThrow('line is not point or point is not a line');
            expect(() => isPointOnLine(line, "abc")).toThrow('line is not point or point is not a line');
            expect(() => isPointOnLine("c", point)).toThrow('line is not point or point is not a line');
        })
        it('should Point lies isnt on a line with slope and n values', () => {
            const line = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 9 }), slope: 2, n:-6 })
            const point=new Point({ x: 5, y: 4 })
            const result=isPointOnLine(line,point)
            expect(result).toBeFalsy();
        })
        // it('should Point lies on a line with slope and n values', () => {
        //     const line = new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 9 }), slope: -2, n:14 })
        //     const point=new Point({ x: 5, y: 4 })
        //     const result=isPointOnLine(line,point)
        //     expect(result).toBeTruthy();
        // })
