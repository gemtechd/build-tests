
const Point = require('../../../modules/ecs6-class/point')
const mockConstructor = jest.fn(constructor);
let point
describe('CONSTRUCTORE', () => {

  it('should throw error when x or y is not a number', () => {
    const x = "abc";
    const y = "s";
    expect(() => new Point({ x: x, y: 5 })).toThrow('x is not number');
    expect(() => new Point({ x: 5, y: y })).toThrow('y is not number');
    expect(() => new Point({ x: x, y: y })).toThrow('x  and y are not number');
  });
  it('should initialize x and y to default values when no parameters are provided', () => {
    point = new Point({ x: 0, y: 0 });
    expect(point.x).toBe(0)
    expect(point.y).toBe(0)})
    it('should initialize y to default value when no parameters are provided', () => {
    point = new Point({ x: 5 });
    expect(point.x).toBe(5)
    expect(point.y).toBe(0)})
    it('should initialize x to default value when no parameters are provided', () => {
    point = new Point({ y: 5 });
    expect(point.x).toBe(0)
    expect(point.y).toBe(5)

  });

  it('Point constructor initializes x and y correctly', () => {
    point = new Point({ x: 3, y: 4 });
    expect(point.x).toBe(3);
    expect(point.y).toBe(4);
  });

})


describe('MOVE_VERTICAL', () => {

  it('should value is not define ', () => {
    point = mockConstructor(new Point())
    expect(() => point.moveVertical()).toThrow('value is not define');
  })
  it("should value is not a number", () => {

    expect(() => point.moveVertical("abc")).toThrow('value is not a number');
  })
  it('should update y correctly when moved vertically', () => {
    point = mockConstructor(new Point({ x: 5, y: 2 }))
    point.moveVertical(5)
    expect(point.y).toBe(7)
  })

})
describe('MOVE_HORIZONAL', () => {


  it('should value is not define ', () => {
    point = mockConstructor(new Point())
    expect(() => point.moveHorizontal()).toThrow('value is not define');
  })

  it("should value is not a number", () => {

    expect(() => point.moveHorizontal("abc")).toThrow('value is not a number');
  })

  it('should move vertically correctly', () => {
    point = mockConstructor(new Point({ x: 5, y: 2 }))
    point.moveHorizontal(5)
    expect(point.x).toBe(5 + 5)

  })
})


