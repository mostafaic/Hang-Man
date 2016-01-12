function won()
{
	playerObj.score = playerObj.guessedInARow*10;
	if (wordsCounter == 10)
	{
		playerObj.lvl++;
		wordsCounter = 0;	
		gameReset(2);
	}
	else
	{	
		wordsCounter++;
		gameReset(1);
	}
	
	//drawBadges();
	
}