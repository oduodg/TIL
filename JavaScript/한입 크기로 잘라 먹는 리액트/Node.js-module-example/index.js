/* Node.js의 commonjs 모듈 시스템 사용하기 */
// package.json 파일에서 "type": "commonjs"으로 수정하기
// 모듈 불러오기
const calc = require("./calc"); // require는 node.js의 내장함수
// 불러올 모듈의 경로와 모듈 이름을 적어준다.

console.log(calc);

//$ node index
//출력 결과는 아래와 같다.
// {
//     moduleName: 'calc module',
//     add: [Function: add],
//     sub: [Function: sub]
// }

console.log(calc.add(4, 5)); //9
console.log(calc.sub(10, 2)); //8