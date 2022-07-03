// 배열을 우아하게 사용하는 방법

let arr = ["one", "two", "three"];
let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one, two, three);

/* 배열의 비 구조화 할당(구조 분해 할당) */
// 대괄호를 이용해서 배열의 값을 순서대로 할당받아서 사용할 수 있는 방법
let [one1, two1, three1] = arr;
// arr의 0번째 인덱스 값은 변수 one1에 할당, 1번째 인덱스 값은 변수 two1에 할당, 2번째 인덱스 값은 변수 three1에 할당
console.log(one1, two1, three1);

/* 더 간단하게 만들어보자 */
let [one2, two2, three2] = ["one", "two", "three"];
console.log(one2, two2, three2);

/* 변수에 기본값 할당하기 */
let [one3, two3, three3, four3 = "four"] = ["one", "two", "three"]; // 기본값을 할당하지 않으면 undefined
console.log(one2, two2, three3, four3);

/* swap하기 */
let a = 10;
let b = 20;
let tmp = 0;

tmp = a;
a = b;
b = tmp;
console.log(a, b); // 20, 10

// 비 구조화 할당을 이용하여 swap하기
[a, b] = [b, a];
console.log(a, b); // 10, 20



// 객체를 우아하게 사용하는 방법

let object = {one5: "one", two5: "two", three5:"three"};

let one4 = object.one5; // 점 표기법을 활용하여 할당
let two4 = object["two5"]; // 괄호 표기법을 활용하여 할당
let three4 = object.three5;

console.log(one4, two4, three4);

/* 객체의 비 구조화 할당 */
let { one5, two5, three5 } = object; // 객체의 key값을 기준으로 값을 할당함.(변수명이 key가 됨)
console.log(one5, two5, three5);

// key가 아닌 다른 변수명을 사용하고 싶다면?
let object2 = {name: "은", age: 28};
let { age, name: myName, phone = "010-0000-0000" } = object2; // 순서는 상관없다. 배열과 똑같이 기본값 할당 가능
// key: 변수명
console.log(myName, age, phone);
