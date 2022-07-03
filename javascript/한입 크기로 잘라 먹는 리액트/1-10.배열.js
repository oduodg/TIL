// 배열은 비원시 자료형(하나의 변수에 여러 데이터를 담을 수 있음)
/* 배열을 만드는 방법 */

// 1. Array() 생성자 호출하여 생성
let arr = new Array();

// 2. 배열 리터럴: [] 대괄호를 사용해서 생성
let arr1 = [];


let arr2 = [1, "2", true, null, undefined, {}, [], function(){}]; // 자료형이 다 달라도 배열의 요소에 넣을 수 있다.
console.log(arr2)


/* 배열의 요소에 접근하기 */
// 배열은 key가 없는 대신에 index가 있음.
let arr3 = [1, 2, 3, 4, 5]; 
console.log(arr3); // 배열 전체에 접근
console.log(arr3[0]); // index를 사용하여 요소에 접근
console.log(arr3[1]);
console.log(arr3[2]);
console.log(arr3[3]);
console.log(arr3[4]);
console.log(arr3[5]); // 존재하지 않는 인덱스는 undefined 출력

/* 배열에 요소 추가하기 */
arr3.push(6);
arr3.push({key: "value"}); // object 추가하기(무엇이든 추가 가능)
console.log(arr3);

/* 배열의 길이 받아오기 */
console.log(arr3.length);

