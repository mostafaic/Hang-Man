window.onload = function()
{
	var loop = new Audio("audio/loop.mp3");
    loop.play();
	var retry = document.getElementById('retry');
	var score = document.getElementById('finalScore');
	var query = document.location.search;
	console.log(query);
	if (query.substring(0,1)=='?') 
	{
		query = query.substring(1);
	}
	score.textContent+= query;
	retry.addEventListener('click',function(){
		
		window.location = 'startGame.html';
	});
}