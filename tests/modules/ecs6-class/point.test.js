const Point = require('../../../modules/ecs6-class/point');

describe('Check calculateSlope function', () => {
    test('Should return the point after move vertical with the number he received', () => {
        let point1 = new Point({ x: 5, y: 7 });
        point1.moveVertical(2)
        expect(point1).toEqual({ x: 5, y: 9 })
    })

    describe('ERRORS', () => {
        test('should throw error when the type is not number', () => {
            let point1 = new Point({ x: 5, y: 7 });
            expect(() => point1.moveVertical('lll')).toThrow('The value is of an invalid type')
            expect(() => point1.moveVertical(point1)).toThrow('The value is of an invalid type')
            expect(() => point1.moveVertical(false)).toThrow('The value is of an invalid type')
            expect(() => point1.moveVertical([1, 2])).toThrow('The value is of an invalid type')
            expect(() => point1.moveVertical()).toThrow('The value is of an invalid type')
        })
    })
})

describe('Check moveHorizontal function', () => {
    test('Should return the point after move horizontal with the number he received', () => {
        let point1 = new Point({ x: 5, y: 7 });
        point1.moveHorizontal(2)
        expect(point1).toEqual({ x: 7, y: 7 })
    })


    describe('ERRORS', () => {
        test('should throw error when the type is not number', () => {
            let point1 = new Point({ x: 5, y: 7 });
            expect(() => point1.moveHorizontal('lll')).toThrow('The value is of an invalid type')
            expect(() => point1.moveHorizontal(point1)).toThrow('The value is of an invalid type')
            expect(() => point1.moveHorizontal(false)).toThrow('The value is of an invalid type')
            expect(() => point1.moveHorizontal([1, 2])).toThrow('The value is of an invalid type')
            expect(() => point1.moveHorizontal()).toThrow('The value is of an invalid type')
        })
    })
})


describe('ERRORS', () => {
    test('should throw error when the values  of the point is not valid', () => {
        let point1;
        expect(() =>  point1= new Point({x:'l',y: 4})).toThrow('The values should have a number')
        expect(() =>  point1= new Point({x:6,y:[8]})).toThrow('The values should have a number')
        expect(() => point1= new Point({x:'u',y:'p'})).toThrow('The values should have a number')
        expect(() => point1= new Point({x:false,y:true})).toThrow('The values should have a number')
})})
