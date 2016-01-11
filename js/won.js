function won()
{
	playerObj.score = playerObj.guessedInARow*10;
	if (wordsCounter == 10)
	{
		levelUp();
		wordsCounter = 0;	
	}
	getWord();
	//drawBadges();
	
}