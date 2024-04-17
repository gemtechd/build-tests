const Line = require("../../../modules/ecs6-class/line");
const Point = require("../../../modules/ecs6-class/point");
//const Point = require("../../../modules/ecs6-class/point");

// constructor( {point1 = undefined, point2 = undefined, n = undefined, slope = undefined }) {
//     this.point1 = point1;
//     this.point2 = point2;
//     this.slope = slope;
//     this.n = n;
// }
describe('constructor',()=>{
    
    it('test putting values in the arguments', function() {
       const line1= new Line({point1:{x:undefined,y:undefined},point2:{x:10,y:14},n:4,slope:8}) 
       //if we need to put each argument from the object in other line or i can put it un the same expect-together (and how i write it?)
       expect(line1).toEqual({point1:{x:undefined,y:undefined},point2:{x:10,y:14},n:4,slope:8})
       //if in constractor we neen check ecception and if it null/underfind??
     })

})

    //  addPoint(point) {
    //     if (this.point1 === undefined) {
    //         this.point1 = point
    //     }
    //     else {
    //         if (this.point2 === undefined) {
    //             this.point2 = point
    //         }
    //     }
    // }
    

describe('addPoint',()=>{
  
  it('test adding values to the point argument that he is underfind',function(){
    const line1=new Line({point2:{x:10,y:14},n:10,slope:20});
    line1.addPoint({x:100,y:200});
    expect(line1.point1).toEqual({x:100,y:200});
  })

  it('test adding values to the point argument that he is underfind',function(){
    const line1=new Line({point1:{x:10,y:14},n:10,slope:20});
    line1.addPoint({x:100,y:200});
    expect(line1.point2).toEqual({x:100,y:200});
  })

  it('should function throw an Error when one or more empty variable exist',function(){
    const l1=new Line({point1:{x:10,y:14},n:10,slope:20});
    try{
        expect(l1.addPoint()).toTrow(new error("exist empty property"))

    }catch(e){
        console.log(e);

    }
  })
        
})





describe('get points',()=>{
    it('testing putting the same value who ws before in the points',function(){
       const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2}}) ;
       expect(l.Points).toEqual({point1:{x:1,y:1},point2:{x:2,y:2}});
    })
})

describe('set Slope',()=>{
    it('testing putting value in the slope',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2},n:10,slope:20}) ;
        l.Slope=100;
        expect(l.slope).toBe(100);
    })

    it('testing throw an error when thre is no vlue in slope',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2},n:10}) ;
        try{
            expect(l.Slope).toTrow(new error("the value is empty"))
        }
        catch(e){
            console.log(e);
        }    
    })

})

describe('set N',()=>{
    it('testing putting value in the N',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2},n:10,slope:20}) ;
        l.N=200;
        expect(l.n).toBe(200);
    })

    it('testing throw an error when thre is no vlue in N',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2}}) ;
        try{
            expect(l.N).toTrow(new error("the value is empty"))
        }
        catch(e){
            console.log(e);
        }    
    })

})
describe('getPointByX',()=>{
    it('check that its works ok',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2},n:10,slope:20}) ;
        expect(l.getPointByX(10)).toEqual(new Point({x:10,y:210}));
    } )


    it('testing throw an error when there is no vlue in x',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2}}) ;
        try{
            expect(l.getPointByX()).toTrow(new error("the value is empty"))
        }
        catch(e){
            console.log(e);
        }    
    })
})

describe('getPointOnXAsis',()=>{
    it('chack that if there is value on slope the function returts like "getPointByX" with 0 ',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2},n:10,slope:20}) ; 
        expect(l.getPointOnXAsis()).toEqual(new Point({x:0,y:10}))
    })
    it('chack that if there is no value on slope the function returts underfind',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2},n:10}) ; 
        expect(l.getPointOnXAsis()).toEqual(undefined)
    })

})

describe('getPointByY',()=>{
    it('check that it works ok',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2},n:10,slope:20}) ;
        expect(l.getPointByY(100)).toEqual(new Point({x:8,y:100}));
    })

    it('testing throw an error when thre is no vlue in y',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2}}) ;
        try{
            expect(l.getPointByY()).toTrow(new error("the value is empty"))
        }
        catch(e){
            console.log(e);
        }    
    })
})

describe('getPointByY',()=>{
    it('chack that if there is value on slope the function returts like "getPointByY" with 0 ',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2},n:10,slope:20}) ; 
        expect(l.getPointOnYAsis()).toEqual(new Point({x:-2,y:0})) 
    })
    it('chack that if there is no value on slope the function returts underfinend ',function(){
        const l=new Line({point1:{x:1,y:1},point2:{x:2,y:2},n:10}) ; 
        expect(l.getPointOnYAsis()).toEqual(undefined) 
    })

})
 