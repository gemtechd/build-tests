const Point = require('../../../modules/ecs6-class/point');

describe('MOVE_VERTICAL', () => {

    it('Adding number to point.y', () => {
        let pointTest = new Point({ x: 3, y: 8 });
        pointTest.moveVertical(6)
        expect(pointTest.y).toBe(14)
        
    })


    it('Adding negative number to point.y', () => {
        let pointTest = new Point({ x: 3, y: 8 })
        pointTest.moveVertical(-6)
        expect(pointTest.y).toBe(2)
    })

})

describe('MOVE_HORIZONTAL', () => {
    it('Adding number to point.x', () => {
        let pointTest = new Point({ x: 3, y: 8 });
        pointTest.moveHorizontal(6)
        expect(pointTest.x).toBe(9)    
    })


    it('Adding negative number to point.x', () => {
        let pointTest = new Point({ x: 3, y: 8 })
        pointTest.moveHorizontal(-2)
        expect(pointTest.x).toBe(1)
    })

})

describe('ERRORS', () => {
    
    let pointTest = new Point({ x: 3, y: 8 });

    describe('MOVE_VERTICAL_ERRORS', () => {
        
        it('Adding invalid value to point', () => {

            expect(() => pointTest.moveVertical("one")).toThrow("Expect to get a number")
        })
        it('Adding invalid value to point', () => {
            
            expect(() => pointTest.moveVertical([7,8])).toThrow("Expect to get a number")
        })
        it('Adding invalid value to point', () => {
            
            expect(() => pointTest.moveVertical({"one":1})).toThrow("Expect to get a number")
        })
        it('Adding invalid value to point', () => {
            
            expect(() => pointTest.moveVertical(false)).toThrow("Expect to get a number")
        })
        it('Adding invalid value to point', () => {
            
            expect(() => pointTest.moveVertical()).toThrow("Expect to get a number")
        })
    })

    describe('MOVE_HORIZONTAL_ERRORS', () => {
        
        it('Adding invalid value to point', () => {

            expect(() => pointTest.moveHorizontal("one")).toThrow("Expect to get a number")
        })
        it('Adding invalid value to point', () => {
            
            expect(() => pointTest.moveHorizontal([7,8])).toThrow("Expect to get a number")
        })
        it('Adding invalid value to point', () => {
            
            expect(() => pointTest.moveHorizontal({"one":1})).toThrow("Expect to get a number")
        })
        it('Adding invalid value to point', () => {
            
            expect(() => pointTest.moveHorizontal(false)).toThrow("Expect to get a number")
        })
        it('Adding invalid value to point', () => {
            
            expect(() => pointTest.moveHorizontal()).toThrow("Expect to get a number")
        })
    })

})











