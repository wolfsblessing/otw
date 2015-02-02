(function() {
    
    function init() {
        var dir_mk_welcome, playlist_mk, ext, audio;
        
        dir_mk_welcome = "mk_sounds/welcome_page/";
        playlist_mk = ["prethodno", "sledno", "ucime"];
        
        ext = ".ogg";
        
        audio = new Audio();
        audio.src = dir_mk_welcome+playlist_mk[2]+ext;
        audio.play();
        
    };
    
    $(init);

})();