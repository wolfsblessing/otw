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

    //There are 7 types of object1s that need to appear randomly. Array and then random the elements
    var object1 = [1, 2, 3, 4];
    object1.sort(function() {
        return Math.random() - .23
    });
    var object1Numbers = [2, 3, 4];
    object1Numbers.sort(function() {
        return Math.random() - .3
    });

    var object1Counter = 0;
    var check_object1 = 0;
    var guess_object1 = 0;
    var true_object1 = 0;

    var object2 = [1, 2, 3, 4];
    object2.sort(function() {
        return Math.random() - .23
    });
    var object2Numbers = [2, 3, 4];
    object2Numbers.sort(function() {
        return Math.random() - .3
    });

    var object2Counter = 0;
    var check_object2 = 0;
    var guess_object2 = 0;
    var true_object2 = 0;
  
    //Creating the init function so I don't use the $(document).ready function all the time
    //also, when i do changes to variables will be usuable withing the scope, because I'm having problems
    //working with them outside the function

    function init() {

        //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
        for (var k = 1; k <= 4; k++) {
            $("<li>" + "</li>").attr("id", "object1" + k).appendTo("#object1");
            $("<li>" + "</li>").attr("id", "object2" + k).appendTo("#object2");

        };

        //Hiding every book element that I've created in the body
        for (var i = 1; i <= 4; i++) {
            $("#object1" + i).hide();
            $("#object2" + i).hide();
        };

        //create the divs with the little boxes to guess how many shirts were there and adding to 'numbers' div
        for (var k = 1; k <= 4; k++) {
            $("<div>" + k + "</div>").attr("id", "da_object1" + k).appendTo("#numbers1");
            $("<div>" + k + "</div>").attr("id", "da_object2" + k).appendTo("#numbers2");
        };

        $("#object1_guess").hide();
        $("#object2_guess").hide();

        $("#object1_BG").hide();
        $("#object2_BG").hide();


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
        //object1s
        var myobject1Position = 30;
        var left1Fix = 30;
        var check1_top= 0;
        var check1_left = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= 4; i++) {
            $("#object1" + i).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                "position": "absolute",
                top: "400px",
                left: dacopy[i - 1] + "px"
            }, 2000);

            $("#object1_transparent").droppable({
                accept: "#object1 > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    object1Counter = object1Counter + 1;
                    check1_top = check1_top + 1;
                    check1_left = check1_left + 1;
                    element_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        left: left1Fix + "px",
                        top: myobject1Position + "px",
                    }).appendTo("#object1_transparent");
//making sure that there will be only 2 items in one line since I can't controll the position 
//with CSS for some reason.                     
                    if (check1_top == 2){
                        myobject1Position = 130;
                    };
                    left1Fix = left1Fix + 125;
                    if (check1_left == 2){
                        left1Fix = 30;
                    };
                }
            });
        };

        //--------------------------------------------------------------------------------
        //object2s
        var myobject2Position = 30;
        var left2Fix = 40;
        var check2_top= 0;
        var check2_left = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= 4; i++) {
            $("#object2" + i).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                "position": "absolute",
                top: "560px",
                left: dacopy[i - 1] + "px"
            }, 2000);

            $("#object2_transparent").droppable({
                accept: "#object2 > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    object2Counter = object2Counter + 1;
                    check2_top = check2_top + 1;
                    check2_left = check2_left + 1;
                    element_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        left: left2Fix + "px",
                        top: myobject2Position + "px",
                    }).appendTo("#object2_transparent");
//making sure that there will be only 2 items in one line since I can't controll the position 
//with CSS for some reason.                     
                    if (check2_top == 2){
                        myobject2Position = 230;
                    };
                    left2Fix = left2Fix + 135;
                    if (check2_left == 2){
                        left2Fix = 40;
                    };
                }
            });
        };

        // //creating a function where it checks if the draggable items are as same as the droppable
        // //then show the other elements
        function element_Check() {
            if ((object1Counter == 4) && (object2Counter == 4)) {
                 $("#popUp").fadeIn(3000);
                 $("#score").fadeIn(3000);
                 $("#textMe").hide();
            };
        };

    };

    $(init);

})();