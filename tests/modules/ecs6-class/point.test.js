const Point = require("../../../modules/ecs6-class/point")

describe("moveVertical", () => {
    it("should return the correct answer", () => {
        const point = new Point({ x: 1, y: 1 });
        point.moveVertical(5);
        expect(point.y).toBe(6);
    });
    it("should throw error when the value is undifind", () => {
        const point = new Point(1, 1);
        try { point.moveVertical() }
        catch (e) { expect(e.message).toBe("the value is undefined") }
    });
    it("should throw error when the value is not a number", () => {
        const point = new Point(1, 1)
        try { point.moveVertical("a") }
        catch (e) { expect(e.message).toBe("the value is not a number") }
    });
});
describe("moveHorizontal", () => {
    it("should return the correct answer", () => {
        const point = new Point({ x: 1, y: 1 })
        //expect(point.moveHorizontal(5)).toBe(6)
        point.moveHorizontal(5);
        expect(point.x).toBe(6)
    });
    it("should throw error when the value is undefined", () => {
        const point = new Point(1, 1)
        try { point.moveHorizontal() }
        catch (e) { expect(e.message).toBe("the value is undefined") }
    });
    it("should throw error when the value is not a number", () => {
        const point = new Point(1, 1)
        try { point.moveHorizontal("a") }
        catch (e) { expect(e.message).toBe("the value is not a number") }
    });
});
