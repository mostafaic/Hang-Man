function won()
{
	var clap = new Audio("audio/Clapping.wav");
	clap.play();
	playerObj.score += playerObj.guessedInARow*10;
	var score = document.getElementById('score');
	if (letterGuessed == currentWord.length)
	{
		playerObj.badges.proGuesser = true;
		drawBadges();
	}
	var waitTime = setTimeout(function(){
		if (wordsCounter == 9)
		{
			playerObj.lvl++;
			wordsCounter = 0;	
			gameReset(2);
			playerObj.usedHint = false;
		}
		else
		{	
			wordsCounter++;
			gameReset(1); 
			charge();
			playerObj.usedHint = false;
		}
	},3000);
	score.textContent = playerObj.score;
	
	
}