var word = 'hazem';
var wordTemp = [];
var playerObj = {
	'points':0
};
var guessedInARow = 0;
function validateLetter(letter)
{	
	var isGuessedRight = false;
	var index = 0;
	while(isGuessedRight == false && index < word.length)
	{
		if (letter == word.charAt(index))
		{
			isGuessedRight = true;
		}
		index++;
	}
	if (isGuessedRight)
	{
		guessedInARow++;
		putLetter(letter,index-1);
	}
	else
	{
		//wrongLetters(letter);
		if (guessedInARow != 0)
		{
			guessedInARow--;
		}
	}
	
}
function putLetter(letter,index)
{
	wordTemp.push(letter);
	var letterCell = document.getElementById(index);
	letterCell.textContent = letter.toUpperCase();
	if(wordTemp.length == word.length)
	{
		alert('Win');
		won();
	}
}