(function() {
    function init() {
        
        
        var audio, dir_to_working_desk, ext, playlist, language;
        
        storage = $.localStorage;
        
        ext = ".ogg";
        playlist = [];
        
        
	    $("#girly").hide();
	    $("#boyish").hide();
	    
    	storage.get('girly');
    	storage.get('boyish');

        console.log(storage.get('girly'));
        console.log(storage.get('boyish'));
        
        language = storage.get('language');
        console.log(storage.get('language'));
        

		if((storage.get("girly")) == true ){
		     $("#girly").show();
            
            if(language == "mk"){
                dir_to_working_desk = "mk_sounds/to_working_desk/";
                playlist = ["domasno_F"];
            }else if(language == "sq"){
                dir_to_working_desk = "sq_sounds/to_working_desk/";
                playlist = ["domasno_alb_F"];
            }
		};

		if((storage.get("boyish")) == true ){
		     $("#boyish").show();
            
            if(language == "mk"){
                dir_to_working_desk = "mk_sounds/to_working_desk/";
                playlist = ["domasno_M"];
            }else if(language == "sq"){
                dir_to_working_desk = "sq_sounds/to_working_desk/";
                playlist = ["domasno_alb_M"];
            }
		};
        
        audio = new Audio();
        audio.src = dir_to_working_desk+playlist[0]+ext;
        audio.play();

	};
    
    $(init);

})();