// 튜블은 파이썬을 공부해보셨다면 들어보셨겠지만 그 튜블과는 다릅니다!!!
// 간단히 배열안에 값이 들어가는 타입을 정의한다고 보시면 될것 같습니다
let myTuple: [string, number];

myTuple = ["Hello", 100]; // 가능

myTuple[2] = "World"; // 가능
myTuple[2] = 200;     // 가능
myTuple[2] = false; // 불가능
console.log(myTuple[2]);
