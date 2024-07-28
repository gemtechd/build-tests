const Line = require('./ecs6-class/line')
const Point = require('./ecs6-class/point')

const calculateDistance = (point1, point2) => {//חישוב מרחק
    if (point1 === undefined || point2 === undefined) {
        throw new Error('the function should get two arguments of "Point"')
    }
    if ((!(point1 instanceof Point)) || (!(point2 instanceof Point))) {
        throw new Error('the function should get two arguments of "Point"')
    }
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {// נקודת אמצע
    if (line1 === undefined || line2 === undefined) {
        throw new Error('the function should get two arguments of "Line"')
    }
    if (!(line1 instanceof Line) || !(line2 instanceof Line)) {
        throw new Error('the function should get two arguments of "Line"')
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
    if (point === undefined || line === undefined) {
        throw new Error('the function should get arg of "Point" and arg of "Line"')
    }
    if (!(line instanceof Line) || !(point instanceof Point)) {
        throw new Error('the function should get arg of "Point" and arg of "Line"')
    }
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

module.exports = {
    calculateDistance,
    calculateJunctionPoint,
    isPointOnLine
}
