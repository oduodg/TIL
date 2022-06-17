/* 변수 선언 */
// var와 let
let age = 25; // age라는 변수를 25라고 하자.

console.log(age); // 25 출력

age = 30;

console.log(age); // 30 출력

/* 변수명으로 사용할 수 있는 유일한 기호는 underscore(_)와 dollar($) */

let age_ = 28;
let age$ = 25;

console.log(age_);
console.log(age$);

/* 변수명에 숫자를 사용하려면 맨 앞은 x */

let age1 = 40;

console.log(age1);


/* var와 let의 차이점 */
var varAge = 25; // varAge를 선언
console.log(varAge);

var varAge = "30"; // 다시 varAge를 선언
console.log(varAge); // 아무 error없이 실행됨
// 많은 코드(1000줄 이상)가 있다면 문제가 생길 가능성이 농후
// let은 변수를 중복으로 선언하는 것을 허용하지 않음.


/* 상수 */
// const
const weight = 45; // 상수는 선언과 동시에 초기화가 이루어져야 함.
// weight = 18; // 상수는 선언 이후에 값을 바꿀 수 없다.
console.log(weight);