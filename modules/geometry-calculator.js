const  Line = require('./ecs6-class/line')
const  Point  = require('./ecs6-class/point')

const calculateDistance = (point1, point2) => {

    if (!(point1 instanceof Point)) {
        throw new Error('point1 is not a Point');
    }
    if (!(point2 instanceof Point)) {
        throw new Error('point2 is not a Point');
    }

    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;

    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {

    if (!(line1 instanceof Line)) {
        throw new Error('line1 is not a Line')
    }

    if (!(line2 instanceof Line)) {
        throw new Error('line2 is not a Line')
    }

    if(!line1.slope){
        line1.calculateSlope()
    }

    if(!line2.slope){
        line2.calculateSlope()
    }
    
    if(!line1.n){
        line1.calculateNOfLineFunction()
    }
    
    if(!line2.n){
        line2.calculateNOfLineFunction()
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
        throw new Error('line is not a Line')
    }
    if (!(point instanceof Point)) {
        throw new Error('point is not a Point')
    }
    if(!line.slope){
        line.calculateSlope()
    }
    
    if(!line.n){
        line.calculateNOfLineFunction()
    }
    

    const proxyLine = new Line({ point1: line.point1, point2: point })
    proxyLine.calculateSlope()
    if (line.slope === proxyLine.slope) {
        proxyLine.calculateNOfLineFunction()
        if (line.n === proxyLine.n) {
            return true
        }
        else {
            return false;
        }
    }
    return false
}

module.exports = {
    calculateDistance,
    calculateJunctionPoint,
    isPointOnLine
}
