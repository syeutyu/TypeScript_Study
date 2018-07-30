/*
본 js는 prototype와 연계 됩니다

prototype를 통해 객체의 프로퍼티와 메소드가 공유가 되면서 __proto__라는 속성이 등장하고 이를 Java나 다른 OOP언어처럼 상속을 받아 재활용 할 수 없을까요?
가능합니다!!!
아래의 코드를 보시죠
*/

function person (name) {
    this.name = name
}

person.prototype.walking = function (){
    console.log(`${name}이 걷습니다`)
}

let person1 = new person("Dayzen");

function xman (name, power) {
    person.apply(this, arguments);
    this.power = power;
}

xman.prototype = Object.create(person.prototype);
xman.prototype.constructor = xman;
xman.prototype.superPower = function (){
    console.log(`${this.name} 님이 ${this.power}를 사용하셨습니다`);
}
let superman = new xman("Dayzen", "비행");
superman.superPower();

/*
위의 코드를 설명하자면
type.apply(this, arguments)\
- this객체에서의 arguments에서 type에 해당하는 프로퍼티가 있다면 설정한다
  고로 person에는 name 프로퍼티를 가지고 있어 설정되고 power는 없기에 xman이라는  객체의 프로퍼티에 설정됩니다

xman.prototype = Object.create(person.prototype)
-  xman의 __proto__에 person의 prototype 객체를 만들어 설정해주는것입니다
   그래야 person의 프로퍼티나 메소드를 사용할수 있겠죠??
   또한 Object.create는 생성자 함수는 호출되지않고 해당하는 객체의 프로토타입만 생성됩니다

xman.prototype.constructor = xman;
-  이 코드를 지정하지 않으면 __proto__의 person부분에 constructor가 없어 그 해당하는 위의 객체인 object에서 생성한 person() 으로 설정되기에
   __proto__ : person 부분에 생성자인 xman을 지정해주는 부분입니다
   만약 설정하지않으면 __proto__ : person에 생성자 함수가 없어 그 위의 객체인 __proto__ : object의 person()함수가 설정 됩니다
*/