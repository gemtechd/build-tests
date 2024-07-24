const Point = require('../../../modules/ecs6-class/point')

describe('CONSTRUCTOR',() => {
    it('should build an object with default values',()=>{
        const point = new Point()
        expect(point).toEqual({x:0,y:0})
    }) 
    it('should build an object',()=>{
        const point = new Point({x:8,y:9})
        expect(point).toEqual({x:8,y:9})
    }) 
    it('should build an object',()=>{
        const point = new Point({x:-8,y:-9})
        expect(point).toEqual({x:-8,y:-9})
    }) 
    it('should build an object',()=>{
        const point = new Point({x:5.5})
        expect(point).toEqual({x:5.5,y:0})
    }) 
    
    it('An error should be thrown when the type of x is not number' , () => {    
        expect(() => new Point({x:'l',y:9})).toThrowError('type of x is not number')
    })
    it('An error should be thrown when the type of x is not number' , () => {
        expect(() => new Point({x:[9,0],y:9})).toThrowError('type of x is not number')
    })
    it('An error should be thrown when the type of x is not number' , () => {    
        expect(() => new Point({x:4,y:[]})).toThrowError('type of y is not number')
    })  
    it('An error should be thrown when the type of y is not number' , () => {    
        expect(() => new Point({x:5,y:'a'})).toThrowError('type of y is not number')
    })
})

describe('MOVE_VERTICAL', ()=> {
   it('should return the correct answer',()=> {
    const point = new Point({x:5,y:6})
    point.moveVertical(5)
    expect(point.y).toBe(11)
   })
   it('An error should be thrown when the type of value is not number',()=> {
    const point = new Point({x:5,y:6})  
    expect(() => point.moveVertical('a')).toThrowError('the type of the value is not correctly')
})
})

describe('MOVE_HORIZONTAL', ()=> {
    it('should return the correct answer',()=> {
     const point = new Point({x:5,y:6})
     point.moveHorizontal(5)
     expect(point.x).toBe(10)
    })

    it('An error should be thrown when the type of value is not number',()=> {
        const point = new Point({x:5,y:6})  
        expect(()=>point.moveHorizontal('a')).toThrowError('the type of the value is not correctly')
    })
 })