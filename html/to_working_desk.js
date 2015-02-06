(function() {
    function init() {
        
        
        var audio, dir_mk_to_working_desk, ext, playlist;
        
        ext = ".ogg";
        playlist = [];
        
        
	    $("#girly").hide();
	    $("#boyish").hide();
	    
    	storage.get('girly');
    	storage.get('boyish');

        console.log(storage.get('girly'));
        console.log(storage.get('boyish'));

		if((storage.get("girly")) == true ){
		     $("#girly").show();
            
            var my_path = $(location).attr('pathname');
            if(my_path == "/to_working_desk.html"){
                dir_mk_to_working_desk = "mk_sounds/to_working_desk/";
                playlist = ["domasno_F"];
            }else{
                dir_mk_to_working_desk = "sq_sounds/to_working_desk/";
                playlist = ["domasno_alb_F"];
            }
		};

		if((storage.get("boyish")) == true ){
		     $("#boyish").show();
            
            var my_path = $(location).attr('pathname');
            if(my_path == "/to_working_desk.html"){
                dir_mk_to_working_desk = "mk_sounds/to_working_desk/";
                playlist = ["domasno_M"];
            }else{
                dir_mk_to_working_desk = "sq_sounds/to_working_desk/";
                playlist = ["domasno_alb_M"];
            }
		};
        
        audio = new Audio();
        audio.src = dir_mk_to_working_desk+playlist[0]+ext;
        audio.play();

	};
    
    $(init);

})();