function wrongLetter(letter){
var divOfWrongLetter = document.getElementById('wrongLetters');
/*
var audio = document.createElement('audio');
audio.setAttribute('autoplay','');
audio.textContent="<source src='audio/beep4.mp3'>"
divOfWrongLetter.appendChild(audio);
*/
var beep = new Audio("audio/beep4.mp3");
beep.play();
if(divOfWrongLetter.innerHTML==''){
var list = document.createElement('ul');
list.setAttribute('id','list');
divOfWrongLetter.appendChild(list);
var li = document.createElement('li');
	li.textContent=letter;
	list.appendChild(li);
	wrongArray.push(letter);
	hangMe(wrongArray.length);
}else{
var list = document.getElementById('list');
if(wrongArray.length!=10){
	var li = document.createElement('li');
	li.textContent=letter;
	list.appendChild(li);
	wrongArray.push(letter);
	hangMe(wrongArray.length);
		console.log(wrongArray.length);

	}
if(wrongArray.length==10){
	gameOver();
		}	
	}
}