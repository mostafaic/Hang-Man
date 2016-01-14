var imgs = ['img/charging.jpg' , 'img/deactive.png' , 'img/charging.jpg' , 'img/charging.jpg' , 'img/charging.jpg'
, 'img/charging.jpg' , 'img/charging.jpg' , 'img/charging.jpg' , 'img/charging.jpg' , 'img/charging.jpg'];


var charlvl =  0;



function charge(){
    var img = document.getElementById('chargingg');
	console.log("entered");
	if  (charlvl < 10 )
	{
		img.setAttribute('src',imgs[charlvl]);
		charlvl++;
	}
	else {

		levelUp(playerObj.lvl);
	}

}