const{calculateDistance,calculateJunctionPoint,calculateAngle,calculateNOfLineFunction,calculateSlope}
=require("../../modules/geometry-calculation")
const Point=require("../../modules/ecs6-class/point")
const Line=require("../../modules/ecs6-class/line")

describe("calculateDistance", () => {
    it("return the correct answer", () => {    
        expect(calculateDistance(new Point(5,2),new Point(2,5))).toBe(3)
    });
});
 