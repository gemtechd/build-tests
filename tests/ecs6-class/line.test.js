const Line = require("../../modules/ecs6-class/line");
const Point = require("../../modules/ecs6-class/point");
const myMockPoint1 = jest.fn()

describe('CHECK_IF_VALID_OBJECT', () => {
  it("should create line object when send parameters", () => {

    const line = new Line()
    expect(line).toBeInstanceOf(Line)

  })
  describe('ERROR', () => {
    it("throw new error when the point1 and Point2 not instance of Point",()=>{
      expect(() => new Line({point1:"string",point2:"string", n: true })).toThrow("type of point must to be point object")
    })
    it("throw new error when send type of n not number", () => {
      expect(() => new Line({ n: true })).toThrow("type of n must to be number or undefined")
      expect(() => new Line({ n: () => { } })).toThrow("type of n must to be number or undefined")
      expect(() => new Line({ n: { x: 4 } })).toThrow("type of n must to be number or undefined")
      expect(() => new Line({ n: "string" })).toThrow("type of n must to be number or undefined")
      expect(() => new Line({ n: [3, 2] })).toThrow("type of n must to be number or undefined")
    })
    it("throw new error when send type of slope not number", () => {
      expect(() => new Line({ slope: true })).toThrow("type of slope must to be number or undefined")
      expect(() => new Line({ slope: () => { } })).toThrow("type of slope must to be number or undefined")
      expect(() => new Line({ slope: { x: 4 } })).toThrow("type of slope must to be number or undefined")
      expect(() => new Line({ slope: "string" })).toThrow("type of slope must to be number or undefined")
      expect(() => new Line({ slope: [3, 2] })).toThrow("type of slope must to be number or undefined")
    })
  })
})

describe('CALCULATE_SLOPE', () => {
  it("should return zero when the point1.y equal point2.y", () => {
    const line = new Line({ point1: new Point({ x: 1, y: 2 }), point2: new Point({ x: 2, y: 2 }) });
    line.calculateSlope()
    expect(line.slope).toEqual(-0)
  })
  it("should calculate how much the slope is when there are two points", () => {
    const line = new Line({ point1: new Point({ x: 2, y: 6 }), point2: new Point({ x: 1, y: 2 }) });
    line.calculateSlope()
    expect(line.slope).toEqual(4)
  })
  describe('ERRORS', () => {
    it("throw new error when did'nt send parameters", () => {
      const line = new Line();
      expect(() => line.calculateSlope()).toThrow("it is not possible to divide by zero")
    })
    it("throw new error when point1.x equal point2.x", () => {
      const line = new Line({ point1: new Point({ x: 2, y: 6 }), point2: new Point({ x: 2, y: 2 }) });
      expect(() => line.calculateSlope()).toThrow("it is not possible to divide by zero")
    })
    it("throw new error when the point1 did'nt send and the second point.x equal zero", () => {
      const line = new Line({ point2: new Point({ x: 0, y: 2 }) });
      expect(() => line.calculateSlope()).toThrow("it is not possible to divide by zero")
    })
    it("throw new error when the point2 did'nt send and the one point.x equal zero", () => {
      const line = new Line({ point1: new Point({ x: 0, y: 2 }) });
      expect(() => line.calculateSlope()).toThrow("it is not possible to divide by zero")
    })
  })
})

describe('CALCULATE_N_OF_LINE_FUNCTION', () => {
  it("should return the length of the line by point and slope ", () => {
    const line = new Line({ point1: new Point({ x: 2, y: 2.2 }), slope: 5 });
    line.calculateNOfLineFunction()
    expect(line.n).toEqual(-7.8)
  })
  it("should return zero when the point did'nt send ", () => {
    const line = new Line({ slope: 5 });
    line.calculateNOfLineFunction()
    expect(line.n).toEqual(0)
  })
  it("should return point.y", () => {
    const line = new Line({ point1: new Point({ x: 0, y: 2 }), slope: 5 });
    line.calculateNOfLineFunction()
    expect(line.n).toEqual(2)
  })
  it("should return the calculation of slope and point1.x", () => {
    const line = new Line({ point1: new Point({ x: 2, y: -0 }), slope: 5 });
    line.calculateNOfLineFunction()
    expect(line.n).toEqual(-10)
  })

  describe('ERROR', () => {
    it("throw new error when the slope did'nt send ", () => {
      const line = new Line({ point1: new Point({ x: 2, y: 2 }) });
      expect(() => line.calculateNOfLineFunction()).toThrow("must to send slope")
    })
    it("throw new error when did'nt send parameters", () => {
      const line = new Line();
      expect(() => line.calculateNOfLineFunction()).toThrow("must to send slope")
    })
    it("throw new error when the type of slope did'nt number", () => {
      const line = new Line({ point1: new Point({ x: 0, y: 2 }) });
      line.slope = true
      expect(() => line.calculateNOfLineFunction()).toThrow("the type must to be number")
      line.slope = () => { }
      expect(() => line.calculateNOfLineFunction()).toThrow("the type must to be number")
      line.slope = { x: 4 }
      expect(() => line.calculateNOfLineFunction()).toThrow("the type must to be number")
      line.slope = "string"
      expect(() => line.calculateNOfLineFunction()).toThrow("the type must to be number")
      line.slope = [3, 2]
      expect(() => line.calculateNOfLineFunction()).toThrow("the type must to be number")
    })
  })
})

