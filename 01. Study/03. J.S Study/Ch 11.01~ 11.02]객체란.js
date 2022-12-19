// 객체란 키와 값으로 구성된 속성의 집합을 의미한다.

// 객체선언의 기본 구조

// const person = {};

const person = {
    name: 'ja',
    age: 20,
    "phone number": "010-1234-5678",
    isAdult: false,
    printinfo: function (msg) { // 객체 안에 정의된 함수를 메서드라 한다.
        console.log(msg);
    }
};

// 객체의 속성에 접근은 1. 객체의 이름과 속성으로 접근하는 방법, 2. 객체의 이름을 적고 속성을 대괄호에 작성하는 방법이 있다.
// 문자, 숫자는 물론 논리형, 함수도 호출할 수 있다.

console.log(person. name); // 마침표 연산자
console.log(person['age']); // 대괄호 연산자(키 이름에 공백이 있을경우에 자주 사용된다.)
console.log(person['phone number']);
person.printinfo('hello');


// ------------------------------------------------------------


// 객체 속성 값 변경하기(변경, 추가, 삭제)

// 변경

person.name = '철수';
console.log(person.name);

// 추가

person.birthday = '2022-12-12';
console.log(person.birthday);

// 삭제

delete person.isAdult;
console.log(person);


// ------------------------------------------------------------


// 객체 데이터 관리 방법

// 기본 자료형: 다른 변수에 자료형 데이터를 할당하더라도 자료형 데이터의 값이 완전히 복사가 된다. 이를 깊은 복사라 한다.
// num1과 num2는 서로 독립적인 공간에서 데이터를 관리한다.

let num1 = 10;
let num2 = num1; // num2 = 10
num1 = 30;
console.log(num1, num2);

// 참조 자료형

const obj1 = {
    name: 'java',

}
const obj2 = obj1;
delete obj1.name;
console.log(obj1, obj2);

