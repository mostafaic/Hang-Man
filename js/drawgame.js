function drawGame(){
document.body.innerHTML = '';
	//Div of Player Information
 var playerInfo = document.createElement('div');
 playerInfo.setAttribute('id','playerInfo');
 document.body.appendChild(playerInfo);
 playerInfo.style.border = '1px solid black';
 playerInfo.style.height = '10%';
 //--------------------------------------------------------------
  var playerName = document.createElement('label');
 playerName.textContent = playerObj.name;
 playerName.style.fontSize = "40px";
 playerName.style.marginLeft = "150px";
 playerInfo.appendChild(playerName);
//---------------------------------------------------------------
 var playerLevel = document.createElement('label');
 playerLevel.textContent = playerObj.lvl;
 playerLevel.style.fontSize = "40px";
 playerLevel.style.marginLeft = "50px";
 playerInfo.appendChild(playerLevel);
//---------------------------------------------------------------
var characterPhoto = document.createElement('img');
 characterPhoto.style.marginLeft = "50px";
 if(playerObj.gender==0){
 	characterPhoto.src = "";
 }else{
 	characterPhoto.src = "";
 }
 playerInfo.appendChild(characterPhoto);
//---------------------------------------------------------------
var scoreLabel = document.createElement('label');
 scoreLabel.textContent="Score : ";
 scoreLabel.style.fontSize = "40px";
 scoreLabel.style.marginLeft = "50px";
 playerInfo.appendChild(scoreLabel);
var score = document.createElement('label');
 score.setAttribute('id','score'); //ayad	
 score.textContent=playerObj.score;
 score.style.fontSize = "40px";
 playerInfo.appendChild(score);
//----------------------------------------------------------------
var badges = document.createElement('span');
 var image1 = document.createElement('img');
 image1.setAttribute('id',"img1");
 image1.setAttribute('src','sdsd.png');
var image2 = document.createElement('img');
 image2.setAttribute('id',"img2");
 image2.setAttribute('src','adasd.png');
 var image3 = document.createElement('img');
 image3.setAttribute('id',"img3");
 image3.setAttribute('src','wqeqwe.png');
 var image4 = document.createElement('img');
 image4.setAttribute('id',"img4");
 image4.setAttribute('src','qwe.png');
 var image5 = document.createElement('img');
 image5.setAttribute('id',"img5");
 image5.setAttribute('src','asdasd.png');
 badges.style.marginLeft = "50px";
 playerInfo.appendChild(badges);
 badges.appendChild(image1);
 badges.appendChild(image2);
 badges.appendChild(image3);
 badges.appendChild(image4);
 badges.appendChild(image5); 

//-------------------------------------------------------------------
 	//Div of Game Levels
 var GameMap = document.createElement('div');
 GameMap.setAttribute('id','GameMap');
 document.body.appendChild(GameMap);
 GameMap.style.border = '1px solid black';
 GameMap.style.height = '10%';
 GameMap.style.marginTop = '2px';

 //design level stars and state 
 var levelstate = document.createElement('img');
 levelstate.setAttribute('src' , 'img/easy.png');
 levelstate.setAttribute('id' , 'levelstate');
 levelstate.style.marginLeft = '400px';
 levelstate.style.height= '90%';
 levelstate.style.width= '10%';

 var level1 = document.createElement('img');
 level1.setAttribute('src', 'img/active.JPG'); 
 level1.setAttribute('id' , 'level1');
 level1.style.marginLeft='70px';
 level1.style.height= '90%';
 level1.style.width= '10%';
 
 var level2 = document.createElement('img');
 level2.setAttribute('src', 'img/deactive.png');
 level2.setAttribute('id', 'level2');
 level2.style.height= '90%';
 level2.style.width= '10%';
 
 var level3 = document.createElement('img');
 level3.setAttribute('src', 'img/deactive.png');
 level3.setAttribute('id', 'level3');
 level3.style.height= '90%';
 level3.style.width= '10%';
 

 
 GameMap.appendChild(levelstate);
 GameMap.appendChild(level1);
 GameMap.appendChild(level2);
 GameMap.appendChild(level3);

 	// Div of the big container which inlude the div of all letters , the div of wrong letters and the div of hangman 
var bigContainer = document.createElement('div');
 bigContainer.setAttribute('id','bigContainer');
 document.body.appendChild(bigContainer);
 bigContainer.style.border = '1px solid black';
 bigContainer.style.height = '600px';
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
 //var listOfWrongLetters = document.createElement('ul');
 //listOfWrongLetters.setAttribute('id','listOfWrongLetters');
 //wrongLetters.appendChild(listOfWrongLetters);
 	// Div of hangman which contains the div of guessed word
var hangMan = document.createElement('div');
 hangMan.setAttribute('id','hangMan');
 bigContainer.appendChild(hangMan);
 hangMan.style.border = '1px solid black';
 hangMan.style.width = '50%';
 hangMan.style.height = '90%';
 hangMan.style.marginLeft = '335px';
 hangMan.style.marginTop = '40px';
 	// Div of guessed word
var guessedWord = document.createElement('div');
 guessedWord.setAttribute('id','guessedWord');
 document.body.appendChild(guessedWord);
 guessedWord.style.border = '1px solid black';
 guessedWord.style.width = '30%';
 guessedWord.style.height = '10%';
 guessedWord.style.marginLeft = '450px';
 guessedWord.style.marginTop = '2px';
/////////////////////////////////////////////////////////////////
	//call drawLetters and getWord functions ***By Sobhy***////
	drawLetters();
	getWord();
}
	
