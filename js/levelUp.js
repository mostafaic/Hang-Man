function levelUp(level){
        
        if ( level === 2 )
        {
            var ohyeah = new Audio("audio/ohyeah.wav");
            ohyeah.play();
            playerObj.badges.lvl_1= true;
            drawBadges();
        }
        
        else if ( level === 3 )
        {
            var ohyeah = new Audio("audio/ohyeah.wav");
            ohyeah.play();
            playerObj.badges.lvl_2= true;
            drawBadges();
        }
        
        
        else if ( level === 4 )
        {
           var ohyeah = new Audio("audio/ohyeah.wav");
           ohyeah.play();
           playerObj.badges.lvl_3= true;
            drawBadges();
        }
}




