console.log("hello nodejs package");

const randomColor = require('randomcolor');
// npm i를 사용해서 설치한 외부 모듈(node_modules 폴더에 있는 모듈)은 경로를 입력할 필요없이 모듈 이름만 적어주면 된다. 

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);