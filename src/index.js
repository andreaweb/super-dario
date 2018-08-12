let gameStart = document.getElementsByClassName("tap")[0];
let gameOn = false;

gameStart.addEventListener("click", (event) => {
	document.getElementsByClassName("container")[0].className = document.getElementsByClassName("container")[0].className.concat(' game-on');
	gameStart.className = gameStart.className.concat(' display-none');
	document.getElementsByClassName("title")[0].className = document.getElementsByClassName("title")[0].className.concat(' display-none');
	gameOn = true;
	startGame()
})

function startGame(){
	let timer = setInterval(checkCol, 200); 

	function checkCol(){
		if(!gameOn){
			return false;
		}

		let bulletPos = document.getElementsByClassName("bullet")[0].offsetLeft;
		let darioPos = document.getElementsByClassName("dario")[0].offsetLeft;
		let darioClasses = document.getElementsByClassName("dario")[0].className.split(' ');
		let darioJump = darioClasses.indexOf('up');
		let darioSmall = darioClasses.indexOf('small');

		if(bulletPos > darioPos && bulletPos < darioPos+40){
			if(darioJump == -1 && darioSmall == -1){ /*dario did not jump (did not dodge bullet), dario is not small*/
				console.log('Dario will become small')
				document.getElementsByClassName("dario")[0].className = document.getElementsByClassName("dario")[0].className.concat(' small');
				return; //avoid else triggering immediately
			}else if(darioJump == -1 && darioSmall > -1){/*dario did not dodge bullet, dario is small*/
				console.log('Dario will fade and game will freeze');
				document.getElementsByClassName("dario")[0].className = document.getElementsByClassName("dario")[0].className.concat(' fade');
				document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className.concat(' freeze');
				gameOn = false;
			}
	    }
	}

	function jump(){
		//adds class that makes him jump...
		document.getElementsByClassName("dario")[0].className =  document.getElementsByClassName("dario")[0].className.concat(' up');

		//but just for half a sec!
		setTimeout(function () { 
			document.getElementsByClassName("dario")[0].className = document.getElementsByClassName("dario")[0].className.replace(/\bup\b/, "");
			console.log("Dario jumps");
		}, 500);
	}

	// Dario jumps when any key is pressed
	document.addEventListener("keypress", (event) => jump() );
	document.addEventListener("touchend", (event) => jump() );
}