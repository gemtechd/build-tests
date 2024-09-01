const Point = require('../../../modules/ecs6-class/point')

test('check if the point have 2 numbers', () => {
    const point = new Point({ x: 2, y: 2 })
    expect(point.x).toBe(2);
    expect(point.y).toBe(2);
});

describe('moveHorizontal', () => {
    let point = new Point({ x: 2, y: 3 })
    it('adding number to point.x', () => {
        point.moveHorizontal(2)
        expect(point.x).toBe(4)
    })
});

describe('moveVertical', () => {
    let pointVertical = new Point({ x: 2, y: 2 })
    it('adding number to point.y',()=>{
        pointVertical.moveVertical(3)
        expect(pointVertical.y).toBe(5)
    })
})


describe('moveVertical-errors', () => {
    let pointVertical = new Point({ x: 2, y: 3 })
    it('Adding invalid value to point', () => {
        expect(() => pointVertical.moveVertical("one")).toThrow("the type must be a number")
    })

    it('Adinng invalid value to the point', () => {
        expect(() => pointVertical.moveVertical([1, 1])).toThrow("the type must be a number")
    })

    it('Adinng invalid value to the point', () => {
        expect(() => pointVertical.moveVertical({ "one": 1 })).toThrow("the type must be a number")
    })


});

describe('moveHorizontal-errors', () => {
    let pointVertical = new Point({ x: 2, y: 3 })
    it('Adding invalid value to point', () => {
        expect(() => pointVertical.moveHorizontal("one")).toThrow("the type must be a number")
    })

    it('Adinng invalid value to the point', () => {
        expect(() => pointVertical.moveHorizontal([1, 1])).toThrow("the type must be a number")
    })

    it('Adinng invalid value to the point', () => {
        expect(() => pointVertical.moveHorizontal({ "one": 1 })).toThrow("the type must be a number")
    })


});

