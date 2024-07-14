const Line = require('./ecs6-class/line')
const Point = require('./ecs6-class/point')

const calculateDistance = (point1, point2) => {
    if (!point1 && !point2)
        throw Error('point1 or point2 are undifined')
    if (!(point1 instanceof Point) || !(point2 instanceof Point))
        throw Error('point1 or point2 are not a pointObject')
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {
    if (!line1 && !line2)
        throw Error('line1 or line2 are undifined')
    if (!(line1 instanceof Line) || !(line2 instanceof Line))
        throw Error('line1 or line2 are not a LineObject')
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
    if (!line && !point)
        throw Error('point or line are undifined')
    if (!(line instanceof Line) || !(point instanceof Point))
        throw Error('line or point are not a lineObject or a pointObject')
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
