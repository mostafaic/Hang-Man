function won()
{
	playerObj.score = playerObj.guessedInARow*10;
	if (wordsCounter == 0)
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