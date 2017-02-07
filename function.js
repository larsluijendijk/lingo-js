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

window.onload = function(){
}

function onClick(){
	firstFirst = document.getElementById('eersteerste').value;
	firstSecond = document.getElementById('eersttweede').value;
	firstThird = document.getElementById('eerstderde').value;
	firstFourth = document.getElementById('eerstvierde').value;
	firstFifth = document.getElementById('eerstvijfde').value;
	console.log(firstFirst);
	console.log(firstSecond);
	console.log(firstThird);
	console.log(firstFourth);
	console.log(firstFifth);
	if (firstLetter == firstFirst){
		firstColor = document.getElementById('eersteerste').style.backgroundColor = "green";
		document.getElementById('eersteerste').disabled = true;
	} 
	else if (firstLetter != firstFirst){
		firstColor = document.getElementById('eersteerste').style.backgroundColor = "red";
	}
	else{
		firstColor = document.getElementById('eersteerste').style.backgroundColor = "white";
	}
}