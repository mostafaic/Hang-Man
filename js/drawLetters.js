function drawLetters(){
	
	var divId=document.getElementById('allLetters');
	
	var letters = document.createElement('table');
	letters.setAttribute('id','letters');
	
	
	//variables to create row ,data and buttons of table
	var row,data,letterButtons;
	
	
	//array of letters
	var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var alphabetIndex=0;
	
	for(var rows=0;rows<5;rows++){
		row=document.createElement('tr');
		letters.appendChild(row);
		for(var cols=0;cols<5;cols++){
			data=document.createElement('td');
			letterButtons=document.createElement('button');
			letterButtons.value=alphabets[alphabetIndex];
			letterButtons.innerHTML=alphabets[alphabetIndex];
			letterButtons.id="letter"+(alphabetIndex++);
			
			//onclick letter
			letterButtons.onclick=function(){
				//validate the letter then pass it 
				//alert(this.value);
				this.style.display = 'none';
				validateLetter(this.value);
			}
			
			data.appendChild(letterButtons);
			row.appendChild(data);
			alphabetIndex++;
		}
	}
	
		row=document.createElement('tr');
		letters.appendChild(row);
		data=document.createElement('td');
		letterButtons=document.createElement('button');
		letterButtons.value=alphabets[alphabetIndex];
		letterButtons.innerHTML=alphabets[alphabetIndex];
		letterButtons.id="letter"+(alphabetIndex);
		data.appendChild(letterButtons);
		row.appendChild(data);
	
		//onclick letter
			letterButtons.onclick=function(){
				//validate the letter then pass it 
				//alert(this.value);
				this.style.display = 'none';
				validateLetter(this.value);
			}
		
			divId.appendChild(letters);
}
