const Point = require("../../../modules/ecs6-class/point")

describe("moveVertical", () => {
    it("return the correct answer", () => {
        const point = new Point({x:1, y:1})
        point.moveVertical(5)
        expect(point.y).toBe(6)
    });
    it("throw an error when the value is undifind", () => {
        const point = new Point({x:1, y:1});
        try{point.moveVertical()}
        catch(e){expect(e.message).toBe("the y is undefined")}        
        });
});
describe("moveVertical", () => {
    it("return the correct answer", () => {
        const point = new Point({x:1,y: 1})
        console.log(point.x)
        point.moveHorizontal(5)
        console.log(point.x)
        expect(point.x).toBe(6)
    });
});
describe("moveHorizontal", () => {
    it("return the correct answer", () => {
        const point = new Point({x:1, y:1})
        try{point.moveHorizontal()}
        catch(e){expect(e.message).toBe("the x is undefined")}
    });
});
