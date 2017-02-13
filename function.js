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
var firstCorrect = document.getElementById("eersteerste").value = firstLetter;
var counter = 0;
var firstFirstId = document.getElementById("eersteerste");
var firstSecondId = document.getElementById("eersttweede");
var firstThirdId = document.getElementById("eerstderde");
var firstFourthId = document.getElementById("eerstvierde");
var firstFifthId = document.getElementById("eerstvijfde");
var secondFirstId = document.getElementById("tweedeerste");
var secondSecondId = document.getElementById("tweedetweede");
var secondThirdId = document.getElementById("tweedederde");
var secondFourthId = document.getElementById("tweedevierde");
var secondFifthId = document.getElementById("tweedevijfde");




function add() {
    return counter += 1;
}

window.onload = function(){
}

function onClickFirst(){
	document.getElementById("count").innerHTML = add();
	firstFirst = document.getElementById('eersteerste').value;
	firstSecond = document.getElementById('eersttweede').value;
	firstThird = document.getElementById('eerstderde').value;
	firstFourth = document.getElementById('eerstvierde').value;
	firstFifth = document.getElementById('eerstvijfde').value;
	firstFifthColor = document.getElementById('eerstvijfde').style.backgroundColor;
	console.log(firstFirst);
	checkLetterById(firstLetter, 'eersteerste');
	checkLetterById(secondLetter, 'eersttweede');
	checkLetterById(thirdLetter, 'eerstderde');
	checkLetterById(fourthLetter, 'eerstvierde');
	checkLetterById(fifthLetter, 'eerstvijfde');
	disableRow(firstFirst, firstFirstId, firstSecond, firstSecondId, firstThird, firstThirdId, firstFourth, firstFourthId, firstFifth, firstFifthId);
}

function onClickSecond(){
	secondFirst = document.getElementById('tweedeerste').value;
	secondSecond = document.getElementById('tweedetweede').value;
	secondThird = document.getElementById('tweedederde').value;
	secondFourth = document.getElementById('tweedevierde').value;
	secondFifth = document.getElementById('tweedevijfde').value;
	secondFifthColor = document.getElementById('tweedevijfde').style.backgroundColor;
	console.log(secondFirst);
	checkLetterById(firstLetter, 'tweedeerste');
	checkLetterById(secondLetter, 'tweedetweede');
	checkLetterById(thirdLetter, 'tweedederde');
	checkLetterById(fourthLetter, 'tweedevierde');
	checkLetterById(fifthLetter, 'tweedevijfde');
	disableRow(secondFirst, secondFirstId, secondSecond, secondSecondId, secondThird, secondThirdId, secondFourth, secondFourthId, secondFifth, secondFifthId);
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