const Line = require('./ecs6-class/line')
const Point = require('../modules/ecs6-class/point');
const calculateDistance = (point1, point2) => {
    if (!point1 || !point2 || typeof point1.x !== 'number' || typeof point1.y !== 'number' || typeof point2.x !== 'number' || typeof point2.y !== 'number') {
        throw new Error('Invalid input points');
    }
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    console.log({distance});
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {
    if (!(line1 instanceof Line) || !(line2 instanceof Line)) {
        throw new Error('Invalid input lines');
    }
    if (line1.slope === line2.slope) {
        if (line1.n === line2.n) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        const x = (line1.n - line2.n) / (line2.slope - line1.slope)
        const junctionPoint = line1.getPointByX(x);
        return junctionPoint
    }
}

const isPointOnLine = (line, point) => {
    if (!(line instanceof Line) || !(point instanceof Point) || typeof point.x !== 'number' || typeof point.y !== 'number') {
        throw new Error('Invalid input line or point');
    }
    const proxyLine = new Line({ point1: line.point1, point2: point })
    proxyLine.calculateSlope()
    if (line.slope === proxyLine.slope) {
        proxyLine.calculateNOfLineFunction()
        console.log(line.n,'nnnn',proxyLine.n);
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
