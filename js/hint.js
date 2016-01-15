function hint()
{
	var lettersArray = {'a':0,'b':1,'c':2,'d':3,'e':4,'f':5,'g':6,'h':7,'i':8,'j':9,'k':10,'l':11,
	'm':12,'n':13,'o':14,'p':15,'q':16,'r':17,'s':18,'t':19,'u':20,'v':21,'w':22,'x':23,'y':24,'z':25};
	if (!playerObj.usedHint)
	{
		var randomIndex = Math.floor(Math.random()*currentWord.length);
		var letter = currentWord.charAt(randomIndex);
		var index = 0;
		var isFound = false;
		var lettersInAWord = 0;
		while(index < wordTemp.length)
		{
			if (letter == wordTemp[index])
			{
				hint();
				isFound = true;
				break;
			}
			index++;
		}
		if (!isFound)
		{
			putLetter(letter,randomIndex+30,false);
			playerObj.usedHint = true;
			for (var i = 0; i < currentWord.length; i++) {
				if (letter == currentWord.charAt(i))
				{
					lettersInAWord++;
				}
			}
			if (lettersInAWord == 1){
				console.log(lettersArray[letter]);
				var letterBtn = document.getElementById(lettersArray[letter]);
				letterBtn.style.display = 'none';
			}
		}

	}
	else
	{
		alert("You already used hint before :)");
	}
}