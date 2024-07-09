const Point = require('../../modules/ecs6-class/point')
const Line = require('../../modules/ecs6-class/line')

const { calculateDistance, isPointOnLine, calculateJunctionPoint } = require('../../modules/geometry-calculation')


describe('CALCULATE_DISTANCE', () => {
    it('Should calculate the correct distance between two points', () => {
        const result = calculateDistance(point1 = new Point({ x: 6, y: 8 }), point2 = new Point({ x: 2, y: 5 }));
        expect(result).toBe(5)
    });
    it('Check if the input points are instances of Point class', () => {
        const point1 = '{x:2,y:3}'
        const point2 = new Point({ x: 1, y: 5 })
        expect(() => calculateDistance(point1, point2)).toThrowError('the type of the points is not correctly')
    });
    it('Check if the input points are instances of Point class', () => {
        const point1 = new Point({ x: 2, y: 3 })
        const point2 = '{x:1,y:5}'
        expect(() => calculateDistance(point1, point2)).toThrowError('the type of the points is not correctly')
    });
})
describe('IS_POINT_ON_LINE', () => {
    it('Should return true if the point lies on the line', () => {
        const line = new Line({ point1: new Point({ x: 2, y: 5 }), slope: 2, n: 1 });
        const point = new Point({ x: 3, y: 7 });
        const result = isPointOnLine(line, point);
        expect(result).toBe(true);
    });
    it('Should return false if the does not lie on the line', () => {
        const line = new Line({ slope: 4, n: -1 });
        const point = new Point({ x: 1, y: 4 });
        const result = isPointOnLine(line, point);
        expect(result).toBe(false);
    });
    it('Should return false if the point is parallels', () => {
        const line = new Line({ point1: { x: 6, y: 13 }, slope: 2, n: 1 });
        const point = new Point({ x: 1, y: 5 });
        const result = isPointOnLine(line, point);
        expect(result).toBe(false);
    });
    it('Checking that the points are of type Point', () => {
        const line = new Line({ slope: -1, n: 7, getPointByX: function (x) { return { x: x, y: -x + 7 } } })
        const point = 'new point({})'
        expect(() => isPointOnLine(line, point)).toThrowError('the type of the line or the point is not correctly')
    })
    it('Checking that the points are of type Point', () => {
        const line = 'new Line({slope:-1,n:7,getPointByX:function(x){return {x:x,y:-x+7}}})'
        const point = new Point({ x: 1, y: 5 });
        expect(() => isPointOnLine(line, point)).toThrowError('the type of the line or the point is not correctly')
    })
});
describe('CALCULATE_JUNCTION_POINT', () => {
    it('Should return true if slopes and intercepts are equal', () => {
        const line1 = new Line({ slope: 2, n: 1 });
        const line2 = new Line({ slope: 2, n: 1 });
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toBe(true);
    });
    it('Should return false if slopes are equal but intercepts are different', () => {
        const line1 = new Line({ slope: 2, n: 1 });
        const line2 = new Line({ slope: 2, n: 5 });
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toBe(false);
    });
    it('Should calculate the junction point correctly for two lines with different slopes', () => {
        const line1 = new Line({ slope: 2, n: 1, getPointByX: function (x) { return { x: x, y: 2 * x + 1 } } });
        const line2 = new Line({ slope: -1, n: 7, getPointByX: function (x) { return { x: x, y: -x + 7 } } });
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toEqual({ x: 2, y: 5 });
    });
    it('Checking that the lines are of type Line', () => {
        const line1 = 'new Line({slope:-1,n:7,getPointByX:function(x){return {x:x,y:-x+7}}})'
        const line2 = new Line({ slope: -1, n: 7, getPointByX: function (x) { return { x: x, y: -x + 7 } } })
        expect(() => calculateJunctionPoint(line1, line2)).toThrowError('the type of the lines is not correctly')
    })
});