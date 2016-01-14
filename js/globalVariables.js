var playerObj = {
	'name':null,
	'gender':null,
	'score':0,
	'guessedInARow':0,
	'lvl':1,
	'badges':{
		'lvl_1':false,
		'lvl_2':false,
		'lvl_3':false,
		'proGuesser':false,
		'noHint':false
	}
}
/*var lvl1Words = [{'word':'great','desc':'Extra Good','hint':''},{'word':'clean','desc':'Tidy and dust free','hint':''},
				{'word':'milk','desc':'Dairy Drink','hint':''},{'word':'head','desc':'Body Important Part','hint':''},
				{'word':'strange','desc':'Unrecognized and not clear','hint':''},{'word':'palace','desc':'Big house','hint':''},
				{'word':'chew','desc':'One of the eating proccess','hint':''},{'word':'mimic','desc':'to imitate someone','hint':''},
				{'word':'corn','desc':'Cinema favorite habit','hint':''},{'word':'sponge','desc':'Used to clean things','hint':''},
				{'word':'tribe','desc':'A group of people','hint':''},{'word':'fence','desc':'What surround propreties','hint':''},
				{'word':'shred','desc':'Cut into pieces','hint':''},{'word':'dread','desc':'Horribaly bad','hint':''},
				{'word':'crumble','desc':'Fail apart','hint':''}];
var lvl2Words = [{'word':'','desc':'','hint':''}];
var lvl3Words = [{'word':'','desc':'','hint':''}];*/
var wordsPicked = [];
var wordsCounter = 0;
var wrongArray=[];
var currentWord ;
//global array to save the previous words indices **By A.Sobhy
var prevWords=[];
//global vars to check level up to get new words and empty prevWords array **By A.Sobhy
var level1=0,level2=0;
var letterGueesed;