describe('GET_POINT_BY_X', () => {
  it("should returns a new point on the line by x", () => {
    const line = new Line({ n: 2, slope: 5 });
    myMockPoint1.mockReturnValue(line.getPointByX(3))
    expect(myMockPoint1() instanceof Point).toBeTruthy()
  })
  it("should returns value of x when slope and if equal to zero", () => {
    const line = new Line({ n: 2, slope: 0 });
    myMockPoint1.mockReturnValue(line.getPointByX(0))
    expect(myMockPoint1().x).toEqual(0)
  })
  describe('ERROR', () => {
    it("throw new error when did'nt send slope and n", () => {
      const line = new Line();
      expect(() => myMockPoint1.mockReturnValue(line.getPointByX(3))).toThrow("must to send slope and n")
    })
    it("throw new error when did'nt send slope", () => {
      const line = new Line({ n: 2 });
      expect(() => myMockPoint1.mockReturnValue(line.getPointByX(3))).toThrow("must to send slope")
    })
    it("throw new error when did'nt send n", () => {
      const line = new Line({ slope: 2 });
      expect(() => myMockPoint1.mockReturnValue(line.getPointByX(3))).toThrow("must to send n")
    })
    it("throw new error when type of x did'nt number", () => {
      const line = new Line({ slope: 2 });
      expect(() => myMockPoint1.mockReturnValue(line.getPointByX(true))).toThrow("type must be number")
      expect(() => myMockPoint1.mockReturnValue(line.getPointByX(() => { }))).toThrow("type must be number")
      expect(() => myMockPoint1.mockReturnValue(line.getPointByX({ x: 4 }))).toThrow("type must be number")
      expect(() => myMockPoint1.mockReturnValue(line.getPointByX("string"))).toThrow("type must be number")
      expect(() => myMockPoint1.mockReturnValue(line.getPointByX([3, 2]))).toThrow("type must be number")
    })
  })
})

describe('GET_POINT_BY_Y', () => {
  it("should returns a new point on the line by y", () => {
    const line = new Line({ n: 2, slope: 5 });
    myMockPoint1.mockReturnValue(line.getPointByY(3))
    expect(myMockPoint1() instanceof Point).toBeTruthy()
  })
  it("should return zero to x when y equal to n", () => {
    const line = new Line({ n: 3, slope: 5 });
    myMockPoint1.mockReturnValue(line.getPointByY(3))
    expect(myMockPoint1().x).toEqual(0)
  })
  describe('ERROR', () => {
    it("throw new error when did'nt send slope and n", () => {
      const line = new Line();
      expect(() => myMockPoint1.mockReturnValue(line.getPointByY(3))).toThrow("must to send slope and n")
    })
    it("throw new error when did'nt send slope", () => {
      const line = new Line({ n: 2 });
      expect(() => myMockPoint1.mockReturnValue(line.getPointByY(3))).toThrow("must to send slope")
    })
    it("throw new error when did'nt send n", () => {
      const line = new Line({ slope: 2 });
      expect(() => myMockPoint1.mockReturnValue(line.getPointByY(3))).toThrow("must to send n")
    })
    it("throw new error when type of y did'nt number", () => {
      const line = new Line({ slope: 2, n: 3 });
      expect(() => myMockPoint1.mockReturnValue(line.getPointByY(true))).toThrow("type must be number")
      expect(() => myMockPoint1.mockReturnValue(line.getPointByY(() => { }))).toThrow("type must be number")
      expect(() => myMockPoint1.mockReturnValue(line.getPointByY({ x: 4 }))).toThrow("type must be number")
      expect(() => myMockPoint1.mockReturnValue(line.getPointByY("string"))).toThrow("type must be number")
      expect(() => myMockPoint1.mockReturnValue(line.getPointByY([3, 2]))).toThrow("type must be number")
    })
    it("throw new error when slope equal to 0", () => {
      const line = new Line({ slope: 0, n: 3 })
      expect(() => myMockPoint1.mockReturnValue(line.getPointByY(3))).toThrow("it is not possible to divide by zero")
    })
  })
})

describe('GET_POINT_ON_Y_ASIS', () => {
  it("should return one when the function call to function getPointByX one once", () => {
    const line = new Line({ n: 3, slope: 5 });
    const response = line.getPointOnYAsis(myMockPoint1.mockResolvedValue({ x: 0, y: 3 }))
    expect(response instanceof Point).toBeTruthy()
  })
})

describe('GET_POINT_ON_X_ASIS', () => {
  it("should return one when the function call to function getPointByY one once", () => {
    const line = new Line({ n: 3, slope: 5 });
    const response = line.getPointOnXAsis(myMockPoint1.mockResolvedValue({ x: -0.6, y: 0 }))
    expect(response instanceof Point).toBeTruthy()
  })
})
