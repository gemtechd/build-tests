const Line = require('../modules/ecs6-class/line');
const Point = require('../modules/ecs6-class/point');


// jest.mock('../modules/ecs6-class/point');

describe('Line', () => {
  let line = new Line({})
  const line2 = new Line({ point1: new Point({ x: 7, y: 6 }), point2: new Point({ x: 2, y: 8 }), slope: undefined, n: undefined })

  it('line should be defined', () => {
    expect(line).toBeDefined();
  });
  
  it('line2 should be defined', () => {
    expect(line2).toBeDefined();
  });

  it('should calculate n if there is 2 points', () => {
    console.log('line2: ' + {line2});
    expect(line2.n).toBe(8.8)
  })

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

    it('should change slope from undefinde to number', () => {
      line.Slope = 0
      expect(line.slope).toBe(0)
    })

    it('should throw an error when the slope is not correct', () => {
      expect(() => line.Slope = 4).toThrow('this slope is not correct')
    })

    it('should change slope to the given slope', () => {
      const line3=new Line({point1:new Point({x:6,y:-3}),point2:undefined,slope:undefined,n:undefined})
      line3.Slope = 2
      expect(line3.slope).toBe(2)
    })
  })

  describe('Get slope', () => {
    it('test get slope', () => {
      expect(line.slope).toEqual(0)
    })
  })


  describe('Set n', () => {

    it('should be undiefinde n becouse there is no n in this line', () => {
      line.N = 0
      expect(line.n).toBe(undefined)
    })


    it('should change n from undefinde to number', () => {
      line2.N = 0
      expect(line2.n).toBe(8.8)
    })

    // it('should throw an error if the input n is not correct',()=>{
    //   line.N=4
    //   console.log("line.n: "+line.n);
    //   expect(()=> line2.N=4).toThrow('this is not the correct n')
    // })

  })

  describe('Get n', () => {

    it('test get n', () => {
      expect(line2.n).toEqual(8.8)
    })
  })

  describe('Get points',()=>{
    it('should return the points',()=>{
      expect(line2.Points).toEqual({point1:{x: 7, y: 6},point2:{x: 2, y: 8 }})
    })
  })

  describe('GetPointOnXAsis', () => {

    it('should return the point on x axis', () => {
      const response = line2.getPointOnXAsis()
      //  console.log(line2);
      expect(response).toEqual({ x: 0, y: 8.8 })//??
    })

    it('should return undefined if slope is not exist', () => {
      const response = line.getPointOnXAsis()
      expect(response).toBe(undefined)//??
    })

  })

  describe('getPointOnYAsis', () => {
    it('should return the point on y axis ', () => {
      const response = line2.getPointOnYAsis()
      expect(response).toEqual({ x: 0.045454545454545456, y: 0 })//????
    })

    it('should return undefined if slope is not exist', () => {
      const response = line.getPointOnYAsis()
      expect(response).toBe(undefined)//??
    })
  })

  describe('IsPointOnLine', () => {
    it('should return true if the point is on the line', () => {
      const response = line.isPointOnLine({ x: 3, y: 5 })
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
      expect(() => line.getPointByX(9)).toThrow('there is not slope or n in this line for get point by x')
    })
  })

  describe('GetPointByY', () => {
    it('should return a new point by y', () => {
      const response = line2.getPointByY(9)
      expect(response).toEqual({ x: 1.0681818181818181, y: 9 })//x?
    })

    it('should throw an error if there is not slope or n', () => {
      expect(() => line.getPointByY(9)).toThrow('there is not slope or n in this line for get point by y')
    })
  })
})

