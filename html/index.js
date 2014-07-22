(function() {

    var alphabet = ["A", "Б", "В", "Г", "Д", "Ѓ", "Е", "Ж",
        "З", "Ѕ", "И", "Ј", "К", "Л", "Љ", "М",
        "Н", "Њ", "О", "П", "Р", "С", "Т", "Ќ",
        "У", "Ф", "Х", "Ц", "Ч", "Џ", "Ш"
    ];

    var myAlphPosition = 0;

    function init() {
        //creating the new divs and adding an attribute, also asigning a letter from the Alphabet array.
        for (var k = 0; k <= 30; k++) {
            $("<li>" + alphabet[k] + "</li>").attr("id", "alphDrag" + k).appendTo("#theAlphaDrag");
        };

        for (var k = 0; k <= 30; k++) {
            $("#alphDrag" + k).hide();
        };


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
        $("#theAlphaDrop").hide();
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

        //making the alphabet show up and making them draggable, also the div where to be dropped
        function showMyAlph() {
            for (var i = 0; i <= 30; i++) {
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
        var showTheForm = 1;
        $("#1").click(function() {
            shakeMe = 2;
            $("#2").hide(2000);
            $("#1").unbind();
            //if this image was clicked once 
            if (showTheForm == 1) {
                $("#it_is_girl").fadeIn(2000);

                showMyAlph();
                $("#goToCloset").fadeIn(2000);
                showTheForm = 2;
            }
        });

        //the boy
        $("#2").click(function() {
            $("#1").hide(2000);
            $("#2").unbind();
            //if this image was clicked once, don't show the form again
            if (showTheForm == 1) {
                $("#it_is_boy").show();

                showMyAlph();
                $("#goToCloset").fadeIn(2000);
                showTheForm = 2;
            }
        });


    }
    $(init);

})();