/* 함수 표현식 */ // 호이스팅 x
//console.log(helloA()); // 함수 표현식은 호이스팅이 일어나지 않는다.

// 함수를 변수에 담을 때는 함수의 이름을 지어주지 않아도 된다.
let helloA = function(){
    return "안녕하세요. 함수 표현식으로 만든 함수입니다.";
}

console.log(helloA()); // 함수를 담고 있는 변수의 이름을 함수의 이름처럼 사용한다.
const helloText = helloA(); // 함수의 값을 상수에 담기
console.log(helloText); 

/* 함수 선언식 */ // 호이스팅 대상
console.log(helloB()); // 함수를 선언하기 전에 호출해도 정상적으로 출력
// -> "호이스팅"
// 함수 선언식으로 만들어진 함수는 프로그램 실행 전에 코드의 최상단으로 올라간다.

function helloB(){
    return "안녕하세요. 함수 선언식으로 만든 함수입니다."
}

console.log(helloB());


/* 화살표 함수 */ // 호이스팅 x
let helloC = () => "안녕하세요. 화살표 함수입니다.";
console.log(helloC());

