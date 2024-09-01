const Line = require('../../../modules/ecs6-class/line')
const Point = require('../../../modules/ecs6-class/point')
const Point1 = new Point({ x: 10, y: 37 });
const Point2 = new Point({ x: 3, y: 9 });
const Point3 = new Point({ x: 2, y: 37 });
const Point4 = new Point({ x: 2, y: 9 });
let line = new Line({ point1: Point1, point2: Point2 })
let line2 = new Line({ point1: Point3, point2: Point4 })


describe('calculateSlope', () => {
    line.calculateSlope();
    it('calculateSlope calculates of two points correctly', () => {
        expect(line.slope).toBeDefined();
    })

    it('calculateSlope calculates the right sloop', () => {
        expect(line.slope).not.toEqual(2);
    })

    it('calculateSlope calculates the right sloop', () => {
        expect(line.slope).toEqual(4);
    })
});


test('calculateSlope when the point1.x=point2.x', () => {

    const line1 = new Line({ x: 1, y: 2 }, { x: 1, y: 4 });
    line1.calculateSlope();
    expect(line.slope).toThrow('it is not possible to divide by zero')
});


describe('calculateNOfLineFunction', () => {
    line.calculateNOfLineFunction();
    line.calculateSlope();

    it('calculateNOfLineFunction calculate  the right n', () => {
        line.calculateNOfLineFunction();
        expect(line.n).toBe(-3)
    })

    it('calculateNOfLineFunction calculate n', () => {
        expect(line.n).not.toBe(2)
    })
    it('calculateNOfLineFunction calculate with just one point', () => {
        const line2 = new Line({ x: 2, y: 4 });
        line2.calculateNOfLineFunction();
        line2.calculateSlope();
        expect(line2).toThrow("must to be two points");
    })
});


describe('getPointByY', () => {
    it('check if return a good point', () => {
        expect(line.getPointByY(5).x).toEqual(2)
    })
    it('check if throw the right error', () => {
        expect(line.getPointByY(-5)).toThrow("y must be greater or equal to 0")
    })
    it('check if return a good throw', () => {
        expect(line2.getPointByY(2).toThrow("cant divide by zero"))
    })

    it('check if return a good throw', () => {
        expect(line.getPointByY("one")).toThrow("y must be a number")
    })
});




describe('getPointByX', () => {
    it('check if return a good point', () => {
        expect(line.getPointByX(2).y).toEqual(5)
    })
    it('check if return a good throw', () => {
        expect(line.getPointByX({ "two": 2 })).toThrow("x must be a number")
    })
    it('check if return a good throw', () => {
        expect(line.getPointByX('aa')).toThrow("x must be a number")
    })
    it('check if return a good throw', () => {
        expect(line.getPointByX([{a:'aa'}])).toThrow("x must be a number")
    })
});





