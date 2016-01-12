	   
	var level1 = document.getElementById('level1');
	var level2 = document.getElementById('level2');
	var level3 = document.getElementById('level3');
	var state = document.getElementById('levelstate');

function levelUp(level){
        
        
        if ( level === 1 )
        {
            
            level1.setAttribute('src','img/active.JPG');
            level2.setAttribute('src','img/deactive.png');
            level3.setAttribute('src','img/deactive.png');
            state.setAttribute('src','img/easy.png');
        }
        
        else if ( level === 2 )
        {
            
            level1.setAttribute('src','img/deactive.png');
            level2.setAttribute('src','img/active.JPG');
            level3.setAttribute('src','img/deactive.png');
            state.setAttribute('src','img/meduim.png');
        }
        
        
        else if ( level === 3 )
        {
           
             level1.setAttribute('src','img/deactive.png');
             level2.setAttribute('src','img/deactive.png');
             level3.setAttribute('src','img/active.JPG');
             state.setAttribute('src','img/hard.png');
        }
}




