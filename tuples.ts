const user1: (string | number)[] = ["xd", 1]
let user12: [string, number, boolean]
user12 = ["xd", 2, true];

let rgb: [number, number, number] = [255, 255, 255];

type user_1 = [number, string];

const newUser_1: user_1 = [122, "asdfasd"]

/*tienes que tener cuidado que aunque uses tuples para tener un array retringido
puedes romper esas restrincciones asignando un valor con el index array[0] = 2 cuando 
se supone que debe ir un string y tambien con los metodos push pop para array shift
etc*/