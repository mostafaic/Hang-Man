window.onload=function(){

var canvas = document.getElementById('my-canvas');
var context = canvas.getContext('2d');

     context.fillStyle = "#000000";
     context.fillRect(200,500,500,20); // rect 1
     context.fillRect(250,80,20,420);  // rect 2
     context.fillRect(250,80,220,20);  // rect 3   
     context.fillRect(450,80,20,70);   // rect 4
/////////////////////////////////////////////////////////////////    
function delPart(index){
    if (index == 1){
     context.beginPath();
     context.arc(460,200,50,0,2*Math.PI); //for the head
     context.lineWidth = 3;
     context.strokeStyle = 'red';
     context.stroke();
   
     context.beginPath(); 
     context.arc(435,200,10,0,2*Math.PI); //for the eyes
     context.stroke();

     context.beginPath();
     context.arc(485,200,10,0,2*Math.PI); //for the eyes
     context.stroke();

     context.beginPath();
     context.arc(458,235,12,0,2*Math.PI); //for the mouth
     context.stroke();
     context.fillStyle='red';
     context.fillRect(455,250,6,185);  //for the body
     }
////////////////////////////////////////////////////////////////
   if(index ==2){
    context.moveTo(458,260);  //right hand
    context.lineTo(600,320);
    context.stroke();
                 }
/////////////////////////////////////////
   if(index ==3){
    context.moveTo(458,430);  // right leg
    context.lineTo(600,470);
    context.stroke();
                }
///////////////////////////////////////////////////////
   if(index ==4){
    context.moveTo(330,300);    //left hand
    context.lineTo(455,260);
    context.stroke();
                }
/////////////////////////////////////////////////
  if(index ==5){
    context.moveTo(350,480);   //left LEG
    context.lineTo(460,430);
    context.stroke();
               }
   }//function
// to test the function
var i=1;
setInterval(function(){
	 delPart(i);
	 i++;
	 console.log(i);
},500);
}//for the onload function
 

