abstract class TakePhoto { /*abstract class are like a blueprint class 
you can not create objects from it, you can create obj from the classes 
that inherite it them (extends TakePhoto) in this case facebook class*/
  constructor(
      public cameraMode: string,
      public filter: string
  ){}

  abstract getSepia(): void // protected methods
  getReelTime(): number{
      //some complex calculation
      return 8
  }
}


class Facebook extends TakePhoto{
  constructor(
      public cameraMode: string,
      public filter: string,
      public burst: number
      ){
          super(cameraMode, filter)
      }

      getSepia(): void {
          console.log("Sepia");
          
      }
}

const hc = new Facebook("test", "Test", 3)

hc.getReelTime()