let stringValue: string = "Hello Dayzen";
let nameLength: number = stringValue.length;

console.log((stringValue as string).length);
console.log((<string>stringValue).length);

/*
타입이 맞을 때 체크하는 문법으로 typeof 메소드라고 생각하시면 편할것 같습니다
*/