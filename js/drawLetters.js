//function drawLetters that draw all alphabets on the screen and disapear after click then validate this letter //////////
//author A.sobhy**1-2016**Doers Team**ITI Intake 36 Nozha Branch////////////////////////////
function drawLetters(){
	
	//container that contain the table of letters
	var divId=document.getElementById('allLetters');
	
	//table of letters 
	var letters = document.createElement('table');
	letters.setAttribute('id','letters');
	letters.style.width = '100%';
	letters.style.height = '100%';
	//variables to create row ,data and buttons of table
	var row,data,letterButtons;
	
	
	//array of letters
	var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var alphabetIndex=0;
	
	
	//append letters to the table //////////////////////////////////////////
	for(var rows=0;rows<5;rows++){
		row=document.createElement('tr');
		row.style.width = '100%';
		row.style.height = '16%';
		letters.appendChild(row);
		for(var cols=0;cols<5;cols++){
			data=document.createElement('td');
			letterButtons=document.createElement('button');
			letterButtons.value=alphabets[alphabetIndex];
			letterButtons.innerHTML=alphabets[alphabetIndex];
			letterButtons.id=alphabetIndex;
			letterButtons.style.width = '100%';
			letterButtons.style.height = '100%';
			letterButtons.style.color = "#33ccff";
			letterButtons.style.fontSize  = "40px";
			letterButtons.style.fontFamily="cooper black";
			//letterButtons.style.background = "#0066ff"
			//onclick letter
			letterButtons.onclick=function(){
				//validate the letter then pass it 
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
		letterButtons.id=alphabetIndex;
		letterButtons.style.width = '100%';
		letterButtons.style.height = '100%';
		letterButtons.style.color = "#33ccff";
		letterButtons.style.fontSize  = "40px";
		letterButtons.style.fontFamily="cooper black";
		//letterButtons.style.background = "#0066ff"
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
