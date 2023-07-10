const User = {
  name: "Shin",
  email: "s@s.com",
  isActive: true
}

function createUser({ name:string, isPaid:boolean }) {}

// not equal amount of params
createUser({ name:"string", isPaid:false, email: "e@e.com" });

// not equal amount of params allow in ts
const newUser = { name:"string", isPaid: false, email: "e@e.com" };
createUser(newUser);

// this is the way you say in ts that a function is returning a object
function createCourse():{name: string, price: number}{
  return {name: "reactjs", price: 366}
}

export {}