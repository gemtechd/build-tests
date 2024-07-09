const Line = require('./ecs6-class/line');
const Point = require('./ecs6-class/point');

const calculateDistance = (point1, point2) => {
    if ((point1 instanceof Point) && (point2 instanceof Point)) {
        let distanceX = (point2.x - point1.x) ** 2;
        let distanceY = (point2.y - point1.y) ** 2;
        const distance = Math.sqrt(distanceX + distanceY);
        return distance;
    }
    else {
        throw new Error('the type of the points is not correctly')
    }
}

const calculateJunctionPoint = (line1, line2) => {
    if ((line1 instanceof Line) && (line2 instanceof Line)) {
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
    else {
        throw new Error('the type of the lines is not correctly')
    }
}

const isPointOnLine = (line, point) => {
    if ((line instanceof Line) && point instanceof Point) {
        const proxyLine = new Line({ point1: line.point1, point2: point })
        proxyLine.calculateSlope()
        if (line.slope === proxyLine.slope) {
            proxyLine.calculateNOfLineFunction()
            if (line.n === proxyLine.n) {
                return true
            }
        }
        return false
    } else {
        throw new Error('the type of the line or the point is not correctly')
    }
}

module.exports = {
    calculateDistance,
    calculateJunctionPoint,
    isPointOnLine
}
