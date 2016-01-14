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
	},5000);
	score.textContent = playerObj.score;
	
	
}