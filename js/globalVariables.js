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
var lvl1Words = [{'word':'Great','desc':'Extra Good','hint':''},{'word':'Clean','desc':'Tidy and dust free','hint':''},
				{'word':'Milk','desc':'Dairy Drink','hint':''},{'word':'Head','desc':'Body Important Part','hint':''},
				{'word':'Strange','desc':'Unrecognized and not clear','hint':''},{'word':'Palace','desc':'Big house','hint':''},
				{'word':'Chew','desc':'One of the eating proccess','hint':''},{'word':'Mimic','desc':'to imitate someone','hint':''},
				{'word':'Corn','desc':'Cinema favorite habit','hint':''},{'word':'Sponge','desc':'Used to clean things','hint':''},
				{'word':'Tribe','desc':'A group of people','hint':''},{'word':'Fence','desc':'What surround propreties','hint':''},
				{'word':'Shred','desc':'Cut into pieces','hint':''},{'word':'Dread','desc':'Horribaly bad','hint':''},
				{'word':'Crumble','desc':'Fail apart','hint':''}];
var lvl2Words = [{'word':'','desc':'','hint':''}];
var lvl3Words = [{'word':'','desc':'','hint':''}];
var wordsPicked = [];
var wordsCounter = 0;
var guessedInARow = 0;