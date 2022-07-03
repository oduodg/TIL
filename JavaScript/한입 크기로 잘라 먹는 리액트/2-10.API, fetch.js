/* 
API(Application Programming Interface)
응용프로그램 프로그래밍 인터페이스

응용프로그램에서 사용할 수 있도록, 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다.
주로 파일 제어, 창 제어, 화상 처리, 문자 제어 등을 위한 인터페이스를 제공한다.

웹브라우저가 서버에 데이터를 요청하고(1. Request) 서버가 데이터베이스 질의를 하고(2. Query) 데이터베이스에서 값을 꺼내와서(3. Query Result)
*/


// fetch는 브라우저에서 사용할 수 있는 메소드이다.
// Fetch API는 Node에 내장되어있지 않기 때문에 node-fetch 와 같은 외부모듈을 사용해야한다.
import fetch from "node-fetch"; // node.js로 실행하기 위해서
// $ npm install node-fetch
// $ npm init -y // package.json 생성
// package.json에  "type": "module" 추가


let response = fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    console.log(res);
});
// fetch는 자바스크립트에서 API를 호출할 수 있게 해주는 내장함수
// fetch 함수 이름에 커서를 올리면 Promise 객체를 return하는 것을 알 수 있다.
// fetch 함수는 비동기 처리를 하는 함수이며 then 메서드를 사용할 수 있다.
// fetch는 API 성공 객체 그 자체를 반환한다. 예시로 편지를 보내서 답장을 받았는데 우체통에서 꺼낸 것이 편지 내용이 아닌 편지봉투 그 자체라고 생각하면 된다.

// 이제 편지봉투를 뜯어서 편지내용을 보자.
async function getData(){
    let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}

getData();