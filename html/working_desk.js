(function() {

        function init() {
            
            var audio, dir_mk_working_desk, ext, playlist, language;
            
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
                    dir_mk_working_desk = "mk_sounds/working_desk/";
                    playlist = ["sobiranje_F", "odzemanje_F", "figuri_F"];
                }else if(language == "sq"){
                    dir_mk_working_desk = "sq_sounds/working_desk/";
                    playlist = ["sobiranje_alb_F", "odzemanje_alb_F", "figuri_alb_F"];
                }
            }
            if((storage.get("boyish")) == true){
                
                if(language == "mk"){
                    dir_mk_working_desk = "mk_sounds/working_desk/";
                    playlist = ["sobiranje_M", "odzemanje_M", "figuri_M"];
                }else if(language == "sq"){
                    dir_mk_working_desk = "sq_sounds/working_desk/";
                    playlist = ["sobiranje_alb_M", "odzemanje_alb_M", "figuri_alb_M"];
                }
            }
            
            audio = new Audio();
            audio.src = dir_mk_working_desk+playlist[0]+ext;
            audio.play();
            
            audio.addEventListener("ended", function(){ switch_me(); });
            
            function switch_me(){
                if(playlist_index == (playlist.length)){
                    audio.pause();
                }else{
                    audio.src = dir_mk_working_desk+playlist[playlist_index+1]+ext;
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
            top: '610', 
            left: '600', 
            'padding-top': '10'}, 100);
    }).mouseleave(function(e) {
//        $(this).animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(this).animate({ 
            height: '25', 
            width: '200', 
            top: '620', 
            left: '610',
            'padding-top': '5'}, 100);
    });

    $("#add").click(function() {
        store.set("remember_my_count", 1);
    });

    $("#subtraction").click(function() {
        store.set("remember_my_count", 1);
    });


    $("#add").click(function() {
        store.set("check_success", 0);
    });



    $(init);

})();