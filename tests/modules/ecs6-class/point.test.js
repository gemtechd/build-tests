const Point = require('../../../modules/ecs6-class/point');
const mockConstructor = jest.fn(constructor);

let point

describe('CONSTRUCTOR', () => {


  it('should initialize x and y to default values when no parameters are provided', () => {
    point = new Point();
    expect(point.x).toBe(0);
    expect(point.y).toBe(0);
  })

  it('should initialize y to default value when no parameters are provided', () => {
    point = new Point({ x: 4 })
    expect(point.x).toBe(4);
    expect(point.y).toBe(0);
  })

  it('should initialize x to default value when no parameters are provided', () => {
    point = new Point({ y: 3 })
    expect(point.x).toBe(0);
    expect(point.y).toBe(3);
  })



  it('should throw error when x or y is not number ', () => {
    expect(() => new Point({ x: '4', y: '3' })).toThrow('x and y are not number')
    expect(() => new Point({ x: '4', y: 3 })).toThrow('x is not number');
    expect(() => new Point({ x: 4, y: '3' })).toThrow('y is not number');

  })

  it('Point constructor initialized correctly', () => {
    point = new Point({ x: 3, y: 4 })
    expect(point.x).toBe(3)
    expect(point.y).toBe(4)

  })
})

describe('MOVEVERTICAL', () => {



  it('should throw error when value is undefined', () => {
    point = mockConstructor(new Point())
    expect(() => point.moveVertical()).toThrow('value is undefined');
  })

  it('should throw error when value is not number ', () => {
    point = mockConstructor(new Point())
    expect(() => point.moveVertical("aaa")).toThrow('value is not number');
  })

  it('should increment the y coordinate by the given value', () => {
    point = mockConstructor(new Point());
    const initialValue = point.y;
    const incrementValue = 3;
    point.moveVertical(incrementValue);
    expect(point.y).toBe(initialValue + incrementValue);
  })


})



describe('MOVEHORIZONTAL', () => {

  it('should throw error when value is undefined', () => {
    point = mockConstructor(new Point())
    expect(() => point.moveHorizontal()).toThrow('value is undefined');
  })

  it('should throw error when value is not number ', () => {
    point = mockConstructor(new Point())
    expect(() => point.moveHorizontal("aaa")).toThrow('value is not number');
  })

  it('should increment the x coordinate by the given value', () => {
    point = mockConstructor(new Point());
    const initialValue = point.x;
    const incrementValue = 3;
    point.moveHorizontal(incrementValue);
    expect(point.x).toBe(initialValue + incrementValue);

  })

})





