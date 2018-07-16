enum Name { DAYZEN, LEE, KIM , NUMBER = 3 }
let myName: Name = Name.DAYZEN;
let errorValue: string = Name.NUMBER;
// errorValue 컴파일시 에러
// string 타입에 NUMBER 즉 3을 대입하기에 에러

console.log(myName);
