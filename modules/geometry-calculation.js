const calculateDistance = (point1, point2) => {
    let distanceX = (point2.x - point1.x) ** 2;
    let distanceY = (point2.y - point1.y) ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {
    if (line1.Slope === line2.Slope) {
        if (line1.N === line2.N) {
            return true
        }
        else {
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
    const n = point.y - slope * point.x
    return n;
}

const calculateSlope = (point1, point2) => {
    if (point1.x - point2.x === 0) {
        throw new Error('there isn\'t slope for this line')
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