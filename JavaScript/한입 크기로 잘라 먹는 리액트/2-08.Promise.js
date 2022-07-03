/* Promise */
// 콜백지옥에서 우리를 구원하다.
// Promise: 자바스크립트의 비동기 처리를 도와주는 객체
// Promise를 사용하면 비동기 함수에 콜백을 줄지어 전달할 필요가 없다.

/* 비동기 작업이 가질 수 있는 3가지 상태 */
// Pending: 대기 상태
// resolve(해결) 되었다. -> Fulfilled: 성공
// reject(거부) 되었다. -> Rejected: 실패

function isPositive(number, resolve, reject){
    setTimeout(()=>{
        if(typeof number === 'number'){
            // 성공 -> resolve
            resolve(number >=0? "양수":"음수");
        } else{
            // 실패 -> reject
            reject("주어진 값이 숫자나 값이 아닙니다.");
        }
    }, 2000);
}

/* 
// 파라미터로 10을 전달 -> 성공
isPositive(10, (res)=> {
    console.log("성공적으로 수행됨: ", res);
},
(err)=>{
    console.log("실패하였음: ", err)
});

// 파라미터로 []를 전달 -> 실패
isPositive([], (res)=> {
    console.log("성공적으로 수행됨: ", res);
},
(err)=>{
    console.log("실패하였음: ", err)
});
 */

function isPositiveP(number){
    const executor = (resolve, reject)=>{ // executor: 실행자(비동기 작업을 실질적으로 수행하는 함수)
        setTimeout(() => {
            if(typeof number === 'number'){
                // 성공 -> resolve
                console.log(number); // executor 실행 확인
                resolve(number >=0? "양수":"음수");
            } else{
                // 실패 -> reject
                reject("주어진 값이 숫자나 값이 아닙니다.");
            }
        }, 2000);
    };

    // executor 실행시키기
    const asyncTask = new Promise(executor);
    return asyncTask;
}

//isPositiveP(101);
const res = isPositiveP(101); // response(응답)이라는 뜻으로 상수 res에 Promise객체를 받아보자.
/* Promise 객체의 비동기 결과를 사용하는 방법 */
res
    .then((res)=>{console.log("작업 성공: ", res);
    })
    .catch((err)=>{
        console.log("작업 실패: ", err);
    });

const res1 = isPositiveP([]);
res1
    .then((res)=>{console.log("작업 성공: ", res);
    })
    .catch((err)=>{
        console.log("작업 실패: ", err);
    });



function taskA(a, b, cb){
    setTimeout(() => {
        const res = a+b;
        cb(res);
    }, 3000);
}

function taskB(a, cb){
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

function taskC(a, cb){
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}

// 콜백지옥 만들어보기
/* taskA(3, 4, (a_res)=>{
    console.log("task A: ", a_res);
    taskB(a_res, (b_res)=>{
        console.log("task B: ", b_res);
        taskC(b_res, (c_res)=>{
            console.log("task C: ", c_res);
        })
    })
}) */

/* Promise를 사용해서 비동기 처리를 하는 함수로 만들어보자. */
function taskAp(a, b){ // 콜백함수 cb는 필요없다.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a+b;
            resolve(res); // cb를 resolve로 바꿔줌
        }, 3000);
    })
}

function taskBp(a){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    })
}

function taskCp(a){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const res = a * -1;
            resolve(res);
        }, 2000);
    })
}

/* 
taskAp(5, 1).then((a_res)=>{
    console.log("A RESULT: ", a_res);
    taskBp(a_res).then((b_res)=>{
        console.log("B RESULT: ", b_res);
        taskCp(b_res).then((c_res)=>{
            console.log("C RESULT: ", c_res);
        })
    })
}) */
// 여전히 콜백식으로 then을 썼다.(코드 왼쪽에 역삼각형 형태의 여백) -> then을 이렇게 사용하면 삐빅x

// Promise Chaining: then 메서드를 계속해서 이어붙이는 것
taskAp(5, 1).then((a_res)=>{
    console.log("A RESULT: ", a_res);
    return taskBp(a_res); // taskBp()함수의 Promise 객체를 반환받음
}).then((b_res)=>{
    console.log("B RESULT: ", b_res);
    return taskCp(b_res); // taskCp()함수의 Promise 객체를 반환받음
}).then((c_res)=>{
    console.log("C RESULT: ", c_res);
})

// Promise를 사용하면 아래와 같이 비동기 처리를 호출하는 코드와 결과를 처리하는 코드를 분리할 수 있다.
const bPromiseResult = taskAp(5, 1).then((a_res)=>{
    console.log("A RESULT: ", a_res);
    return taskBp(a_res);
});

console.log("*******");

bPromiseResult
    .then((b_res)=>{
        console.log("B RESULT: ", b_res);
        return taskCp(b_res);
    })
    .then((c_res)=>{
        console.log("C RESULT: ", c_res);
    })