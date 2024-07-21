const Line = require('./ecs6-class/line');
const Point = require('./ecs6-class/point');

const calculateDistance = (point1, point2) => {
    if (point1 instanceof Point || point2 instanceof Point) {
        let distanceX = (point2.x - point1.x) ** 2;
        let distanceY = (point2.y - point1.y) ** 2;
        const distance = Math.sqrt(distanceX + distanceY);
        return distance;
    }
    else
        throw Error("this point is not a Point")
}


const calculateJunctionPoint = (line1, line2) => {
    if (line1 instanceof Line && line2 instanceof Line) {
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
    else
        throw Error("this line is not a Line")
}


const isPointOnLine = (line, point) => {
    if ((line instanceof Line) && (point instanceof Point)) {
        const proxyLine = new Line({ point1: line.point1, point2: point })
        proxyLine.calculateSlope()
        if (line.slope === proxyLine.slope) {
            proxyLine.calculateNOfLineFunction()
            if (line.n === proxyLine.n) {
                return true
            }
        }
        return false
    }
    else
        throw Error("this object is not an Line or Point")
}

module.exports = {
    calculateDistance,
    calculateJunctionPoint,
    isPointOnLine
}
