window.onload=function(){
var startGame = document.getElementById('btn');
startGame.addEventListener('click',function check (e){
  	e.preventDefault();
  	var Name = document.getElementById('pName')
  	playerObj.name= Name.value;   //put the name value in the obj
    //var Nvalue = Name.value;
  	var checking = true;
  	var count;

  	if (Name.value == '')
  	{
  		checking=false;
  		alert('Please Enter Your Valid Name :)');
  		count=1;
  	}
  	//////////////////////////////
  	var Gender = document.getElementsByName('gender');   //male 0 and female 1
    //put the gender value in the gender object
    if(Gender[0].checked)
    {
      playerObj.gender=0;  //for female
    }
    if(Gender[1].checked)
    {
      playerObj.gender=1; // for male
    }
   //validate the gender.checked
  	if(!Gender[0].checked && !Gender[1].checked)
  	{
  		checking=false;
  		alert('Please select your gender :)');
  		count=1;
  	}
              if(count != 1){
                   drawgame();
               }
    count=2; 
    return checking;

  });//for validate
////////////////////////////////////////////////////////////////////////////////////////////////////////
}//for onload