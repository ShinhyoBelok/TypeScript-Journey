// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name

//     }
// }
class User {

  protected _courseCount = 1 /* private can only be access in the class, and 
  cannot be inherite but protected can be access only inside classes but also 
  inheritance but still not accessible outside the class*/
  
  readonly city: string = "Jaipur"
  constructor(
      public email: string, 
      public name: string,
      // private userId: string
      ){
  }
  private deleteToken(){
      console.log("Token deleted");
      
  }

  get getAppleEmail(): string{
      return `apple${this.email}`
  }

  get courseCount(): number {
      return this._courseCount
  }

  set courseCount(courseNum) {
      if (courseNum <= 1) {
          throw new Error("Course count should be more than 1")
      }
      this._courseCount = courseNum
  }
}

class SubUser extends User { // can't not inherite private things
  isFamily: boolean = true
  changeCourseCount(){
      this._courseCount = 4
  }
}

const hitesh2 = new User("h@h.com","hitesh")
// hitesh.name 

// hitesh.deleteToken()