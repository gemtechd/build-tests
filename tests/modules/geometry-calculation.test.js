const { calculateDistance, calculateJunctionPoint, calculateNOfLineFunction, calculateSlope } = require('../../modules/geometry-calculation')

describe('calculateDistance', () => {
    it('should return distance between 2 points', () => {
        expect(calculateDistance({ x: 5, y: 2 }, { x: 2, y: 5 })).toBe(Math.sqrt(18))
    })
    it('should exception point2 is not defined', () => {
        try {
            expect(calculateDistance({ x: 2, y: 5 })).to('point2 is not defined')
        }
        catch (err) {
            console.log(`An error was thrown - ${err}`);
        }
    })
    it('should exception points is not defined', () => {
        try {
            expect(calculateDistance()).to('points is not defined')
        }
        catch (err) {
            console.log(`An error was thrown - ${err}`);
        }
    })
})

describe('calculateJunctionPoint', () => {

    it('should return true', () => {
        expect(calculateJunctionPoint({ point1: { x: 2, y: 5 }, point2: { x: 5, y: 2 }, slope: -1, n: 7 },
            { point1: { x: -2, y: 5 }, point2: { x: -5, y: 2 }, slope: 1, n: 7 })).toBe(true)
    })

    it('should return false', () => {
        expect(calculateJunctionPoint({ point1: { x: 2, y: 5 }, point2: { x: 5, y: 2 }, slope: -1, n: 7 },
            { point1: { x: -2, y: 2 }, point2: { x: -5, y: 5 }, slope: -1, n: 0 })).toBe(false)
    })

    it('should return true - same line', () => {
        expect(calculateJunctionPoint({ point1: { x: 5, y: 2 }, point2: { x: 2, y: 5 }, slope: -1, n: 7 },
            { point1: { x: 0, y: 7 }, point2: { x: 7, y: 0 }, slope: -1, n: 7 })).toBe(true)
    })
    // it('1',()=>{
    //     expect(calculateJunctionPoint()).toBe(false)
    // })
})

describe('calculateNOfLineFunction', () => {
    it('should return an intersection point with the y-axis', () => {
        expect(calculateNOfLineFunction({ point: { x: 5, y: 2 }, slope: -1 })).toBe(7)
    })
})

describe('calculateSlope', () => {
    it('should return gradient by 2 points', () => {
        expect(calculateSlope({ x: 2, y: 5 }, { x: 5, y: 2 })).toBe(-1)
    })
})