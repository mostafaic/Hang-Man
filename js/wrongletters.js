function wrongLetter(letter){
var divOfWrongLetter = document.getElementById('wrongLetters');
if(divOfWrongLetter.innerHTML==''){
var list = document.createElement('ul');
list.setAttribute('id','list');
divOfWrongLetter.appendChild(list);
}else{
var list = document.getElementById('list');
if(wrongArray.length!=10){
	var li = document.createElement('li');
	li.textContent=letter;
	list.appendChild(li);
	wrongArray.push(letter);
	delParts();
	}
if(wrongArray.length==10){
	gameOver();
		}	
	}
}