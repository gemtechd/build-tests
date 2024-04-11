const Line = require('../modules/ecs6-class/line');
const Point = require('../modules/ecs6-class/point');


describe('Line', () => {
  let line = new Line({})
  const line2 = new Line({ point1: new Point({ x: 7, y: 6 }), point2: new Point({ x: 2, y: 8 }), slope: undefined, n: 8.8 })
  const line3 = new Line({ point1: new Point({ x: -5, y: 4 }), point2: new Point({ x: 4, y: 4 }), slope: undefined, n: 8.8 })
  const line5 = new Line({ point1: new Point({ x: -5, y: 4 }), point2: new Point({ x: -5, y: 8 }), slope: undefined, n: undefined })
  const line6 = new Line({ point1: new Point({ x: 7, y: 6 }), point2: new Point({ x: 2, y: 8 }), slope: undefined, n: undefined })
 
  it('line should be defined', () => {
    expect(line).toBeDefined();
  });

  it('line2 should be defined', () => {
    expect(line2).toBeDefined();
  });

  it('should throw an error when slope is not the correct slope', () => {
    try {
      const line4 = new Line({ point1: new Point({ x: -5, y: 6 }), point2: new Point({ x: 4, y: 6 }), slope: 6, n: 8.8 })
    }
    catch (err) {
      expect(err.message).toEqual('the slope you entered is not correct');
      console.log(err);
    }
  });

  it('should throw an error when slope is not exist in this line', () => {
    try {
      const line4 = new Line({ point1: new Point({ x: 2, y: 9 }), point2: new Point({ x: 2, y: 6 }), slope: 6, n: 8.8 })
    }
    catch (err) {
      expect(err.message).toEqual('there isn\'t slope for this line');
      console.log(err);
    }
  });

  it('should throw an error when n is not the correct', () => {
    try {
      const line7 = new Line({ point1: new Point({ x: 7, y: 6 }), point2: new Point({ x: 2, y: 8 }), slope: undefined, n: 2 })
    }
    catch (err) {
      expect(err.message).toEqual('the n you entered is not correct');
      console.log(err);
    }
  });

  describe('AddPoint', () => {

    it('should add point1 to line', () => {
      line.addPoint(new Point({ x: 4, y: 5 }))
      expect(line.point1).toEqual({ x: 4, y: 5 })
    })

    it('should add point2 to line', () => {
      line.addPoint(new Point({ x: -9, y: 5 }))
      expect(line.point2).toEqual({ x: -9, y: 5 })
    })

  })

  describe('Set slope', () => {

    it('should throw an error when slope is not the correct', () => {
      try {
        line3.Slope = 4
      }
      catch (err) {
        expect(err.message).toEqual('the slope you entered is not correct');
        console.log(err);
      }
    });

    it('should throw an error when slope is not exist in this line', () => {
      try {
        line5.Slope = 4
      }
      catch (err) {
        expect(err.message).toEqual('there isn\'t slope for this line');
        console.log(err);
      }
    });

    it('should change slope to the given slope', () => {
      const line3 = new Line({ point1: new Point({ x: 6, y: -3 }), point2: undefined, slope: undefined, n: undefined })
      console.log(line3.Slope);
      line3.Slope = 2
      expect(line3.Slope).toBe(2)
    })
  })

  describe('Get slope', () => {
    it('test get slope', () => {
      const res = line.Slope
      expect(res).toBe(0)
    })
  })


  describe('Set n', () => {

    it('should throw an error when n is not exist in this line', () => {
      try {
        line3.N = 8
      }
      catch (err) {
        expect(err.message).toEqual('there isn\'t slope to this line');
        console.log(err);
      }

    });

    it('should throw an error when n is not correct', () => {
      try {
        line2.N = 6
      }
      catch (err) {
        expect(err.message).toEqual('the n you entered is not correct');
        console.log(err);
      }
    })
  })

  describe('Get n', () => {

    it('test get n', () => {
      expect(line2.n).toEqual(8.8)
    })

    
    it('test get n', () => {
      line6.N
      expect(line6.n).toEqual(8.8)
    })
  })

  describe('Get points', () => {
    it('should return the points', () => {
      expect(line2.Points).toEqual({ point1: { x: 7, y: 6 }, point2: { x: 2, y: 8 } })
    })
  })

  describe('GetPointOnXAsis', () => {

    it('should return the point on x axis', () => {
      const response = line2.getPointOnXAsis()
      expect(response).toEqual({ x: 0, y:8.8 })
    })

    it('should return undefined if slope is not exist', () => {
      const response = line.getPointOnXAsis()
      expect(response).toBe(undefined)
    })

  })

  describe('getPointOnYAsis', () => {
    it('should return the point on y axis ', () => {
      const response = line2.getPointOnYAsis()
      expect(response).toEqual({ x: 0.045454545454545456, y: 0 })
    })

    it('should return undefined if slope is not exist', () => {
      const response = line.getPointOnYAsis()
      expect(response).toBe(undefined)
    })
  })

  describe('IsPointOnLine', () => {
    it('should return true if the point is on the line', () => {
      const response = line2.isPointOnLine({ x: 4.5, y: 7 })
      expect(response).toBe(true)
    })

    it('should return false if the point is not on the line', () => {
      const response = line.isPointOnLine({ x: 8, y: 9 })
      expect(response).toBe(false)
    })
  })

  describe('GetPointByX', () => {
    it('should return a new point by x', () => {
      const response = line2.getPointByX(9)
      expect(response).toEqual({ x: 9, y: 5.200000000000001 })
    })

    it('should throw an error if there is not slope or n', () => {
      try {
        line.getPointByX(9)
      }
      catch (err) {
        expect(err.message).toEqual('there is not slope or n in this line for get point by x')
        console.log(err);
      }
    })
  })

  describe('GetPointByY', () => {
    it('should return a new point by y', () => {
      const response = line2.getPointByY(9)
      expect(response).toEqual({ x: 1.0681818181818181, y: 9 })
    })

    it('should throw an error if there is not slope or n', () => {
      try {
        line.getPointByY(9)
      }
      catch (err) {
        expect(err.message).toEqual('there is not slope or n in this line for get point by y')
        console.log(err);
      }
    })
  })
})

