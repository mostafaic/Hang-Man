//function getWord that get new word from array and display it as dashes/////////////////////
//author A.sobhy**1-2016**Doers Team**ITI Intake 36 Nozha Branch////////////////////////////
function getWord(){

//container of the word 
	var divId=document.getElementById('guessedWord');
	//create table and set id 
	var word = document.createElement('table');
	word.setAttribute('id','wordId');
	
	//initialize variables of the table and the data inside it 
	var row;
	var data,data1;
	var letter,description;
	//index of the letters
	var letterIndex=30;
	
	//array objects for words and hints
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
	
	var randomIndex;

	var min = 0;
	
	var found=0;
		
	if(playerObj.lvl==1){	
					var max = lvl1Words.length;
					row=document.createElement('tr');
				do{
						randomIndex=Math.floor(Math.random()*(max-min)+min);
						
						if(prevWords.indexOf(randomIndex)==-1){
								found=1;
								prevWords.push(randomIndex);
								data=document.createElement('td');
								letter=document.createElement('p');
								letter.innerHTML="__";
								data.appendChild(letter);		
								row.appendChild(data);
								currentWord=lvl1Words[randomIndex].word;
						}else{
						}
					
				}while(found!=1)
				
	}else if(playerObj.lvl==2){
		prevWords=[];
		var max = lvl2Words.length;
					row=document.createElement('tr');
				do{
						randomIndex=Math.floor(Math.random()*(max-min)+min);
						
						if(prevWords.indexOf(randomIndex)==-1){
								found=1;
								prevWords.push(randomIndex);
								data=document.createElement('td');
								letter=document.createElement('p');
								letter.innerHTML="__";
								data.appendChild(letter);		
								row.appendChild(data);
								currentWord=lvl2Words[randomIndex].word;
						}else{
						}
					
				}while(found!=1)
}

else if(playerObj.lvl==3){
	prevWords=[]
		var max = lvl3Words.length;
					row=document.createElement('tr');
				do{
						randomIndex=Math.floor(Math.random()*(max-min)+min);
						
						if(prevWords.indexOf(randomIndex)==-1){
								found=1;
								prevWords.push(randomIndex);
								data=document.createElement('td');
								letter=document.createElement('p');
								letter.innerHTML="__";
								data.appendChild(letter);		
								row.appendChild(data);
								currentWord=lvl3Words[randomIndex].word;
						}else{
						}
					
				}while(found!=1)
}
}
