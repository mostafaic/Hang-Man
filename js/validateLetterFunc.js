var wordTemp = [];
function validateLetter(letter)
{	console.log(letter);
	var isGuessedRight = false;
	var ids = 30;
	var letterOccurrence = [];
	var letterIndexes = [];
	for (var i = 0; i < currentWord.length; i++)
	{
		if (wordTemp.length != 0 && wordTemp.length > i && letter == wordTemp[i].character )
		{
			letterOccurrence.push(wordTemp[i].index);
			console.log(letterOccurrence);

		}
		if (letter == currentWord.charAt(i))
		{
			letterIndexes.push(i);
			console.log(letterIndexes);
		}
	}
	if (letterOccurrence.length != 0 )
	{
		letterIndexes.splice(letterIndexes.indexOf(letterOccurrence[0]),1);
		console.log(letterIndexes);	
	}
	for(var i = 0;i<letterIndexes.length;i++)
	{		
		isGuessedRight = true;
		letterGuessed++;
		playerObj.guessedInARow++;
		putLetter(letter,ids+letterIndexes[i],false);
	}
	if (!isGuessedRight)
	{
		wrongLetter(letter);
		letterGuessed--;
		if (playerObj.guessedInARow > 1)
		{
			playerObj.guessedInARow--;
		}
	}
	letterOccurrence = [];
	letterIndexes = [];
}
function putLetter(letter,index,automated)
{
	wordTemp.push({'character':letter,'index':index-30});
	var letterCell = document.getElementById(index);
	letterCell.textContent = letter.toUpperCase();
	letterCell.style.fontFamily="cooper black";
	if (!automated)
	{
		var yeah = new Audio("audio/yeah.mp3");
		yeah.play();
	}
	if(wordTemp.length == currentWord.length && !automated)
	{
		won();
		wordTemp  = [];
	}
}
function testWord()
{
	
	for (var i = 0; i < currentWord.length; i++) {
		putLetter(currentWord.charAt(i),i+30,false);	
	}
}