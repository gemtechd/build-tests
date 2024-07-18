

const { Line, getPointByX, getPointByY, } = require("../../modules/ecs6-class/line");

const { Point } = require("../../modules/ecs6-class/point");
const { isPointOnLine, calculateDistance, calculateJunctionPoint } = require('../../modules/geometry-calculation')
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


let line
describe('CALCULATE_DISTANCE', () => {
    it(' should checks if the parameters are of the correct type', () => {
        expect(() => calculateDistance('ab', 'df')).toThrow('point1 or  point2  is not point');
        expect(() => calculateDistance('ab', mockConstructorPoint(new Point()))).toThrow('point1 or  point2  is not point');
        expect(() => calculateDistance(mockConstructorPoint(new Point(), 'av'))).toThrow('point1 or  point2  is not point');
    })
    it(' should checks the distance between two lines if it correct', () => {

        line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: 1, n: 5 }))
        const distance = calculateDistance(line.point1, line.point2)
        expect(distance).toBe(5)
    })
})
describe('CALCULATE_JUNCTION_POINT', () => {


    it(' should checks if the line1 and line2 are of the correct type', () => {
        expect(() => calculateJunctionPoint('ab', 'df')).toThrow('line1 and line2 is not a line');
    })
    
    it(' should checks if the line1 is  of the correct type', () => {
        expect(() => calculateJunctionPoint('ab', mockConstructorLine(new Line({})))).toThrow('line1 is not a line');
    })
    
    it(' should checks if the line2 is of the correct type', () => {
        expect(() => calculateJunctionPoint(mockConstructorLine(new Line({})), 'av')).toThrow('line2 is not a line');
    })
    it('should return true for specific input', () => {

        line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: 1, n: 5 }))
        const line1 = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 5 })), slope: 1, n: 5 }))
        const result = calculateJunctionPoint(line, line1)
        expect(result).toBeTruthy();
    });
    it('should return false for specific input', () => {

        line = mockConstructorLine(new Line({ point1: new Point({ x: 4, y: 6 }), point2: new Point({ x: 8, y: 9 }), slope: 1, n: 5 }))
        const line1 = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 5 })), slope: 1, n: 6 }))
        const result = calculateJunctionPoint(line, line1)
        expect(result).toBeFalsy();
    });

    it(' should calculateJunctionPoint return the correct junction point for the given lines', () => {

        line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: 1, n: 10 }))
        const line1 = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 5 })), slope: 5, n: 2 }))
        const result = calculateJunctionPoint(line, line1)
        expect(result).toEqual(mockConstructorPoint(new Point({ x: 2, y: 12 })));

    });


})
describe('IS_POINT_ON_LINE', () => {
    let point
    it(' should checks if the parameters are of the correct type', () => {
        line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: 1, n: 10 }))
        point = mockConstructorPoint(new Point({ x: 4, y: 6 }))
        expect(() => isPointOnLine("k", "j")).toThrow('line is not point or point is not a line');
        expect(() => isPointOnLine(line, "abc")).toThrow('line is not point or point is not a line');
        expect(() => isPointOnLine("c", point)).toThrow('line is not point or point is not a line');
    })
    it('should Point lies isnt on a line with slope and n values', () => {
        line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: 2, n: -6 }))
        point = mockConstructorPoint(new Point({ x: 5, y: 4 }))
        const result = isPointOnLine(line, point)
        expect(result).toBeFalsy();
    })
    it('should Point lies isnt on a line with slope and n values', () => {
        line = mockConstructorLine(new Line({ point1: mockConstructorPoint(new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: -2, n: -6 }))
        point = mockConstructorPoint(new Point({ x: 5, y: 4 }))
        const result = isPointOnLine(line, point)
        expect(result).toBeFalsy();
    })
    it('should Point lies on a line with slope and n values', () => {
        line =mockConstructorLine( new Line({ point1:mockConstructorPoint( new Point({ x: 4, y: 6 })), point2: mockConstructorPoint(new Point({ x: 8, y: 9 })), slope: -2, n: 14 }))
        point = mockConstructorPoint(new Point({ x: 5, y: 4 }))
        const result = isPointOnLine(line, point)
        expect(result).toBeTruthy();
    })
})


