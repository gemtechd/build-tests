const{calculateDistance,calculateJunctionPoint,calculateAngle,calculateNOfLineFunction,calculateSlope}
=require("../../modules/geometry-calculation")
const Point=require("../../modules/ecs6-class/point")
const Line=require("../../modules/ecs6-class/line")

describe("calculateDistance", () => {
    it("return the correct answer", () => {    
        expect(calculateDistance(new Point({x:5,y:2}),new Point({x:2,y:5}))).toBe(3)
    });
});
 