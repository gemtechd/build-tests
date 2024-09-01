const Point = require('.ecs6-class/point');
const Line = require('./ecs6-class/line')

const calculateDistance = (point1, point2) => {
    if(!(point1 instanceof Point) || (point2 instanceof Point)) {
        throw new Error("point1 or point2 is not Point");
    }
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}


const calculateJunctionPoint = (line1, line2) => {
    if (!(line1 instanceof Line) || !(line2 instanceof Line)) {
        throw new Error("line1 or line2 is not Line");
    }
        line2.calculateSlope()
        isPointOnLine(line1, line1.point2)
        line2.calculateNOfLineFunction()
        if (line1 == undefined || line2 == undefined) {
            throw new Error("must to be 2 lines");
        }
        if (line1.slope === line2.slope) {
            if (line1.n === line2.n) {
                return true
            }
            else {
                return false
            }
        }
        else {
            const x = (line1.n - line2.n) / (line2.slope - line1.slope)
            const junctionPoint = line1.getPointByX(x);
            return junctionPoint
        }
    
}

const isPointOnLine = (line, point) => {
    if (!(line instanceof Line) || !(point instanceof Point)) {
        throw new Error("line or point is not Line or Point");
    }
    const proxyLine = new Line({ point1: line.point1, point2: point })
    proxyLine.calculateSlope()
    if (!line.slope) {
        line.calculateSlope()
    }
    if (line.slope == proxyLine.slope) {
        proxyLine.calculateNOfLineFunction()
        if (!line.n) {
            line.calculateNOfLineFunction()
        }
        if (line.n === proxyLine.n) {
            return true
        }
    }
    return false
}


module.exports = {
    calculateDistance,
    calculateJunctionPoint,
    isPointOnLine
}
