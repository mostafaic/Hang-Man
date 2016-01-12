var wordTemp = [];
function validateLetter(letter)
{	
	var isGuessedRight = false;
	var index = 0;
	var ids = 30;
	while(isGuessedRight == false && index < currentWord.length)
	{
		if (letter == currentWord.charAt(index))
		{
			isGuessedRight = true;
		}
		index++;
	}
	if (isGuessedRight)
	{
		playerObj.guessedInARow++;
		putLetter(letter,ids+(index-1));
	}
	else
	{
		wrongLetter(letter);
		if (playerObj.guessedInARow != 0)
		{
			playerObj.guessedInARow--;
		}
	}
	
}
function putLetter(letter,index)
{
	wordTemp.push(letter);
	var letterCell = document.getElementById(index);
	letterCell.textContent = letter.toUpperCase();
	if(wordTemp.length == currentWord.length)
	{
		alert('Win');
		won();
		wordTemp  = [];
	}
}