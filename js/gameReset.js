	function gameReset(mode)
    {
    	//var x;  // el global variable bta3t el level
    	// var score = document.getElementById('score');
		var wrongLetter = document.getElementById('listOfWrongLetters');

		if (mode == 0){    //game over mode  
			

			playerObj.score = 0;
			// score.innerHTML ='0';
			wrongLetter.innerHTML ='';
			levelUp(1);
			drawLetter();
			getWord();

		}

		if (mode == 1){   //turn to new level

			wrongLetter.innerHTML ='';
			levelUp(playerObj.lvl);
			drawLetter();			
			getWord();	

		}
	}	

			






