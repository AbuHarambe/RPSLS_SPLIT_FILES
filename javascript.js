//0=rock, 1=spock, 2=paper, 3=lizard, 4=scissors
var classicMode = 0;
var pcText;
var announcment;
var playerInput;
var pcInput;
var gameMode;

function pcRandomRPSLS() {
	pcInput = Math.floor(Math.random() * 5);
	if (pcInput == 0) {
		document.getElementById('childPc').style.backgroundImage="url(https://i.ibb.co/99MfV1J/THE-ROCK.png)"
	}
	else if (pcInput == 1) {
		document.getElementById('childPc').style.backgroundImage="url(https://i.ibb.co/N6pMRNv/Spock.png)"
	}
	else if (pcInput == 2) {
		document.getElementById('childPc').style.backgroundImage="url(https://i.ibb.co/RQpLpFg/Paper.png)"
	}
	else if (pcInput == 3) {
		document.getElementById('childPc').style.backgroundImage="url(https://i.ibb.co/9wcXrfp/Lizard.png)"	
	}
	else if (pcInput == 4) {
		document.getElementById('childPc').style.backgroundImage="url(https://i.ibb.co/ggsfSq7/Scissors.png)"
	}
	document.getElementById("childPc").className = "play";
};

function pcRandomClassic() {
	pcInput = Math.floor(Math.random() * 3);
	if (pcInput == 0) {
		document.getElementById('childPc').style.backgroundImage="url(https://i.ibb.co/99MfV1J/THE-ROCK.png)"
	}
	else if (pcInput == 1) {
		document.getElementById('childPc').style.backgroundImage="url(https://i.ibb.co/RQpLpFg/Paper.png)"
	}
	else if (pcInput == 2) {
		document.getElementById('childPc').style.backgroundImage="url(https://i.ibb.co/ggsfSq7/Scissors.png)"
	}
	document.getElementById("childPc").className = "play";
};

function counterAdd(a) {
	let startInt = parseInt(document.getElementById(a).innerHTML);
	let newInt = startInt + 1;
	document.getElementById(a).innerHTML = newInt;
}

function playRPSLS() {
	let intRpslsResult = (pcInput - playerInput);
	setTimeout(function () {
		if(intRpslsResult < 0) {
			intRpslsResult+=5;
			if(intRpslsResult == 0){
				announcment = "It's a Tie!";
				counterAdd("ties");
			}
			else if (intRpslsResult <= 2) {
				announcment = "PC wins!";
				document.getElementById("childPlayer").className = "lose";
				counterAdd("pcWins");
			}
			else if (intRpslsResult >= 3) {
				announcment = "Player wins!";
				document.getElementById("childPc").className = "lose";
				counterAdd("playerWins");
			}
		}
		else {
			if(intRpslsResult == 0){
				announcment = "It's a Tie!";
				counterAdd("ties");
			}
			else if (intRpslsResult <= 2) {
				announcment = "PC wins!";
				document.getElementById("childPlayer").className = "lose";
				counterAdd("pcWins");
			}
			else if (intRpslsResult >= 3) {
				announcment = "Player wins!";
				document.getElementById("childPc").className = "lose";
				counterAdd("playerWins");
			}
		}
		//alert(intRpslsResult);
		announce();
	}, 1400);
	return intRpslsResult;
};

function playClassic() {
	setTimeout(function() {
	if(pcInput == playerInput) {
		announcment = "It's a Tie!";
		counterAdd("ties");
	}
	else if(playerInput == 0 && pcInput == 1) {
		announcment = "PC wins!";
			document.getElementById("childPlayer").className = "lose";
			counterAdd("pcWins");
	}
	else if(playerInput == 1 && pcInput == 2) {
		announcment = "PC wins!";
		document.getElementById("childPlayer").className = "lose";
		counterAdd("pcWins");
	}
	else if(playerInput == 2 && pcInput == 0) {
		announcment = "PC wins!";
		document.getElementById("childPlayer").className = "lose";
		counterAdd("pcWins");
	}
	else if(playerInput == 0 && pcInput == 2) {
		announcment = "Player wins!";
		document.getElementById("childPc").className = "lose";
		counterAdd("playerWins");
	}
	else if(playerInput == 1 && pcInput == 0) {
		announcment = "Player wins!";
		document.getElementById("childPc").className = "lose";
		counterAdd("playerWins");
	}
	else if(playerInput == 2 && pcInput == 1) {
		announcment = "Player wins!";
		document.getElementById("childPc").className = "lose";
		counterAdd("playerWins");
	}
	announce();
	//alert("pc: "+ pcInput)
}, 1400)};

