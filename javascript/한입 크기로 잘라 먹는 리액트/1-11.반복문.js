/* 반복문 */
// 특정 명령을 반복해서 수행할 수 있게 해주는 코드
console.log("eun");
console.log("eun");
console.log("eun");
console.log("eun");
console.log("eun");
// 위 코드를 100번, 1000번, ... 출력해야 한다면?
// 반복문을 사용합시다.

/* for 반복문 */
for (let i = 1; i <= 100; i++) { // for (초기식; 조건식; 반복문이 수행될 때마다 할 연산)
    // 반복 수행할 명령
    console.log("eun")
}

// for문을 이용하여 배열 순회하기
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


// for문을 이용하여 객체 순회하기
let person = {
    name: "이은",
    age: 28,
    major: "Computer Engineering"
};

// key와 value를 같이 순회
const personKeys = Object.keys(person); // Object의 keys 함수 사용

for (let i = 0; i < personKeys.length; i++){
    const curKey = personKeys[i];
    const curValue = person[curKey];
    console.log(`${curKey} : ${curValue}`);
}

// value만 순회
const personValues = Object.values(person); // Object의 values 함수 사용

for (let i = 0; i < personValues.length; i++){
    console.log(personValues[i]);
}