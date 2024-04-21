const { calculateDistance, calculateJunctionPoint, calculateAngle, calculateNOfLineFunction, calculateSlope }
 = require("../../modules/geometry-calculation")
const Point = require("../../modules/ecs6-class/point")
const Line = require("../../modules/ecs6-class/line")

describe("calculateDistance", () => {
    it("return the correct answer", () => {
        expect(calculateDistance(new Point({ x: 5, y: 2 }), new Point({ x: 2, y: 5 }))).toBe(3)
    });
    it("throw an error when 2 points are the same point", () => {
        const point1 = new Point({ x: 1, y: 2 });
        const point2 = new Point({ x: 1, y: 2 });
        try { (calculateDistance(point1, point2)) }
        catch (e) { expect(e.massage).toBe("2 points are the same point") }
    })
});
describe("calculateJunctionPoint", () => {
    let line1, line2;
    it("return the correct answer when 2 lines are the same line", () => {
        line1 = new Line({ point1: { x: 5, y: 1 }, point2: { x: 9, y: 5 }, n: 4, slope: 1 });
        line2 = new Line({ point1: { x: 5, y: 1 }, point2: { x: 9, y: 5 }, n: 4, slope: 1 });
        expect(calculateJunctionPoint(line1, line2)).toBe(true)
    })
    it("return the correct answer when lines are parallels", () => {
        line1 = new Line({ point1: { x: 6, y: 3 }, point2: { x: 10, y: 7 }, n: 3, slope: 1 });
        line2 = new Line({ point1: { x: 5, y: 1 }, point2: { x: 9, y: 5 }, n: 4, slope: 1 });
        console.log(line1)
        expect(calculateJunctionPoint(line1, line2)).toBe(false)
    })
    it("return the correct answer when there is a junction", () => {
        line1 = new Line({ point1: { x: 6, y: 3 }, point2: { x: 10, y: 7 }, n: 3, slope: 2 });
        line2 = new Line({ point1: { x: 5, y: 1 }, point2: { x: 9, y: 5 }, n: 4, slope: 1 });
        console.log(line1)
        expect(calculateJunctionPoint(line1, line2)).toEqual({ x: 1, y: 5 })
    })
    describe("calculateNOfLineFunction", () => {
        let point;
        let slope = 1;
        it("return the correct answer", () => {
            point = new Point({x:4,y:8})
            expect(calculateNOfLineFunction({point,slope})).toBe(4)
        })
    })
})
    describe("calculateSlope",()=>{
        let point1,point2;
        it("return the correct answer", () => {
            point1 = new Point({x:4,y:8})
            point2 = new Point({x:8,y:4});
            expect(calculateSlope(point1,point2)).toBe(-1)
        })
    })
