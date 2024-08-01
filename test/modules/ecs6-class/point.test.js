const { default: expect } = require("expect")
const Point = require("../../../modules/ecs6-class/point")
describe("POINT_FUNCTION", function () {
    describe("BUILD_POINT", function () {
        it("should show the valus of x and y after build the point", function () {
            let p1 = new Point({ x: 3, y: 4 })
            let p2 = new Point()
            expect(p1.x).toEqual(3)
            expect(p1.y).toEqual(4)
            expect(p2.x).toEqual(0)
            expect(p2.y).toEqual(0)


        })
    })

    describe("MOVE_VERTICAL", function () {
        it("the function move point to up or down", function () {
            let p1 = new Point({ x: 1, y: 2 })
            p1.moveVertical(4)
            expect(p1.y).toEqual(6)
            expect(p1.x).toEqual(1)
        })

    })
    describe("MOVE_HORIZONTAL", function () {
        it("the function move point to right or left", function () {
            let p1 = new Point({ x: 1, y: 2 })
            p1.moveHorizontal(4)
            expect(p1.x).toEqual(5)
            expect(p1.y).toEqual(2)
        })
    })
    describe("ERROR", function () {

        it("the function must get argument", function () {
            let p = new Point({ x: 3, y: 4 })
            expect(() => { new Point({ x: "x", y: "y" }) }).toThrow(new Error("the argument must be type number"))
            expect(() => { p.moveVertical() }).toThrow("the function must get argument")
            expect(() => { p.moveHorizontal() }).toThrow("the function must get argument")

        })
        it("the function must get arguments from type number", function () {
            let p = new Point({ x: 3, y: 4 })
            expect(() => { new Point({ x: "x", y: "y" }) }).toThrow("the argument must be type number")
            expect(() => { p.moveVertical("x") }).toThrow("the argument must be type number")
            expect(() => { p.moveHorizontal("x") }).toThrow("the argument must be type number")

        })

    })

})

