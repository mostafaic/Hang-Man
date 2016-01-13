/*function gameOver(){
function showpopup(){
	//var off= document.getElementById('sleep');

	var pop=document.getElementById('Gover');
	body.style.display='block';
	pop.style.display='block';

    var score = document.getElementById('fData');
    sore=23;
}

function retryGame(){
      alert('Rest the whole game');
}

function test(){
showpopup()
}

}// for the whole
*///*/*/*//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/**/*/**/*/*/*/*/*
function gameOver(){
	document.body.innerHTML='';
	var content = document.createElement('div');
    content.setAttribute('id','gOver');
    document.body.appendChild(content);

    var score = document.createElement('font');
    score.setAttribute('id','sc');
    score.textContent="your score is: "+ playerObj.score;

    content.appendChild(score);


    var image = document.createElement('img');
    image.setAttribute('id','ig');
    image.setAttribute('src','img/game.png');
    
    content.appendChild(image);

    var buton = document.createElement('input');
    buton.setAttribute('type','button');
    buton.setAttribute('onclick',function(){
    	window.location=sss../startGame.html;	
    });
    buton.value="Restart you Game";
    content.appendChild(buton);

}