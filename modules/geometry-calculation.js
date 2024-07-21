const Line = require('./ecs6-class/line');
const Point = require('./ecs6-class/point');




const calculateDistance = (point1, point2) => {
    if(typeof(point1)!='object'||typeof(point1)!='object'){
        throw Error('The value is of an invalid type')
    }
    if(!point1.x||!point2.x){
        throw Error('The value is of an invalid type')
    }

    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2,func) => {
    if(typeof(line1)!='object'||typeof(line2)!='object'){
        throw Error('The value is of an invalid type')
    }
    if(!line1.slope||!line2.slope){
        throw Error('The value is of an invalid type')
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
        if(!func){
            func=line1.getPointByX(x)
        }
        const junctionPoint = func;
        return junctionPoint
    }
}

const isPointOnLine = (line, point,func1,func2) => {
    if(typeof(line)!='object'||typeof(point)!='object'){
        throw Error('The value is of an invalid type')
    }
    if(!line.slope||!point.x){
        throw Error('The value is of an invalid type')
    }

    const proxyLine = new Line({ point1: line.point1, point2: point })
    if(!func1){
       func1= proxyLine.calculateSlope() 

    }
    else{
      proxyLine.slope = func1;  
    }
      
    if (line.slope === proxyLine.slope) {
        if(!func2){
            func2=proxyLine.calculateNOfLineFunction()
           
        }
        else{
           proxyLine.n= func2;  
          }
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
