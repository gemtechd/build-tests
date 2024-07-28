const Point=require ('../../../modules/ecs6-class/point')
let point=new Point({})

describe('CONSTRUCTOR',()=>{
   it('should return x after is built the constructor',()=>{
       expect(point.x).toBe(0)
   })
   it('should return y after is built the constructor',()=>{
       expect(point.y).toBe(0)
   })
   


})

describe('ERRORS',()=>{
   it('Error checker for constructor',()=>{
   expect(()=>new Point({x:'a'})).toThrow('x should be of type number')
   expect(()=>new Point({x:['acc','add']})).toThrow('x should be of type number')
   expect(()=>new Point({y:true})).toThrow('y should be of type number')
   expect(()=>new Point({y:(v)=>v})).toThrow('y should be of type number')
   expect(()=>new Point({x:()=>false})).toThrow('x should be of type number')

})
})

describe('MOVE_VERTICAL',()=>{
   it('should move y',()=>{
    const point=new Point({x:1,y:2})
    point.moveVertical(2)
    expect(point).toEqual({x:1,y:4})
   })
})
describe('ERRORS',()=>{
   it('Error checker for function moveVertical',()=>{
      expect(()=>point.moveVertical('a')).toThrow('the function should get number')
      expect(()=>point.moveVertical(['acc','add'])).toThrow('the function should get number')
      expect(()=>point.moveVertical(true)).toThrow('the function should get number')
      expect(()=>point.moveVertical()).toThrow('the function should get number')
      expect(()=>point.moveVertical((v)=>v)).toThrow('the function should get number')

   })
})

describe('MOVE_HORIZONTAL',()=>{
   it('should move x',()=>{
    const point=new Point({x:1,y:2})
    point.moveHorizontal(2)
    expect(point).toEqual({x:3,y:2})
    })
})
describe('ERRORS',()=>{
   it('Error checker for function moveHorizontal',()=>{
      expect(()=>point.moveHorizontal('a')).toThrow('the function should get number')
      expect(()=>point.moveHorizontal(['acc','add'])).toThrow('the function should get number')
      expect(()=>point.moveHorizontal(true)).toThrow('the function should get number')
      expect(()=>point.moveHorizontal()).toThrow('the function should get number')
      expect(()=>point.moveHorizontal((v)=>v)).toThrow('the function should get number')

   })
})



