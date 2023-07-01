function getUserChoice(): number{
  const min = 1;
  const max = 12;
  let randomNum = Math.random() * (max - min) + min;
  return randomNum;
}

function f1() {
  return 'apple.jpg'
}
function f2() {
  return 'pineapple.jpg'
}
function f3() {
  return 'mango.jpg'
}
function f4() {
  return 'banana.jpg'
}
function f5() {
  return 'orange.jpg'
}
function f6() {
  return 'strawberry.jpg'
}
function f7() {
  return 'fruit7.jpg'
}
function f8() {
  return 'fruit8.jpg'
}
function f9() {
  return 'fruit9.jpg'
}
function f10() {
  return 'fruit10.jpg'
}
function f11() {
  return 'fruit11.jpg'
}
function f12() {
  return 'fruit12.jpg'
}

function returnFruit(): string{
    let num = getUserChoice();
    switch(num){
      case 1 : return f1();
          case 2 : return f2();
          case 3 : return f3();
          case 4 : return f4();
          case 5 : return f5();
          case 6 : return f6();
          case 7 : return f7();
          case 8 : return f8();
          case 9 : return f9();
          case 10 : return f10();
          case 11 : return f11();
          case 12 : return f12();
    }
    return 'durian.jpg'
  }
  console.log(returnFruit());

  export {}