/*
Destructuring ES6에서 지원을 시작해서 tsconfig.json에서 target을 es6로 변경해야 한다
*/

let testArray: string[] = ["H","E","L"];

console.log(testArray[0]); // H
console.log(testArray[1]); // E
console.log(testArray[2]); // L

let [h, e, l] = testArray;

console.log(h); // H
console.log(e); // E
console.log(l); // L

let [hello, ello, lllo]: string[] = testArray;

test(["HELLO",100,"TEST FUNCTION"]);

function test([h, e, l]: [string, number, string]): void{
    console.log(h); // HELLO
    console.log(e); // 100
    console.log(l); // TEST FUNCTION
}

let numberArray: number[] = [10,20,30,40];
let [f, s, ...other] = numberArray;

console.log(f); //10
console.log(s); //20
console.log(other); //[30,40]
