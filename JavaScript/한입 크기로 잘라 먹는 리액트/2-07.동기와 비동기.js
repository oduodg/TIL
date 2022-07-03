// 순서대로 실행하는 것과 그렇지 않은 것들

/* 동기 방식의 처리 */
// 자바스크립트의 싱글 스레드 작업 수행 방식
// Thread - taskA(0.3초) -> taskB(0.5초) -> taskC(0.2초)
// 자바스크립트는 코드가 작성된 순서대로 작업을 처리함
// Thread(쓰레드) -> (코드 한줄 한줄의) 연산 과정을 실행하는 일꾼, 코드를 한줄 한줄 실행시켜주는 친구라고 생각하면 된다.
// 앞이 작업이 끝날 때까지 기다렸다가 바로 뒤의 작업이 시작힘 -> 동기적 방식
// 쓰레드에서 작업 하나가 진행되고 있을 때 다른 작업이 방해할 수 없음 -> 블로킹 방식
// 이전 작업이 진행 중일 때는 다음 작업을 수행하지 않고 기다림
// 먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행한다.

/* 동기처리 방식의 문제점 */
// 동기적 처리의 단점은 하나의 작업이 너무 오래 걸리게 될 시,
// 모든 작업이 오래 걸리는 하나의 작업이 종료되기 전까지 올 스탑되기 때문에 전반적인 흐름이 느려진다.
// (ex) Thread - taskA(0.3초) - taskB(20초) - taskC(10초)
// 웹사이트에서 버튼 하나하나마다 30초씩 걸리면 속터짐.

/* 멀티 쓰레드 */
// 코드를 실행하는 일꾼 Thread를 여러 개 사용하는 방식인 'MultiThread'방식으로 작동시키면 아래와 같이 작업 분할 가능
// Thread - taskA(0.3초)
// ThreadA - taskB(20초)
// ThreadB - taskC(10초)
// 오래 걸리는 일이 있어도 다른 일꾼 Thread에게 지시하면 되므로 괜찮다.

// 그러나 자바스크립트는 싱글 쓰레드로 동작함.
// 즉 위와 같은 방식으로 일꾼을 여러 개 사용하는 방법이 불가함.
// -> '비동기 작업'으로 처리하자
// 즉 taskA가 끝나든지 말든지 taskB, taskC를 동시에 실행시켜 버린다.
// 동기적이지 않게 여러 개의 작업을 동시에 수행하게 하는 이 방식을 '비동기 처리 방식'이라고 한다.
// 하나의 작업이 쓰레드를 점유하지 못하게(쓰레드가 하나의 작업을 실행 중일 때 다른 작업을 못하도록 막지않는)하는 방식을 '논 블로킹 방식'이라고 한다.
// 그렇다면 작업들이 정상적으로 실행되고 종료되었는지, 결과는 어떤지 어떻게 확인할까?
// 각각의 작업 함수들에게 작업이 끝나면 실행하도록 콜백함수를 붙여서 전달하면 된다.
/* 
taskA((resultA) => {
    console.log(`A 끝났습니다. 작업 결과: ${resultA}`);
});

taskB((resultB) => {
    console.log(`B 끝났습니다. 작업 결과: ${resultB}`);
});

taskC((resultC) => {
    console.log(`C 끝났습니다. 작업 결과: ${resultC}`);
});
 */



/* 동기 방식 */
function taskA1() {
    console.log("A 작업 끝");
}

//taskA1();
//console.log("코드 끝");
// 출력 결과는 아래와 같다.
/* 
A 작업 끝
코드 끝 
*/


/* 비동기 방식 */
function taskA2(){
    setTimeout(()=>{
        console.log("A2 TASK END");
    },2000);
}
// 자바스크립트에는 setTimeout이라는 내장 비동기 함수가 존재한다.
// setTimeout 함수에는 두 개의 파라미터가 전달되는데 처음 매개변수는 콜백함수를 넣어주고 그 뒤에는 딜레이타임(ms단위)을 넣어주면 된다.
// setTimeout(()=>{},2000); 
// 2초(2000ms) 뒤에 첫 번째 매개변수인 콜백함수를 실행시킨다.
//taskA2();
//console.log("코드 끝");
// 출력 결과는 아래와 같다.
/* 
코드 끝
A2 TASK END
*/
// taskA2()가 끝날 때까지 기다리지 않고 console.log("코드 끝")가 수행된 것을 알 수 있다.


