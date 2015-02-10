(function() {

        function init() {
             var audio, dir_geometry_objects, ext, playlist, language;
            
            storage = $.localStorage;
            
            ext = ".ogg";
            playlist = [];
            playlist_index = 0;
            
    	    storage.get('girly');
    	    storage.get('boyish');
            
            console.log(storage.get('girly'));
            console.log(storage.get('girly'));
            
            language = storage.get('language');
            console.log(storage.get('language'));
            
            if((storage.get("girly")) == true){
                
                if(language == "mk"){
                    dir_geometry_objects = "mk_sounds/geometry_objects/";
                    playlist = ["golemina_redi_F", "boja_redi_F", "forma_redi_F"];
                }else if(language == "sq"){
                    dir_geometry_objects = "sq_sounds/geometry_objects/";
                    playlist = ["golemina_redi_alb_F", "boja_redi_alb_F", "forma_redi_alb_F"];
                }
            }
            if((storage.get("boyish")) == true){
                
                if(language == "mk"){
                    dir_geometry_objects = "mk_sounds/geometry_objects/";
                    playlist = ["golemina_redi_M", "boja_redi_M", "forma_redi_M"];
                }else if(language == "sq"){
                    dir_geometry_objects = "sq_sounds/geometry_objects/";
                    playlist = ["golemina_redi_alb_M", "boja_redi_alb_M", "forma_redi_alb_M"];
                }
            }
            
            audio = new Audio();
            audio.src = dir_geometry_objects+playlist[0]+ext;
            audio.play();
            
            audio.addEventListener("ended", function(){ switch_me(); });
            
            function switch_me(){
                if(playlist_index == (playlist.length)){
                    audio.pause();
                }else{
                    audio.src = dir_geometry_objects+playlist[playlist_index+1]+ext;
                    setTimeout(function(){audio.play();}, 2000);
                    playlist_index++;
                }
            }       
        
        }
    $('#to_room').mouseenter(function(e) {
//        $(this).animate({ height: '100', left: '0', top: '0', width: '100'}, 100);
        $(this).animate({ 
        	height: '35', 
        	width: '210', 
        	top: '670', 
        	left: '460', 
        	'padding-top': '10'}, 100);
    }).mouseleave(function(e) {
//        $(this).animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(this).animate({ 
        	height: '25', 
        	width: '200', 
        	top: '680', 
        	left: '470',
        	'padding-top': '5'}, 100);
    });

    $(init);
    //if the person wants to restart the game, i'm using the reload function.
    //have to check if the score can be kept
    function reloadPage() {
        location.reload();
    }


})();