(function() {
    
    function init() {
        var dir_sq_welcome, playlist_sq, ext;
        
        dir_sq_welcome = "sq_sounds/welcome_page/";
        playlist_sq = ["prethodno_alb", "sledno_alb", "ucime_alb"];
        
        ext = ".ogg";
        
        audio = new Audio();
        audio.src = dir_sq_welcome+playlist_sq[2]+ext;
        audio.play();
        
        
        
        
        
    };
    
    $(init);

})();