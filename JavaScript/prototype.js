/*
JavaScript는 객체 기반의 스크립트 언어입니다
즉 일반적인 객체지향 프로그래밍에서 보듯이 객체를 위주로 작동하는데 중요한 특징인 prototype에 대해서 설명하겠습니다
먼저 아래의 코드를 보시면
*/

function createObject (name, age) {
    this.name = name;
    this.age = age;
    this.thisFunction = function () {
        console.log(`${name} ${age}`);
    }
}

var obj = new createObject("one object", 1);

/*
obj이라는 변수에 생성자 함수를 이용해서 객체를 생성했습니다
이를 브라우저에서 실행한다면 다음과 같은 결과를 얻습니다 

createObject {name: "one object", age: 1, thisFunction: ƒ}
age:1
name:"one object"
thisFunction:ƒ ()
__proto__:
	constructor: ƒ createObject(name, age)
	__proto__:Object

프로퍼티에 대한 얘기는 천천히 하고 먼저 prototype라는 속성에 대하여 공부를 해보면
아래와 같이 호출합니다
*/

createObject.prototype.thisisproto = function (){
    console.log('this is prototype');
}

/*
처음 생성자 함수와 같이 this.메소드를 이용해 호출할수있는데 이와같이 prototype지정어를 사용하는 이유는 무엇일까요?
바로 createObject라는 객체의 proto 즉 원형에 메소드나 프로퍼티를 설정할 수 있기 때문입니다\
this를 이용한 메소드 호출시 각 객체를 만들때마다 생성되며 prototype를 설정한 호출시 객체 본연에 있기에 따로 객체마다 생성되지않습니다
아래의 코드를 보면 이해가 되실것같네요
*/

let v1 = new createObject("v1",2);
let v2 = new createObject("v2",2);

console.log(v1.thisFunction == v2.thisFunction); // false
console.log(v1.thisFunction === v2.thisFunction); // false
console.log(v1.thisisproto === v2.thisisproto); // true

/*
이해가 가시나요? prototype속성을 이용한 함수 비교시 공통적인 객체의 메소드를 공유하기에 true
this를 이용한 메소드 비교시 각 객체마다 메모리에 위치하기에 false라는 값이 나옵니다

그렇다면 __proto__ 프로퍼티는 설정도 하지않았는데 무엇일까요?
v1의 __proto__를 보면 다음과 같습니다

__proto__ :
    thisisproto:ƒ ()
    constructor:ƒ createObject(name, age)
    __proto__:Object

prototype로 설정한 값과 constructor 생성자가 참조되어있습니다
즉 __proto__ 는 prototype속성으로 지정한 값과 같다고 보시면 될것 같습니다
*/
