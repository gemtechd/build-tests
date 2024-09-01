const { calculateDistance,calculateJunctionPoint,isPointOnLine } = require('../../modules/geometry-calculation')
const Line = require('../../modules/ecs6-class/line');
const Point = require('../../modules/ecs6-class/point')


const Point1 = new Point({ x: 2, y: 3 });
const Point2 = new Point({ x: 4, y: 5 });
const Point3 = new Point({ x: 3, y: 4 });
const Point4 = new Point({ x: 9, y: 16 });
// let line1 = new Line({ point1: Point1, point2: Point2 });
// let line2 = new Line({ point1: Point3, point2: Point4 });


// ---------------------------------------------------------------------------------
// דוגמא נוספת לפונקציה calculateJunctionPoint

// jest.mock('../../modules/ecs6-class/line', () => {
//     return jest.fn().mockImplementation(() => {
//         return {
//             calculateSlope: jest.fn().mockReturnValue(2), 
//             calculateNOfLineFunction: jest.fn().mockReturnValue(3), 
//             isPointOnLine: jest.fn().mockReturnValue(true), 
//             getPointByX: jest.fn().mockImplementation((x) => ({ x, y: 2*x + 3 })) 
//         };
//     });
// });

// -----------------------------------------------------------------

jest.mock('../../modules/ecs6-class/line', () => {

    return {
        calculateSlope: jest.fn(() => {
            return 2
        }),
        calculateNOfLineFunction: jest.fn(() => {
            return 3
        }),
        // isPointOnLine: jest.fn(() => {
        //     return 'true'
        // }),
        getPointByX: jest.fn().mockImplementation((x) => ({ x, y: 2 * x + 3 }))
    };

});

jest.mock('../../modules/geometry-calculation', () => {
    return {
        isPointOnLine: jest.fn(),
        calculateDistance: jest.fn((point1, point2) => {
            return 5
        }),
        calculateJunctionPoint:jest.fn(() => {
            return { x: 2, y: 4 }
        })
    };
});

test('Calculate junction point between lines', () => {
    // let  isPointOnLine  = require('../../modules/geometry-calculation')
    let Line = require('../../modules/ecs6-class/line')
    let {calculateJunctionPoint,isPointOnLine} = require('../../modules/geometry-calculation')
    let line1 = new Line();
    let line2 = new Line();

    const result = calculateJunctionPoint(line1, line2);
    expect(result).toEqual({ x: 1, y: 5 });
});



describe('function DISTANCE ', () => {
    it('calculate distance between points nagtive', () => {
        const point1 = { x: 0, y: 0 };
        const point2 = { x: 3, y: 4 };
        const result = calculateDistance(point1, point2);

        expect(result).not.toBe(-5);
    })
    it('Calculate distance between points', () => {
        const point1 = { x: 0, y: 0 };
        const point2 = { x: 3, y: 4 };
        const result = calculateDistance(point1, point2);

        expect(result).toBe(5);
    });
})



