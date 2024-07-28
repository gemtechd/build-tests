const Point = require('../../../modules/ecs6-class/point')

describe('POINT_CONSTRUCTOR', () => {
    let mypoint = new Point()
    it('should check the point object', () => {
        expect(mypoint.x).toBe(0)
        expect(mypoint.y).toBe(0)
    })
    describe('CONSTRUCTOR_POINT_ERROR', () => {
        it('should throw error if the point not valid', () => {
            expect(() => new Point({ x: 'x', y: 'y' })).toThrow('x is not a number!')
            expect(() => new Point({ x: 'x' })).toThrow('x is not a number!')
            expect(() => new Point({ y: 'y' })).toThrow('y is not a number!')
            expect(() => new Point({ x: true })).toThrow('x is not a number!')
            expect(() => new Point({ y: false })).toThrow('y is not a number!')
            expect(() => new Point({ x: ['a', 'b'] })).toThrow('x is not a number!')
            expect(() => new Point({ y: ['c', 'd'] })).toThrow('y is not a number!')
            expect(() => new Point({ x: ['a', 'b'], y: ['c', 'd'] })).toThrow('x is not a number!')
            expect(() => new Point({ x: [true, true, false] })).toThrow('x is not a number!')
            expect(() => new Point({ y: [false, true] })).toThrow('y is not a number!')
            expect(() => new Point({ x: [true, false], y: [false, true] })).toThrow('x is not a number!')
            expect(() => new Point({ x: () => true })).toThrow('x is not a number!')
            expect(() => new Point({ y: () => false })).toThrow('y is not a number!')
            expect(() => new Point({ x: () => { }, y: () => true })).toThrow('x is not a number!')
        })
    })
})

describe('MOVE_VERTICAL', () => {
    it('should add to this.y the value', () => {
        let point = new Point({})
        point.moveVertical(6)
        expect(point).toEqual({ x: 0, y: 6 });
    })

    it('should add to this.y the value', () => {
        let point = new Point({ x: 2, y: 3 })
        point.moveVertical(6)
        expect(point).toEqual({ x: 2, y: 9 });
    })

    describe('ERROR', () => {
        let mypoint = new Point()
        it('should throw error if the function not get/get a valid argument', () => {
            expect(() => mypoint.moveVertical(a => (a))).toThrow('the value is not a number!')
            expect(() => mypoint.moveVertical(true)).toThrow('the value is not a number!')
            expect(() => mypoint.moveVertical('aaa')).toThrow('the value is not a number!')
            expect(() => mypoint.moveVertical(['aaa', 'bbb'])).toThrow('the value is not a number!')
            expect(() => mypoint.moveVertical()).toThrow('the value is undefined!')
        })
    })
})

describe('MOVE_HORIZONTAL', () => {

    it('should add to this.x the value', () => {
        let point = new Point({})
        point.moveHorizontal(6)
        expect(point).toEqual({ x: 6, y: 0 });
    })

    it('should add to this.x the value', () => {
        let point = new Point({ x: 5, y: 2 })
        point.moveHorizontal(6)
        expect(point).toEqual({ x: 11, y: 2 });
    })

    describe('ERROR', () => {
        let mypoint = new Point()
        it('should throw error if the function not get/get a valid argument', () => {
            expect(() => mypoint.moveHorizontal(v => (v))).toThrow('the value is not a number!')
            expect(() => mypoint.moveHorizontal(true)).toThrow('the value is not a number!')
            expect(() => mypoint.moveHorizontal('aaa')).toThrow('the value is not a number!')
            expect(() => mypoint.moveHorizontal(['aaa', 'bbb'])).toThrow('the value is not a number!')
            expect(() => mypoint.moveHorizontal()).toThrow('the value is undefined!')
        })
    })
})



