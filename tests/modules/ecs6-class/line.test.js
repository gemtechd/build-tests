const Line = require("../../../modules/ecs6-class/line");
const Point = require("../../../modules/ecs6-class/point");


describe("LINE", function () {
    it("should return point1 of line", function () {
        const x = new Line({ point1: new Point({ x: 2, y: 3 }), point2: new Point({ x: 2, y: 3 }) })
        expect(x.point1).toStrictEqual(new Point({ x: 2, y: 3 }));
    })
    describe("CALCULATE_SLOPE", function () {
        it("should return slope of line", function () {
            const poix = new Point({ x: 3, y: 4 });
            const poiy = new Point({ x: 1, y: 3 });
            const li1 = new Line({ point1: poix, point2: poiy })
            li1.calculateSlope()
            expect(li1.slope).toBe(0.5);
        })
    })

    describe("CALCULATE_N_OF_LINE_FUNCTION", function () {
        it("should return n of line", function () {
            const poix = new Point({ x: 3, y: 4 });
            const poiy = new Point({ x: 1, y: 3 });
            const li1 = new Line({ point1: poix, point2: poiy })
            li1.calculateSlope()
            li1.calculateNOfLineFunction()
            expect(li1.n).toBe(2.5);
        })
        it("should return n of line if slope is undeined", function () {
            const poix = new Point({ x: 3, y: 4 });
            const poiy = new Point({ x: 5, y: 7 });
            const li1 = new Line({ point1: poix, point2: poiy })
            li1.calculateNOfLineFunction()
            expect(li1.n).toBe(-0.5)
        })
    })



    describe("GET_POINT_ON_Y_ASIS", function () {
        it("should return a new point on y axis", function () {
            const x = new Line({ point1: new Point({ x: 1, y: 6 }), point2: new Point({ x: 2, y: 3 }) })
            x.calculateSlope()
            x.calculateNOfLineFunction()
            expect(x.getPointOnYAsis()).toStrictEqual(new Point({ x: 0, y: 9 }));
        })
    })


    describe("GET_POINT_ON_X_ASIS", function () {
        it("should return a new point on x axis", function () {
            const x = new Line({ point1: new Point({ x: 1, y: 6 }), point2: new Point({ x: 2, y: 3 }) })
            x.calculateSlope()
            x.calculateNOfLineFunction()
            expect(x.getPointOnXAsis()).toStrictEqual(new Point({ x: 3, y: 0 }));
        })
    })
    describe("GET_POINT_BY_X", function () {
        it("function get Point By X", function () {
            let li1 = new Line({ n: 7, slope: 2 })
            expect(li1.getPointByX(6)).toEqual({ x: 6, y: 19 })
        })
    })
    describe("GET_POINT_BY_Y", function () {
        it("function get Point By Y", function () {
            let li1 = new Line({ n: 7, slope: 2 })
            expect(li1.getPointByY(3)).toEqual({ x: -2, y: 3 })
        })

    })
    describe("EERORS", function () {
        const poix = new Point({ x: 3, y: 4 });

        it("should return error if argument is not Point", function () {
            expect(function () { new Line({ point1: "rtry" }) }).toThrow(new Error("argument must be type point"))
            expect(function () { new Line({ point1: true }) }).toThrow(new Error("argument must be type point"))
            expect(function () { new Line({ point1: () => { } }) }).toThrow(new Error("argument must be type point"))
            expect(function () { new Line({ point1: { id: 1 } }) }).toThrow(new Error("argument must be type point"))
            expect(function () { new Line({ point1: [1, 2, 3] }) }).toThrow(new Error("argument must be type point"))
            expect(function () { new Line({ point2: "rtry" }) }).toThrow(new Error("argument must be type point"))
            expect(function () { new Line({ point2: true }) }).toThrow(new Error("argument must be type point"))
            expect(function () { new Line({ point2: () => { } }) }).toThrow(new Error("argument must be type point"))
            expect(function () { new Line({ point2: [1, 2, 3] }) }).toThrow(new Error("argument must be type point"))
            expect(function () { new Line({ point2: { id: 1, name: 8 } }) }).toThrow(new Error("argument must be type point"))
        })
        it("should return error if argument is not number", function () {
            expect(function () { new Line({ point1: poix, point2: poix, n: "rtry", slope: 9 }) }).toThrow(new Error("argument must be type number"))
            expect(function () { new Line({ point1: poix, point2: poix, n: true, slope: 9 }) }).toThrow(new Error("argument must be type number"))
            expect(function () { new Line({ point1: poix, point2: poix, n: 8, slope: () => { } }) }).toThrow(new Error("argument must be type number"))
            expect(function () { new Line({ point1: poix, point2: poix, n: 8, slope: [1, 2] }) }).toThrow(new Error("argument must be type number"))


        })
        describe('CALCULATE SLOPE', function () {
            it("should return error if attribute is undefined", function () {
                const li1 = new Line({ point1: poix, n: 6, slope: 9 })
                expect(function () { li1.calculateSlope() }).toThrow(new Error("attribute is undefined"))
            })
            it("should return error if attribute is undefined", function () {
                const li1 = new Line({ point2: poix, n: 6, slope: 9 })
                expect(function () { li1.calculateSlope() }).toThrow(new Error("attribute is undefined"))
            })
        })

        describe('GET POINT BY X', function () {
            it("should return error if argument is not number", function () {
                const x = new Line({ point1: new Point({ x: 1, y: 6 }), point2: new Point({ x: 2, y: 3 }) })
                expect(function () { x.getPointByX("ret") }).toThrow(new Error("argument must be type number"))
                expect(function () { x.getPointByX(true) }).toThrow(new Error("argument must be type number"))
                expect(function () { x.getPointByX(() => { }) }).toThrow(new Error("argument must be type number"))
                expect(function () { x.getPointByX([1, 2]) }).toThrow(new Error("argument must be type number"))
            })
            it("should return error if missing attribute", function () {
                let li1 = new Line({ n: 7 })
                let li2 = new Line({ slope: 7 })
                expect(function () { li1.getPointByX(3) }).toThrow(new Error("missing argument"))
                expect(function () { li2.getPointByX(3) }).toThrow(new Error("missing argument"))

            })
        })
        describe('GET POINT BY Y', function () {
            it("should return error if argument is not number", function () {
                const x = new Line({ point1: new Point({ x: 1, y: 6 }), point2: new Point({ x: 2, y: 3 }) })
                expect(function () { x.getPointByY("ret") }).toThrow(new Error("argument must be type number"))
                expect(function () { x.getPointByY(true) }).toThrow(new Error("argument must be type number"))
                expect(function () { x.getPointByY(() => { }) }).toThrow(new Error("argument must be type number"))
                expect(function () { x.getPointByY([1, 2]) }).toThrow(new Error("argument must be type number"))
            })
            it("should return error if missing attribute", function () {
                let li1 = new Line({ n: 7 })
                let li2 = new Line({ slope: 7 })
                expect(function () { li1.getPointByY(3) }).toThrow(new Error("missing argument"))
                expect(function () { li2.getPointByY(3) }).toThrow(new Error("missing argument"))

            })
        })
    })
});
