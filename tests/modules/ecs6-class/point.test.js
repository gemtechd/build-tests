const Point = require('./../../../modules/ecs6-class/point');
const point = new Point();
describe('Point constructor', () => {
    it('should set the correct x and y values when an object with specific values is passed', () => {
        const point = new Point({ x: 10, y: 20 });
        expect(point.x).toBe(10);
        expect(point.y).toBe(20);
    });

    it('should set default values to x=0 and y=0 when no parameters are provided', () => {
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
    });
    describe('ERRORS', () => {
        it('should throw error when the x is invalid', () => {
            expect(() => point = new Point({ x: "string", y: 0 })).toThrow('the x is invalid')
            expect(() => point = new Point({ x: { "object": 9 }, y: 0 })).toThrow('the x is invalid')
            expect(() => point = new Point({ x: true, y: 0 })).toThrow('the x is invalid')
            expect(() => point = new Point({ x: ["array", 9], y: 0 })).toThrow('the x is invalid')
            expect(() => point = new Point({ x: function () { }, y: 0 })).toThrow('the x is invalid')
        })
        it('should throw error when the y is invalid', () => {
            expect(() => point = new Point({ x: 1, y: "string" })).toThrow('the y is invalid')
            expect(() => point = new Point({ x: 1, y: { "object": 9 } })).toThrow('the y is invalid')
            expect(() => point = new Point({ x: 1, y: true })).toThrow('the y is invalid')
            expect(() => point = new Point({ x: 1, y: ["array", 9] })).toThrow('the y is invalid')
            expect(() => point = new Point({ x: 1, y: function () { } })).toThrow('the y is invalid')
        })
    })

});
describe('Point moveVertical method', () => {
    it('should correctly move the y coordinate by the given value', () => {
        point.moveVertical(5);
        expect(point.y).toBe(5);
    });
    describe('ERRORS', () => {
        it('should throw new error when the incoming value is not a number', () => {
            expect(() => point.moveVertical("string")).toThrow("the value is not type of number")
            expect(() => point.moveVertical({ "object": 5 })).toThrow("the value is not type of number")
            expect(() => point.moveVertical(true)).toThrow("the value is not type of number")
            expect(() => point.moveVertical(function () { })).toThrow("the value is not type of number")
            expect(() => point.moveVertical([9, 9])).toThrow("the value is not type of number")
            expect(() => point.moveVertical()).toThrow("the value is not type of number")
        })
    })
})


describe('Point moveHorizontal method', () => {
    it('should correctly move the x coordinate by the given value', () => {
        point.moveHorizontal(3);
        expect(point.x).toBe(3);
    });
    describe('ERRORS', () => {
        it('should throw new error when the incoming value is not a number', () => {
            expect(() => point.moveHorizontal("string")).toThrow("the value is not type of number")
            expect(() => point.moveHorizontal({ "object": 5 })).toThrow("the value is not type of number")
            expect(() => point.moveHorizontal(true)).toThrow("the value is not type of number")
            expect(() => point.moveHorizontal(function () { })).toThrow("the value is not type of number")
            expect(() => point.moveHorizontal([4, 9])).toThrow("the value is not type of number")
            expect(() => point.moveHorizontal([4, 9])).toThrow("the value is not type of number")
        })
    })
});