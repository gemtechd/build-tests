const Point=require("../modules/ecs6-class/point")

describe('moveVertical',()=>{
    it('moveVertical',()=>{
        const point=new Point({x:7,y:8})
        point.moveVertical(2)
        expect(point.y).toBe(10)

    })
} ) 
describe('moveHorizontal',()=>{
    it('moveHorizontal',()=>{
        const point=new Point({x:7,y:8})
        point.moveHorizontal(2)
        expect(point.x).toBe(9)

    })
} ) 
