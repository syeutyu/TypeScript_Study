interface Person {
    name: string,
    age: number,
    phone: string
}

function returnSuper(person: Person): void {
    console.log(`${person.name} and ${person.age} and ${person.phone}`);
}

let objPerson: Person;

objPerson = {
    name: "dayzen",
    age: 20,
    phone: "010-0000-0000"
};

returnSuper(objPerson);

// 위의 함수는 정상적으로 작동한다 그렇다면 밑의 코드는 어떻게 작동할까?
let objExample = {
    name: "test",
    age: 10,
    phone: "010-0000-0000"
}

returnSuper(objExample);

/* 
결과는 옳게 작동한다 objExample은 Type를 Person으로 선언하지 않았는데 어떻게 된일 일까?
TypeScript의 특징은 값들의 형태를 체크한다는 의미에 있다고 봅니다
즉 객체가 Interface의 property나 method를 가지고있으면 해당 Interface로 확인한다는 의미 입니다
이런걸 duck typing이라고 부릅니다
*/