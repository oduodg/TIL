/* 대입 연산자 = */
let a = 3;
let b = 2;

/* 산술 연산자 */
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); // 몫
console.log(a % b); // 나머지

/* 연결 연산자 */
let x = "1";
let y = "2";

console.log(x + y); // 12 출력
// 문자열을 붙여버림

/* 복합 연산자 */
// 산술 연산자와 대입 연산자를 함께 사용 -> 복합 연산자
a += 10;
a *= 10;
console.log(a);

/* 증감 연산자 */
// 산술 연산자를 두번 연속으로 사용 -> 증감 연산자
let c = 10;
c++;
console.log(c);
c--;
console.log(c);

console.log(c++); // 10 출력 -> 후위 연산(증감 연산자가 적용된 라인 이후에 적용됨)
console.log(c); // 11 출력
console.log(++c); // 12 출력 -> 전위 연산(증감 연산자를 만난 시점에 적용됨)

/* 논리 연산자 */
console.log(!true); // false 출력
// !(not)
console.log(true && true); // true 출력
// &&(and)
console.log(true || false); // ture 출력
// ||(or)

/* 비교 연산자 */
// 같은지 비교
let compareA = 1 == "1"; // 여기서 =은 대입 연산자 ==은 비교 연산자
console.log(compareA); // true 출력
// ==은 자료형과 상관없이 값만 비교한다.
let compareB = 1 === "1";
console.log(compareB); // false 출력
// ===은 자료형과 값 둘다 비교한다.

// 다른지 비교
let compareC = 1 != "1";
console.log(compareC); // false 출력
// !=은 자료형과 상관없이 값만 비교한다.
let compareD = 1 !== "1";
console.log(compareD); // true 출력
// !==은 자료형과 값 둘다 비교한다.

// 대소 비교
let compareE = 1 > 2;
console.log(compareE); // false 출력

let compareF = 1 <= 2;
console.log(compareF); // true 출력


/* 타입을 알려주는 연산자 typeof */
let whatType =  1; 
console.log(typeof whatType); // number 출력

whatType = "1";
console.log(typeof whatType); // string 출력

/* null 병합 연산자 */
// null이거나 undefined인 경우 반대쪽 피연산자를 반환
let isItNull; // isItNull은 현재 undefined
isItNull = isItNull ?? 10;
console.log(isItNull); // 10 출력