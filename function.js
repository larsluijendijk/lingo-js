var poging = 0;
var test;
var word = words[Math.floor(Math.random()*words.length)];
console.log(word);
var correctAnswer = word;
console.log(correctAnswer);
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
var firstFirstId = document.getElementById(poging + ",0");
var firstSecondId = document.getElementById(poging + ",1");
var firstThirdId = document.getElementById(poging + ",2");
var firstFourthId = document.getElementById(poging + ",3");
var firstFifthId = document.getElementById(poging + ",4");
console.log(firstFifthId);


function add() {
    return counter += 1;
}

window.onload = function(){
}

function onClick(){
	document.getElementById("count").innerHTML = add();
	firstFirst = document.getElementById(poging + ",1").value;
	firstSecond = document.getElementById(poging + ",2").value;
	firstThird = document.getElementById(poging + ",3").value;
	firstFourth = document.getElementById(poging + ",4").value;
	firstFifth = document.getElementById(poging + ",5").value;
	firstFifthColor = document.getElementById('0,5').style.backgroundColor;
	console.log(firstFirst);
	checkLetterById(firstLetter, poging + ',1');
	checkLetterById(secondLetter, poging + ',2');
	checkLetterById(thirdLetter, poging + ',3');
	checkLetterById(fourthLetter, poging + ',4');
	checkLetterById(fifthLetter, poging + ',5');
	//disableRow(firstFirst, firstFirstId, firstSecond, firstSecondId, firstThird, firstThirdId, firstFourth, firstFourthId, firstFifth, firstFifthId);
	//checkCorrectAnswer(firstFirstId, firstSecondId, firstThirdId, firstFourthId, firstFifthId)
	poging ++;
}


function checkLetterById(letterToCheck, letterId) {
	var letterElement = document.getElementById(letterId);
	if (letterElement.value == letterToCheck){
		letterElement.style.backgroundColor = "green";
	} 
	else if (letterElement.value != letterToCheck){
		letterElement.style.backgroundColor = "red";
	}
	else{
		letterElement.style.backgroundColor = "white";
	}
}

function disableRow(firstRow, firstRowId, secondRow, secondRowId, thirdRow, thirdRowId, fourthRow, fourthRowId, fifthRow, fifthRowId){
	// hier gebleven 
	if(firstRow != "" && secondRow != "" && thirdRow != "" && fourthRow != "" && fifthRow != ""){
		firstRowId.disabled = true;
		secondRowId.disabled = true;
		thirdRowId.disabled = true;
		fourthRowId.disabled = true;
		fifthRowId.disabled = true;
		console.log("succes");
	}
	else{
		console.log("failed");
	}
}

/*function checkCorrectAnswer(firstColor, secondColor, thirdColor, fourthColor, fifthColor){

}*/

