const Point = require("../../../modules/ecs6-class/point")

describe("MOVE_VERTICAL", function () {
    it("should return point y", () => {
        const point = new Point({ x: 5, y: 7 })
        point.moveVertical(2)
        expect(point.y).toBe(9)
    })
    it("should return point y", () => {
        const point = new Point({ x: 5, y: 7 })
        point.moveVertical(-3)
        expect(point.y).toBe(4)
    })



})
describe("MOVE_HORZIZONTAL", function () {
    it("should return point x", () => {
        const point = new Point({ x: 4, y: 6 })
        point.moveHorizontal(7)
        expect(point.x).toBe(11)
    })
    it("should return point x", () => {
        const point = new Point({ x: 4, y: 6 })
        point.moveHorizontal(-3)
        expect(point.x).toBe(1)
    })
})
describe("ERRORS", function () {
    const point = new Point({ x: 9, y: 4 })
    it('!value', () => {
        expect(() => point.moveVertical()).toThrow('must give isn\t argument')

    })
    it('typeof(value)!="number"', () => {
        expect(() => point.moveVertical("abc")).toThrow('type value isn\t number')
        expect(() => point.moveVertical([9, 5])).toThrow('type value isn\t number')
        expect(() => point.moveVertical('true')).toThrow('type value isn\t number')
    })
    it('', () => {
        expect(() => point.moveHorizontal()).toThrow('must give isn\t argument')
    })

    it('', () => {

        expect(() => point.moveHorizontal("abc")).toThrow('type value isn\t number')
        expect(() => point.moveHorizontal([4, 6])).toThrow('type value isn\t number')
        expect(() => point.moveHorizontal('false')).toThrow('type value isn\t number')

    })

})