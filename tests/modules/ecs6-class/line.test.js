
const Line = require("../../../modules/ecs6-class/line");
const Point = require("../../../modules/ecs6-class/point");

describe('addPoint', () => {
    it('addPoint1', () => {
        const line = new Line({})
        expect(line.addPoint()).toThrow('eee')
    })
    it('addPoint2', () => {
        try {
            const line = new Line({})
            line.addPoint({ x: 2, y: 3 })
            expect(line.point1).toEqual({ x: 2, y: 3 })
        }
        catch (e) {
            console.log(e);
        }
    })
    it('addPoint3', () => {
        try {
            const line = new Line({})
            line.addPoint({ x: 2, y: 3 })
            expect(line.point2).toEqual({ x: 2, y: 3 })
        }
        catch (e) {
            console.log(e);
        }
    })
})

describe('get Points', () => {
    it('should return point', () => {
        const line = new Line({ point1: { x: 1, y: 2 }, point2: { x: 3, y: 4 } })
        expect(line.Points).toEqual({ point1: { x: 1, y: 2 }, point2: { x: 3, y: 4 } })
    })
})

describe('set slope', () => {
    it('should return slope,set', () => {
            const line = new Line({ slope: undefined })
            line.Slope = 7
            expect(line.slope).toBe(7)
    })
})

describe('get Slope', () => {
    it('should return Slope', () => {
            const line = new Line({ slope: 1 })
            expect(line.Slope).toBe(1)
    })
    it('should return Slope by 2 points', () => {
            const line = new Line({ point1: { x: 1, y: 2 }, point2: { x: 3, y: 4 } })
            expect(line.Slope).toBe(1)
    })
})

describe('get N', () => {
    it('should return n', () => {
        const line = new Line({ n: 1 })
        expect(line.N).toBe(1)
    })
    it('should return n,0', () => {
        const line = new Line({ point1: { x: 1, y: 2 }, slope: 3 })
        expect(line.N).toBe(-1)
    })
})

describe('set N', () => {
    it('should return N,set', () => {
        const line = new Line({ n: undefined })
        line.N = 8
        expect(line.n).toBe(8)
    })
})

describe('getPointOnXAsis', () => {
    it('getPointOnXAsis', () => {
        const line = new Line({ slope: 3, n: 3 })
        const response = line.getPointOnXAsis()
        expect(response.x).toBe(-1)
    })
    it('should return undefined', () => {
        const line = new Line({ slop: 6, n: -3 })
        const response = line.getPointOnXAsis({})
        expect(response).toBe(undefined)
    })
})

describe('getPointOnYAsis', () => {
    it('getPointOnYAsis', () => {
        const line = new Line({ slope: 2, n: 2 })
        const response = line.getPointOnYAsis()
        expect(response.y).toBe(2)
    })
    it('should return undefined', () => {
        const line = new Line({ slop: 6, n: -3 })
        const response = line.getPointOnYAsis({})
        expect(response).toBe(undefined)
    })
})

//FIXME 
describe('isPointOnLine', () => {
    it('should return true', () => {
        const line = new Line({ point1: { x: 2, y: 3 }, point2: { x: 4, y: 5 }, slop: 2, n: -1 })
        const response = line.isPointOnLine({ x: 1, y: 1 })
        expect(response).toBe(true)
    })
    it('should return false', () => {
        const line = new Line({ x: 2, y: 3 }, { x: 4, y: 5 }, { slop: 1 }, { n: -1 })
        const response = line.isPointOnLine({ point1: { x: 1, y: 1 } })
        expect(response).toBe(false)
    })
})

describe('getPointByX', () => {
    it('getPointByX', () => {
        const line = new Line({ slope: 2, n: 3 })
        const response = line.getPointByX(1)
        expect(response.y).toBe(5)
    })
})

describe('getPointByY', () => {
    it(' getPointByY', () => {
        const line = new Line({ slope: 3, n: 6 })
        const response = line.getPointByY(9)
        expect(response.x).toBe(1)
    })
})