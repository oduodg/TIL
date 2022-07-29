//document.getElementById("lion").style.color = "red";
//document.getElementById("tiger").style.color = "blue";
//document.getElementById("bear").style.color = "green";

//document.getElementsByClassName("animal")[1].style.color = "red";

//document.querySelectorAll('.animal')[0].style.color = "blue";

//console.log(document.querySelectorAll('.animal')[2]);
//console.dir(document.getElementById("lion"));

document.querySelectorAll(".animal")[2].innerHTML = "dog";
const animals = document.getElementById("animals");
console.log(animals.innerHTML);
animals.innerHTML += "<li class='animal'>Cat</li>";
console.log(animals.innerHTML);

document.querySelectorAll(".box")[0].classList.add("purple");
//console.dir(document.querySelectorAll(".box")[0]);
document.querySelectorAll(".box")[0].classList.remove("purple");
document.querySelectorAll(".box")[0].classList.toggle("yellow");
document.querySelectorAll(".box")[0].classList.toggle("yellow");

document.getElementById("btn").addEventListener("click", () => {
    console.log("click");
});

/* let num = Number(document.getElementById("num").innerHTML);
document.getElementById("plus").addEventListener("click", () => {
    num += 1;
    document.getElementById("num").innerHTML = num;
});

document.getElementById("minus").addEventListener("click", () => {
    num -= 1;
    document.getElementById("num").innerHTML = num;
}); */

var num = 0;
document.getElementById("plus").addEventListener("click", function(){
    num++;
    document.getElementById("num").innerHTML = num;
});

document.getElementById("minus").addEventListener("click", function(){
    num--;
    document.getElementById("num").innerHTML = num;
});

// document.getElementById("bar").addEventListener("click", () => {
//     console.log("dddd");
//     document.getElementById("newBar").style.display = "block";
// });

// document.querySelector(".bar").addEventListener("click", () => {
//     document.querySelector(".newBar").style.display = "block";
// })

document.querySelector(".bar").addEventListener("click", () => {
    document.querySelector(".bar").innerHTML = "내가 눌렸어!";
    document.querySelector(".newBar").classList.toggle("show");
})