function isKoreanFood(food){ 
    if(food === "불고기" || food === "비빔밥" || food === "떡볶이"){
        return true;
    }
    return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");
console.log(food1);
console.log(food2);


/* 내장함수 includes를 활용하여 간략하게 작성해보자 */
function isKoreanFood1(food) {
    if (["불고기", "떡볶이", "비빔밥"].includes(food)){
        return true;
    }
    return false;
}

const food3 = isKoreanFood1("불고기");
const food4 = isKoreanFood1("파스타");
console.log(food3);
console.log(food4);

/* 주어진 값에 따라서 다른 결과를 반환하는 함수를 작성해보자 */
const getMeal = (mealType) => {
    if(mealType === "한식") return "불고기";
    if(mealType === "양식") return "파스타";
    if(mealType === "중식") return "멘보샤";
    if(mealType === "일식") return "초밥";
    return "굶기";
}
console.log(getMeal("한식"));
console.log(getMeal("중식"));

// mealType이 수없이 더 많다면... ?

/* 괄호 표기법을 사용하여 해결해보자 */
const meal = {
    한식 : "불고기",
    중식 : "멘보샤",
    일식 : "초밥",
    양식 : "스테이크",
    인도식 : "카레" 
};

const getMeal2 = (mealType) => {
    return meal[mealType] || "굶기";
};

console.log(getMeal2("한식")); // 한식 key를 갖는 value인 "불고기"를 출력
console.log(getMeal2());