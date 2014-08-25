(function() {

    //Creating the global variables
    var daXpos = [0, 120, 240, 360, 480];
    var daYpos = [300, 400, 500];

    /*var ranX = daXpos.sort(function(){return Math.random() - .4});
        var ranY = daYpos.sort(function(){return Math.random() - .4});*/

    daXpos.sort(function() {
        return Math.random() - .3
    });
    daTransparent = [0, 120, 240, 360];
    dacopy = [0, 100, 200, 300, 380];
    dacopy.sort(function() {
        return Math.random() - .25
    });

    var smths = daXpos[0] + "px";
    var othersmths = daXpos[1] + "px";
    var counter = 0;
    var checkMe = 0;
    var score = 0;
    var guess = 0;

    //There are 7 types of object_blues that need to appear randomly. Array and then random the elements
    var object_blue = [1, 2, 3, 4];
    object_blue.sort(function() {
        return Math.random() - .23
    });
    var object_blueNumbers = [2, 3, 4];
    object_blueNumbers.sort(function() {
        return Math.random() - .3
    });

    var object_blueCounter = 0;
    var check_object_blue = 0;
    var guess_object_blue = 0;
    var true_object_blue = 0;

    /*===================================*/ 
    var object_green = [1, 2, 3, 4];
    object_green.sort(function() {
        return Math.random() - .23
    });

    var object_greenNumbers = [2, 3, 4];
    object_greenNumbers.sort(function() {
        return Math.random() - .3
    });

    var object_greenCounter = 0;
    var check_object_green = 0;
    var guess_object_green = 0;
     
    /*===================================*/ 
    var object_yellow = [1, 2, 3, 4];
    object_yellow.sort(function() {
        return Math.random() - .23
    });

    var object_yellowNumbers = [2, 3, 4];
    object_yellowNumbers.sort(function() {
        return Math.random() - .3
    });

    var object_yellowCounter = 0;
    var check_object_yellow = 0;
    var guess_object_yellow = 0;
     
    /*===================================*/ 
    var object_red = [1, 2, 3, 4];
    object_red.sort(function() {
        return Math.random() - .23
    });

    var object_redNumbers = [2, 3, 4];
    object_redNumbers.sort(function() {
        return Math.random() - .3
    });

    var object_redCounter = 0;
    var check_object_red = 0;
    var guess_object_red = 0;


    //Creating the init function so I don't use the $(document).ready function all the time
    //also, when i do changes to variables will be usuable withing the scope, because I'm having problems
    //working with them outside the function

    function init() {

        //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
        for (var k = 1; k <= 4; k++) {
            $("<li>" + "</li>").attr("id", "object_blue" + k).appendTo("#object_blue");
            $("<li>" + "</li>").attr("id", "object_green" + k).appendTo("#object_green");
            $("<li>" + "</li>").attr("id", "object_yellow" + k).appendTo("#object_yellow");
            $("<li>" + "</li>").attr("id", "object_red" + k).appendTo("#object_red");

        };

        //Hiding every book element that I've created in the body
        for (var i = 1; i <= 4; i++) {
            $("#object_blue" + i).hide();
            $("#object_green" + i).hide();
            $("#object_yellow" + i).hide();
            $("#object_red" + i).hide();
        };

        //create the divs with the little boxes to guess how many shirts were there and adding to 'numbers' div
        for (var k = 1; k <= 4; k++) {
            $("<div>" + k + "</div>").attr("id", "da_object_blue" + k).appendTo("#numbers1");
            $("<div>" + k + "</div>").attr("id", "da_object_green" + k).appendTo("#numbers2");
            $("<div>" + k + "</div>").attr("id", "da_object_yellow" + k).appendTo("#numbers3");
            $("<div>" + k + "</div>").attr("id", "da_object_red" + k).appendTo("#numbers4");
        };

        $("#object_blue_guess").hide();
        $("#object_green_guess").hide();
        $("#object_yellow_guess").hide();
        $("#object_red_guess").hide();

        $("#object_blue_BG").hide();
        $("#object_green_BG").hide();
        $("#object_yellow_BG").hide();
        $("#object_red_BG").hide();


        //creating the divs for tries after the user has guessed
        for (var k = 1; k <= 2; k++) {
            $("<div>" + "</div>").attr("id", "guessMe" + k).appendTo("#test" + k);
        };

        for (var i = 1; i <= 4; i++) {
            $("#test" + i).hide();
            $("#guessMe" + i).hide();
            $("#word" + i).hide();
            $("#numbers" + i).hide();
        };

        $("#popUp").hide();
        $("#score").hide();
        $("#howMany").hide();
        $("#shirtNumGuess").hide();

        //creating a for loop so i decide to show random elements that are hiden.
        //Making them draggable and droppable at the same time while the loop is checking
        //need to ask why i had to use '-1' at the array so the droppable objects are shown in order

        //--------------------------------------------------------------------------------
        //object_blues
        var myobject_bluePosition = 30;
        var leftblueFix = 30;
        var checkblue_top= 0;
        var checkblue_left = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= 4; i++) {
            $("#object_blue" + object_blue[i-1]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                "position": "absolute",
                top: "430px",
                left: dacopy[i - 1] + "px"
            }, 2000);

            $("#object_blue_transparent").droppable({
                accept: "#object_blue > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    object_blueCounter = object_blueCounter + 1;
                    checkblue_top = checkblue_top + 1;
                    checkblue_left = checkblue_left + 1;
                    element_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        left: leftblueFix + "px",
                        top: myobject_bluePosition + "px",
                    }).appendTo("#object_blue_transparent");
//making sure that there will be only 2 items in one line since I can't controll the position 
//with CSS for some reason.                     
                    if (checkblue_top == 2){
                        myobject_bluePosition = 130;
                    };
                    leftblueFix = leftblueFix + 125;
                    if (checkblue_left == 2){
                        leftblueFix = 30;
                    };
                }
            });
        };

