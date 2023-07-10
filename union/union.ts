let score: number | string = 33
score = 55
score = "66"

type User = {
  name: string;
  readonly id: number;
}

type Admin = {
  username: string;
  readonly id: number;
}

let shinhyo: User | Admin = {name: "shinhyo", id: 334};
shinhyo = {username: "admin123", id: 444};

//methods when you have union

function unionMethods(id: number | string) {
  id.toLowerCase(); //error
  if (typeof id === "string") {
    id.toLowerCase();// no error
  } else {
    id += 2;
  }
}

// union array

const data0: number[] = [1, 2, 3]
const data1: string[] = ['1', '2', '3']
const data2: (string | number) [] = [1, 2, "3"]
