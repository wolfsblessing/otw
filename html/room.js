(function() {
    function init() {
        
        var audio, dir_mk_room, playlist_room_m, playlist_room_f, ext, masko, zensko, gender;
        var dir_sq_room, playlist_room_sq;
        
        playlist_room = [];
        ext = ".ogg";
        
        dir_sq_room = "sq_sounds/room/";
        playlist_room_sq = [];
        
        audio = new Audio();
        masko = false;
        zensko = false;
        
        
        
	    $("#girly").hide();
	    $("#boyish").hide();
	    
    	storage.get('girly');
    	storage.get('boyish');

        console.log(storage.get('girly'));
        console.log(storage.get('boyish'));

		if((storage.get("girly")) == true ){
		    $("#girly").show();
            
            var my_path = $(location).attr('pathname');
            if(my_path == "/room.html"){
                dir_mk_room = "mk_sounds/room/";
                playlist_room = ["soba_F", "plakar_F", "knigi_F", "igracki_F", "domasno_F"];
            }else{
                dir_mk_room = "sq_sounds/room/";
                playlist_room = ["soba_alb_F", "plakar_alb_F", "knigi_alb_F", "igracki_alb_F", "domasno_alb_F"];
            }
            
		};

		if((storage.get("boyish")) == true ){
		     $("#boyish").show();
            
            var my_path = $(location).attr('pathname');
            if(my_path == "/room.html"){
                dir_mk_room = "mk_sounds/room/";
                playlist_room = ["soba_M", "plakar_M", "knigi_M", "igracki_M", "domasno"];
            }else{
                dir_mk_room = "sq_sounds/room/";
                playlist_room = ["soba_alb_M", "plakar_alb_M", "knigi_alb_M", "igracki_alb_M", "domasno_alb_M"];
            }
		};
        
        
        audio.src = dir_mk_room+playlist_room[0] + ext;
        audio.play();     
        

        $('#theCloset').hover(function() {
            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
//audio                
                audio.src = dir_mk_room+playlist_room[1] + ext;
                audio.play();     
//end audio                
                $("#help_text").text("Ќе ми помогнеш ли да го средам плакарот?").css({
                	"top": "60px"
                });
                $("#help_text_sq").text("A do të më ndihmosh ta rregulloj dollapin?").css({
                    "top": "60px"
                });
            }
        }, function() {
            $(this).removeClass('animated');
            
//            audio.pause();     
            
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
             	"top":"50px"
             });
            $("#help_text_sq").text("Kjo është dhoma ime! Do të me ndihmosh ta rregulloj? Dhoma kur të jet e rregulluar a do të më ndihmosh ti shkruaj detyrat e shtëpisë?").css({
                "top": "50px"
             });
        });

        $('#theToys').hover(function() {
            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
//audio                
                audio.src = dir_mk_room+playlist_room[3] + ext;
                audio.play();
//end audio                
                $("#help_text").text("Ќе ми помогнеш ли да ги средам играчките?").css({
                	"top": "60px"
                });
                $("#help_text_sq").text("A do të më ndihmosh ti rregulloj lojrat?").css({
                    "top": "60px"
                });
            }
        }, function() {
            $(this).removeClass('animated');
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
            	"top":"50px"
            });
            $("#help_text_sq").text("Kjo është dhoma ime! Do të me ndihmosh ta rregulloj? Dhoma kur të jet e rregulluar a do të më ndihmosh ti shkruaj detyrat e shtëpisë?").css({
                "top": "50px"
             });
        });

        $('#theBooks').hover(function() {
            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
//audio                
                audio.src = dir_mk_room+playlist_room[2] + ext;
                audio.play();
//end audio                
                $("#help_text").text("Ќе ми помогнеш ли да ги средам книгите?").css({
                	"top": "60px"
                });
                $("#help_text_sq").text("A do të më ndihmosh ti rregulloj librat?").css({
                    "top": "60px",
                    "left": "870px"
                });

            }
        }, function() {
            $(this).removeClass('animated');
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
            	"top":"50px"
            });
            $("#help_text_sq").text("Kjo është dhoma ime! Do të me ndihmosh ta rregulloj? Dhoma kur të jet e rregulluar a do të më ndihmosh ti shkruaj detyrat e shtëpisë?").css({
                "top": "50px"
             });
        });

        $('#theWorkingTable').hover(function() {
            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
//audio                
                audio.src = dir_mk_room+playlist_room[4] + ext;
                audio.play();
//end audio
                $("#help_text").text("Ќе ми помогнеш ли да напишам домашно?").css({
                	"top": "60px"
                });
                $("#help_text_sq").text("A do të më ndihmosh ti shkruaj detyrat e shtëpisë ?").css({
                    "top": "60px"
                });
            }
        }, function() {
            $(this).removeClass('animated');
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
            	"top":"50px"
            });
            $("#help_text_sq").text("Kjo është dhoma ime! Do të me ndihmosh ta rregulloj? Dhoma kur të jet e rregulluar a do të më ndihmosh ti shkruaj detyrat e shtëpisë?").css({
                "top": "50px"
             });
        });

	};
    
    $(init);

})();