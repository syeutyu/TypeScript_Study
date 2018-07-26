/*
일반적으로 아는 객체 지향의 인터페이스와는 다른 개념을 가지고 있다 
Interface는 ES에서 기본적으로 제공을 하지 않는다 
TypeScript에서 데이터 체크를 위한 방식으로 사용합니다
*/

interface Super {
    name: string,
    age: number
}

let child: Super;
// 1
// child.name = "12";
// child.age = 123;
// console.log(child.name);
// console.log(child.age);

// 2
child = {
    name: "test",
    age: 13
}
console.log(child.name);
console.log(child.age);

/* 
1번의 코드는 에러가 난다 child의 인터페이스인 Super를 구현한다고 선언했지만 
실제로 es로 트랜스 파일링을 하면 나오는 코드는 다음과 같다

var child;

child.name = "12";
child.age = 123;

child = {
    "name": "test",
    "age":13
}

child는 현재 아무 타입도 정해지지않은 undefined상태이기에 값을 넣어도 에러가 납니다
하지만 이 js코드에서 interface에 대한 선언은 나오지않은것을 보면 알수있듯이 TypeScript에서는 interface는 데이터 체크를 위해 사용합니다
*/
