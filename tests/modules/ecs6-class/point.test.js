const Line = require("../../../modules/ecs6-class/line");
const Point = require("../../../modules/ecs6-class/point");
describe('constructor',()=>{
    
    it('test putting values in x and y', function() {
       const point1=new Point({x:5,y:7})
       expect(point1.x).toBe(5);
       expect(point1.y).toBe(7);
     })
})

describe('moveVertical',()=>{
it('test adding one value to the y', function() {
    
    const point1=new Point({x:2,y:4})
    point1.moveVertical(3)
    const res=point1.y
    expect(res).toBe(7);
 })

 
 it('throws an error when first argument is `null`', () => {
    const point2=new Point({x:2,y:4});
    try{
      expect(point2.moveVertical()).toTrow(new error("no value given"));
    }catch(e){
        console.log(e);
    }

});
});


describe('moveHorizontal',()=>{
    it('test adding one value to the x', function() {
        
        const point1=new Point({x:2,y:4})
        point1.moveHorizontal(3)
        const res=point1.x
        expect(res).toBe(5);
     })


     it('test throws error when there is no vlue on "value" argument',function(){
        const l1=new Line({x:10,y:20});
        try{
            expect(l1.moveHorizontal()).toTrow(new error("no value given"));
        }
        catch(e){
            console.log(e)  
        }
     })
    // it('throws an error when first argument is `null`', () => {
        //   expect(() => moveHorizontal(null, "bar")).toThrow("no value given");
        // })
    });

   

