console.log(`3 * 1 = 3`);
console.log(`3 * 2 = 6`);
console.log(`3 * 3 = 9`);
console.log(`3 * 4 = 12`);
console.log(`3 * 5 = 15`);
console.log(`3 * 6 = 18`);
console.log(`3 * 7 = 21`);
console.log(`3 * 8 = 24`);
console.log(`3 * 9 = 27`);

// console.log를 이용해 구구단 3단을 출력하는 방식이지만, 다른 구구단을 출력해야할 경우 단수와 값을 다시 작성해야하는 번거로움이 있다.
// 이를 대체하기 위해 for 문으로 대체할 수 있다.

for(let i = 1; i <= 9; i++) {
    console.log(`4 * ${i} = ${4 * i}`);
}

// 단수를 바꾸면 되기 떄문에 console.log를 이용한 방법보다는 수월하다. 하지만, 한페이지에 여러개의 구구단 단수를 출력해야한다면 for문을 반복적으로 적어야 하는 단점이 있다.
// 그 떄 우리는 함수(어떤 목적을 가지고 작성한 코드를 모아둔 블록문)을 사용한다.
// 함수를 선언하는 방법으로는 함수선언문, 함수표현식, 화살표함수가 있다.


// ------------------------------------------------------------


// 함수선언문
// 식별자는 함수를 식별할 수 있는 고유한 이름으로 지정한다.


function 식별자() {

}

function gugudan() {
    for(let i = 1; i <= 9; i++) {
        console.log(`5 * ${i} = ${5 * i}`);
    }
}
gugudan();


// ------------------------------------------------------------


// 함수표현식
// function뒤에 이름을 써도 되고 안써도 된다.
// 함수표현식의 이름으로 호출할 수 없다.


const gugudanexpress = function() {
    for(let i = 1; i <= 9; i++) {
        console.log(`6 * ${i} = ${6 * i}`);
    }
}
gugudanexpress();


// ------------------------------------------------------------


// 화살표함수
// 호출해서 사용하기 위해서는 변수에 할당을 해줘야한다.
const gugudanarrow = () => {
    for(let i = 1; i <= 9; i++) {
        console.log(`7 * ${i} = ${7 * i}`);
    }
}
gugudanarrow();


// ------------------------------------------------------------


// 매개변수와 인수

// 자바스크립트에서 함수는 단순반복을 예방하기 위한 개념을 지원한다.

// 매개변수

// 함수식별자 다음에 오는 소괄호 안에 변수이름을 지정할 수 있다.
// 함수를 정의할때 외부에서 전달되는 데이터를 함수에서 받을 수 있도록 정의하는 변수이다.
// 매개변수는 여러개를 사용할 수 있으며 콤마로 구분하여 사용한다.

// 인수
// 매개변수에 데이터를 전달하기 위해서 함수를 호출할 때 어떠한 값을 적는걸 인수라 한다.
// 정의한 함수를 사용하려고 호출할때, 소괄호안에 전달하고싶은 데이터를 인수라고 한다.

function gugudan(dan1, dan2, dan3) { //매개변수
    for(let i = 1; i <= 9; i++) {
        console.log(`dan1 * ${i} = ${dan1 * i}`);
    }
}
gugudanarrow(3, 5, 7); //인수


// ------------------------------------------------------------


// return문

// 함수를 호출할 때 데이터를 전달하려면 매개변수를 정의하듯, 함수 외부로 데이터를 반환할 때 사용한다.

function sum (num1, num2) {
    const result = num1 + num2;
    console.log(result);
}
sum(10, 20);
sum(50, 100);

// 이때, 만일 10+20과 50+100을 하나로 합치고 싶을 경우 return문을 사용한다.

function sum (num3, num4) {
    const result = num3 + num4;
    return result;
} 
const result1 = sum(10, 20);
const result2 = sum(50, 100);
console.log(result1 + result2);

