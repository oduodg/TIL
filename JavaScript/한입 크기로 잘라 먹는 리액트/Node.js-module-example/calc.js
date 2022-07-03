// 계산 기능을 하는 파일

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

/* calc.js에서 만든 함수를 index.js에 가져다 써보자 */
// 모듈 내보내기 
module.exports = { // module.exports는 node.js의 내장함수
    moduleName: "calc module",
    add: add,
    sub: sub,
};