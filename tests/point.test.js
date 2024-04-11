const Point = require('../modules/ecs6-class/point')


describe('Point', () => {
  let point = {}

  beforeEach(() => {
    point = new Point({ x: 8, y: -1 });
  });

  it('should be defined', () => {
    expect(point).toBeDefined();
  });

  describe('MoveVertical', () => {
    it('should move vertical', () => {
      point.moveVertical(2)
      expect(point).toEqual({ x: 8, y: 1 })
    })

  })
  describe('MoveHorizontal', () => {
    it('should move horizontal', () => {
      point.moveHorizontal(2)
      expect(point).toEqual({ x: 10, y: -1 })
    })
  })

})