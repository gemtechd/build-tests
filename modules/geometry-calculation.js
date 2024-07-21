const Line = require('./ecs6-class/line');
const Point = require('./ecs6-class/point');

const calculateDistance = (point1, point2) => {
 
    if(!point2)
        throw new Error('must enter 2 points')
    if(!(point1 instanceof Point)||!(point2 instanceof Point))
        throw new Error('points must be instances of Point')
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {
    if(!line2)
        throw new Error('must enter 2 lines')
    if(!(line2 instanceof Line)||!(line1 instanceof Line))
        throw new Error('lines must be instances of Line')
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
    if(!line||!point)
        throw new Error('must get both line and point')
    if( !( point instanceof Point))
        throw new Error('point must be instance of Point')
    if(! (line instanceof Line))
        throw new Error('line must be instance of Line')
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
