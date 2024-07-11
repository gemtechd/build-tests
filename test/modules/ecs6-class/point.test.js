const Point = require("../../../modules/ecs6-class/point");
const mockConstructor = jest.fn(constructor);
console.log(mockConstructor);   
  
describe('POINT`S FUNCTION', () => {
    describe('CONSTRUCTOR', () => {
        it('Check if a point is created with default values', () => {
        const point=new Point()
            expect(point).toEqual({x:0,y:0});
        }),
        it('Check if a point is created with default values', () => {
          const point=new Point({x:6,y:7})
          expect(point).toEqual({x:6,y:7});
      })
     
      
    it('should throw an error when non-number values are provided', () => {
          expect(()=>new Point({x:'6',y:7})).toThrow('the type of the numbers is not correctly')
    });
    it('should throw an error when non-number values are provided', () => {
      expect(() => new Point({ x: 5, y: '8' })).toThrow('the type of the numbers is not correctly')
    });
})


    describe('MOVE_VERTICAL', () => {
      it('should update y correctly when moved vertically', () => {
        const point = mockConstructor()
        console.log(point);
        point.moveVertical(5)
        expect(point.y).toBe(5)
      })
        it('should throw an error if the value is not a number', () => {
          const point = mockConstructor(new Point())
          expect(() => point.moveVertical('5')).toThrowError('the type of the value is not correctly')
        });
})
  describe('MOVE_HORIZONTAL', () => {
    it('should update x correctly when moved horizontally', () => {
      const point =mockConstructor()
      console.log(point.x);
      point.moveHorizontal(3);
      expect(point.x).toBe(3);
    });
})

    it('should throw an error if the value is not a number', () => {
      const point = mockConstructor(new Point())
      expect(() => point.moveHorizontal('5')).toThrowError('the type of the value is not correctly')
    });
  })

});