/* 논리 연산자를 이용한 단락 회로 평가 */
console.log(true && false); // && and 연산자
console.log(true || false); // || or 연산자
console.log(!true);  // ! not 연산자

// 단락 회로 평가: 피연산자 중에 뒤에 위치한 피연산자를 확인할 필요없이 연산을 끝내버리는 것
// (ex) && 연산자에서 앞쪽 피연산자가 false이면 뒷쪽 피연산자는 검사하지 않고 연산이 끝남.

const getName = (person) => {
    if(!person) {
        return "객체가 아닙니다.";
    }
    return person.name;
};

let person; // person은 undefined
const name = getName(person);
console.log(name); // "객체가 아닙니다."

/* 단락 회로 평가 */
const getName1 = (person) => {
    return person && person.name; // person이 undefined(falsy 값)이면 뒤에 있는 person.name을 검사하지 않고 그대로 person을 반환함.
}

const name1 = getName1(person);
console.log(name1); // undefined(person값을 그대로 반환)


const getName2 = (person) => {
    const name = person && person.name; // person이 truthy하면 상수 name에는 perosn.name이 담김
    return name || "객체가 아닙니다."; // name이 truthy하면 name을 바로 반환(단락 회로 평가), name이 falsy하면 "객체가 아닙니다." 반환
};

const name2 = getName2(person);
console.log(name2);  // "객체가 아닙니다."

let person2 = { name: "이은" };
const name3 = getName2(person2);
console.log(name3); // "이은"(person.name 반환)