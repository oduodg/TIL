// 객체는 여러가지 데이터를 동시에 가질 수 있는 비원시 자료형

/* 객체 생성하기 */
// 1. new 키워드로 객체 생성하기
let person1 = new Object();

// 2. 중괄호를 이용하여 객체 생성하기(객체 리터럴 방식) - 더 많이 사용
let person2 = {};

// key : value 형식으로 값을 저장(key와 value 쌍으로 값을 가짐) -> 프로퍼티(객체 프로퍼티)
let person = { // 값은 어떤 자료형도 가능
    key: "value",
    key1: 123,
    key2: true,
    key3: undefined,
    key4: [1, 2], // 객체의 멤버(함수가 아닌 프로퍼티는 멤버라고 부름)
    name: "은쨩",
    say: function() {  // 객체의 메서드(함수인 프로퍼티는 메서드라고 부름)
        console.log(`안녕 나는 ${this["name"]} `);
        console.log(`안녕 내 이름은 ${person["name"]} `);
        console.log(`다시 한번 소개하지. 나는 ${this.name} `);
        console.log(`내 이름이 모라고?!?! ${person.name} !!! `);
    }
} // 7개의 프로퍼티를 가진 객체 person

console.log(person);

/* 프로퍼티의 키를 통해 값에 접근하기  */
console.log(person.key1); // 점 표기법
console.log(person["key2"]); // 괄호 표기법
const key4 = "key4";
console.log(person[key4]);
person.say();
person["say"];
person["say"]();

// 함수를 작성해서 값에 접근
console.log(getPropertyValue("key1"));
function getPropertyValue(key){
    return person[key];
}

/* in 연산자를 이용해 키가 있는지 확인하기 */
console.log(`name: ${"name" in person}`); // true 출력
console.log(`phone: ${"phone" in person}`); // false 출력


/* 프로퍼티 추가, 수정, 삭제하기 */
let eun = {
    name: "이은",
    age: 28
}
// 객체를 선언한 let 키워드를 const로 바꾸어도 error 발생하지 않는다. 
// 프로퍼티를 바꾸는 것은 객체 자체를 수정하는 행위가 아니기 때문임.
// 대입 연산자를 이용해 객체 자체를 바꾸면 error 발생함.

eun.live = "Korea"; // 프로퍼티 추가(점 표기법)
eun["gender"] = "여성"; // 프로퍼티 추가(괄호 표기법)
eun.gender = "female" // 프로퍼티 수정
delete eun.age; // 프로퍼티 삭제(점 표기법)
delete eun["name"]; // 프로퍼티 삭제(괄호 표기법)
// delete를 사용해서 프로퍼티를 삭제해도 메모리는 지워지지 않는다.
eun.live = null; // 따라서 null 값을 대입하는 방식으로 프로퍼티 삭제를 권장함.
console.log(eun);