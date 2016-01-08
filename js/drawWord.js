window.onload=function(){

	var word=document.getElementById('word');
	var row;
	var data,data1;
	var letter,description;
	
	var level=0;
	var wordCounter=0;
	
	//array objects for words and hints
	var arrayObjectsL1=[{'word':'abssc','hint':'a','description':'it\'s a game'},
						{'word':'aswd','hint':'e','description':'it\'s a music}'},
						{'word':'qwwwwe','hint':'r','description':'it\'s a shity thing'},
						{'word':'asf','hint':'s','description':'it\'s a funckin bull shit'},
						{'word':'wxyz','hint':'q','description':'it\'s a jajaja'},
						{'word':'uio','hint':'w','description':'it\'s a __'},
						{'word':'jkl','hint':'a','description':'he\'s  hazem'},
						{'word':'bnm','hint':'r','description':'he\'s  mostafa'},
						{'word':'bfwwwwwm','hint':'d','description':'he\'s  hussin'},
						{'word':'bt','hint':'w','description':'he\'s  ayad'}];

		//draw the whole words of the array
		do{
			
			
			row=document.createElement('tr');
			
			
			for(var i=0;i<arrayObjectsL1[wordCounter].word.length;i++){
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
			
			//after each word will show him another word and add 1 to the wordCounter
			
			alert('right word');
			wordCounter++;
			
		}while(wordCounter<10);

		//after 10 words call level-up
		
}
