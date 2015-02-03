(function() {
    
//Creating the audio variables     
        var dir_sq_profile, playlist_sq, ext, stop_audio, audio;
        
        dir_sq_profile = "sq_sounds/profile/";
        playlist_sq = ["profil_alb", "izbor_alb", "devojce_alb", "momce_alb", "prethodno_alb", "sledno_alb"];
        
        ext = ".ogg";
  //Checking which page is it so the audio file plays only on the right page
        var my_path = $(location).attr('pathname');
        if(my_path == "/profile_sq.html"){
            stop_audio = false;
            
            audio = new Audio();
            audio.src = dir_sq_profile+playlist_sq[0]+ext;
            audio.play();
        
            audio.addEventListener("ended", function(){chose(); });

            function chose(){
                if(stop_audio == true){
                    audio.pause();
                }else{
                    audio.src = dir_sq_profile+playlist_sq[1]+ext;
                    setTimeout(function(){audio.play();}, 2000);
                    stop_audio = true;
                };
            };
        }else{
            stop_audio = true;
        }
    
   //End of audio 
    
    
    storage = $.localStorage;

    var alphabet = [
    "A", "B", "C", "Ç", "D", "DH", "E", "Ë", "F", "G", 
    "Gj", "H", "I", "J", "K", "L", "Ll", "M", "N", "Nj", 
    "O", "P", "Q", "R", "Rr", "S", "Sh", "T", "Th", "U", 
    "V", "X", "Xh", "Z", "Y", "Zh"
    ];

    var myAlphPosition = 0;

    function init() {
        //creating the new divs and adding an attribute, also asigning a letter from the Alphabet array.
        for (var k = 0; k <= 35; k++) {
            $("<li>" + alphabet[k] + "</li>").attr("id", "alphDrag" + k).appendTo("#theAlphaDrag");
        };

        for (var k = 0; k <= 35; k++) {
            $("#alphDrag" + k).hide();
        };


        //Hiding all the objectst that are not needed on the landing page
        //Show the Welcome page
        $("#fifth").hide();
        $("#fifth").fadeIn(2000);

        $("#chose").hide();
        $("#chose").fadeIn(2000);

        $(".defferred").hide();
        $(".defferred").fadeIn(2000);
        $("#1").hide();
        $("#1").fadeIn();

        $("#2").hide();
        $("#2").fadeIn();

        $("#it_is_girl").hide();
        $("#it_is_boy").hide();

        $("#third_slide").hide();
        $("#myForm").hide();
        $("#avatarName").hide();
        $("#theAlphaDrop").hide();
        $("#goToCloset").hide();
        $("#delete_me").hide();
        $("#delete_me_completely").hide();
        $("#go_to_welcome").hide();


        //showing only the logo and what is this thing all about
        $("#welcome").click(function() {
            $("#front_page").hide();
            $("#welcome").hide();
            //            $("#second").show("slow");
            //            $("#third").show();
            $("#second").fadeIn(3000);
            $("#third").fadeIn(3000);
            $("#second_slide").fadeIn(3000);
        });

        //giving an option to chose between a girl and boy
        $("#second_slide").click(function() {
            $("#second").hide();
            $("#third").hide();
            $("#second_slide").hide();
            $("#chose").fadeIn(3000);
            $("#1").fadeIn(3000);
            $("#2").fadeIn(3000);
        });

        //When hover wiggle the image. The second image is to make stop after it wiggled.(remove)

        //the girl
        $('#1').hover(function() {
            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
                $(this).stop().effect('shake', {
                    direction: "up",
                    times: 3,
                    distance: 3
                }, 200);
            }
        }, function() {
            $(this).removeClass('animated');
        });

        $('#2').hover(function() {
            if (!$(this).hasClass('animated')) {
                $(this).addClass('animated');
                $(this).stop().effect('shake', {
                    direction: "up",
                    times: 3,
                    distance: 3
                }, 200);
            }
        }, function() {
            $(this).removeClass('animated');
        });

        //making the alphabet show up and making them draggable, also the div where to be dropped
        function showMyAlph() {
            for (var i = 0; i <= 35; i++) {
                $("#alphDrag" + i).fadeIn().draggable({
                    revert: true,
                });
                $("#theAlphaDrop").fadeIn().droppable({
                    accept: "#theAlphaDrag > li",
                    drop: function(ev, ui) {
                        myAlphPosition = myAlphPosition + 20;
                        //Here i find the div and then use the remove method to remove the div id to the <li> so i can reuse the same dragged letter 
                        //again, because if I don't remove the ID then there is no letter to drag anymore after the drop. And After it's dropped
                        //I use the text of the <li> to append to the droppable
                        $(this).find("#alphDrag" + i).remove();
                        $("<li></li>").text(ui.draggable.text()).appendTo(this);
                    }
                });
            };
        };

        //Clicking on one of the images will hide the other one 
        //the girl
    girly = false;
    boyish = false;

        var showTheForm = 1;
        $("#1").click(function() {
 //   chosing the girl audio file         
            audio.src = dir_sq_profile+playlist_sq[2]+ext;
            audio.play();
            stop_audio = true;
                 
            shakeMe = 2;
            $("#2").hide(2000);
            $("#1").unbind();
            //if this image was clicked once 
            if (showTheForm == 1) {
                $("#it_is_girl").fadeIn(2000);
                storage.set('girly', true);
                storage.set('boyish', false);
                console.log((storage.get('girly')));

                showMyAlph();
                $("#goToCloset").fadeIn(2000);
                $("#go_to_welcome").fadeIn(2000);
                showTheForm = 2;
            }
        });

        //the boy
        $("#2").click(function() {
 //   chosing the girl audio file         
            audio.src = dir_sq_profile+playlist_sq[3]+ext;
            audio.play();
            stop_audio = true;
       
            $("#1").hide(2000);
            $("#2").unbind();
            //if this image was clicked once, don't show the form again
            if (showTheForm == 1) {
                storage.set('boyish', true);
                storage.set('girly', false);
                console.log((storage.get('boyish')));
                $("#it_is_boy").show();

                showMyAlph();
                $("#goToCloset").fadeIn(2000);
                $("#go_to_welcome").fadeIn(2000);
                showTheForm = 2;
            }
        });

    }
    $(init);

})();