const Point = require('../../../modules/ecs6-class/point')

const mockConstructor = jest.fn(constructor);

describe('POINT', () => {
  describe('CONSTRUCTOR', () => {
    it('should create a Point object with default values', () => {
      const point = new Point();
      expect(point.x).toBe(0);
      expect(point.y).toBe(0);
    });

    it('should create a Point object with custom values', () => {
      const point = new Point({ x: 3, y: 5 });
      expect(point.x).toBe(3);
      expect(point.y).toBe(5);
    })

    it('should throw error when the values are not a numbers', () => {
      expect(() => new Point({ x: 3, y: "5" })).toThrow('y is not a number')
      expect(() => new Point({ x: '3', y: 5 })).toThrow('x is not a number')
      expect(() => new Point({ x: [5, 7], y: 8 })).toThrow('x is not a number')
      expect(() => new Point({ x: 3, y: { x: 7, y: 5 } })).toThrow('y is not a number')
    })
  })

  describe('MOVE_VERTICAL', () => {
    it('should move the point vertically', () => {

      const point = mockConstructor(new Point({ x: 3, y: 5 }));
      point.moveVertical(4);
      expect(point.y).toBe(9);
    })

    it('should throw error when the value is not a number', () => {
      const point = mockConstructor(new Point({ x: 3, y: 5 }));
      expect(() => point.moveVertical('4')).toThrow('value is not a number')
      expect(() => point.moveVertical([2, 5])).toThrow('value is not a number')
      expect(() => point.moveVertical({ key: 5, desc: 'fghh' })).toThrow('value is not a number')
    })
  })

  describe('MOVE_HORIZONTAL', () => {
    it('should move the point horizontally', () => {

      const point = mockConstructor(new Point({ x: 3, y: 5 }));
      point.moveHorizontal(2);
      expect(point.x).toBe(5);
    });

    it('should throw error when the value is not a number', () => {
      const point = mockConstructor(new Point({ x: 3, y: 5 }));
      expect(() => point.moveHorizontal('4')).toThrow('value is not a number')
      expect(() => point.moveHorizontal([2, 5])).toThrow('value is not a number')
      expect(() => point.moveHorizontal({ key: 5, desc: 'fghh' })).toThrow('value is not a number')
    })
  })

})
