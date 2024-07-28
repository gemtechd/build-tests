const Line = require('./ecs6-class/line')
const Point = require('./ecs6-class/point')

const calculateDistance = (point1, point2) => {
    if(point1===undefined||point2===undefined){
        throw new Error('the function must get an arguments') 

    }
    if((!(point1 instanceof Point)) || (!(point2 instanceof Point))){
        throw new Error("the arguments is not instance of 'Point'") 
    }
    let distanceX = (point2.x - point1.x) ** 2
    let distanceY = (point2.y - point1.y) ** 2
    const distance = Math.sqrt(distanceX + distanceY)
    return distance
}

const calculateJunctionPoint = (line1, line2) => {

    if(line1===undefined||line2===undefined){
        throw new Error('the function must get line1 and line2') 

    }
    if((!(line1 instanceof Line)) && (!(line2 instanceof Line))){
        throw new Error("line1 and line2 should be of type 'Line'") 
    }
    if((!(line1 instanceof Line))){
        throw new Error("line1 should be of type 'Line'") 
    }
    if((!(line2 instanceof Line))){
        throw new Error("line2 should be of type 'Line'") 
    }
   
   
    

    if(line1.slope===undefined){
        line1.calculateSlope()
    }
    if(line2.slope===undefined){
        line2.calculateSlope()
    }
    if(line1.n===undefined){
        line1.calculateNOfLineFunction()

    }
    if(line2.n===undefined){
        line2.calculateNOfLineFunction()
    }
 
 
    // if(line1.n===undefined){

    // }
    // if(line2.n===undefined){
        
    // }
    

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
    
    if(line===undefined && point===undefined){
        throw new Error('the function must get an two arguments') 
    }
    
    if(line===undefined){
        throw new Error('the function must accept a line') 
    }

    if(point===undefined){
        throw new Error('the function must accept a point') 

    }
    
    if(!(line instanceof Line)){
        throw new Error("the arguments is not instance of 'line'") 

    }
    if(!(point instanceof Point)){
        throw new Error("the arguments is not instance of 'point'") 

    }

    if(line.slope === undefined){
        line.calculateSlope()
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
