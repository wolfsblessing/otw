(function() {
    function init() {
        
        
        var audio, dir_mk_to_working_desk, ext, playlist;
        
        dir_mk_to_working_desk = "mk_sounds/to_working_desk/";
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
            playlist = ["domasno_F"];
		};

		if((storage.get("boyish")) == true ){
		     $("#boyish").show();
            playlist = ["domasno_M"];
		};
        
        audio = new Audio();
        audio.src = dir_mk_to_working_desk+playlist[0]+ext;
        audio.play();

	};
    
    $(init);

})();