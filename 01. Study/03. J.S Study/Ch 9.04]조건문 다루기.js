// 특정 조건에 따라 다르게 실행되는 코드를 작성할 수 있다.

// if, switch등 다양한게 사용한다.


// ------------------------------------------------------------


// if 

// 조건문이 참일 경우에만, 중괄호 안에 있는 실행 코드를 실행하게 된다.
// if문 안에 다른 if문을 중첩하여 사용할 수 있으며, 그 중첩된 if문에 else if, else문도 사용이 가능하다.
// 조건을 비교할 경우 단일 조건만을 비교해야한다. 만일, 연속적으로 비교할땐 논리연산자를 사용해야한다.

// if (조건문) {
//     실행할 코드
// }

let num1= 10;
if(num1 % 2 === 0) {
    console.log('num1은 짝수입니다.');
}

let num2= 10;
if(num2 % 2 === 0) {
    console.log('num2은 짝수입니다.')
    
    if(num2 > 5) {
        console.log('num2은 5보다 큽니다.')
    }
    else if(num2 > 0) {
        console.log('num2은 0보다 큽니다.')
    }
    else {
        console.log('num2은 0보다 작습니다.')
    }
}

let score1= 90;
if(score1 >= 90) {
    console.log('A++');
}
else if(80 < score1 < 90) { //잘못된 문법이다.
    console.log('B++');
}

let score2= 85;
if(score2 >= 90) {
    console.log('A++');
}
else if(score < 90 && score >= 80) { //올바른 문법이다.
    console.log('B++');
}


// ------------------------------------------------------------


// else

// else문은 if문 다음에 작성해야하며, 단독으로 사용할 수 없다.
// else문은 if문이 실행되지 않으면 else문을 실행한다.

let num6= 9;
if(num6 % 2 === 0) {
    console.log('num6은 짝수입니다.');
}
else {
    console.log('num6은 홀수입니다.');
}


// ------------------------------------------------------------


// else if

// 비교해야할 대상이 여러가지일 경우 사용된다.
// else와 마찬가지로 if문 다음에 작성해야하며, else문 이전에 사용된다.
// else if문은 여러개 사용이 가능하나, else문은 단 하나만 사용이 가능하다.

let num9= 10;
if(num9 > 20) {
    console.log('num9은 20보다 큽니다.')
}
else if(num9 > 5) {
    console.log('num9은 5보다 큽니다.')
}
else {
    console.log('num9은 5보다 작습니다.')
}


// ------------------------------------------------------------


// switch

// key 와 일치하는 case의 코드를 실행한다.
// 하나의 case에 하나의 break를 사용해야 한다.

let food1 = 'melon';
switch (food1) {
    case 'melon':
        console.log('fruit');
        break;
    case 'apple':
        console.log('fruit');
        break;
    case 'carrot':
        console.log('vegetable');
        break;
    default:
        console.log('아무것도 아니다.');
        break;
}