// 배열은 아주 많은 내장함수를 가지고 있다.
// 배열 내장함수들에 대해 알아보자~! ㅇ_<
// 내장함수란 객체의 메서드와 똑같다.
// JavaScript의 모든 자료형은 객체!
// 오늘 배운 내장함수
// forEach, map, includes, indexOf, findIndex, find
// filter, slice, concat, join, compare

/* 배열 순회하기 */
/* 1. for문 이용 */
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

/* 2. forEach 이용 */
// forEach는 배열 각각의 요소에 함수를 적용시킨다.
// 함수 선언식으로 표현
arr.forEach(function(elm) {
    console.log(elm);
});
// 화살표 함수로 표현
arr.forEach((elm) => console.log(elm));
// 배열의 모든 요소에 *2하기
arr.forEach((elm) => console.log(elm *2));

/* 배열의 모든 요소에 *2를 한 배열을 생성하자 */
/* 1. forEach 이용 */
const newArr = [];
arr.forEach((elm) => newArr.push(elm*2));
console.log(newArr);

/* 2. map 이용 */
// map은 원본 배열의 모든 요소를 순회하면서 연산을 하고 그 값을 return하여 새로운 배열을 만든다.
const newArr1 = arr.map((elm) => {
    return elm * 2;
});
console.log(newArr1);

/* 배열에 어떤 값이 있는지 확인해보자 */
/* 1. forEach 이용 */
let number = 3;
arr.forEach((elm) => {
    if (elm === number) {
        console.log(true);
    }
});

/* 2. includes 이용 */
// includes는 주어진 값이 배열에 존재하는지(===으로 비교) boolean 타입으로 반환
console.log(arr.includes(number));

/* 배열에 주어진 값이 있으면 index를 출력해보자 */
// indexOf 이용
console.log(arr.indexOf(number)); // 값이 존재하면 index를 출력
console.log(arr.indexOf(10)); // 값이 존재하지 않으면 -1 출력

/* 객체 배열에서 원하는 속성을 갖는 요소의 인덱스를 찾아보자 */
// findeIndex 이용
const arr2 = [
    { color: "red" },
    { color: "black" },
    { color: "blue" },
    { color: "green" },
    { color: "blue" }
];

// 값이 blue인 요소의 index 찾기(같은 값이 여러개라면 먼저 찾은 index를 반환)
console.log(arr2.findIndex((elm) => elm.color === "blue"));

// 위에서 찾은 요소의 index를 사용하여 요소 자체에 접근해보자
const idx = arr2.findIndex((elm) => {
    return elm.color === "blue";
});
console.log(arr2[idx]);

/* index가 아닌 element를 반환해보자 */
const element = arr2.find((elm) => {
    return elm.color === "blue";
});

console.log(element);

/* 배열을 필터링 해보자 */
// filter는 조건에 만족하는 요소들을 배열로 반환한다.
const arr3 = [
    { num: 1, color: "red" },
    { num: 2, color: "black" },
    { num: 3, color: "blue" },
    { num: 4, color: "green" },
    { num: 5, color: "blue" }
];

console.log(arr3.filter((elm) => elm.color === "blue"));


/* 배열을 잘라보자 */
// slice
console.log(arr3.slice()); // 매개변수를 전달하지 않으면 배열 그대로를 반환
console.log(arr3.slice(0, 3)); // 0번 index부터 2번 index까지


/* 배열을 붙여보자 */
// concat
const arr4 = [
    { num: 1, color: "red" },
    { num: 2, color: "black" },
    { num: 3, color: "blue" },
];

const arr5 = [
    { num: 4, color: "green" },
    { num: 5, color: "blue" }
];

console.log(arr4.concat(arr5)); // arr4에 arr5를 갖다붙힘


/* 배열을 정렬해보자 */
// sort는 사전순으로 정렬한다.
let chars = ["나", "다", "가"];
chars.sort(); // 원본 배열의 순서를 정렬함
console.log(chars); // 가나다

let numbers = [0, 1, 3, 2, 10, 30, 20];
numbers.sort();
console.log(numbers); // 0, 1, 10, 2, 20, 3, 30

const compare = (a, b) => { // 오름차순 정렬
    if (a > b){ // 클 때
        return 1;
    }
    if (a < b){ // 작을 때
        return -1;
    }
    
    return 0; // 같을 때
}
numbers.sort(compare);
console.log(numbers); // 0, 1, 2, 3, 10, 20, 30

const compare1 = (a, b) => { // 내림차순 정렬
    if (a > b){ // 클 때
        return -1;
    }
    if (a < b){ // 작을 때
        return 1;
    }
    
    return 0; // 같을 때
}
numbers.sort(compare1);
console.log(numbers); // 30, 20, 10, 3, 2, 1, 0


/* 배열의 요소를 합쳐보자 */
// join 메서드에는 구분자를 넣어준다. 기본값은 ,(콤마)
const arr6 = ["이은", "님", "안녕하세요.", "또 오셨군요."];
console.log(arr6.join()); // 이은,님,안녕하세요.,또 오셨군요.
console.log(arr6.join(" ")); // 이은 님 안녕하세요. 또 오셨군요.
console.log(arr6.join("쨩")); // 이은쨩님쨩안녕하세요.쨩또 오셨군요.