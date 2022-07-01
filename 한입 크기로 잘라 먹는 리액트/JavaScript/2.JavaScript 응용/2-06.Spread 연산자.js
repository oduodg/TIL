/* spread 연산자: 배열과 객체를 한줄로 펼치는 방법 */
// spread 연산자(...)를 이용해서 객체의 중복된 요소를 펼쳐보자.
const cookie = {
    base: "cookie",
    madeIn: "korea"
};
/* 
const chocochipCookie = {
    base: "cookie",
    madeIn: "korea",
    toping: "chocochip"
};

const blueberryCookie = {
    base: "cookie",
    madeIn: "korea",
    toping: "blueberry"
};

const strawberryCookie = {
    base: "cookie",
    madeIn: "korea",
    toping: "strawberry"
};
 */
// base와 madeIn이라는 반복된 property를 작성하고 있음을 확인

const chocochipCookie = {
    ...cookie, // ...을 spread 연산자라고 한다. -> 객체의 값을 새로운 객체에 펼쳐주는 역할
    toping: "chocochip"
};

const blueberryCookie = {
    ...cookie,
    toping: "blueberry"
};

const strawberryCookie = {
    ...cookie,
    toping: "strawberry"
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

// 배열에도 사용해보자.
const noTopingCookies = ['촉촉한 쿠키', '안촉촉한 쿠키'];
const topingCookies = ["바나나 쿠키", "블루베리 쿠키", "딸기 쿠키", "초코칩 쿠키"];

const allCookies = [...noTopingCookies, "함정 쿠키", ...topingCookies]; // spread 연산자를 사용해서 값을 넣을 수 있다.
console.log(allCookies); 
//['촉촉한 쿠키', '안촉촉한 쿠키', '함정 쿠키', '바나나 쿠키', '블루베리 쿠키', '딸기 쿠키', '초코칩 쿠키']