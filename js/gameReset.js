	function gameReset(mode)
    {
    	var wrongLetter = document.getElementById('wrongLetters');
	var guessWord = document.getElementById('guessedWord');

		if (mode == 0){    //game over mode  
			

			playerObj.score = 0;
			wrongLetter.innerHTML ='';
			guessWord.innerHTML='';
			levelUp(1);
			drawLetters();
			
			getWord();

		}

		if (mode == 1){   //turn to new word

			wrongLetter.innerHTML ='';
			guessWord.innerHTML='';
			drawLetters();			
			getWord();
				

		}

		if (mode == 2 ){		//turn to new level
 
			wrongLetter,innerHTML='';
			guessWord.innerHTML='';
			levelUp(playerObj.lvl);
			drawLetters();
			getWord();
		} 
	}	

			






