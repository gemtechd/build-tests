

const {Point,moveHorizontal}=require('../../../modules/ecs6-class/point')
describe('CONSTRUCTORE', () => {

    it('should initialize x and y to default values when no parameters are provided', () => {
      
        const point= new Point();
        expect(point.x).toBe(0)
        expect(point.y).toBe(0)
        const point1 = new Point({x:5});
        expect(point1.x).toBe(5)
        expect(point1.y).toBe(0)
        const point2 = new Point({y:5});
        expect(point2.x).toBe(0)
        expect(point2.y).toBe(5)

    });
    it('should throw error when x or y is not a number', () => {
        const x = "abc";
        const y = "s";
        
        expect(() => new Point({ x: x, y: 5 })).toThrow('x is not number');
        expect(() => new Point({ x: 5, y: y })).toThrow('y is not number');
        expect(() => new Point({ x: x, y: y })).toThrow('x  and y are not number');
    });

    it('Point constructor initializes x and y correctly', () => {
        const point = new Point({x:3,y: 4});
        expect(point.x).toBe(3);
        expect(point.y).toBe(4);
    });
})
describe('MOVEVERTICAL', () => {
    it('should value is not define ', () => {
        const point = new Point()
        expect(()=>point.moveVertical()).toThrow('value is not define');
      })
      
      it("should value is not a number",() => {
        const point = new Point()
        expect(()=>point.moveVertical("abc")).toThrow('value is not a number');
      })

    it('should move vertically correctly', () => {
      const point=new Point({x:5,y:2})
      point.moveVertical(5)
      expect(point.y).toBe(7)
    
    })
})

    describe('MOVEHORIZONAL', () => {
        it('should value is not define ', () => {
            const point = new Point()
            expect(()=>point.moveHorizontal()).toThrow('value is not define');
          })
          
          it("should value is not a number",() => {
            const point = new Point()
            expect(()=>point.moveHorizontal("abc")).toThrow('value is not a number');
          })
    
        it('should move vertically correctly', () => {
          const point=new Point({x:5,y:2})
          point.moveHorizontal(5)
          expect(point.x).toBe(5+5)
        
        })
    
    
})

