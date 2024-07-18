const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../../modules/geometry-calculation')
const Point = require('../../modules/ecs6-class/point')
const Line = require('../../modules/ecs6-class/line')
const mockLine = jest.fn(constructor)
const mockPoint = jest.fn(constructor)
describe('GEOMETRY_CALCULATION', () => {
  describe('CALCULATE_DISTANCE', () => {
    it('should return the correct distance between two points', () => {
      const point1 = mockPoint(new Point({ x: 2, y: 3 }));
      const point2 = mockPoint(new Point({ x: 5, y: 7 }));
      const result = calculateDistance(point1, point2);
      expect(result).toBe(5);
    });
    it('should throw an error if the value is not a point', () => {
      const point1 = '{ x: 2, y: 3 }';
      const point2 = mockPoint(new Point({ x: 5, y: 7 }));
      expect(() => calculateDistance(point1, point2)).toThrowError('the type of the point is not correctly')
    });
    it('should throw an error if the value is not a point', () => {
      const point1 = { x: 2, y: 3 };
      const point2 = '{ x: 5, y: 7 }';
      expect(() => calculateDistance(point1, point2)).toThrowError('the type of the point is not correctly')
    });
  }),
    describe('CALCULATE_JUNCTION_POINT', () => {
      it('should return true if slopes and intercepts are equal', () => {
        const line1 = mockLine(new Line({ slope: 2, n: 1 }));
        const line2 = mockLine(new Line({ slope: 2, n: 1 }));
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toBe(true);
      });

      it('should return false if slopes are equal but intercepts are different', () => {
        const line1 = mockLine(new Line({ slope: 2, n: 1 }));
        const line2 = mockLine(new Line({ slope: 2, n: 5 }));
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toBe(false);
      });

      it(' should calculate the junction point correctly for two lines with differentslopes', () => {
        const line1 = mockLine(new Line({ slope: 2, n: 1, getPointByX: function (x) { return { x: x, y: 2 * x + 1 } } }));
        const line2 = mockLine(new Line({ slope: -1, n: 7, getPointByX: function (x) { return { x: x, y: -x + 7 } } }));
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toEqual({ x: 2, y: 5 });
      });

      it('should throw an error if the value is not a line', () => {
        const line1 = 'aaa'
        const line2 = mockLine(new Line({ slope: -1, n: 7, getPointByX: function (x) { return { x: x, y: -x + 7 } } }));
        expect(() => calculateJunctionPoint(line1, line2)).toThrowError('the type of the line is not correctly')
      });
    }),
    describe('IS_POINT_ON_LINE', () => {
      it('should throw an error if the value is not a line', () => {
        const line = 'new Line({point1:new Point({x:2,y:5}), slope: 2, n: 1 })';
        const point = mockPoint(new Point({ x: 3, y: 7 }));
        expect(() => isPointOnLine(line, point)).toThrowError('the type of the line or point is not correctly')
      });
      it('should throw an error if the value is not a point', () => {
        const line = mockLine(new Line({ point1: mockPoint(new Point({ x: 2, y: 5 })), slope: 2, n: 1 }));
        const point = 'new Point({ x: 3, y: 7 });'
        expect(() => isPointOnLine(line, point)).toThrowError('the type of the line or point is not correctly')
      });

      it('should return true if the point lies on the line', () => {
        const line = mockLine(new Line({ point1: mockPoint(new Point({ x: 2, y: 5 })), slope: 2, n: 1 }));
        const point = new Point({ x: 3, y: 7 });
        const result = isPointOnLine(line, point);
        expect(result).toBe(true);
      });
      it('should return false if the point lies does not on the line', () => {
        const line = mockLine(new Line({ point1: mockPoint(new Point({ x: 6, y: 13 })), slope: 2, n: 1 }));
        const point = mockPoint(new Point({ x: 1, y: 5 }));
        const result = isPointOnLine(line, point);
        expect(result).toBe(false);
      });


      it('should return false if the point does not lie on the line', () => {
        const line = mockLine(new Line({ slope: 4, n: -1 }));
        const point = mockPoint(new Point({ x: 1, y: 4 }));
        const result = isPointOnLine(line, point);
        expect(result).toBe(false);
      });
    });
})