const calculateDistance = (point1, point2) => {
    //חישוב המרחק בין 2 נקודות (כלומר את אורך הקו)
    let distanceX = (point2.x - point1.x )** 2;
    let distanceY = (point2.y - point1.y )** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {
    //מחשב את נקודת המפגש בין 2 הצלעות
    // אם השיפועים שלהם שווים סימן שהם או על אותו הקו או שהם מקבילים ואין להם נקודת מפגש
    if (line1.Slope === line2.Slope) {
        if (line1.N === line2.N) {
            //on the same line
            return true
        }
        else {
            //מקבילים
            return false
        }
    }
    else {
        const x = (line1.N - line2.N) / (line2.Slope - line1.Slope)
        return line1.getPointByX(x)
    }
}

const calculateAngle = (line1, line2) => {
}

const calculateNOfLineFunction = ({ point, slope }) => {
    if(slope===0){
        return undefined
    }
    // חישוב המפגש של הקו עם ציר ה-y 
    const n = point.y - slope * point.x
    return n;
}

const calculateSlope = (point1, point2) => {
    //מחשב את השיפוע בין 2 הנקודות
    //it should throw an error if the points are on the same line
    if(point1.x-point2.x===0){
        return undefined
    }
    const slope = (point1.y - point2.y) / (point1.x - point2.x)
    return slope
}

module.exports = {
    calculateDistance,
    calculateAngle,
    calculateSlope,
    calculateNOfLineFunction,
    calculateJunctionPoint
}