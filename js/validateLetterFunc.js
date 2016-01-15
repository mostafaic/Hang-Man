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
			letterGuessed++;
			playerObj.guessedInARow++;
			putLetter(letter,ids+(i),false);
		}
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
	
}
function putLetter(letter,index,automated)
{
	wordTemp.push(letter);
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