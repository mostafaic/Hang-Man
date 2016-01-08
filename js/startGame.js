window.onload = function(){
var startGame = document.getElementById('btn');
startGame.addEventListener('click',function check (e){
  	e.preventDefault();
  	var Name = document.getElementById('pName')
  	var Nvalue= Name.value;
  	var checking = true;
  	var count;

  	if (Nvalue == '')
  	{
  		checking=false;
  		alert('Please Enter Your Valid Name :)');
  		count=1;
  	}
  	//////////////////////////////
  	var Gender = document.getElementsByName('gender');

  	if(!Gender[0].checked && !Gender[1].checked)
  	{
  		checking=false;
  		alert('Please select your gender :)');
  		count=1;
  	}
              if(count != 1){
                   window.location="http://www.google.com";
               }
    count=2; 
    return checking;

  });//for validate

}//for onload