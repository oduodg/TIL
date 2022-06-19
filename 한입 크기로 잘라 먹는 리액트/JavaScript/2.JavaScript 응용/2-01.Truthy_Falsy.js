// Truthy: 참 같은 값
// Falsy: 거짓 같은 값

let a = ""; // FALSE 출력
if(a){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let b = "string"; // TRUE 출력
if(b){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let c = []; // TRUE 출력
if(c){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

let d = undefined; // FALSE 출력
if(d){
    console.log("TRUE");
} else {
    console.log("FALSE");
}

/* FAlSY: null, undefined, 0, -0, NaN, "" */

const getName = (person) => {
    if (!person){ // false NOT => True
        return "객체가 아닙니다";
    }
    return person.name;
};

let person = { name: "이은" };
const name = getName(person);
console.log(name); // 이은 출력

let person1;
const name1 = getName(person1);
console.log(name1); // 객체가 아닙니다 출력