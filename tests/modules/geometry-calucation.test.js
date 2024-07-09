const Point = require('../../modules/ecs6-class/point')
const Line = require('../../modules/ecs6-class/line')
const { calculateDistance, isPointOnLine, calculateJunctionPoint } = require('../../modules/geometry-calculation')
describe('GEOMETRY_CALCULATION', () => {
    describe('CALCULATE_DISTANCE', () => {
        it('should return error.message', () => {
            const point1 = new Point({ x: 2, y: 3 });
            const point2 = new Line({ x: 5, y: 7 });
            expect(() => calculateDistance(point1, point2)).toThrowError('Invalid input. Expected objects of type point.');
        });
        it('should calculate the correct distance between two points', () => {
            const result = calculateDistance(point1 = new Point({ x: 6, y: 8 }), point2 = new Point({ x: 2, y: 5 }));
            expect(result).toBe(5)
        });
    }),
        describe('IS_POINT_ON_LINE', () => {
            it('should return error if the objects are not Line or Point types', function () {
                const line = new Line({ point1: new Point({ x: 2, y: 3 }), point2: new Point({ x: 4, y: 6 }) });
                const point = new Line({ point1: new Point({ x: 0, y: 0 }) });
                expect(() => isPointOnLine(line, point)).toThrowError("The objects should be of the Line and Point types");
            });
            it('should return true if the point lies on the line', () => {
                const line = new Line({ point1: { x: 2, y: 5 }, slope: 2, n: 1 });
                const point = new Point({ x: 3, y: 7 });
                const result = isPointOnLine(line, point);
                expect(result).toBe(true);
            });
            it('should return false if the point does not lie on the line', () => {
                const line = new Line({ slope: 2, n: 1 });
                const point = new Point({ x: 1, y: 3 });
                const result = isPointOnLine(line, point);
                expect(result).toBe(false);
            });
            it('should return false if the point is parallels', () => {
                const line = new Line({ point1: { x: 6, y: 13 }, slope: 2, n: 1 });
                const point = new Point({ x: 1, y: 5 });
                const result = isPointOnLine(line, point);
                expect(result).toBe(false);
            })
            it('should return false if the point does not lie on the line', () => {
                const line = new Line({ slope: 4, n: -1 });
                const point = new Point({ x: 1, y: 4 });
                const result = isPointOnLine(line, point);
                expect(result).toBe(false);
            });
        }),
        describe('CALCULATE_JUNCTION_POINT', () => {
            it('should return error if it is not of the Line type', () => {
                const line1 = new Line({ slope: 2, n: 4 });
                const line2 = new Point({ x: 3, y: 5 });
                expect(() => calculateJunctionPoint(line1, line2)).toThrowError('Must be of the Line type');

            });
            it('should return true if slopes and intercepts are equal', () => {
                const line1 = new Line({ slope: 2, n: 1 });
                const line2 = new Line({ slope: 2, n: 1 });
                const result = calculateJunctionPoint(line1, line2);
                expect(result).toBe(true);
            });
            it('should return false if slopes are equal but intercepts are different', () => {
                const line1 = new Line({ slope: 2, n: 1 });
                const line2 = new Line({ slope: 2, n: 5 });
                const result = calculateJunctionPoint(line1, line2);
                expect(result).toBe(false);
            });
            it('should calculate the junction point correctly for two lines with different slopes', () => {
                const line1 = new Line({ slope: 2, n: 1, getPointByX: function (x) { return { x: x, y: 2 * x + 1 } } });
                const line2 = new Line({ slope: -1, n: 7, getPointByX: function (x) { return { x: x, y: -x + 7 } } });
                const result = calculateJunctionPoint(line1, line2);
                expect(result).toEqual({ x: 2, y: 5 });
            });
        });
})


