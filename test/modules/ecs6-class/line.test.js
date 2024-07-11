const Line = require('../../../modules/ecs6-class/line')
const Point = require('./../../../modules/ecs6-class/point')
const {calculateSlope} =require('../../../modules/ecs6-class/line')
const mockConstructor=jest.fn(constructor)
const mockCalculateSlope=jest.fn(calculateSlope)
describe('LINE`S FUNCTION', () => {
  describe('CONSTRUCTOR', () => {
    it('should instantiate the class with the correct values', () => {
      const l = new Line({ slope: 3, n: 7 });
      expect(l.slope).toBe(3);
      expect(l.n).toBe(7);
    });
  }),
    describe('CALCULATE_SLOPE', () => {
      it('should return the slope of a straight line by two points', () => {
        const l = mockConstructor(new Line({ point1: new Point({ x: 3, y: 6 }), point2: new Point({ x: 1, y: 2 }) }))
        l.calculateSlope()
        expect(l.slope).toBe(2)
      })


      it('should throw an error if division by zero occurs', () => {
        const l =mockConstructor(new Line({ point1: new Point({ x: 3, y: 6 }), point2: new Point({ x: 3, y: 2 }) }))
        expect(() => l.calculateSlope()).toThrowError('Division by zero')
      })
    }),
    describe('CALCULATE_N_Of_LINE_FUNCTION', () => {
      it('should return the point of intersection of the line with the y-axis', () => {
        const l = mockConstructor(new Line({ point1: new Point({ x: 3, y: 6 }), point2: new Point({ x: 1, y: 2 }) }))
        mockCalculateSlope(l)
        l.calculateNOfLineFunction()
        expect(l.n).toBe(0)
      })
    }),
    describe('GET_POINT_BY_X', () => {
      it('should calculate the correct y value for a given x value', () => {
        const l = new Line({ point1: new Point({ x: 2, y: 5 }), point2: new Point({ x: 1, y: 6 }) });
        l.calculateSlope()
        l.calculateNOfLineFunction()
        const result = l.getPointByX(3);
        expect(result.y).toBe(4);
      });
    }),
    describe('GET_POINT_BY_Y', () => {
      it('should calculate the correct x value for a given y value', () => {
        const l = new Line({ point1: new Point({ x: 2, y: 5 }), point2: new Point({ x: 1, y: 6 }), n: 5, slope: 2 });
        const result = l.getPointByY(11);
        expect(result.x).toBe(3);
      }),
      it('should throw an error if division by zero occurs', () => {
         const l = new Line({ point1: new Point({ x: 2, y: 6 }), point2: new Point({ x: 1, y: 6 }), n: 6, slope: 0 });
         expect(() => l.getPointByY(11)).toThrowError('Division by zero');
      });
    }),
    describe('GET_POINT_ON_X_AXIS', () => {
      it('should return the point on the X-axis correctly', () => {
        const l = new Line({ point1: new Point({ x: 2, y: 5 }), point2: new Point({ x: 1, y: 6 }), n: 5, slope: 2 });
        const result = l.getPointOnXAsis();
        expect(result.x).toBe(-2.5);
      });
    }),
    describe('GET_POINT_ON_Y_AXIS', () => {
      it('should return the point on the Y-axis correctly', () => {
        const l = new Line({ point1: new Point({ x: 2, y: 5 }), point2: new Point({ x: 1, y: 6 }), n: 2, slope: 3 });
        const result = l.getPointOnYAsis();
        expect(result.y).toBe(2);
      });
    });
})
