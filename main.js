// Dissmissable messages

window.addEventListener("load", findMessage);
var message = document.querySelectorAll(".message");
function findMessage(){
	for (var i = 0; i < message.length; i++) {
		x = message[i]
		x.firstElementChild.addEventListener("click", function(){
			y = this;

			if (this.parentElement.classList.contains("shake") == true) {
				this.parentElement.classList.add("unallowed")
				setTimeout(function(){
					y.parentElement.classList.remove("unallowed")
				},400);
			}
			else{
				if (y.parentElement.classList.contains("flip-horizontal") == true) {
					y.parentElement.classList.add("flipHor");
				}
				else if (y.parentElement.classList.contains("flip-vertical") == true) {
					y.parentElement.classList.add("flipVer");
				}
				else if(y.parentElement.classList.contains("scale-in") == true){
					y.parentElement.classList.add("scaleIn");
				}
				else if(y.parentElement.classList.contains("scale-out") == true){
					y.parentElement.classList.add("scaleOut");
				}
				else if(y.parentElement.classList.contains("fly-out-right") == true){
					y.parentElement.classList.add("flyOutRight");
				}
				else if(y.parentElement.classList.contains("fly-out-left") == true){
					y.parentElement.classList.add("flyOutLeft");
				}
				setTimeout(function(){
					y.parentElement.classList.add("hide")
				},400);
			}
		});
	};
}

