(function() {
    
    function init() {
        var audio, dir_mk_index, playlist_mk, playlist_sq, playlist_index, ext, audio_order, stop_sound, stop_continue;
        
        storage = $.localStorage;
        
        dir_mk_index = "mk_sounds/index/";
        dir_sq_index = "sq_sounds/index/";
        playlist_mk = ["welcome", "jazik", "makedonski", "shqip", "continue"];
        playlist_sq = ["welcome_alb", "jazik_alb", "makedonski_alb", "shqip_alb", "continue_alb"];
        audio_order = [dir_mk_index+"jazik", dir_sq_index+"jazik_alb", dir_mk_index+"makedonski", dir_sq_index+"shqip_alb", ""];
        ext = ".ogg";
        
        continue_mk = audio_order[0]+ext;
        
        playlist_index = 0;
        
        stop_sound = false;
        stop_continue = false;
        
        audio = new Audio();
        
        audio.src = audio_order[0] + ext;
        audio.play();
        audio.addEventListener("ended", function() { switch_me(); });
        
        function switch_me(){
            if(playlist_index == (audio_order.length-1)){
                audio.pause();
                number_me();
            } else {
                if(stop_sound == true){
                    number_me();
                }
                if(playlist_index == 1){
                    $("#goToIndexMK").css({
                       "box-shadow": "0px 0px 41px 0px #d4d428" 
                    });
                }
                if(playlist_index == 2){
                    $("#goToIndexMK").css({
                       "box-shadow": "0px 0px 0px 0px #fff" 
                    });
                    $("#goToIndexSQ").css({
                       "box-shadow": "0px 0px 41px 0px #d4d428" 
                    });
                }else{
                     $("#goToIndexSQ").css({
                       "box-shadow": "0px 0px 0px 0px #fff" 
                    });                   
                }
                audio.src = audio_order[playlist_index+1] + ext;
                setTimeout(function(){audio.play();}, 2000);
                playlist_index++;
            }
        }
        

       $("#chose_mk_page").hide();
       $("#chose_sq_page").hide();

       $("#front_page").hide();
       $("#welcome").hide();

       $("#front_page_sq").hide();
       $("#welcome_sq").hide();

       $("#chose_mk_page").fadeIn(3000);
       $("#chose_sq_page").fadeIn(3000);

       $("#goToIndexMK").click(function() {
           //setting up the mk language 
            storage.set('language', 'mk');            
            
            stop_sound = true;
            $("#front_page").fadeIn(2000);
            $("#welcome").fadeIn(2000);
            audio.src = dir_mk_index+"welcome"+ext;
            audio.play();
            function number_me(){
                playlist_index = audio_order.length-1;
            };
            audio.addEventListener("ended", function(){stop_continue(); });
            
            function stop_continue(){
                if (stop_continue == true){
                    audio.pause();
                }else{
                    audio.src = dir_mk_index+"continue"+ext;
                    setTimeout(function(){audio.play();}, 2000);
                    stop_continue = true;
                }
            };

            $("#front_page_sq").hide();
            $("#welcome_sq").hide();
        });
        
        

        $("#goToIndexSQ").click(function() {
           //setting up the sq language 
            storage.set('language', 'sq');            
            stop_sound = true;
            $("#front_page_sq").fadeIn(2000);
            $("#welcome_sq").fadeIn(2000);
            audio.src = dir_sq_index+"welcome_alb"+ext;
            audio.play();
            
            function number_me(){
                playlist_index = audio_order.length-1;
            };
            audio.addEventListener("ended", function(){stop_continue(); });
            
            function stop_continue(){
                if (stop_continue == true){
                    audio.pause();
                }else{
                    audio.src = dir_sq_index+"continue_alb"+ext;
                    setTimeout(function(){audio.play();}, 2000);
                    stop_continue = true;
                }
            };

            $("#front_page").hide();
            $("#welcome").hide();
        });

    }
    
    $(init);

})();