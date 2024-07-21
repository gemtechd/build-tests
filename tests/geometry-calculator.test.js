
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('../modules/geometry-calculator')
const { Line, getPointByY, getPointByX } = require('../modules/ecs6-class/line');
const { Point } = require('../modules/ecs6-class/point');
const mockConstructorPoint = jest.fn(constructor);
const mockConstructorLine = jest.fn(constructor);

Line.prototype.getPointByX = jest.fn().mockImplementation((x) => {
    return new Point({ x: 2, y: 12 });
});

Line.prototype.calculateSlope = jest.fn().mockImplementation(() => {
    line.slope = 1;
});

Line.prototype.calculateNOfLineFunction = jest.fn().mockImplementation(() => {
    line.n = 5;
});


let line1, line2
let point1, point2
describe('CALACULATE_DISTANCE', () => {

    it(' should checks if the parameters are of the correct type', () => {
        expect(() => calculateDistance('ab', mockConstructorPoint(new Point()))).toThrow('point1 is not a Point');
        expect(() => calculateDistance(mockConstructorPoint(new Point(), 'av'))).toThrow('point2 is not a Point');
    })

    it('calculates the distance correctly between two points', () => {
        point1 = mockConstructorPoint(new Point({ x: 1, y: 2 }));
        point2 = mockConstructorPoint(new Point({ x: 4, y: 6 }));
        expect(calculateDistance(point1, point2)).toBeCloseTo(5, 5);
    });
});


describe('CALCULATE_JUNCTION_POINT', () => {

    it(' should checks if the parameters are of the correct type', () => {
        expect(() => calculateJunctionPoint('ab', mockConstructorLine(new Line({ n: 5 })))).toThrow('line1 is not a Line');
        expect(() => calculateJunctionPoint(mockConstructorLine(new Line({ n: 5 }), 'av'))).toThrow('line2 is not a Line');
    })

    it('should return true if the lines are parallel and identical', () => {
        line1 = mockConstructorLine(new Line({ slope: 1, n: 1 }));
        line2 = mockConstructorLine(new Line({ slope: 1, n: 1 }));
        expect(calculateJunctionPoint(line1, line2)).toBe(true);
    });

    it('should return false if the lines are parallel but not identical', () => {
        line1 = mockConstructorLine(new Line({ slope: 1, n: 1 }))
        line2 = mockConstructorLine(new Line({ slope: 1, n: 2 }));
        expect(calculateJunctionPoint(line1, line2)).toBe(false);
    });


    it(' should calculateJunctionPoint return the correct junction point for the given lines', () => {

        line1 = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: 1, n: 10 }))
        line2 = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 5 })), slope: 5, n: 2 }))
        const result = calculateJunctionPoint(line1, line2)
        expect(result).toEqual(mockConstructorPoint(new Point({ x: 2, y: 12 })));
    });


})


describe('IS_POINTON_LINE', () => {

    it(' should checks if the parameters are of the correct type', () => {
        line1 = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: 1, n: 10 }))
        point1 = mockConstructorPoint(new Point({ x: 4, y: 6 }))
        expect(() => isPointOnLine(line1, "abc")).toThrow('point is not a Point');
        expect(() => isPointOnLine("c", point1)).toThrow('line is not a Line');
    })
})

it('should return false if the point does not lie on the given line', () => {
    line1 = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: 1, n: 10 }))
    point1 = mockConstructorPoint(new Point({ x: 5, y: 4 }));
    expect(isPointOnLine(line1, point1)).toBe(false);
});


it('should return false if the point lies on the line with the same slope but not the same value of n', () => {
    point1 = mockConstructorPoint(new Point({ x: 5, y: 4 }))
    line1 = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: -2, n: 5 }));
    const result = isPointOnLine(line1, point1)
    expect(result).toBe(false)
})

it('should return true if the point lies on the given line', () => {
    point1 = mockConstructorPoint(new Point({ x: 5, y: 4 }))
    line1 = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: -2, n: 14 }))
    expect(isPointOnLine(line1, point1)).toBe(true)
})

