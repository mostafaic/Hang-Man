var playerObj = {
	'name':null,
	'gender':null,
	'score':0,
	'lvl':1,
	'badges':{
		'lvl_1':false,
		'lvl_2':false,
		'lvl_3':false,
		'proGuesser':false,
		'noHint':false
	}
}
var lvl1Words = [{'word':'','desc':'','hint':''}];
var wordsPicked = [];
var wordsCounter = 0;
var guessedInARow = 0;