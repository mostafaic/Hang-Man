	function gameReset(mode)
    {
    	var wrongLetter = document.getElementById('listOfWrongLetters');

		if (mode == 0){    //game over mode  
			

			playerObj.score = 0;
			wrongLetter.innerHTML ='';
			levelUp(1);
			drawLetters();
			getWord();

		}

		if (mode == 1){   //turn to new word

			wrongLetter.innerHTML ='';
			drawLetters();			
			getWord();	

		}

		if (mode == 2 ){		//turn to new level
 
			wrongLetter,innerHTML='';
			levelUp(playerObj.lvl);
			drawLetters();
			getWord();
		} 
	}	

			






