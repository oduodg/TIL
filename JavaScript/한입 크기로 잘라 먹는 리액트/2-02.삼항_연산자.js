let a = 3;
if (a >= 0) {
    console.log("양수");
} else {
    console.log("음수");
}

/* 삼항연산자를 사용해서 간단하게 만들어보자 */
a >= 0 ? console.log("양수") : console.log("음수");
// 조건식 ? 참일 때 수행할 코드 : 거짓일 때 수행할 코드;


let b = [];
if (b.length === 0){
    console.log("빈 배열");
} else {
    console.log("비어있지 않은 배열");
}

// 삼항연산자
b.length === 0 ? console.log("빈 배열") : console.log("비어있지 않은 배열");

/* 삼항연산자의 결과를 값으로 받기 */
const arrayStatus = b.length === 0 ? "빈 배열" : "비어있지 않은 배열";
console.log(arrayStatus);


let c; // c는 undefined
const result = c ? true : false;
console.log(result); // false 출력


/* 삼항연산자 중첩 */
// TODO: 학점 계싼 프로그램
// 90점 이상 A+
// 50점 이상 B+
// 둘다 아니면 F

let score = 100;
score >= 90 
    ? console.log("A+") 
    : score >= 50
    ? console.lof("B+")
    : console.log("F")

// 삼항연산자 중첩은 가독성이 떨어지므로 if문으로 작성하는 것을 권장
if (score >= 90){
    console.log("A+");
} else if (score >= 50) {
    console.log("B+");
} else {
    console.log("F");
}