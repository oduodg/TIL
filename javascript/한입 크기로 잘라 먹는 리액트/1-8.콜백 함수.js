/* 콜백 함수 */
// 함수를 매개변수로 넘겨준 함수

function checkMood(mood, goodCallback, badCallback){
    if (mood === 'good'){
        // 기분이 좋을 때 하는 동작
        goodCallback();
    } else {
        // 기분이 안 좋을 때 하는 동작
        badCallback();
    }
};

function cry() {
    console.log("ACTION :: CRY");
}

function sing() {
    console.log("ACTION :: SING");
}

function dance() {
    console.log("ACTION :: DANCE");
}

checkMood("good", sing, cry); 
// 매개변수 goodCallback에 함수 sing이 값으로 들어감 => "함수 표현식"