(function() {


    function init() {
        //Hiding all the objectst that are not needed on the landing page
        //Show the Welcome page
        $("#front_page").hide();
        $("#front_page").fadeIn(4000);
        $("#second").hide();
        $("#third").hide();
        $("#second_slide").hide();
        $("#fifth").hide();
        $("#chose").hide();
        $(".defferred").hide();
        $("#1").hide();
        $("#2").hide();
        $("#it_is_girl").hide();
        $("#it_is_boy").hide();
        $("#third_slide").hide();
        $("#myForm").hide();
        $("#avatarName").hide();
        $("#goToCloset").hide();

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

        //Clicking on one of the images will hide the other one 
        //the girl
        var showTheForm = 1;
        $("#1").click(function() {
            shakeMe = 2;
            $("#2").hide(2000);
            $("#1").unbind();
            //if this image was clicked once, don't show the form again
            if (showTheForm == 1) {
                $("#myForm").show();
                $("#it_is_girl").show();
                showTheForm = 2;
            }
        });

        //the boy
        $("#2").click(function() {
            $("#1").hide(2000);
            $("#2").unbind();
            //if this image was clicked once, don't show the form again
            if (showTheForm == 1) {
                $("#myForm").show();
                $("#it_is_boy").show();
                showTheForm = 2;
            }
        });


    }
    $(init);

})();