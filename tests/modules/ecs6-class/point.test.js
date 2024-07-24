const Point = require("../../../modules/ecs6-class/point");

describe("POINT", function () {
    it("should return the value x of point", function () {
        const px = new Point({ x: 4, y: 3 })
        expect(px.x).toBe(4);
    })
    it("should return the value x of point after the move horizontal", function () {
        const px = new Point({ x: 4, y: 3 })
        px.moveHorizontal(3)
        expect(px.x).toBe(7);
    })
    it("should return the value x of point after the move vertical", function () {
        const px = new Point({ x: 4, y: 3 })
        px.moveVertical(2)
        expect(px.y).toBe(5);
    })
    describe("EERORS", function () {
        it("should return error if argument is not number", function () {
            expect(function () { new Point({ x: "rtry" }) }).toThrow(new Error("argument must be type number"))
            expect(function () { new Point({ x: true }) }).toThrow(new Error("argument must be type number"))
            expect(function () { new Point({ x: () => { } }) }).toThrow(new Error("argument must be type number"))
            expect(function () { new Point({ x: [1, 2] }) }).toThrow(new Error("argument must be type number"))
        })

    })
    describe("MOVE VERTICAL", function () {
        it("should return error if argument is not number", function () {
            const px = new Point({ x: 1, y: 6 })
            expect(function () { px.moveVertical("ret") }).toThrow(new Error("argument must be type number"))
            expect(function () { px.moveVertical(true) }).toThrow(new Error("argument must be type number"))
            expect(function () { px.moveVertical(() => { }) }).toThrow(new Error("argument must be type number"))
            expect(function () { px.moveVertical([1, 2]) }).toThrow(new Error("argument must be type number"))
        })
    })

    describe("MOVE HORIZONTAL", function () {
        it("should return error if argument is not number", function () {
            const px = new Point({ x: 1, y: 6 })
            expect(function () { px.moveHorizontal("ret") }).toThrow(new Error("argument must be type number"))
            expect(function () { px.moveHorizontal(true) }).toThrow(new Error("argument must be type number"))
            expect(function () { px.moveHorizontal(() => { }) }).toThrow(new Error("argument must be type number"))
            expect(function () { px.moveHorizontal([1, 2]) }).toThrow(new Error("argument must be type number"))
        })
    })

});
