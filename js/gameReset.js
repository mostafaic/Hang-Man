		function gameReset(mode)
    {
    var wrongLetter =   document.getElementById('wrongLetters');
	var guessWord   =   document.getElementById('guessedWord');
	var letters     =   document.getElementById('allLetters');
	var word 		=   document.getElementById('wordId');
	var hangman 	=   document.getElementById('hangMan');
	letterGuessed = 0;
		if (mode == 0){    //game over mode  
			

			playerObj.score = 0;
			wrongLetter.innerHTML ='';
			guessWord.innerHTML='';
			letters.innerHTML='';
			wrongArray = [];
			levelUp(1);
			drawLetters();
			getWord();

		}

		if (mode == 1){   //turn to new word

			wrongLetter.innerHTML ='';
			guessWord.innerHTML='';
			letters.innerHTML= '';
			hangman.innerHTML='';
			wrongArray = [];
			//word.innerHTML='';
			drawLetters();			
			getWord();
				

		}

		if (mode == 2 ){		//turn to new level
 
			wrongLetter,innerHTML='';
			guessWord.innerHTML='';
			letters.innerHTML= '';
			hangman.innerHTML='';
			wrongArray = [];
			levelUp(playerObj.lvl);
			drawLetters();
			getWord();
		} 
	}	

			






