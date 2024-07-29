const Line = require('./ecs6-class/line');
const Point = require('./ecs6-class/point');

const calculateDistance = (point1, point2) => {
    if (point1 == undefined || point2 == undefined)
        throw new Error('two points were not received')
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {
    if (!line1 || !line2)
        throw ("It should take two arguments")
    if (!line1.slope)
        line1.calculateSlope()
    if (!line1.n)
        line1.calculateNOfLineFunction()
    if (!line2.slope)
        line2.calculateSlope()
    if (!line2.n)
        line2.calculateNOfLineFunction()
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

    if (!line || !(line instanceof Line)) {
        throw ("line were not received")
    }
    if (!point || !point instanceof Point) {
        throw ("point were not received")
    }
    if (line.slope === undefined)
        line.calculateSlope()
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
