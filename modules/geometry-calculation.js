const Line = require('./ecs6-class/line');
const Point = require('./ecs6-class/point');

const calculateDistance = (point1, point2) => {
    if (!(point1 instanceof Point) && !(point2 instanceof Point)) {
        throw new Error("send in point1 and in point2 instance of point")
    }
    if (!(point1 instanceof Point)) {
        throw new Error("send in point1 instance of point")
    }
    if (!(point2 instanceof Point)) {
        throw new Error("send in point2 instance of point")
    }
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {
    if (!(line1 instanceof Line) && !(line2 instanceof Line)) {
        throw new Error("send in line1 and in line2 instance of Line")
    }
    if (!(line1 instanceof Line)) {
        throw new Error("send in line1 instance of Line")
    }
    if (!(line2 instanceof Line)) {
        throw new Error("send in line2 instance of Line")
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
    if (!(line instanceof Line) && !(point instanceof Point)) {
        throw new Error("line must to be instance of Line and point instance of Point")
    }
    if (!(line instanceof Line)) {
        throw new Error("line must to be instance of Line")
    }
    if (!(point instanceof Point)) {
        throw new Error("point must to be instance of Point")
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
