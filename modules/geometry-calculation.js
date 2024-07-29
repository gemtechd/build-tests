const Line = require('./ecs6-class/line')
const Point = require('./ecs6-class/point')

const calculateDistance = (point1, point2) => {//חישוב מרחק
    if ((!(point1 instanceof Point)) || point1 === undefined) {
        throw new Error('point1 must be of the Point class')
    }
    if (!(point2 instanceof Point) || point2 === undefined) {
        throw new Error('point2 must be of the Point class')
    }
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {// נקודת אמצע
    if (line1 === undefined || !(line1 instanceof Line)) {
        throw new Error('line1 must be of the Line class')
    }
    if (line2 === undefined || !(line2 instanceof Line)) {
        throw new Error('line2 must be of the Line class')
    }
    if(line1.slope===undefined){
        throw new Error('The slope in line1 has not yet been defined')
    }
    if(line2.slope===undefined){
        throw new Error('The slope in line2 has not yet been defined')
    }
    if(line1.n===undefined){
        throw new Error('The n in line1 has not yet been defined')
    }
    if(line2.n===undefined){
        throw new Error('The n in line2 has not yet been defined')
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
    if (!(line instanceof Line)) {
        throw new Error('the function should get arg of "Line"')
    }
    if (typeof (point.x) !== 'number' || typeof (point.x) !== 'number' || !(point instanceof Point)) {
        throw new Error('the function should get arg of "Point"')
    }
    const proxyLine = new Line({ point1: line.point1, point2: point })
    proxyLine.calculateSlope()
    if(line.slope===undefined){
        throw new Error('The slope in line has not yet been defined')
    }
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
