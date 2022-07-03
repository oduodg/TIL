// async: Promise를 더 쉽게 다룰 수 있도록 비동기 처리를 도와주는 기능

function hello(){
    return 'hello';
}

async function helloAsync(){
    return "hello Async";
}
// 함수 helloAsync() 이름에 커서를 올리면 Promise 객체를 반환하는 것을 알 수 있다.
// async 키워드를 붙이면 자동으로 Promise 객체를 반환하게 만든다.
// Promise 객체를 반환한다는 것은 then()메서드를 사용할 수 있다는 얘기이다. 

console.log(hello);
console.log(helloAsync); // Promise를 return함

helloAsync().then((res)=>{
    console.log(res);
});

// async 키워드를 붙여준 함수는 Promise 객체의 resolve의 결과값을 반환한다.

function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
}

async function hiAsync(){
    return delay(3000).then(()=>{
        return "hi Async";
    });
}

/* 
hiAsync().then((res)=>{
    console.log(res);
})
 */


/* hiAsync() 함수를 await을 이용해서 바꿔보자 */
async function hiAsync1(){
    await delay(3000); // 3초 기다림
    return "hi Async";
}
// await 키워드를 비동기함수의 호출 앞에 붙이게 되면 비동기 함수가 마치 동기적인 함수처럼 작동하게 된다.
// await 키워드가 붙은 함수의 실행이 종료될 때까지 다음 코드를 실행하지 않는다.
// await 키워드는 async 키워드가 붙은 함수 내에서만 사용할 수 있다.

/* 
hiAsync1().then((res)=>{
    console.log(res);
})
 */

/* await을 이용해서 hiAsync1의 결과값을 받아보자 */
async function main(){
    const res = await hiAsync1();
    console.log(res);
}

main();
// hi Async가 3초 기다렸다가 수행된다.