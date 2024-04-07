const calculateDistance = (point1, point2) => {
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point2.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

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
        console.log({x})
        console.log(line2.getPointByX(x))
        return line1.getPointByX(x)
    }
}

const calculateAngle = (line1, line2) => {

}

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