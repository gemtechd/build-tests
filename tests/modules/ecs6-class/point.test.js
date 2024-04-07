const Point = require('../../../modules/ecs6-class/point')
// const Line = require('../../../modules/ecs6-class/line')

describe('new Point - should return Integer', () => {
    it('should return Integer', () => {
        const point1 = new Point({ x: 3, y: 7 })
        expect(point1.x).toBe(3)
        expect(point1.y).toBe(7)
    })
})

describe('moveVertical', () => {
    const point1 = new Point({ x: 5, y: 2 })
    it('should add value to variable y', () => {
        point1.moveVertical(3)
        expect(point1.y).toBe(5)
    })

    // it('should function throw an error when one or more empty variable exist', () => {
    //     expect(point1.moveVertical()).toThrow(new Error('the value is null'))
    // })
})

describe('moveHorizontal', () => {
    it('should add value to variable x', () => {
        let point1 = new Point({ x: 5, y: 2 })
        point1.moveHorizontal(3)
        expect(point1.x).toBe(8)
    })
})