function announce() {
	if(pcInput == 0){
		pcText = "PC chose Rock";
	}
	else if (pcInput == 1) {
		pcText = "PC chose Spock";
	}
	else if (pcInput == 2) {
		pcText = "PC chose Paper";
	}
	else if (pcInput == 3) {
		pcText = "PC chose Lizard";
	}
	else if (pcInput == 4) {
		pcText = "PC chose Scissors";
	}
	let text = (pcText + " " + "," + " " +announcment)
	document.getElementById("announcer").innerHTML = text;
};
function backToMenu() {
	  	var cols = document.getElementsByClassName('inGame');
		for(i = 0; i < cols.length; i++) {
    	cols[i].style.top = '5000px';
		}
		bOT.className= "";
		bOF.className= "";
		fP.className= "";
		bB.style.opacity= "0"
};
function statusCheck() {
	let win = "YOU WIN!"
	let lose = "YOU LOSE!"
	let checkIntPc = parseInt(document.getElementById("pcWins").innerHTML);
	let checkIntPlayer = parseInt(document.getElementById("playerWins").innerHTML);
	if (gameMode == 1) {
		if (checkIntPc == 2) {
		document.getElementById("announcer").innerHTML = lose;
		setTimeout(backToMenu(),1000);
		}
		else if(checkIntPlayer == 2) {
		document.getElementById("announcer").innerHTML = win;
		setTimeout(backToMenu(),1000);
		}
	}
	else if (gameMode == 2) {
		if (checkIntPc == 3) {
		document.getElementById("announcer").innerHTML = lose;
		setTimeout(backToMenu(),1000);
		}
		else if(checkIntPlayer == 3){
		document.getElementById("announcer").innerHTML = win;
		setTimeout(backToMenu(),1000);
		}
		}
	else if (gameMode == 3){}
	};

function resetPositions() {
	setTimeout(function () {
		document.getElementById('childPlayer').style.backgroundImage="url(https://i.ibb.co/vYngKVt/P1.png)";
		document.getElementById('childPc').style.backgroundImage="url(https://i.ibb.co/WFy6JFQ/PC.png)";
		document.getElementById("childPlayer").className = "";
		document.getElementById("childPc").className = "";
		document.getElementById("announcer").innerHTML = "Enemy is deciding";
		statusCheck();
	}, 2800);
};
//GUI Code
//Classic Game Switch
const clSwitch = document.getElementById("classicCheckbox");

clSwitch.addEventListener('change', 
function(){
    if (this.checked) {
        classicMode = 1;
        document.getElementById("spockButton").style.opacity="0";
        document.getElementById("lizardButton").style.opacity="0";
    }
    else{
        classicMode = 0;
        document.getElementById("spockButton").style.opacity="1";
        document.getElementById("lizardButton").style.opacity="1";
    }
});
//Menu Buttons
const bOT = document.getElementById("bestOfThree");
bOT.addEventListener ("click", function() {
  	var cols = document.getElementsByClassName('inGame');
	for(i = 0; i < cols.length; i++) {
    cols[i].style.top = '0px';
	}
	bOT.className= "menu";
	bOF.className= "menu";
	fP.className= "menu";
	document.getElementById("backButton").style.opacity="1";
	gameMode = 1
});

