function drawBadges(){
	img1=document.getElementById('1');
	img2=document.getElementById('2');
	img3=document.getElementById('3');
	img4=document.getElementById('4');
	img5=document.getElementById('5');
	
	if(playerObj.badges.lvl_1==true){
		img1.src = "img/New images/lev 1.png";
	}
	if(playerObj.badges.lvl_2==true){
		img2.src = "img/New images/lev 2.png";
	}
	if(playerObj.badges.lvl_3==true){
		img3.src = "img/New images/lev 3.png";
	}
	if(playerObj.badges.proGuesser==true){
		img4.src = "img/New images/1st guess.png";
	}
	if(playerObj.badges.noHint==true){
		img5.src = "img/New images/No Hint.png";
	}
}