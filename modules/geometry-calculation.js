//מחזירה מרחק בין 2 נקודות
const calculateDistance = (point1, point2) => {
    if(point1===point2)
        throw new Error("2 points are the same point")
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point2.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}
//מחזירה את נקודת המפגש של שני קווים אך אם זה  אותו קו מחזירה
//true
//ואם זה קווים מקבילים מחזירה
//false
const calculateJunctionPoint = (line1, line2) => {
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
        console.log({ x })
        console.log(line2.getPointByX(x))
        return line1.getPointByX(x)
    }
}
//זוית
const calculateAngle = (line1, line2) => {

}
//מחזירה את  
//n
//לפי נקודה ושיפוע
const calculateNOfLineFunction = ({ point, slope }) => {
    const n = point.y - slope * point.x
    return n;
}
//שיפוע
const calculateSlope = (point1, point2) => {
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