const Point = require("../../modules/ecs6-class/point")
let p = new Point()

describe('check functions of Point', () => {
    describe('Check "moveVertical"', () => {
        it('should update the Y value of the point', () => {
            expect(p.y).toBeCloseTo(0)
            p.moveVertical(3)
            expect(p.y).toBeCloseTo(3)
        })
        describe('Check errors', () => {
            it('should throw error when the sent value is not a number', () => {
                expect(() => p.moveVertical("string")).toThrow('value is NaN')
                expect(() => p.moveVertical([2])).toThrow('value is NaN')
                expect(() => p.moveVertical({ value: 9 })).toThrow('value is NaN')
                expect(() => p.moveVertical(new Date())).toThrow('value is NaN')
                expect(() => p.moveVertical(true)).toThrow('value is NaN')
                expect(() => p.moveVertical(undefined)).toThrow('value is NaN')
                expect(() => p.moveVertical()).toThrow('value is NaN')
                expect(() => p.moveVertical(() => { })).toThrow('value is NaN')
            })
        })
    })

    describe('Check "moveHorizontal"', () => {
        it('should update the x value of the point', () => {
            expect(p.x).toBeCloseTo(0)
            p.moveHorizontal(3)
            expect(p.x).toBeCloseTo(3)
        })
        describe('check errors', () => {
            it('should throw error when the sent value is not a number', () => {
                expect(() => p.moveHorizontal("string")).toThrow('value is NaN')
                expect(() => p.moveHorizontal([2])).toThrow('value is NaN')
                expect(() => p.moveHorizontal({ value: 9 })).toThrow('value is NaN')
                expect(() => p.moveHorizontal(new Date())).toThrow('value is NaN')
                expect(() => p.moveHorizontal(true)).toThrow('value is NaN')
                expect(() => p.moveHorizontal(undefined)).toThrow('value is NaN')
                expect(() => p.moveHorizontal()).toThrow('value is NaN')
                expect(() => p.moveHorizontal(() => { })).toThrow('value is NaN')
            })
        })
    })

})

