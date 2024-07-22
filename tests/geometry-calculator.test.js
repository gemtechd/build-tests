
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../modules/geometry-calculator')
const Line = require('../modules/ecs6-class/line');
const Point = require('../modules/ecs6-class/point');
const mockConstructor = jest.fn(constructor);


Line.prototype.getPointByX = jest.fn().mockImplementation((x) => {
    return new Point({ x: 2, y: 12 });
});

Line.prototype.calculateSlope = jest.fn().mockImplementation(() => {
    line.slope = 1;
});

Line.prototype.calculateNOfLineFunction = jest.fn().mockImplementation(() => {
    line.n = 5;
});


let line1, line2, line
let point1, point2
describe('CALACULATE_DISTANCE', () => {

    it(' should checks if the parameters are of the correct type', () => {
        expect(() => calculateDistance('ab', mockConstructor(new Point()))).toThrow('point1 is not a Point');
        expect(() => calculateDistance(mockConstructor(new Point(), 'av'))).toThrow('point2 is not a Point');
    })

    it('calculates the distance correctly between two points', () => {
        point1 = mockConstructor(new Point({ x: 1, y: 2 }));
        point2 = mockConstructor(new Point({ x: 4, y: 6 }));
        expect(calculateDistance(point1, point2)).toBeCloseTo(5, 5);
    });
});



describe('CALCULATE_JUNCTION_POINT', () => {

    it(' should checks if the parameters are of the correct type', () => {
        expect(() => calculateJunctionPoint('ab', mockConstructor(new Line({ n: 5 })))).toThrow('line1 is not a Line');
        expect(() => calculateJunctionPoint(mockConstructor(new Line({ n: 5 }), 'av'))).toThrow('line2 is not a Line');
    })

    it('should calculate the n and slope values for line1 and then proceed with the calculation', () => {
        line1 = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 2, y: 5 })), point2: mockConstructor(new Point({ x: 3, y: 6 })) }));
        line2 = mockConstructor(new Line({ slope: 1, n: 1 }));
        expect(calculateJunctionPoint(line1, line2)).toBe(false)
    })

    it('should calculate the n and slope values for line2 and then proceed with the calculation', () => {
        line1 = mockConstructor(new Line({ slope: 1, n: 1 }));
        line2 = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 2, y: 5 })), point2: mockConstructor(new Point({ x: 3, y: 6 })) }));
        expect(calculateJunctionPoint(line1, line2)).toBe(false)
    })

    it('should calculate the n value for line1 and then proceed with the calculation', () => {
        line1 = mockConstructor(new Line({ slope: 1, point1: mockConstructor(new Point({ x: 2, y: 5 })) }));
        line2 = mockConstructor(new Line({ slope: 1, n: 1 }));
        expect(calculateJunctionPoint(line1, line2)).toBe(false)
    })

    it('should calculate the n value for line2 and then proceed with the calculation', () => {
        line1 = mockConstructor(new Line({ slope: 1, n: 1 }));
        line2 = mockConstructor(new Line({ slope: 1, point1: mockConstructor(new Point({ x: 2, y: 5 })) }));
        expect(calculateJunctionPoint(line1, line2)).toBe(false)
    })

    it('should calculate the slope value for line1 and then proceed with the calculation', () => {
        line1 = mockConstructor(new Line({ n: 1, point1: mockConstructor(new Point({ x: 2, y: 5 })) }));
        line2 = mockConstructor(new Line({ slope: 1, n: 1 }));
        expect(calculateJunctionPoint(line1, line2)).toBeTruthy()
    })

    it('should calculate the slope value for line2 and then proceed with the calculation', () => {
        line1 = mockConstructor(new Line({ slope: 1, n: 1 }));
        line2 = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 2, y: 5 })), n: 1 }));
        expect(calculateJunctionPoint(line1, line2)).toStrictEqual(mockConstructor(new Point({ x: 2, y: 12 })))
    })

    it('should return true if the lines are parallel and identical', () => {
        line1 = mockConstructor(new Line({ slope: 1, n: 1 }));
        line2 = mockConstructor(new Line({ slope: 1, n: 1 }));
        expect(calculateJunctionPoint(line1, line2)).toBe(true);
    });

    it('should return false if the lines are parallel but not identical', () => {
        line1 = mockConstructor(new Line({ slope: 1, n: 1 }))
        line2 = mockConstructor(new Line({ slope: 1, n: 2 }));
        expect(calculateJunctionPoint(line1, line2)).toBe(false);
    });

})


describe('IS_POINTON_LINE', () => {

    it(' should checks if the parameters are of the correct type', () => {
        line1 = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 4, y: 6 })), point2: mockConstructor(new Point({ x: 8, y: 9 })), slope: 1, n: 10 }))
        point1 = mockConstructor(new Point({ x: 4, y: 6 }))
        expect(() => isPointOnLine(line1, "abc")).toThrow('point is not a Point');
        expect(() => isPointOnLine("c", point1)).toThrow('line is not a Line');
    })

    it('should calculate the slope of the line when it is missing and then proceed to check if the point lies on the line',()=>{
        line1 = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 4, y: 6 })), point2: mockConstructor(new Point({ x: 8, y: 9 })), n: 10 }))
        point1 = mockConstructor(new Point({ x: 2, y: 5 }))
        expect(isPointOnLine(line1, point1)).toBe(false);
    })

    it('should calculate the n of the line when it is missing and then proceed to check if the point lies on the line',()=>{
        line1 = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 4, y: 6 })), point2: mockConstructor(new Point({ x: 8, y: 9 })), slope: 1 }))
        point1 = mockConstructor(new Point({ x: 3, y: 7 }))
        expect(isPointOnLine(line1, point1)).toBe(false);
    })


    it('should return false if the point does not lie on the given line', () => {
        line1 = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 4, y: 6 })), point2: mockConstructor(new Point({ x: 8, y: 9 })), slope: 1, n: 10 }))
        point1 = mockConstructor(new Point({ x: 5, y: 4 }));
        expect(isPointOnLine(line1, point1)).toBe(false);
    });


    it('should return false if the point lies on the line with the same slope but not the same value of n', () => {
        point1 = mockConstructor(new Point({ x: 5, y: 4 }))
        line1 = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 4, y: 6 })), point2: mockConstructor(new Point({ x: 8, y: 9 })), slope: -2, n: 5 }));
        const result = isPointOnLine(line1, point1)
        expect(result).toBe(false)
    })

    it('should return true if the point lies on the given line', () => {
        point1 = mockConstructor(new Point({ x: 5, y: 4 }))
        line1 = mockConstructor(new Line({ point1: mockConstructor(new Point({ x: 4, y: 6 })), point2: mockConstructor(new Point({ x: 8, y: 9 })), slope: -2, n: 14 }))
        expect(isPointOnLine(line1, point1)).toBe(true)
    })

})
