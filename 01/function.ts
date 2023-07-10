function addTwo(num: number):string {
  //return num + 1
  return "hello"
}

const getHero = (hero: string):string => {
  return `the hero is ${hero}`
}

const heros = ["thor", "superman", "captan america"]

heros.map((hero) => {
  console.log(getHero(hero));
})

function consoleError(errmsg:string):void {
  console.log(errmsg);
}

function handleError(errmsg:string):never {
  throw new Error(errmsg);
}

export {}