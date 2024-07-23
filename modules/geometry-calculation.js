const Line = require('./ecs6-class/line')
const Point = require('./ecs6-class/point')

const calculateDistance = (point1, point2) => {
    if(!point1 && !point2)
        throw Error('point1 and point2 are undefined')
    if (!point1)
        throw Error('point1 is undefined')
    if (!point2)
        throw Error('point2 is undefined')
    if(!(point1 instanceof Point) && !(point2 instanceof Point))
        throw Error('point1 and point2 are not a pointObject')
    if (!(point1 instanceof Point))
        throw Error('point1 is not a pointObject')
    if (!(point2 instanceof Point))
        throw Error('point2 is not a pointObject')
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {
    if(!line1 && !line2)
        throw Error('line1 and line2 are undefined')
    if (!line1)
        throw Error('line1 is undefined')
    if (!line2)
        throw Error('line2 is undefined')
    if(!(line1 instanceof Line) && !(line2 instanceof Line))
        throw Error('line1 and line2 are not a lineObject')
    if (!(line1 instanceof Line))
        throw Error('line1 is not a LineObject')
    if (!(line2 instanceof Line))
        throw Error('line2 is not a LineObject')
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
    if(!line && !point)
        throw Error('line and point are undefined')
    if (!line)
        throw Error('line is undefined')
    if (!point)
        throw Error('point is undefined')
    if(!(line instanceof Line) && !(point instanceof Point))
        throw Error('line and point are not a lineObject and a pointObject')
    if (!(line instanceof Line))
        throw Error('line is not a lineObject')
    if (!(point instanceof Point))
        throw Error('point is not a pointObject')
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
