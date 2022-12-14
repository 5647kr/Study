// 함수 외부에서 내부의 변수를 참조하지 못하는 이유를 알려면 스코프를 알아야한다.

// 스코프

// 변수와 함수나 같은 참조 대상 식별자를 찾아내기 위한 일종의 규칙이다.
// 함수 스코프와 블록 스코프로 나뉘게 된다.


// ------------------------------------------------------------


// 함수 스코프

// 함수에 중괄호 안에 있는 코드를 지역 스코프라 하며, 함수 밖에 있는 코드를 전역 스코프라 한다.

let a = 10;
function sum() {
    console.log(`함수 내부에서 a 참조: ${a}`);
}
sum();
console.log(`함수 외부에서 a 참조: ${a}`);

// 변수 b를 함수 안으로 이동한다.

// function sum() {
//     let b = 10;
//     console.log(`함수 내부에서 b 참조: ${b}`);
// }
// sum();
// console.log(`함수 외부에서 b 참조: ${b}`);


// ------------------------------------------------------------

// 블록 스코프

// let과 const에서만 해당된다.

let c = 10;
{
    console.log(`블록문 내부에서 변수 c 참조: ${c}`);
}
console.log(`블록문 외부에서 변수 c 참조: ${c}`);

// {
//     let d = 10;
//     console.log(`블록문 내부에서 변수 d 참조: ${d}`);
// }
// console.log(`블록문 외부에서 변수 d 참조: ${d}`);

{
    var e = 10;
    console.log(`블록문 내부에서 변수 e 참조: ${e}`);
}
console.log(`블록문 외부에서 변수 e 참조: ${e}`);


// ------------------------------------------------------------


// 함수 호이스팅

// 선언부와 할당부를 나누어서 선언부를 최상위로 끌어올리는걸 말한다.

var num;
console.log(num);
num = 10;

// 이는 함수에서도 적용된다.

printname1();
function printname1() {
    console.log(`name1`);
}

// 함수 표현식일때는 호이스팅이 되지 않는다.

// printname2();
// var printname2 = function printname2() {
//     console.log(`name2`);
// }


// ------------------------------------------------------------


// 즉시 실행 함수

// 최초로 한번만 실행해야하는 함수를 만들어야 할때 사용한다.
// html에서는 init을 중복선언을 할 수 없게 된다. 

const init = () => {
    console.log(`init`);
};
init();


(() => {
    console.log(`init`);
})();