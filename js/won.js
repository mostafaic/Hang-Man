function won()
{
	var clap = new Audio("audio/Clapping.wav");
	clap.play();
	playerObj.score += playerObj.guessedInARow*10;
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
		charge();
	}
	score.textContent = playerObj.score;
	if (playerObj.guessedInARow == currentWord)
	{
		console.log('guess');
		playerObj.badges.proGuesser = true;
		drawBadges();
	}
	
	
}