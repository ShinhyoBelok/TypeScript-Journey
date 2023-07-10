type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

// multiple type

type name = {
  name: string;
}
type id = {
  id: number;
}
type lastname = {
  lastname: string;
}

type activeUser = name & id & lastname & {
  active: boolean;
}

let active_user: activeUser = {
  name: "",
  lastname: "",
  id: 12341,
  active: true
}

// readonly & optional

type user = {
  readonly id: string; //readonly
  name: string;
  nickName?: string; //optional
}

let myUser:user = {
  id: '234',
  name: "Shinhyo",
  // nickName: "Shin"
}

myUser.name = "Juan"
myUser.id = "112" //complening cuz is readonly