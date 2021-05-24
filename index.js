let agree = document.querySelector("#agree")
agree.onclick = function () {
	alert("就知道你要这么选！这双眼睛看透了太多～")
}

let disagree = document.querySelector("#disagree")
disagree.onmouseenter = function () {
	let x = Math.random() * 600
	let y = Math.random() * 400
	disagree.style.left = x + "px"
	disagree.style.top = y + "px"
}