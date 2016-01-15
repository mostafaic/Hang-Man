function hint()
{
	if (!playerObj.usedHint)
	{
		var randomIndex = Math.floor(Math.random()*currentWord.length);
		var letter = currentWord.charAt(randomIndex);
		putLetter(letter,randomIndex+30,true);
		playerObj.usedHint = true;
	}
	else
	{
		alert("You already used hint before :)");
	}
}