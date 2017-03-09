var poging = 0;
var test;
var word = words5[Math.floor(Math.random()*words5.length)];
console.log(word);
var correctAnswer = word;
var firstLetter = word.substring(0,1);
var secondLetter = word.substring(1,2);
var thirdLetter = word.substring(2,3);
var fourthLetter = word.substring(3,4);
var fifthLetter = word.substring(4,5);
var firstCorrect = document.getElementById("0,1").value = firstLetter;
var secondCorrect = document.getElementById("1,1").value = firstLetter;
var thirdCorrect = document.getElementById("2,1").value = firstLetter;
var fourthCorrect = document.getElementById("3,1").value = firstLetter;
var fifthCorrect = document.getElementById("4,1").value = firstLetter;
var counter = 0;
var sliceLetters = correctAnswer.slice();


window.onkeypress = function(event) {
   if (event.keyCode == 13) {
      onClick();
   }
}

window.onload = function(){
}

function onClick(){
	firstFirst = document.getElementById(poging + ",1").value;
	firstSecond = document.getElementById(poging + ",2").value;
	firstThird = document.getElementById(poging + ",3").value;
	firstFourth = document.getElementById(poging + ",4").value;
	firstFifth = document.getElementById(poging + ",5").value;
	firstFirstId = document.getElementById(poging + ",1");
	firstSecondId = document.getElementById(poging + ",2");
	firstThirdId = document.getElementById(poging + ",3");
	firstFourthId = document.getElementById(poging + ",4");
	firstFifthId = document.getElementById(poging + ",5");
	firstFifthColor = document.getElementById('0,5').style.backgroundColor;
	checkLetterById(firstLetter, poging + ',1');
	checkLetterById(secondLetter, poging + ',2');
	checkLetterById(thirdLetter, poging + ',3');
	checkLetterById(fourthLetter, poging + ',4');
	checkLetterById(fifthLetter, poging + ',5');
	disableRow(firstFirst, firstFirstId, firstSecond, firstSecondId, firstThird, firstThirdId, firstFourth, firstFourthId, firstFifth, firstFifthId);
	//checkCorrectAnswer(firstFirstId, firstSecondId, firstThirdId, firstFourthId, firstFifthId)
	poging ++;
	checkCorrectAnswer();
}


// letterElement = letter die gebruiker invoerd
// letterToCheck = letter die goed is
function checkLetterById(letterToCheck, letterId) {
	var letterElement = document.getElementById(letterId);
	if ( letterElement.value == letterToCheck) {
		letterElement.style.backgroundColor = "red";

	} else if ( sliceLetters.indexOf(letterElement.value) > -1 ) {
		letterElement.style.backgroundColor = "yellow";
	}

	if ( letterElement.value == letterToCheck ) {
		letterElement.style.backgroundColor = "red";
	} else if ( sliceLetters.indexOf(letterElement.value) > -1 ) {
		letterElement.style.backgroundColor = "yellow";
	}


	if ( letterElement.value == letterToCheck ) {
		letterElement.style.backgroundColor = "red";
	} else if ( sliceLetters.indexOf(letterElement.value) > -1 ) {
		letterElement.style.backgroundColor = "yellow";
	}

	if ( letterElement.value == letterToCheck ) {
		letterElement.style.backgroundColor = "red";
	} else if ( sliceLetters.indexOf(letterElement.value) > -1 ) {
		letterElement.style.backgroundColor = "yellow";
	}

	if ( letterElement.value == letterToCheck ) {
		letterElement.style.backgroundColor = "red";
	} else if ( sliceLetters.indexOf(letterElement.value) > -1 ) {
		letterElement.style.backgroundColor = "yellow";
	}


/*	if (letterElement.value == firstLetter || secondLetter || thirdLetter || fourthLetter || fifthLetter && letterElement.value != firstLetter || secondLetter || thirdLetter || fourthLetter || fifthLetter){
		letterElement.style.backgroundColor = "yellow";
	}
	if (letterElement.value != letterToCheck){
		letterElement.style.backgroundColor = "red";
	}
	if (letterElement.value == letterToCheck){
		letterElement.style.backgroundColor = "green";
	} */

	// console.log(letterToCheck);

}

function disableRow(firstRow, firstRowId, secondRow, secondRowId, thirdRow, thirdRowId, fourthRow, fourthRowId, fifthRow, fifthRowId){
	// hier gebleven 
		firstRowId.disabled = true;
		secondRowId.disabled = true;
		thirdRowId.disabled = true;
		fourthRowId.disabled = true;
		fifthRowId.disabled = true;
		console.log("succes");
}

function checkCorrectAnswer(){
	if (firstFirstId.style.backgroundColor == "red" && firstSecondId.style.backgroundColor == "red" && firstThirdId.style.backgroundColor == "red" && firstFourthId.style.backgroundColor == "red" && firstFifthId.style.backgroundColor == "<red>											</red>"){
		var audiogoed = new Audio('Lingogoed.mp3');
		audiogoed.play();
		//document.getElementById(1,1).disabled = true; document.getElementById(1,2).disabled = true; document.getElementById(1,3).disabled = true; document.getElementById(1,4).disabled = true; document.getElementById(1,5).disabled = true;

	}
	else{
		var audio = new Audio('lingo.mp3');
		audio.play();
	}
}