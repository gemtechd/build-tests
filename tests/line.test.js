const Line =require('../modules/ecs6-class/line') ;
const Point = require('../modules/ecs6-class/point');


// jest.mock('../modules/ecs6-class/point');

describe('Line',()=>{
  let line=new Line({})
  const line2=new Line({point1:new Point({x:7,y:6}),point2:new Point({x:2,y:8}),slope:undefined,n:undefined})

it('should be defined', () => {
  expect(line).toBeDefined();
});


describe('AddPoint',()=>{

  it('should add point1 to line',()=>{
    line.addPoint(new Point({x:4,y:5}))
    expect(line.point1).toEqual({x:4,y:5})
  })

  it('should add point2 to line',()=>{
    line.addPoint(new Point({x:-9,y:5}))
    expect(line.point2).toEqual({x:-9,y:5})
  })

})

describe('Set slope',()=>{

  it('should change slope from undefinde to number',()=>{
  line.Slope=0
    expect(line.slope).toBe(0)
  })

  it('should throw an error when the slope is not correct',()=>{
    expect(()=>  line.Slope=4).toThrow('this slope is not correct')
  })
})

describe('Get slope',()=>{
  it('test get slope',()=>{
    expect(line.slope).toEqual(0)
  })
})


describe('Set n',()=>{

  it('should be undiefinde n becouse there is no n in this line',()=>{
      line.N=0
      expect(line.n).toBe(undefined)
    })


  it('should change n from undefinde to number',()=>{
    line2.N=0
      expect(line2.n).toBe(8.8)
    })

  it('should throw an error if the input n is not correct',()=>{
    expect(()=>line2.N=4).toThrow('this is not the correct n')
  })

})

describe('Get n',()=>{
  
  it('test get n',()=>{
    expect(line2.n).toEqual(8.8)
  })
})


describe('GetPointOnXAsis',()=>{

  it('should return the point on x axis',()=>{
   const response= line.getPointOnXAsis()
   console.log(line);
    expect(response).toBe({x:0,y:2})//??
  })

  //::::????
  it('should return undefined if slope is not exist',()=>{
    const response= line.getPointOnXAsis()
     expect(response).toBe(undefined)//??
   })
 
})

describe('getPointOnYAsis',()=>{
  it('should return the point on y axis ',()=>{
    const response = line.getPointOnYAsis()
    expect(response).toBe({x:5,y:0})//????
  })

  it('should return undefined if slope is not exist',()=>{
    const response= line.getPointOnYAsis()
     expect(response).toBe(undefined)//??
   })
})

describe('IsPointOnLine',()=>{
  it('should return true if the point is on the line',()=>{
    const response= line.isPointOnLine({x:3,y:5})
    expect(response).toBe(true)
  })

  it('should return false if the point is not on the line',()=>{
    const response= line.isPointOnLine({x:8,y:9})
    expect(response).toBe(false)
  })
})

describe('GetPointByX',()=>{
  it('should return a new point by x',()=>{
    const response= line.getPointByX(9)
    expect(response).toBe({x:9,y:8})//y?
  })

  it('should throw an error if there is not slope or n',()=>{    
    expect(()=>line.getPointByX(9)).toThrow('there is not slope or n in this line for get point by x')
  })
})

describe('GetPointByY',()=>{
  it('should return a new point by y',()=>{
    const response = line.getPointByY(9)
    expect(response).toBe({x:2,y:9})//x?
  })

  it('should throw an error if there is not slope or n',()=>{    
    expect(()=>line.getPointByY(9)).toThrow('there is not slope or n in this line for get point by y')
  })
})
})

  
//   it('We can check if the consumer called a method on the class instance', () => {
//     // Show that mockClear() is working:
//     expect(SoundPlayer).not.toHaveBeenCalled();
  
//     const soundPlayerConsumer = new SoundPlayerConsumer();
//     // Constructor should have been called again:
//     expect(SoundPlayer).toHaveBeenCalledTimes(1);
  
//     const coolSoundFileName = 'song.mp3';
//     soundPlayerConsumer.playSomethingCool();
  
//     // mock.instances is available with automatic mocks:
//     const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
//     const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
//     expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);
//     // Equivalent to above check:
//     expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
//     expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
//   });



