const Line = require('../../../modules/ecs6-class/line')
// const getPointByX = Line.getPointBy
// const isPointOnLine = Line.isPointOnLine()
// const { getPointByX } = require('../../../modules/ecs6-class/line')

// describe('Line', () => {
//     it('should', () => {
//         expect(4).toBe(4)
//     })
// })

describe('addPoint', () => {

    const line1 = new Line({})

    it('should insert values into the point1', () => {
        line1.addPoint({ x: 5, y: 2 })
        expect(line1.point1).toEqual({ x: 5, y: 2 })
    })

    it('should insert values into the point2', () => {
        line1.addPoint({ x: 2, y: 5 })
        expect(line1.point2).toEqual({ x: 2, y: 5 })
    })

    it('should throw new Error - the point is null', () => {
        try {
            expect(line1.addPoint()).toThrow('the point is null')
        }
        catch (err) {
            console.log(`An error was thrown - ${err}`);
        }
    })

    it('should throw new Error - 2 points are full', () => {
        try {
            expect(line1.addPoint({ x: 5, y: 2 })).toThrow('2 points are full')
        }
        catch (err) {
            console.log(`An error was thrown - ${err}`);
        }
    })
})

describe('get Points', () => {

    const line1 = new Line({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 } })

    it('should return the points of line1', () => {
        expect(line1.Points).toEqual({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 } })
    })

    it('should return undefined for points', () => {
        const line2 = new Line({})
        try {
            expect(line2.Points).toThrow('point is undefined')
        }
        catch (err) {
            console.log(`An error was thrown - ${err}`);
        }
    })
})

describe('set Slope', () => {

    const line1 = new Line({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 } })

    it('should insert value to the slope', () => {
        line1.Slope
        expect(line1.Slope).toBe(-1)
    })

    it('should throw Error - At least one point is empty', () => {
        const line2 = new Line({})
        try {
            expect(line2.Slope).toThrow('At least one point is empty')
        }
        catch (err) {
            console.log(`An error was thrown - ${err}`);
        }
    })
})

describe('set N', () => {

    const line1 = new Line({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 }, slope: -1 })

    it('should insert value into the n', () => {
        line1.N
        expect(line1.n).toBe(7)
    })

    const line2 = new Line({ point1: { x: 1, y: 2 } })
    it('should throw new Error - Missing data for calculation (slope)', () => {
        try {
            expect(line2.N).toThrow('Missing data for calculation')
        }
        catch (err) {
            console.log(`An error was thrown - ${err}`);
        }
    })

    const line3 = new Line({ slope: 2 })
    it('should throw new Error - Missing data for calculation (point)', () => {
        try {
            expect(line3.N).toThrow('Missing data for calculation')
        }
        catch (err) {
            console.log(`An error was thrown - ${err}`);
        }
    })
})

describe('getPointOnXAsis', () => {
    it('should return point on x-axis', () => {
        let line1 = new Line({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 }, slope: -1, n: 7 })
        expect(line1.getPointOnXAsis()).toEqual({ x: 7, y: 0 })
        // expect(isPointOnLine())
    })
    it('should return undefined', () => {
        let line2 = new Line({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 } })
        expect(line2.getPointOnXAsis()).toBe(undefined)
    })
})

describe('getPointOnYAsis', () => {
    it('should return point on y-axis', () => {
        let line1 = new Line({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 }, slope: -1, n: 7 })
        expect(line1.getPointOnYAsis()).toEqual({ x: 0, y: 7 })
        // expect(isPointOnLine())
    })
    it('should return undefined', () => {
        let line2 = new Line({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 } })
        expect(line2.getPointOnYAsis()).toBe(undefined)
    })
})

describe('isPointOnLine', () => {
    it('should return point by x', () => {
        let line1 = new Line({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 }, slope: -1, n: 7 })
        expect(line1.isPointOnLine({ x: 4, y: 3 })).toEqual(true)
        // expect(isPointOnLine())
    })
    it('should return false, (1,1) is not on line', () => {
        let line2 = new Line({ point1: { x: 2, y: 5 }, point2: { x: 5, y: 2 }, slope: -1, n: 7 })
        expect(line2.isPointOnLine({ x: 1, y: 1 })).toBe(false)
    })
})

describe('getPointByX', () => {
    it('should return point by x', () => {
        let line1 = new Line({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 }, slope: -1, n: 7 })
        expect(line1.getPointByX(5)).toEqual({ x: 5, y: 2 })
        // expect(isPointOnLine())
    })
})

describe('getPointByY', () => {
    it('should return point by y', () => {
        let line1 = new Line({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 }, slope: -1, n: 7 })
        expect(line1.getPointByY(2)).toEqual({ x: 5, y: 2 })
        // expect(isPointOnLine())
    })
})
