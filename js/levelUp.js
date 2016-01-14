function levelUp(level){
        
        if ( level === 2 )
        {
            playerObj.badges.lvl_1= true;
            drawBadges();
        }
        
        else if ( level === 3 )
        {
            playerObj.badges.lvl_2= true;
            drawBadges();
        }
        
        
        else if ( level === 4 )
        {
           playerObj.badges.lvl_3= true;
            drawBadges();
        }
}




