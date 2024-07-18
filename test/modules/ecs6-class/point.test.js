
const Point = require('../../../modules/ecs6-class/point');


const mockConstructor = jest.fn(constructor);

describe('Constructor tests', () => {
 it ('check if the constructor get variable' ,()=>{
   const point=new Point({x:1,y:2})
    expect(point.x).toBe(1)
    expect(point.y).toBe(2)
})

it('should throw an error for invalid input types', () => {
   expect(() => new Point({ x:"rudi",y:'5'})).toThrowError('x and y must be of the number type');
})
it('should throw error when the values is not number type', () => {
   expect(() => new Point({ x: "#", y: 4 })).toThrowError('x and y must be of the number type');
})
it('should throw error when  the values is not number type', () => {
   expect(() => new Point({ x: 2, y: false })).toThrowError('x and y must be of the number type');
})
it('Point constructor should set default values if no parameters are provided', () => {
   const point=new Point()
   expect(point.x).toBe(0)
   expect(point.y).toBe(0)

})

});
 describe('check the function moveVertical',()=>{
    it('moveVertical should update the y coordinate correctly',()=>{
      const point = mockConstructor(new Point({ x: 1, y: 2 }))
      point.moveVertical(3);
      expect(point.y).toBe(5);
    }) 
    it('moveVertical should only accept a number as input',()=>{
      const point = mockConstructor(new Point({ x: 0, y: 8 }))
      expect(() => point.moveVertical('5')).toThrow('Invalid input. value should be a number.');
   })
 })
 describe('check the function moveHorizontal',()=>{
   it('moveHorizontal should update the y coordinate correctly',()=>{
    const point=mockConstructor(new Point(0,0));
    point.moveHorizontal(6)
    expect(point.x).toBe(6)
    
   }) 
   it('moveHorizontal should only accept a number as input',()=>{
      const point=mockConstructor(new Point({x:4,y:5}))
      expect(() => point.moveHorizontal('invalid')).toThrow('Invalid input. value should be a number.');
   })
   
})
