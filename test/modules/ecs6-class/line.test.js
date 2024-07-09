const Line = require('../../../modules/ecs6-class/line')
const Point = require('../../../modules/ecs6-class/point')

describe('CONSTRUCTORE', () => {
  it('Checking if a point is created with default values', () => {
    const p = new Point();
    expect(p.x).toBe(0);
    expect(p.y).toBe(0);
  });
  describe('CALCULATE_SLOPE', () => {
    it('Finding the slope', () => {
      const line = new Line({ point1: new Point({ x: 5, y: 6 }), point2: new Point({ x: 1, y: 2 }) })
      line.calculateSlope()
      expect(line.slope).toBe(1)
    })
    it('Checking that the slope is not equal to zero', () => {
      const line = new Line({ point1: new Point({ x: 5, y: 3 }), point2: new Point({ x: 5, y: 1 }) })
      expect(() => line.calculateSlope()).toThrowError('division by zero')
    })
  })
});
describe('CALCULATE_N_OF_LINE_FUNCTION', () => {
  it('calculateNOfLineFunction calculates the correct value of n', () => {
    const line = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 2, y: 2 }) });
    line.calculateSlope();
    line.calculateNOfLineFunction();
    expect(line.n).toBe(0);
  });
  it('Calculate slope between two points', () => {
    const point1 = new Point({ x: 1, y: 2 });
    const point2 = new Point({ x: 3, y: 4 });
    const line = new Line({ point1, point2 });
    line.calculateSlope();
    expect(line.slope).toBe(1);
  });
});
describe('GET_POINT_ON_X_AXIS', () => {
  it('Check if a point is created with default values', () => {
    const line = new Line({ point1: new Point({ x: 2, y: 5 }), point2: new Point({ x: 1, y: 6 }), slope: 2, n: 5 });
    const result = line.getPointOnXAsis();
    expect(result).toEqual({x:-2.5,y:0});
  });
})
describe('GET_POINT_ON_Y_AXIS', () => {
  it('', () => {
    const line = new Line({ point1: new Point({ x: 2, y: 5 }), point2: new Point({ x: 1, y: 6 }), slope: 3, n: 2 });
    const result = line.getPointOnYAsis();
    expect(result).toEqual({x:0,y:2});
  });
})
describe('GET_POINT_BY_x', () => {
  it('', () => {
    const line = new Line({ point1: new Point({ x: 2, y: 5 }), point2: new Point({ x: 1, y: 6 }) })
    line.calculateSlope()
    line.calculateNOfLineFunction()
    const result = line.getPointByX(3)
    expect(result.y).toBe(4);
  });
})
describe('GET_POINT_BY_Y', () => {
  it('', () => {
    const line = new Line({ point1: new Point({ x: 2, y: 5 }), point2: new Point({ x: 1, y: 6 }), slope: -1, n: 7 });
    const result = line.getPointByY(3)
    expect(result.x).toBe(4);
  });
  it('', () => {
    const line = new Line({ point1: new Point({ x: 2, y: 6 }), point2: new Point({ x: 1, y: 6 }), n: 6, slope: 0 })
    expect(() => line.getPointByY(11)).toThrowError('division by zero');
  })
})