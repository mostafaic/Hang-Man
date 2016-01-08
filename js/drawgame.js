window.onload=function(){
	function drawGame(){
	//Div of Player Information
 var playerInfo = document.createElement('div');
 playerInfo.setAttribute('id','playerInfo');
 document.body.appendChild(playerInfo);
 playerInfo.style.border = '1px solid black';
 playerInfo.style.height = '10%';
 //--------------------------------------------------------------
 var characterPhoto = document.createElement('img');
 characterPhoto.style.marginLeft = "50px";
 	characterPhoto.src = "playerObj.img";
 playerInfo.appendChild(characterPhoto);
//---------------------------------------------------------------
 var playerName = document.createElement('label');
 playerName.textContent = "Hussien";
 playerName.style.fontSize = "40px";
 playerName.style.marginLeft = "100px";
 playerInfo.appendChild(playerName);
//---------------------------------------------------------------
/*
 var playerLevel = document.createElement('label');
 playerLevel.textContent = "1";
 playerLevel.style.fontSize = "40px";
 playerLevel.style.marginLeft = "50px";
 playerInfo.appendChild(playerLevel);
  */
  //---------------------------------------------------------------
var scoreLabel = document.createElement('label');
 scoreLabel.textContent="Score : ";
 scoreLabel.style.fontSize = "40px";
 scoreLabel.style.marginLeft = "50px";
 playerInfo.appendChild(scoreLabel);
var score = document.createElement('label');
 score.textContent="0";
 score.style.fontSize = "40px";
 playerInfo.appendChild(score);

 	//Div of Game Levels
 var GameMap = document.createElement('div');
 GameMap.setAttribute('id','GameMap');
 document.body.appendChild(GameMap);
 GameMap.style.border = '1px solid black';
 GameMap.style.height = '10%';
 GameMap.style.marginTop = '2px';
 	// Div of the big container which inlude the div of all letters , the div of wrong letters and the div of hangman 
var bigContainer = document.createElement('div');
 bigContainer.setAttribute('id','bigContainer');
 document.body.appendChild(bigContainer);
 bigContainer.style.border = '1px solid black';
 bigContainer.style.height = '80%';
 bigContainer.style.marginTop = '2px';
 	// Div of all letters
var allLetters = document.createElement('div');
 allLetters.setAttribute('id','allLetters');
 bigContainer.appendChild(allLetters);
 allLetters.style.border = '1px solid black';
 allLetters.style.width = '20%';
 allLetters.style.height = '80%';
 allLetters.style.marginRight = '10px';
 allLetters.style.marginTop = '40px';
 allLetters.style.float = 'right';
 	//Div of Wrong letters
 var wrongLetters = document.createElement('div');
 wrongLetters.setAttribute('id','wrongLetters');
 bigContainer.appendChild(wrongLetters);
 wrongLetters.style.border = '1px solid black';
 wrongLetters.style.width = '20%';
 wrongLetters.style.height = '80%';
 wrongLetters.style.marginLeft = '10px';
 wrongLetters.style.marginTop = '40px';
 wrongLetters.style.float = 'left';
 var listOfWrongLetters = document.createElement('ul');
 listOfWrongLetters.setAttribute('id','listOfWrongLetters');
 wrongLetters.appendChild(listOfWrongLetters);
 	// Div of hangman 
var hangMan = document.createElement('div');
 hangMan.setAttribute('id','hangMan');
 bigContainer.appendChild(hangMan);
 hangMan.style.border = '1px solid black';
 hangMan.style.width = '50%';
 hangMan.style.height = '60%';
 hangMan.style.marginLeft = '335px';
 hangMan.style.marginTop = '40px';
 	// Div of word which contains word description and guessed word
var word = document.createElement('div');
 word.setAttribute('id','word');
 document.body.appendChild(word);
 word.style.border = '1px solid black';
 word.style.width = '40%';
 word.style.height = '25%';
 word.style.marginLeft = '400px';
 word.style.marginTop = '-165px';
 // Div of word description
 var wordDescription = document.createElement('div');
 wordDescription.setAttribute('id','wordDescription');
 word.appendChild(wordDescription);
 wordDescription.style.border = '1px solid black';
 wordDescription.style.width = '100%';
 wordDescription.style.height = '50%';
 // Div of guessed word
var guessedWord = document.createElement('div');
 guessedWord.setAttribute('id','guessedWord');
 word.appendChild(guessedWord);
 guessedWord.style.border = '1px solid black';
 guessedWord.style.width = '100%';
 guessedWord.style.height = '48%';

/////////////////////////////////////////////////////////////////
	getWord();
}
drawGame()
}