/* 3초 뒤에 전달받은 파라미터의 값을 더하는 함수를 만들어보자. */ 
function taskA3(a, b, cb){ // cb는 콜백함수를 의미하는 매개변수
    setTimeout(() => {
        const res = a + b; // res는 이 scope 안에서만 사용가능한 지역상수
        cb(res); // 콜백함수에 res라는 결과값 전달
    }, 3000); // 3초 뒤에 실행
}

taskA3(3, 4, (res)=>{
    //console.log("A3 TASK RESULT: ", res);
}); // 
//console.log("코드 끝");
// 출력 결과는 아래와 같다.
/* 
코드 끝
A3 TASK RESULT: 7
*/


/* 위에 만들었던 함수에 이어 1초뒤에 전달받은 파라미터의 값 *2를 하는 함수를 만들어보자 */
function taskA4(a, b, cb){ // cb는 콜백함수를 의미하는 매개변수
    setTimeout(() => {
        const res = a + b; // res는 이 scope 안에서만 사용가능한 지역상수
        cb(res); // 콜백함수에 res라는 결과값 전달
    }, 3000); // 3초 뒤에 실행
}

function taskB4(a, cb){
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

taskA4(3, 4, (res)=>{
    //console.log("A4 TASK RESULT: ", res);
}); // 

taskB4(7, (res)=>{
    //console.log("B4 TASK RESULT: ", res)
});
//console.log("코드 끝");
// 출력 결과는 아래와 같다.
/* 
코드 끝
B4 TASK RESULT:  14  // 1초 기다리고 실행
A4 TASK RESULT:  7   // 3초 기다리고 실행
*/


/* 위에 만들었던 함수들에 이어 2초뒤에 전달받은 파라미터의 값 *-1을 하는 함수를 만들어보자 */

function taskA5(a, b, cb){ // cb는 콜백함수를 의미하는 매개변수
    setTimeout(() => {
        const res = a + b; // res는 이 scope 안에서만 사용가능한 지역상수
        cb(res); // 콜백함수에 res라는 결과값 전달
    }, 3000); // 3초 뒤에 실행
}

function taskB5(a, cb){
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

function taskC5(a, cb){
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}
/* 
taskA5(3, 4, (res)=>{
    console.log("A5 TASK RESULT: ", res);
}); 

taskB5(7, (res)=>{
    console.log("B5 TASK RESULT: ", res);
});

taskC5(14, (res)=>{
    console.log("C5 TASK RESULT: ", res);
});

console.log("코드 끝"); */
// 출력 결과는 아래와 같다.
/* 
코드 끝
B5 TASK RESULT:  14   // 1초 후 실행
C5 TASK RESULT:  -14  // 2초 후 실행
A5 TASK RESULT:  7    // 3초 후 실행
*/


/* JS Engine은 동기와 비동기를 어떻게 구분하고 처리하는걸까? */
// 자바스크립트로 작성한 코드들은 웹 브라우저에 탑재된 자바스크립트 엔진을 이용해서 해석되고 실행된다.
// 자바스크립트 엔진은 'Heap'과 'Call Stack'이라는 두가지 구성요소로 이루어져있다.
// Heap은 변수나 상수들에 사용되는 메모리를 저장하는데 사용되는 영역
// 여기서 Heap은 동기와 비동기 파트에서 크게 중요한 부분은 아니기 때문에 '이런 요소가 있다' 정도로 알고 넘어가자.
// Call Stack은 코드의 실행에 따라서 호출 스택을 쌓는 영역이다.
// 자바스크립트 코드의 실행이 시작되면 Call Stack에는 자바스크립트 코드들의 최상위 문맥인 Main Context가 콜스택에 가장 먼저 들어오게 된다.
// 따라서 Main Context가 콜스택에 들어오는 순간이 바로 프로그램 실행 순간인 것이다.
// 이 Main Context가 콜스택에서 나가는 순간은 프로그램 종료 순간이 된다.


/* 콜백지옥 */
// 콜백함수에 콜백함수에 콜백함수에 콜백함수를 넣어서
// 비동기 처리의 결과를 또다른 비동기 함수의 파라미터로 전달할 수 있다.

taskA5(4, 5, (a_res)=>{
    console.log("A5 RESULT: ", a_res);
    taskB5(a_res, (b_res)=>{
        console.log("B5 RESULT: ", b_res);
        taskC5(b_res, (c_res)=>{
            console.log("C5 RESULT: ", c_res);
        });
    });
});

console.log(("코드 끝"));
/* 
코드 끝
A5 RESULT:  9    // 3초 뒤 실행
B5 RESULT:  18   // 3+1초 뒤 실행
C5 RESULT:  -18  // 3+1+2초 뒤 실행
*/