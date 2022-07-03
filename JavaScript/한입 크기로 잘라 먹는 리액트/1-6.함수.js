// 직사각형의 면적을 계산해서 출력하는 프로그램을 만들어보자.
let width1 = 10;
let height1 = 20;
let area1 = width1 * height1;
console.log(area1);

let width2 = 30;
let height2 = 15;
let area2 = width2 * height2;
console.log(area2);

// 만약에 직사각형 100개의 면적을 계산하라고 한다면?!?!
// 함수를 만듭시다!

/* 함수 선언식, 함수 선언 방식의 함수 생성 */
function getArea(){
    let width = 10;
    let height = 20;
    let area = width * height;
    console.log(area);
}

/* 함수 호출 */
getArea();
console.log("함수 실행 완료");

// 매개변수를 사용해서 함수를 만들어보자.
function getArea2(width, height){
    let area = width * height;
    console.log(area);
}

getArea2(100, 200);
console.log("함수 실행 완료");

// return을 사용해서 함수의 결과값을 받아보자.
function getArea3(width, height){
    let area = width * height;
    return area;
}

let rect1 = getArea3(20, 35); // 변수에 함수의 결과값 받아오기
console.log(`rect1: ${rect1}`);


/* 지역 변수와 전역 변수 */
// console.log(area); // 함수 내부에 선언한 변수 area는 함수 외부에서 사용할 수 없다. -> 지역 변수

let count = 1;
function getArea4(width, height){
    let area = width * height;
    console.log(count); // 함수 외부에 선언한 변수 count는 함수 내부에서 사용 가능 -> 전역 변수
    return area;
}

getArea4(20, 30);