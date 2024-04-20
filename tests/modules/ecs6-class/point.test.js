const Point = require("../../../modules/ecs6-class/point")

describe("moveVertical", () => {
    it("return the correct answer", () => {
        const point = new Point(1, 1)
        expect(point.moveVertical(5)).toBe(6)
        expect(point.y).toBe(6)
    });
    it("should throw error when the value is undifind", () => {
        const point = new Point(1, 1);
        try{point.moveVertical()}
        catch(e){expect(e.message).toBe("the y is undefined")}        
        });
});
describe("moveVertical", () => {
    it("return the correct answer", () => {
        const point = new Point(1, 1)
        expect(point.moveVertical(5)).toBe(6)
        expect(point.x).toBe(6)
    });
});
describe("moveHorizontal", () => {
    it("return the correct answer", () => {
        const point = new Point(1, 1)
        try{point.moveHorizontal()}
        catch(e){expect(e.message).toBe("the x is undefined")}
    });
});
