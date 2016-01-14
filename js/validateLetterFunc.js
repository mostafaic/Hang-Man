var wordTemp = [];
function validateLetter(letter)
{	
	var isGuessedRight = false;
	var index;
	var ids = 30;
	for(var i = 0;i<currentWord.length;i++)
	{
		if (letter == currentWord.charAt(i))
		{
			isGuessedRight = true;
			playerObj.guessedInARow++;
			putLetter(letter,ids+(i));
		}
	}
	if (!isGuessedRight)
	{
		wrongLetter(letter);
		if (playerObj.guessedInARow > 1)
		{
			playerObj.guessedInARow--;
		}
	}
	
}
function putLetter(letter,index)
{
	var yeah = new Audio("audio/yeah.mp3");
	yeah.play();
	wordTemp.push(letter);
	var letterCell = document.getElementById(index);
	letterCell.textContent = letter.toUpperCase();
	if(wordTemp.length == currentWord.length)
	{
		won();
		wordTemp  = [];
	}
}