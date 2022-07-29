for(let i=0; i<document.querySelectorAll(".tab-button").length; i++){
	document.querySelectorAll(".tab-button")[i].addEventListener("click", (e) => {
		tabBtn(e.target.dataset.id);
	});
}

function tabBtn(a){
	for (let i=0; i<document.querySelectorAll(".tab-button").length; i++){
			document.querySelectorAll(".tab-button")[i].classList.remove("here");
			document.querySelectorAll(".tab-content")[i].classList.remove("show");
		}
		document.querySelectorAll(".tab-button")[a].classList.add("here");
		document.querySelectorAll(".tab-content")[a].classList.add("show");
	};

