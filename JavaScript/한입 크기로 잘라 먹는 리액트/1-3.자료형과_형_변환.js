/* 숫자형 */
let age = 26; // 정수

let tall = 179.9; // 실수

let inf = Infinity; // 양의 무한대

let minusInf = -Infinity; // 음의 무한대

let nan = NaN; // 연산이 잘못되었을 때(수학적인 연산의 실패)

console.log(age + tall); // 숫자끼리는 연산 가능

/* 문자열 */
let name = "eun"; // 문자열(쌍따옴표)

let name2 = '이은'; // 문자열(따옴표)

let name3 = `은쨩`; // 문자열(백틱)

let name4 = `eun ${name3}`; // 백틱 안에는 변수를 넣을 수 있다.(템플릿 리터럴)

console.log(name4);

/* Boolean Type */
let isSwitchOff = true;
let isSwitchOn = false;

/* null과 undefined */
let a = null;  // null은 아무것도 가리키고 있지 않는 값
console.log(a); // null

let b;  // 아무 값도 할당하지 않으면 undefined
console.log(b); // undefined


/* 형 변환 casting */
let numberA = 12;
let numberB = "2"; // 문자열을 자동으로 숫자로 인식하여 아래 연산을 실행

console.log(numberA * numberB); // 24 출력
// 자동적으로 자바스크립트 엔진이 형 변환을 해줌 -> "묵시적 형변환"

console.log(numberA + numberB); // 122 출력
// 결과를 12+2 = 14로 만들고 싶다면 
console.log(numberA + parseInt(numberB)); // 14 출력
// 의도적으로 프로그래머가 형 변환을 해줌 -> "명시적 형변환"