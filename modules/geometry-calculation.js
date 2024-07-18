const Line = require('./ecs6-class/line')
const Point=require('./ecs6-class/point')

const calculateDistance = (point1, point2) => {
    if(!(point1 instanceof Point)&&!(point2 instanceof Point))
        throw new Error('point1 and point2 must be of the Point type')
    if (!(point1 instanceof Point))
        throw new Error('point1 must be of the Point type')
    if (!(point2 instanceof Point))
        throw new Error('point2 must be of the Point type')
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}


const calculateJunctionPoint = (line1, line2) => {
    if(!(line1 instanceof Line)&&!(line2 instanceof Line))
        throw new Error('line1 and line2 must be of the Line type')
    if (!(line1 instanceof Line))
        throw new Error('line1 must be of the Line type')
    if (!(line2 instanceof Line))
        throw new Error('line2 must be of the Line type')
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
    if (!(line instanceof Line)&&!(point instanceof Point)) {
        throw new Error("The object line should be of the Line type and object point must be of the Point type")
    }
    if (!(line instanceof Line)) {
        throw new Error("The object line should be of the Line type")
    }
    if (!(point instanceof Point)) {
        throw new Error("The object point should be of the Point type")
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
