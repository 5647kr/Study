// 자바스크립트에서 기본적으로 제공해주는 객체를 표준내장객체라 한다.

// string, array, data, math 객체 등이 있다. 


// ------------------------------------------------------------


// string 객체

// 사용자가 입력한 텍스트의 길이나 글자수 제한할 때 사용하는 방법으로 사용한다.

const str1 = 'abc';
console.log(str1.length);

// 텍스트에 해당 문자가 있는지 확인하는 방법으로 사용한다.
// includes의 경우 논리형값을 반환한다.
// indexof의 경우 찾고자 하는 문자열의 위치를 반환한다.
// trim의 경우 텍스트의 앞뒤 공백을 지운다. (중간공백은 다른방법을 사용한다.)

const email1 = 'test1@naver.com';
if(email1.includes("@") === false) {
    console.log('@가 없습니다.');
}

const email2 = 'test2@naver.com';
console.log(email2.indexOf('t'));

const email3 = 'test3naver.com';
if(email3.indexOf("@") === -1) {
    console.log('@가 없습니다.');
}

const email4 = ' test4@naver.com ';
console.log(email4.trim());


// ------------------------------------------------------------


// array 객체

// 파괴적 매서드 비파괴적 매서드
// 어떠한 매서드를 사용했을 때 원본즉 변수에 할당되어져 있는 배열이 파괴되면 파괴적 매서드, 파괴되지 않으면 비파괴적 매서드라 한다.


// 파괴적 매서드

// pop의 경우 맨 뒤에서 데이터를 추출한다.

const arr1 = ['a', 'b', 'c'];
arr1.pop();
console.log(arr1);

// push의 경우 맨 뒤에 데이터를 추가한다.

const arr2 = ['a', 'b', 'c'];
arr2.push('d');
console.log(arr2);


// 비파괴적 매서드

// forEach의 경우 배열안에 있는 요소를 하나씩 탐색할 때 사용한다.
// 탐색대상의 값을 매개변수로 전달한다.

const arr3 = ['a', 'b', 'c'];
arr3.forEach(function(v) {
    console.log(v);
});
console.log(arr3);


// ------------------------------------------------------------


// date 객체

// 날짜와 시간을 다루는 객체이다.

const date1 = '2022-04-25';

// 우리눈에는 날짜처럼 보이지만, 자바스크립트는 문자열로 인식을 하게 된다.

const date2 = new Date();
console.log(date2.getFullYear());


// ------------------------------------------------------------


// math 객체

// 수학공식과 관련된 매서드를 다루는 객체이다.

// random의 경우 0~1미만의 난수를 구하는 매서드이다.

const random1 = Math.random();
console.log(random1);

// 이때 높은 난수가 필요한 경우도 있다.

const random2 = Math.random() * 20;
console.log(random2);

// 이때 만약 소수점을 버릴경우도 있다.

const random3 = Math.random() * 20 + 1; // * 20의 경우 0~ 19까지 *20 + 1의 경우 0~20까지
console.log(Math.floor(random3));