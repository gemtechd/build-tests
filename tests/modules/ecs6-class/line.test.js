const Line = require('./../../../modules/ecs6-class/line');
const Point = require('./../../../modules/ecs6-class/point');

describe('Line constructor', () => {
    it('should set the correct point1, point2, slope, and n values when objects with specific values are passed', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        expect(line.point1).toBe(point1);
        expect(line.point2).toBe(point2);
        expect(line.slope).toBe(undefined);
        expect(line.n).toBe(undefined);
    });
    describe('Error', () => {
        it("throw new Error when type of object not instanceof point", () => {
            expect(() => new Line({ point1: "string" })).toThrow("the type must to be instanceof Point")
            expect(() => new Line({ point1: true })).toThrow("the type must to be instanceof Point")
            expect(() => new Line({ point1: [2, 3] })).toThrow("the type must to be instanceof Point")
            expect(() => new Line({ point2: () => { } })).toThrow("the type must to be instanceof Point")
            expect(() => new Line({ point1: { 2: 3 } })).toThrow("the type must to be instanceof Point")
        })
    })
});

describe('Line calculateSlope method', () => {
    it('should correctly calculate the slope between point1 and point2', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        expect(line.slope).toBe(1);
    });
    describe('Error', () => {
        it("throw new Error when ", () => {
            const point1 = new Point({ x: 1, y: 1 });
            const point2 = new Point({ x: 1, y: 3 });
            const line = new Line({ point1, point2 });
            expect(() => line.calculateSlope()).toThrow("A number cannot be divided by 0")
        })
    })
});

describe('Line calculateNOfLineFunction method', () => {
    it('should correctly calculate the n value', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        expect(line.n).toBe(0);
    });
});

describe('Line getPointOnXAsis method', () => {
    it('should retrieve the correct point on the X-axis', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointOnXAxis = line.getPointOnXAsis();
        expect(pointOnXAxis.x).toBeCloseTo(0);
        expect(pointOnXAxis.y).toBeCloseTo(0);
    });
});

describe('Line getPointOnYAsis method', () => {
    it('should retrieve the correct point on the Y-axis', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointOnYAxis = line.getPointOnYAsis();
        expect(pointOnYAxis.x).toBeCloseTo(0);
        expect(pointOnYAxis.y).toBeCloseTo(0);
    });


});

describe('Line getPointByX method', () => {
    it('should correctly calculate the point by providing an X coordinate', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const targetX = 4;
        const pointByX = line.getPointByX(targetX);
        expect(pointByX.y).toBeCloseTo(targetX);
    });
    describe('ERROR', () => {
        it("throw new error when did'nt send slope and n", () => {
            const line = new Line();
            expect(() => line.getPointByX(3)).toThrow("must to send slope and n")
        })
        it("throw new error when did'nt send slope", () => {
            const line = new Line({ n: 2 });
            expect(() => line.getPointByX(3)).toThrow("must to send slope")
        })
        it("throw new error when did'nt send n", () => {
            const line = new Line({ slope: 2 });
            expect(() => line.getPointByX(3)).toThrow("must to send n")
        })
        it("throw new error when type of x did'nt number", () => {
            const line = new Line({ slope: 2 });
            expect(() => line.getPointByX(true)).toThrow("type must be number")
            expect(() => line.getPointByX(() => { })).toThrow("type must be number")
            expect(() => line.getPointByX({ x: 4 })).toThrow("type must be number")
            expect(() => line.getPointByX("string")).toThrow("type must be number")
            expect(() => line.getPointByX([3, 2])).toThrow("type must be number")
        })
    })
});

describe('Line getPointByY method', () => {
    it('should correctly calculate the point by providing an Y coordinate', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const targetY = 4;
        const pointByY = line.getPointByY(targetY);
        expect(pointByY.x).toBeCloseTo(targetY);
    });
    describe('ERROR', () => {
        it("throw new error when did'nt send slope and n", () => {
            const line = new Line();
            expect(() => line.getPointByY(3)).toThrow("must to send slope and n")
        })
        it("throw new error when did'nt send slope", () => {
            const line = new Line({ n: 2 });
            expect(() => line.getPointByY(3)).toThrow("must to send slope")
        })
        it("throw new error when did'nt send n", () => {
            const line = new Line({ slope: 2 });
            expect(() => line.getPointByY(3)).toThrow("must to send n")
        })
        it("throw new error when type of y did'nt number", () => {
            const line = new Line({ slope: 2 });
            expect(() => line.getPointByY(true)).toThrow("type must be number")
            expect(() => line.getPointByY(() => { })).toThrow("type must be number")
            expect(() => line.getPointByY({ x: 4 })).toThrow("type must be number")
            expect(() => line.getPointByY("string")).toThrow("type must be number")
            expect(() => line.getPointByY([3, 2])).toThrow("type must be number")
        })
    })
});