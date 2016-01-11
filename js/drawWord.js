window.onload=function(){

	var word=document.getElementById('word');
	var row;
	var data,data1;
	var letter,description;
	
	var level=0;
	var wordCounter=0;
	
	var prevWords=[15];
	var randomIndex;
	
	//array objects for words and hints
	var arrayObjectsL1=[{'word':'abssc','hint':'a','description':'it\'s a game'},
						{'word':'asd','hint':'e','description':'it\'s a music}'},
						{'word':'qwswwwe','hint':'r','description':'it\'s a shity thing'},
						];

	var min = 1;
	var max = arrayObjectsL1.length;
		//draw the whole words of the array
	
			
			
			row=document.createElement('tr');
			
			randomIndex=Math.floor(Math.random()*(max-min)+min);
			
			for(var x=0;x<prevWords.length;x++){
				
				if(randomIndex != prevWords[x]){
					prevWords.push(randomIndex);
					//display word
					for(var i=0;i<arrayObjectsL1[randomIndex].word.length;i++){
						
						
							data=document.createElement('td');
							
							
							letter=document.createElement('p');
							letter.innerHTML="__";
							
							
							
							data.appendChild(letter);
							
							
							row.appendChild(data);
					}
			
				/*	
					//to show the user the description of the word
					data1=document.createElement('td');	
					description=document.createElement('p');
					
					description.innerHTML=arrayObjectsL1[wordCounter].description;
					data1.appendChild(description);
					row.appendChild(data1);	
				*/	
			
					word.appendChild(row);
					
				}else{
					randomIndex=Math.floor(Math.random()*(max-min)+min);	
				}
			}
					
						
					
					//after each word will show him another word and add 1 to the wordCounter
					
					
					
				
			

		//after 10 words call level-up	
}
