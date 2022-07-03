/* if, else if, else */
let a = 3;
// 조건에 따라 console에 출력해봅시다.
if (a >= 7){
    console.log("7 이상입니다.");
} else if (a >= 5){
    console.log("5 이상입니다.");
} else if (a >= 4){
    console.log("4 이상입니다.")
} else {
    console.log("4 미만입니다.");
}


let country = "uk";

if (country === "ko"){
    console.log("한국");
} else if (country === "cn"){
    console.log("중국");
} else if (country === "jp"){
    console.log("일본");
} else {
    console.log("미분류");
}

/* switch */
switch(country){
    case 'ko':
        console.log('한국');
        break;
    case 'cn':
        console.log('중국');
        break;
    case 'jp':
        console.log('일본');
    case "uk":
        console.log('영국');
        break;
    default:
        console.log("미분류");
        break;
}