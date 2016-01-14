function won()
{
	var clap = new Audio("audio/Clapping.wav");
	clap.play();
	playerObj.score += playerObj.guessedInARow*10;
	var score = document.getElementById('score');
	if (letterGuessed == currentWord.length)
	{
		playerObj.badges.proGuesser = true;
		letterGuessed = 0;
		drawBadges();
	}
	if (wordsCounter == 9)
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
	
	
}