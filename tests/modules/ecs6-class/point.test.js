
const Point = require("../../../modules/ecs6-class/point");

describe('moveVertical',()=>{
    it('should return moveVertical ',()=>{
        const point=new Point({x:5,y:2})
        point.moveVertical(3)
        const response=point.y
        
        expect(response).toBe(5)
    })
})
describe('moveHorizontal',()=>{
    it('should return moveHorizontal ',()=>{
        const point=new Point({x:5,y:2})
        point.moveHorizontal(3)
        const response=point.x
        expect(response).toBe(8)
    })
}) 









    
// //TODO todo
// //FIXME g
// //ISSUE hgh
// //NOTE hh