function drawBadges(){
	img1=document.getElementById('1');
	img2=document.getElementById('2');
	img3=document.getElementById('3');
	img4=document.getElementById('4');
	img5=document.getElementById('5');
	if(playerObj.badges.lvl_1==true){
		img1.src = "";
	}
	if(playerObj.badges.lvl_2==true){
		img2.src = "";
	}
	if(playerObj.badges.lvl_3==true){
		img3.src = "";
	}
	if(playerObj.badges.proGuesser==true){
		img4.src = "";
	}
	if(playerObj.badges.noHint==true){
		img5.src = "";
	}
}