const Line = require("../../../modules/ecs6-class/line")
const Point = require("../../../modules/ecs6-class/point")

describe("addPoint", () => {
    let line;
    it('throw an Error when the point is not initializad', () => {
        line = new Line({ point1: { x: 0, y: 5 }, point2: { x: 3, y: 2 }, n: 5, slope: -1 })
        try { line.addPoint() }
        catch (e) { expect(e.message).toBe("the point isn't initializad") }
    });
    it('throw an Error when both points are initialized', () => {
        line = new Line({ point1: { x: 0, y: 5 }, point2: { x: 3, y: 2 }, n: 5, slope: -1 })
        try { line.addPoint({ x: 0, y: 5 }) }
        catch (e) { expect(e.message).toBe("both points are initialized") }
    });
    it('initializes correctly', () => {
        line = new Line({ point1: { x: 0, y: 5 }, n: 5, slope: -1 })
        line.addPoint({ x: 3, y: 2 });
        expect(line.point2).toEqual({ x: 3, y: 2 });
    })
    it('initializes correctly', () => {
        line = new Line({ point2: { x: 3, y: 2 }, n: 5, slope: -1 })
        line.addPoint({ x: 0, y: 5 });
        expect(line.point1).toEqual({ x: 0, y: 5 });
    })
})
describe("getPoints", () => {
    let line;
    it('throw an Error when both points are not initialized', () => {
        line = new Line({ n: 5, slope: -1 })
        try { line.Points() }
        catch (e) { expect(e.message).toBe("both points are not initialized") }
    })
    it('throw an Error when point1 are not initialized', () => {
        line = new Line({ point2: { x: 3, y: 2 }, n: 5, slope: -1 })
        try { line.Points() }
        catch (e) { expect(e.message).toBe("point1 is not initialized") }
    })
    it('throw an Error when point2 are not initialized', () => {
        line = new Line({ point1: { x: 0, y: 5 }, n: 5, slope: -1 })
        try { line.Points() }
        catch (e) { expect(e.message).toBe("point2 is not initialized") }

    })
})
//describe("setSlope",()=>{
//    let line;
//it('throw an Error when the value of slope is undifind',()=>{
//   line = new Line({ point1: { x: 0, y: 5 }, point2: { x: 3, y: 2 }, n: 5})
//    let slope;
//    try{line.Slope(slope)}
//    catch (e) {expect(e.message).toBe("the value of slope is undefined")}
//})
//it('throw an Error when the value of slope is not a Number',()=>{
//    line = new Line({ point1: { x: 0, y: 5 }, point2: { x: 3, y: 2 }, n: 5})
//    try{line.Slope('a')}
//    catch (e) {expect(e.message).toBe("the value of slope is not a number")}
//})
//})
describe("getPointOnXAsis",()=>{
    let line;
    
    it("return the correct answer When a line has a slope",()=>{
        line = new Line({ point1: { x: 1, y: 4 }, point2: { x: 3, y: 2 }, n: 5, slope: -1 });
        expect(line.getPointOnXAsis()).toEqual({x:0,y:5});
    })
    it("return the correct answer When a line doesn't have a slope",()=>{
        line = new Line({ point1: { x: 0, y: 4 }, point2: { x: 0, y: 4 }, n: undefined, slope: undefined });
        expect(line.getPointOnXAsis()).toBe(undefined);
    })
})
describe("getPointOnYAsis",()=>{
    let line;
    
    it("return the correct answer When a line has a slope",()=>{
        line = new Line({ point1: { x: 1, y: 4 }, point2: { x: 3, y: 2 }, n: 5, slope: -1 });
        expect(line.getPointOnYAsis()).toEqual({x:5,y:0});
    })
    it("return the correct answer When a line doesn't have a slope",()=>{
        line = new Line({ point1: { x: 0, y: 4 }, point2: { x: 0, y: 4 }, n: undefined, slope: undefined });
        expect(line.getPointOnYAsis()).toBe(undefined);
    })
})
describe("isPointOnLine", () => {
    let line = new Line({ point1: { x: 0, y: 5 }, point2: { x: 3, y: 2 }, n: 5, slope: -1 });
    let point;
    it("return the correct answer when the point is on the line", () => {
        point=new Point({x:1,y:4})
        expect(line.isPointOnLine(point)).toBe(true)
    })
    it("return the correct answer when the point isn't on the line", () => {
        point=new Point({x:1,y:5})
        expect(line.isPointOnLine(point)).toBe(false)
    })
})
describe("getPointByX", () => {
    let line;
    it('return the correct answer', () => {
        line = new Line({ point1: { x: 0, y: 5 }, point2: { x: 3, y: 2 }, n: 5, slope: -1 })
        expect(line.getPointByX(0)).toEqual({ x: 0, y: 5 });
    });
    it('throw an Error when one or more empty variable exist', () => {
        try { line.getPointByX() }
        catch (e) { expect(e.message).toBe("an empty attribute exists") }
    });
});
describe("getPointByY", () => {
    let line;
    it('return the correct answer', () => {
        line = new Line({ point1: { x: 0, y: 5 }, point2: { x: 3, y: 2 }, n: 5, slope: -1 });
        expect(line.getPointByY(0)).toEqual({ x: 5, y: 0 });
    });
    it('throw an Error when one or more empty variable exist', () => {
        try { line.getPointByY() }
        catch (e) { expect(e.message).toBe("an empty attribute exists") }
    });
});



/*
describe('getPointByX', () => {
    let line,getPointByX;
    beforeEach(() => {
         line = new Line({ point1: { x: 0, y: 5 }, point2: { x: 3, y: 2 }, n: 5, slope: -1 })
         getPointByX = jest.spyOn(line,'getPointByX').mockImplementation(() => {
            return { x: 0, y: 0 }
        })
    });
    afterEach(() => {
        getPointByX.mockRestore();
    });
    it('mock getPointByX', () => {
        const point = line.getPointByX(5);
            return { x: 0, y: 5 }
        })
    })
*/