//--------------------------------------------------------------------------------
        //object_greens
        var myobject_greenPosition = 30;
        var leftgreenFix = 30;
        var checkgreen_top= 0;
        var checkgreen_left = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= 4; i++) {
            $("#object_green" + object_green[i-1]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                "position": "absolute",
                top: "585px",
                left: dacopy[i - 1] + "px"
            }, 2000);

            $("#object_green_transparent").droppable({
                accept: "#object_green > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    object_greenCounter = object_greenCounter + 1;
                    checkgreen_top = checkgreen_top + 1;
                    checkgreen_left = checkgreen_left + 1;
                    element_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        left: leftgreenFix + "px",
                        top: myobject_greenPosition + "px",
                    }).appendTo("#object_green_transparent");
//making sure that there will be only 2 items in one line since I can't controll the position 
//with CSS for some reason.                     
                    if (checkgreen_top == 2){
                        myobject_greenPosition = 130;
                    };
                    leftgreenFix = leftgreenFix + 125;
                    if (checkgreen_left == 2){
                        leftgreenFix = 30;
                    };
                }
            });
        };

//--------------------------------------------------------------------------------
        //object_yellows
        var myobject_yellowPosition = 30;
        var leftyellowFix = 30;
        var checkyellow_top= 0;
        var checkyellow_left = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= 4; i++) {
            $("#object_yellow" + object_yellow[i-1]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                "position": "absolute",
                top: "630px",
                left: dacopy[i - 1] + "px"
            }, 2000);

            $("#object_yellow_transparent").droppable({
                accept: "#object_yellow > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    object_yellowCounter = object_yellowCounter + 1;
                    checkyellow_top = checkyellow_top + 1;
                    checkyellow_left = checkyellow_left + 1;
                    element_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        left: leftyellowFix + "px",
                        top: myobject_yellowPosition + "px",
                    }).appendTo("#object_yellow_transparent");
//making sure that there will be only 2 items in one line since I can't controll the position 
//with CSS for some reason.                     
                    if (checkyellow_top == 2){
                        myobject_yellowPosition = 130;
                    };
                    leftyellowFix = leftyellowFix + 125;
                    if (checkyellow_left == 2){
                        leftyellowFix = 30;
                    };
                }
            });
        };


//--------------------------------------------------------------------------------
//object_reds
        var myobject_redPosition = 30;
        var leftredFix = 30;
        var checkred_top= 0;
        var checkred_left = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= 4; i++) {
            $("#object_red" + object_red[i-1]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                "position": "absolute",
                top: "680px",
                left: dacopy[i - 1] + "px"
            }, 2000);

            $("#object_red_transparent").droppable({
                accept: "#object_red > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    object_redCounter = object_redCounter + 1;
                    checkred_top = checkred_top + 1;
                    checkred_left = checkred_left + 1;
                    element_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        left: leftredFix + "px",
                        top: myobject_redPosition + "px",
                    }).appendTo("#object_red_transparent");
//making sure that there will be only 2 items in one line since I can't controll the position 
//with CSS for some reason.                     
                    if (checkred_top == 2){
                        myobject_redPosition = 130;
                    };
                    leftredFix = leftredFix + 125;
                    if (checkred_left == 2){
                        leftredFix = 30;
                    };
                }
            });
        };

        //creating a function where it checks if the draggable items are as same as the droppable
        //then show the other elements
        function element_Check() {
            if ((object_blueCounter == 4) && (object_greenCounter == 4) &&
                (object_yellowCounter == 4) && (object_redCounter == 4)) {
                 $("#popUp").fadeIn(2000);
                 $("#score").fadeIn(2000);
                 $("#textMe").hide();
                 $("#previous").hide();
            };
        };

    };

    $(init);

})();