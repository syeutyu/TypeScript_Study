let bool: boolean = false;
let noBool: boolean = new Boolean(true);
/*
위의 코드는 에러가 난다
그 이유는 TypeScript 컴파일 언어 이기 때문
각 타입에 Wrapper 클래스 객체를 대입 할수가 없기에 불가
*/
console.log(bool.valueOf());
