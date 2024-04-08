const Line = require('../modules/ecs6-class/line');
const Point = require('../modules/ecs6-class/point');

const { calculateDistance,
    calculateAngle,
    calculateSlope,
    calculateNOfLineFunction,
    calculateJunctionPoint } = require('../modules/geometry-calculation')

describe("CalculateDistance", () => {

    it('should return the dinstance beteen 2 points', () => {
        const point1 = new Point({ x: -5, y: 3 });
        const point2 = new Point({ x: 2, y: 3 });
        const response = calculateDistance(point1, point2)
        expect(response).toBe(7)
    })

    it('should return the dinstance beteen 2 points', () => {
        const point1 = new Point({ x: -5, y: 3 });
        const point2 = new Point({ x: -5, y: 8 });
        const response = calculateDistance(point1, point2)
        expect(response).toBe(5)
    })
})

describe("CalculateSlope", () => {

    it('should return the slope between 2 points', () => {
        const point1 = new Point({ x: 2, y: 1 });
        const point2 = new Point({ x: -1, y: 4 });
        const response = calculateSlope(point1, point2)
        console.log(response)
        expect(response).toBe(-1)
    })

    it('should throw an error when the points are in the same line that perpendicular to the x-axis', () => {
        const point1 = new Point({ x: -1, y: 5 });
        const point2 = new Point({ x: -1, y: 8 });
        const response=calculateSlope(point1, point2)
        expect(response ).toBe(undefined)
    })
})

describe("CalculateNOfLineFunction", () => {

    it('should return the meeting point with the y-axis', () => {
        const point = new Point({ x: -5, y: 3 });
        const response = calculateNOfLineFunction({ point: point, slope: -1 })
        expect(response).toBe(-2)
    })

    it('should return undefinde if the slope is 0', () => {
        const point = new Point({ x: -5, y: 3 });
        const response = calculateNOfLineFunction({ point: point, slope: 0 })
        expect(response).toBe(undefined)
    })


})

describe("CalculateJunctionPoint", () => {

    it('should return the junction point between 2 lines', () => {
        const line1 = new Line({point1:new Point({x:5,y:2}),point2:new Point({x:-1,y:8})})
        const line2 = new Line({point1:new Point({x:6,y:8}),point2:new Point({x:8,y:-1})})
        const response=calculateJunctionPoint(line1,line2)
        console.log(`should return the junction point between 2 lines: `+response);
        expect(response).toEqual({x:8,y:-1})
       
    })

    it('should return true if the lines are on the same line', () => {
        const line1 = new Line({point1:new Point({x:1, y:1}), point2:undefined, n:-2,slope: -1})
        const line2 = new Line({point1:new Point({x:-1, y:3}),point2: undefined,n: -2,slope: -1})
        const response = calculateJunctionPoint(line1, line2)
        console.log(response)
        expect(response).toBe(true)
    })

    it('should return false if the lines are parallels', () => {
        const line1 = new Line({point1:new Point({x:-5, y:3}),point2: undefined,n: -2, slope:-1})
        const line2 = new Line({point1:new Point({x:-3, y:7}),point2: undefined,n: 4, slope:-1})
        const response = calculateJunctionPoint(line1, line2)
        expect(response).toBe(false)
    })

})