const bOF = document.getElementById("bestOfFive");
bOF.addEventListener ("click", function() {
	var cols = document.getElementsByClassName('inGame');
	for(i = 0; i < cols.length; i++) {
    cols[i].style.top = '0px';
	}
	bOF.className= "menu";
	bOT.className= "menu";
	fP.className= "menu";
	document.getElementById("backButton").style.opacity="1";
	gameMode = 2
});

const fP = document.getElementById("freeplay");
fP.addEventListener ("click", function() {
	var cols = document.getElementsByClassName('inGame');
	for(i = 0; i < cols.length; i++) {
    cols[i].style.top = '0px';
	}
	bOF.className= "menu";
	bOT.className= "menu";
	fP.className= "menu";
	document.getElementById("backButton").style.opacity="1";
	gameMode = 3
});

const bB = document.getElementById("backButton");
bB.addEventListener ("click", function() {
	backToMenu();
	gameMode = 0
});

//Game Buttons
const buttonRock = document.getElementById("rockButton");

buttonRock.addEventListener ("click", function() {
	if(clSwitch.checked) {
        pcRandomClassic();
        playerInput = 0;
        document.getElementById("childPlayer").className = "play";
        document.getElementById('childPlayer').style.backgroundImage="url(https://i.ibb.co/99MfV1J/THE-ROCK.png)";
        playClassic();
        resetPositions();
    }
    else {
        pcRandomRPSLS();
        playerInput = 0;
        document.getElementById("childPlayer").className = "play";
        document.getElementById('childPlayer').style.backgroundImage="url(https://i.ibb.co/99MfV1J/THE-ROCK.png)";
        playRPSLS();
        resetPositions();
    }
});

const buttonSpock = document.getElementById("spockButton");

buttonSpock.addEventListener ("click", function() {
    if(clSwitch.checked) {}
    else {
        pcRandomRPSLS();
        playerInput = 1;
        document.getElementById("childPlayer").className = "play";
        document.getElementById('childPlayer').style.backgroundImage="url(https://i.ibb.co/N6pMRNv/Spock.png)";
        playRPSLS();
        resetPositions();
    }
});

const buttonPaper = document.getElementById("paperButton");

buttonPaper.addEventListener ("click", function() {
    if(clSwitch.checked) {
        pcRandomClassic();
        playerInput = 1;
        document.getElementById("childPlayer").className = "play";
        document.getElementById('childPlayer').style.backgroundImage="url(https://i.ibb.co/RQpLpFg/Paper.png)";
        playClassic();
        resetPositions();
    }
    else {
        pcRandomRPSLS();
        playerInput = 2;
        document.getElementById("childPlayer").className = "play";
        document.getElementById('childPlayer').style.backgroundImage="url(https://i.ibb.co/RQpLpFg/Paper.png)";
        playRPSLS();
        resetPositions();
    }				});

const buttonLizard = document.getElementById("lizardButton")
buttonLizard.addEventListener ("click", function() {
    if(clSwitch.checked) {}
    else {
        pcRandomRPSLS();
        playerInput = 3;
        document.getElementById("childPlayer").className = "play";
        document.getElementById('childPlayer').style.backgroundImage="url(https://i.ibb.co/9wcXrfp/Lizard.png)";
        playRPSLS();
        resetPositions();
    }
});

const buttonScissors = document.getElementById("scissorsButton")
buttonScissors.addEventListener ("click", function() {
	if(clSwitch.checked) {
        pcRandomClassic();
        playerInput = 2;
        document.getElementById("childPlayer").className = "play";
        document.getElementById('childPlayer').style.backgroundImage="url(https://i.ibb.co/ggsfSq7/Scissors.png)";
        playClassic();
        resetPositions();
    }
    else {
        pcRandomRPSLS();
        playerInput = 4;
        document.getElementById("childPlayer").className = "play";
        document.getElementById('childPlayer').style.backgroundImage="url(https://i.ibb.co/ggsfSq7/Scissors.png)";
        playRPSLS();
        resetPositions();
    }
});