window.onload = function()
{
	var retry = document.getElementsByName('retry');
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