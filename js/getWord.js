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
	
	//array of objects that contain words for the 3 levels/////////////////////////////////
	var lvl1Words = [{'word':'great','desc':'Extra Good','hint':''},
			{'word':'clean','desc':'Tidy and dust free','hint':''},
			{'word':'milk','desc':'Dairy Drink','hint':''},
			{'word':'head','desc':'Body Important Part','hint':''},
			{'word':'strange','desc':'Unrecognized and not clear','hint':''},
			{'word':'palace','desc':'Big house','hint':''},
			{'word':'chew','desc':'One of the eating proccess','hint':''},
			{'word':'mimic','desc':'to imitate someone','hint':''},
			{'word':'corn','desc':'Cinema favorite habit','hint':''},
			{'word':'sponge','desc':'Used to clean things','hint':''},
			{'word':'tribe','desc':'A group of people','hint':''},
			{'word':'fence','desc':'What surround propreties','hint':''},
			{'word':'shred','desc':'Cut into pieces','hint':''},
			{'word':'dread','desc':'Horribaly bad','hint':''},
			{'word':'crumble','desc':'Fail apart','hint':''}];
	var lvl2Words = [{'word':'','desc':'','hint':''}];
	var lvl3Words = [{'word':'','desc':'','hint':''}];	
	
	//array that hold the index of the previous word to prevent repeating////////////////
	var prevWords=[15];
	var randomIndex;
	var min = 1;

	//add the table of the word to the container
	divId.appendChild(word);
		
	//check player level to get the words from array that belong to that player////////	
	if(playerObj.lvl==1){	
		//draw the whole words of the array
			var max = lvl1Words.length;
			row=document.createElement('tr');
			
			randomIndex=Math.floor(Math.random()*(max-min)+min);
			
			for(var x=0;x<prevWords.length;x++){
				
				if(randomIndex != prevWords[x]){
					currentWord=lvl1Words[randomIndex].word;
					prevWords.push(randomIndex);
					//display word
					for(var i=0;i<lvl1Words[randomIndex].word.length;i++){
						
						data=document.createElement('td');
						letter=document.createElement('p');
						letter.innerHTML="__";
						letter.id=letterIndex++;
						data.appendChild(letter);
						
						row.appendChild(data);
					}
			
				/*	
					//to show the user the description of the word
					data1=document.createElement('td');	
					description=document.createElement('p');
					
					description.innerHTML=arrayObjectsL1[wordCounter].desc;
					data1.appendChild(description);
					row.appendChild(data1);	
				*/	
			
					word.appendChild(row);
					
				}else{
					randomIndex=Math.floor(Math.random()*(max-min)+min);	
				}
			}
	}
	//check player level to get the words from array that belong to that player////////
	else if(playerObj.lvl==2){
		//draw the whole words of the array
			var max = lvl2Words.length;
			row=document.createElement('tr');
			
			randomIndex=Math.floor(Math.random()*(max-min)+min);
			
			for(var x=0;x<prevWords.length;x++){
				
				if(randomIndex != prevWords[x]){
					currentWord=lvl1Words[randomIndex].word;
					prevWords.push(randomIndex);
					//display word
					for(var i=0;i<lvl2Words[randomIndex].word.length;i++){
						
						data=document.createElement('td');
						letter=document.createElement('p');
						letter.innerHTML="__";
						letter.id=letterIndex++;
						data.appendChild(letter);
						
						row.appendChild(data);
					}
			
			/*
				//to show the user the description of the word
					data1=document.createElement('td');	
					description=document.createElement('p');
					
					description.innerHTML=arrayObjectsL1[wordCounter].desc;
					data1.appendChild(description);
					row.appendChild(data1);	
			*/
					word.appendChild(row);
					
				}else{
					randomIndex=Math.floor(Math.random()*(max-min)+min);	
				}
			}
	}
	//check player level to get the words from array that belong to that player////////
	else if(playerObj.lvl==2){
		//draw the whole words of the array
			var max = lvl3Words.length;
			row=document.createElement('tr');
			
			randomIndex=Math.floor(Math.random()*(max-min)+min);
			
			for(var x=0;x<prevWords.length;x++){
				
				if(randomIndex != prevWords[x]){
					currentWord=lvl1Words[randomIndex].word;
					prevWords.push(randomIndex);
					//display word
					for(var i=0;i<lvl3Words[randomIndex].word.length;i++){
						
						data=document.createElement('td');
						letter=document.createElement('p');
						letter.innerHTML="__";
						letter.id=letterIndex++;
						data.appendChild(letter);
						
						row.appendChild(data);
					}
			/*
				//to show the user the description of the word
					data1=document.createElement('td');	
					description=document.createElement('p');
					
					description.innerHTML=arrayObjectsL1[wordCounter].desc;
					data1.appendChild(description);
					row.appendChild(data1);		
			*/
					word.appendChild(row);
					
				}else{
					randomIndex=Math.floor(Math.random()*(max-min)+min);	
				}
			}
	}
}
