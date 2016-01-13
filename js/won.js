function won()
{
	playerObj.score = playerObj.guessedInARow*10;
	var score = document.getElementById('score');
	if (wordsCounter == 1)
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
	score.textContent = playerObj.score;
	//drawBadges();
	
}