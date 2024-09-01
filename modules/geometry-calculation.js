const Line = require('./ecs6-class/line')
const Point =require('./ecs6-class/point')

const calculateDistance = (point1, point2) => {
    if (!(point1 instanceof Point)) {
        throw new Error("the type of point1 or type of point2 is not 'Point'")
    }
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point2.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {
    if(!(line1 instanceof Line))
        throw new Error('the value that received for line1 is not on type of line')
    if(!(line2 instanceof Line))
        throw new Error('the value that received for line2 is not on type of line')
    
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
    if(!(line instanceof Line))
        throw new Error('the value that received for line is not on type of line')
    if(!(point instanceof Point))
        throw new Error('the value that received for point is not on type of point')
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
