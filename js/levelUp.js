function levelUp(level){
    var level1 = document.getElementById('level1');
    var level2 = document.getElementById('level2');
    var level3 = document.getElementById('level3');
    var state = document.getElementById('levelstate');
        
        
        if ( level === 2 )
        {
            playerObj.badges.lvl_1= true;
            drawBadges();
        }
        
        else if ( level === 6 )
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




