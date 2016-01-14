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
	var lvl1Words = [{'word':'great','desc':'Extra Good','hint':''},{'word':'clean','desc':'Tidy and dust free','hint':''},
					 {'word':'milk','desc':'Dairy Drink','hint':''},{'word':'head','desc':'Body Important Part','hint':''},
					 {'word':'bird','desc':'have wings','hint':''},{'word':'ocean','desc':'bigger than sea','hint':''},
					 {'word':'milk','desc':'something drunk on the morning','hint':''},{'word':'mimic','desc':'to imitate someone','hint':''},
					 {'word':'corn','desc':'Cinema favorite habit','hint':''},{'word':'sponge','desc':'Used to clean things','hint':''},
					 {'word':'ship','desc':'sail on the sea','hint':''},{'word':'adult','desc':'','hint':''},
					 {'word':'meat','desc':'buy from the butcher','hint':''},{'word':'dread','desc':'Horribaly bad','hint':''},
					 {'word':'crumble','desc':'Fail apart','hint':''}];
	
	var lvl2Words = [{'word':'promise ','desc':'everything will be taken care of—you have my word','hint':''},
					 {'word':'Linguistics','desc':' one of the units of speech or writing ','hint':''},
			   	   	 {'word':'tribe','desc':'A group of people','hint':''},{'word':'fence','desc':'What surround propreties','hint':''},
					 {'word':'shred','desc':'Cut into pieces','hint':''},{'word':'rice ','desc':'something you can eat it and it`s color white','hint':''},
					 {'word':'music','desc':' enjoy when you listen to it ','hint':''},
			   	   	 {'word':'cat','desc':'A group of people','hint':''},{'word':'rain','desc':'water dropped from the sky','hint':''},
					 {'word':'sun ','desc':'the first light on the morning','hint':''},
					 {'word':'phone','desc':'call your friend using it ','hint':''},
			   	   	 {'word':'house','desc':'where do you live !!','hint':''}];
					 
	var lvl3Words = [{'word':'restaurant ','desc':'somewhere you can eat with your friends','hint':''},
					 {'word':'beach','desc':'somewhere you can go to at the summer ','hint':''},
			   	   	 {'word':'Eiffel Tower','desc':'the most famous thing at paris','hint':''},
					 {'word':'internet','desc':'used to connect with other people all over the world','hint':''},
					 {'word':'grandmother','desc':'your mother`s mom','hint':''},{'word':'college ','desc':'somewhere you will go after high school','hint':''},
					 {'word':'hair','desc':' you have it and it`s color black ','hint':''},
			   	   	 {'word':'bus','desc':'ride it to the school','hint':''},{'word':'wings','desc':'some thing belong to birds only','hint':''},
					 {'word':'island ','desc':'somewhere inside the sea','hint':''},
					 {'word':'today','desc':'the day before tommrrow ','hint':''},
			   	   	 {'word':'market','desc':'somewhere you can buy somethings','hint':''}];	
	
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
								currentWord=lvl1Words[randomIndex].word;
								for (var i = 0; i < currentWord.length; i++) {
									data=document.createElement('td');
									letter=document.createElement('p');
									letter.innerHTML="__";
									letter.id = letterIndex+i;
									data.appendChild(letter);		
									row.appendChild(data);	
								}
								data1=document.createElement('td');
								description=document.createElement('p');
								description.innerHTML=lvl1Words[randomIndex].desc;
								data1.appendChild(description);
								row.appendChild(data1);
								
								word.appendChild(row);
								divId.appendChild(word);
						}else{
						}
					
				}while(found!=1)
				
	}else if(playerObj.lvl==2){
		if(level1==0){
			level1=1;
			prevWords=[];
			var max = lvl2Words.length;
					row=document.createElement('tr');
				do{
						randomIndex=Math.floor(Math.random()*(max-min)+min);
						
						if(prevWords.indexOf(randomIndex)==-1){
								found=1;
								prevWords.push(randomIndex);
								currentWord=lvl2Words[randomIndex].word;
								for (var i = 0; i < currentWord.length; i++) {
									data=document.createElement('td');
									letter=document.createElement('p');
									letter.innerHTML="__";
									letter.id = letterIndex+i;
									data.appendChild(letter);		
									row.appendChild(data);	
								}
								data1=document.createElement('td');
								description=document.createElement('p');
								description.innerHTML=lvl2Words[randomIndex].desc;
								data1.appendChild(description);
								row.appendChild(data1);
								
								word.appendChild(row);
								divId.appendChild(word);	
						}else{
						}
					
				}while(found!=1)

		}else{
			var max = lvl2Words.length;
					row=document.createElement('tr');
				do{
						randomIndex=Math.floor(Math.random()*(max-min)+min);
						
						if(prevWords.indexOf(randomIndex)==-1){
								found=1;
								prevWords.push(randomIndex);
								currentWord=lvl2Words[randomIndex].word;
								for (var i = 0; i < currentWord.length; i++) {
									data=document.createElement('td');
									letter=document.createElement('p');
									letter.innerHTML="__";
									letter.id = letterIndex+i;
									data.appendChild(letter);		
									row.appendChild(data);	
								}
								data1=document.createElement('td');
								description=document.createElement('p');
								description.innerHTML=lvl2Words[randomIndex].desc;
								data1.appendChild(description);
								row.appendChild(data1);
								
								word.appendChild(row);
								divId.appendChild(word);	
						}else{
						}
					
				}while(found!=1)
		}					
}

else if(playerObj.lvl==3){
	if(level2==0){
		level2=1;
		prevWords=[]
		var max = lvl3Words.length;
		row=document.createElement('tr');
				do{
						randomIndex=Math.floor(Math.random()*(max-min)+min);
						
						if(prevWords.indexOf(randomIndex)==-1){
								found=1;
								prevWords.push(randomIndex);
								currentWord=lvl3Words[randomIndex].word;
								for (var i = 0; i < currentWord.length; i++) {
									data=document.createElement('td');
									letter=document.createElement('p');
									letter.innerHTML="__";
									letter.id = letterIndex+i;
									data.appendChild(letter);		
									row.appendChild(data);	
								}
								data1=document.createElement('td');
								description=document.createElement('p');
								description.innerHTML=lvl3Words[randomIndex].desc;
								data1.appendChild(description);
								row.appendChild(data1);
								
								word.appendChild(row);
								divId.appendChild(word);
						}else{
						}
					
				}while(found!=1)
	}else{
		var max = lvl3Words.length;
		row=document.createElement('tr');
				do{
						randomIndex=Math.floor(Math.random()*(max-min)+min);
						
						if(prevWords.indexOf(randomIndex)==-1){
								found=1;
								prevWords.push(randomIndex);
								currentWord=lvl3Words[randomIndex].word;
								for (var i = 0; i < currentWord.length; i++) {
									data=document.createElement('td');
									letter=document.createElement('p');
									letter.innerHTML="__";
									letter.id = letterIndex+i;
									data.appendChild(letter);		
									row.appendChild(data);	
								}
								data1=document.createElement('td');
								description=document.createElement('p');
								description.innerHTML=lvl3Words[randomIndex].desc;
								data1.appendChild(description);
								row.appendChild(data1);
								
								word.appendChild(row);
								divId.appendChild(word);
						}else{
						}
					
				}while(found!=1)
			}		
		}
	}
