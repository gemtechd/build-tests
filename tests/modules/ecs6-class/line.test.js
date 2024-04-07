const Line = require("../../../modules/ecs6-class/line")
const Point = require("../../../modules/ecs6-class/point")
describe('lll', () => {
    it('k', () => {
    });
});
describe("getPointByX", () => {
    it('return the correct answer', () => {
        const line = new Line({ point1: { x: 0, y: 5 }, point2: { x: 3, y: 2 }, n: 5, slope: -1 })
        expect(line.getPointByX(5)).toEqual({ x: 0, y: 5 });
    });
    it('trrow an Error when one or more empty variable exist', () => {
        expect(line.getPointByX().toThrow(new Error("exit empty property")))
    });
});

describe("getPointByY", () => {
    it('return the correct answer', () => {
        const line = new line(new Point(3, 2), new Point(5, 0), 5, -1);
        expect(line.getPointByY(0)).toEqual({ x: 5, y: 0 });
    });
    it('trrow an Error when one or more empty variable exist', () => {
        expect(line.getPointByY().toThrow(new Error("exit empty property")));
    });
});



