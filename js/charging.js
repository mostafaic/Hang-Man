var imgs = ['img/ch/1.png' , 'img/ch/2.png' , 'img/ch/3.png' , 'img/ch/4.png'
, 'img/ch/5.png' , 'img/ch/6.png' , 'img/ch/7.png' , 'img/ch/8.png' , 'img/ch/9.png' , 'img/ch/10.png'];


var charlvl =  0;



function charge(){
    var img = document.getElementById('chargingg');
	if  (charlvl < 10 )
	{
		img.setAttribute('src',imgs[charlvl]);
		charlvl++;
	}
	else {
		
		levelUp(playerObj.lvl);
	}

}