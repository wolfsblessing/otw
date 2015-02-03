(function() {
    function init() {
        
        var audio, dir_mk_room, playlist_room_m, playlist_room_f, ext, masko, zensko, gender;
        
        dir_mk_room = "mk_sounds/room/";
        playlist_room = [];
        ext = ".ogg";
        
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
            zensko = true;
            playlist_room = ["soba_F", "plakar_F", "knigi_F", "igracki_F", "domasno_F"];
            
		};

		if((storage.get("boyish")) == true ){
		     $("#boyish").show();
            masko = true;
            playlist_room = ["soba_M", "plakar_M", "knigi_M", "igracki_M", "domasno"];
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
                $("#help_text_sq").text("Do të më ndihmosh të e rregulloj dollapin?").css({
                    "top": "60px"
                });
            }
        }, function() {
            $(this).removeClass('animated');
            
//            audio.pause();     
            
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
             	"top":"50px"
             });
            $("#help_text_sq").text("Kjo është dhoma ime! A do të me ndihmosh të e rregulloj? Pasi dhoma të jet e rregulluar a më ndihmon të i bëj detyrat e shtëpisë?").css({
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
                $("#help_text_sq").text("Do të më ndihmosh të i rregulloj lodrat?").css({
                    "top": "60px"
                });
            }
        }, function() {
            $(this).removeClass('animated');
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
            	"top":"50px"
            });
            $("#help_text_sq").text("Kjo është dhoma ime! A do të me ndihmosh të e rregulloj? Pasi dhoma të jet e rregulluar a më ndihmon të i bëj detyrat e shtëpisë?").css({
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
                $("#help_text_sq").text("Do të më ndihmosh të i rregulloj librat?").css({
                    "top": "60px",
                    "left": "870px"
                });

            }
        }, function() {
            $(this).removeClass('animated');
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
            	"top":"50px"
            });
            $("#help_text_sq").text("Kjo është dhoma ime! A do të me ndihmosh të e rregulloj? Pasi dhoma të jet e rregulluar a më ndihmon të i bëj detyrat e shtëpisë?").css({
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
                $("#help_text_sq").text("Do të më ndihmosh të bëj detyrat?").css({
                    "top": "60px"
                });
            }
        }, function() {
            $(this).removeClass('animated');
            $("#help_text").text("Ова е мојата соба! Ќе ми помогнеш ли да ја средам? Кога собата ќе биде средена ќе ми помогнеш ли да напишам домашно?").css({
            	"top":"50px"
            });
            $("#help_text_sq").text("Kjo është dhoma ime! A do të me ndihmosh të e rregulloj? Pasi dhoma të jet e rregulluar a më ndihmon të i bëj detyrat e shtëpisë?").css({
                "top": "50px"
             });
        });

	};
    
    $(init);

})();