const Line = require('./ecs6-class/line');
const Point = require('./ecs6-class/point');

const calculateDistance = (point1, point2) => {
    if(point1===undefined && point2===undefined   ){
        throw new Error('the function must get an arguments: point1 and point2!')
    }
    
    if((!(point1 instanceof Point))&&(!(point2 instanceof Point))){
        throw new Error("the arguments: point1 and point2 are not instance of 'Point'!")
    }
    if(!(point1 instanceof Point)){
        throw new Error("point1 is not instance of 'Point'!")
    }
    if(!(point2 instanceof Point)){
        throw new Error("point2 is not instance of 'Point'!")
    }
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {
    if(line1===undefined || line2===undefined   ){
        throw new Error('the function must get an arguments:line1 and line2!')
    }
    if((!(line1 instanceof Line))&&(!(line2 instanceof Line))){
        throw new Error("line1 and line2 are not instance of 'Line'!")
    }
    if(!(line1 instanceof Line)){
        throw new Error("line1 is not instance of 'Line'!")
    }
    if(!(line2 instanceof Line)){
        throw new Error("line2 is not instance of 'Line'!")
    }
    if(line1.slope===undefined || line2.slope===undefined){
        throw new Error('slope is undefined!')
    }
    if(line1.n===undefined || line2.n===undefined){
        throw new Error('n is undefined!')
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
    if(line===undefined || point===undefined){
        throw new Error('the function must get an arguments: line and point!')
    }
    if((!(line instanceof Line))&&(!(point instanceof Point))){
        throw new Error("line and point are not instance of 'Line' and 'Point!")
    }
    if(!(line instanceof Line)){
        throw new Error("line is not instance of 'Line'!")
    }
    if(!(point instanceof Point)){
        throw new Error("point is not instance of 'Point!")
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