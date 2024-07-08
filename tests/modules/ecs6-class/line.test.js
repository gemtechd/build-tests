const Line = require('../../../modules/ecs6-class/line')
const Point = require('../../../modules/ecs6-class/point')

describe('LINE', () => {
  describe('CONSTRUCTOR', () => {
    it('should instantiate the class with the correct values', () => {
      const l = new Line({ slope: 3, n: 7 });
      expect(l.slope).toBe(3);
      expect(l.n).toBe(7);
    });
  }),
    describe('CALCULATE_N_Of_LINE_FUNCTION', () => {

      it('calculateNOfLineFunction calculates the correct value of n', () => {
        const line = new Line({ point1: { x: 0, y: 0 }, point2: { x: 2, y: 2 } });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        expect(line.n).toBe(0);
      });
    }),
    describe('CALCULATE_SLOPE', () => {
      it('should return error if the point1.x - point2.x =0', () => {
        const point1 = new Point({ x: 5, y: 9 })
        const point2 = new Point({ x: 5, y: 2 })
        const line = new Line({ point1: point1, point2: point2 })
        expect(() => line.calculateSlope()).toThrowError("don't divide by 0")
      })
      it('should return if the function calculate slope between two points', () => {
        const point1 = new Point({ x: 1, y: 2 });
        const point2 = new Point({ x: 3, y: 4 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        expect(line.slope).toBe(1);
      });
    }),
    describe('GET_POINT_ON_Y_AXIS', () => {
      it('Get Point on Y axis', () => {
        const line = new Line({ slope: 1, n: 0 });
        const point = line.getPointOnYAsis();
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
      });
    }),
    describe('GET_POINT_BY_Y', () => {
      it('Get Point by Y', () => {
        const line = new Line({ slope: 2, n: 3 });
        const expectedPoint = new Point({ x: 1, y: 5 });
        const point = line.getPointByY(5);
        expect(point.x).toBe(expectedPoint.x);
        expect(point.y).toBe(expectedPoint.y);
      });
      it('should return error.message if the slope = 0', () => {
        const line = new Line({ n: 1, slope: 0 })
        expect(() => line.getPointByY(5)).toThrowError("don't divide by 0")
      });
    }),
    describe('GET_POINT_BY_X', () => {
      it('get point by x', () => {
        const line = new Line({ slope: 1, n: 1 })
        const point = line.getPointByX(2)
        expect(point.x).toBe(2)
        expect(point.y).toBe(3)
      });
    }),

    describe('GET_POINT_ON_X_AXIS', () => {
      it('Get Point on X Axis', () => {
        const line = new Line({ slope: 2, n: 3 });
        const expectedPoint = line.getPointByY(0);
        const point = line.getPointOnXAsis();
        expect(point.x).toBe(expectedPoint.x);
        expect(point.y).toBe(expectedPoint.y);
      });
    })

})






