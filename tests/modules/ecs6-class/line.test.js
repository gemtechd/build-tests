const Line = require("../../../modules/ecs6-class/line")
const Point = require("../../../modules/ecs6-class/point")

describe("getPointByX", () => {
    let line;
    it('return the correct answer', () => {
         line = new Line({ point1: { x: 0, y: 5 }, point2: { x: 3, y: 2 }, n: 5, slope: -1 })
        expect(line.getPointByX(0)).toEqual({x:0,y:5});
    });
    it('throw an Error when one or more empty variable exist', () => {
        try {line.getPointByX()}
        catch(e){expect(e.message).toBe("exit empty property")}
    });
});
describe("getPointByY", () => {
    let line;
    it('return the correct answer', () => {
         line = new Line({point1:{x:0, y:5}, point2:{x:3, y:2}, n:5, slope:-1});
        expect(line.getPointByY(0)).toEqual({x:5,y:0});
    });
    it('throw an Error when one or more empty variable exist', () => {
        try {line.getPointByY()}
        catch(e){expect(e.message).toBe("exit empty property")}
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



