let obj = {
    stringValue: "first",
    numberValue: 10,
    booleanValue: true
};

let {
    "stringValue": string,
    "numberValue": number,
    "booleanValue": boolean
} = obj;

console.log(string); // first
console.log(number); // 10
console.log(boolean); //true

/*
let {string:value, number:value} = obj;
위와 같은 코드는 작동하지 않습니다
es6의 Destructuring와 TypeScript의 Destructuring 같지않아 밑의 코드와 같이 지정 해야 합니다
*/

let {stringValue: objString, numberValue: objNumber}: {stringValue:string, numberValue:number} = obj;
console.log(objString); // first
console.log(objNumber); // 10

let defaultObj: {myName: string, myAge?:number} = {
    myName : "Dayzen"
};

let { myName: userName, myAge:uAge = 30 } = defaultObj;

console.log(userName);  // Dayzen
console.log(uAge);   // 30


/*
그렇다면 Destructuring은 어디에 사용하면 좋을까요?
1. ES6에서 지원하는 Iteration Protocol에서 사용
2. 함수의 리턴 값으로 배열이나 객체로 리턴을 받을때 사용
*/