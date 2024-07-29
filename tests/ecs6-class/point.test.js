const Point =require("../../modules/ecs6-class/point")
const point=new Point()

describe("CHECK_IF_THE_OBJECT_VALID",()=>{
    it("should create point object when you send two numbers",()=>{
        const response = new Point({x:3,y:5})
        expect(response).toBeInstanceOf(Point)
    })
    it("should create point object when you send one number",()=>{
        const response = new Point({x:3})
        expect(response).toBeInstanceOf(Point)
    })
    it("should create point object when you did'n send parameters",()=>{
        const response = new Point()
        expect(response).toBeInstanceOf(Point)
    })
    describe("ERROR",()=>{
        it ("throw new error if the type not number",()=>{
            expect(()=>new Point({x:true,y:false})).toThrow("the type must to be number")
            expect(()=>new Point({x:true,y:2})).toThrow("the type must to be number")
            expect(()=>new Point({x:2,y:true})).toThrow("the type must to be number")
            expect(()=>new Point({x:()=>{},y:()=>{}})).toThrow("the type must to be number")
            expect(()=>new Point({x:()=>{},y:2})).toThrow("the type must to be number")
            expect(()=>new Point({x:1,y:()=>{}})).toThrow("the type must to be number")
            expect(()=>new Point({x:{x:2},y:{y:2}})).toThrow("the type must to be number")
            expect(()=>new Point({x:{x:2},y:5})).toThrow("the type must to be number")
            expect(()=>new Point({x:4,y:{y:2}})).toThrow("the type must to be number")
            expect(()=>new Point({x:"frenkel",y:"esty"})).toThrow("the type must to be number")
            expect(()=>new Point({x:"esty",y:5})).toThrow("the type must to be number")
            expect(()=>new Point({x:4,y:"esty"})).toThrow("the type must to be number")
            expect(()=>new Point({x:[2,4],y:[1,2]})).toThrow("the type must to be number")
            expect(()=>new Point({x:[2,4],y:5})).toThrow("the type must to be number")
            expect(()=>new Point({x:4,y:[3,2]})).toThrow("the type must to be number")

        })   
    })
})

describe("MOVE_VERTICAL",()=>{
    it("should move the point.x quantity steps of value",()=>{
        point.moveVertical(3)
        expect(point.y).toEqual(3)
    })
    describe("ERRORS",()=>{ 
        it("throw new error when didn't send parameter",()=>{
            expect(()=>point.moveVertical()).toThrow("didn't send parameter")
        })
        it("throw new error when the type not a number",()=>{
            expect(()=>point.moveVertical(true)).toThrow("type is not a number")
            expect(()=>point.moveVertical(()=>{})).toThrow("type is not a number")
            expect(()=>point.moveVertical({x:4})).toThrow("type is not a number")
            expect(()=>point.moveVertical("string")).toThrow("type is not a number")
            expect(()=>point.moveVertical([3,2])).toThrow("type is not a number")
        })
    })
})

describe("MOVE_HORIZONTAL",()=>{
    it("should move the point.x quantity steps of value",()=>{
        point.moveHorizontal(3)
        expect(point.x).toEqual(3)
    })
    describe("ERRORS",()=>{ 
        it("throw new error when didn't send parameters",()=>{
            expect(()=>point.moveHorizontal()).toThrow("didn't send parameters")
        })
        it("throw new error when the type not a number",()=>{
            expect(()=>point.moveHorizontal(true)).toThrow("type is not a number")
            expect(()=>point.moveHorizontal(()=>{})).toThrow("type is not a number")
            expect(()=>point.moveHorizontal({x:4})).toThrow("type is not a number")
            expect(()=>point.moveHorizontal("string")).toThrow("type is not a number")
            expect(()=>point.moveHorizontal([3,2])).toThrow("type is not a number")
        })
    })

})