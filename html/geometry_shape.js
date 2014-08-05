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
    dacopy = [20, 40, 60, 80];
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
    var object1 = [1, 2, 3, 4, 5, 6, 7];
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

    //There are 7 green books that need to appear randomly. Array and then random the elements
    var object2 = [1, 2, 3, 4, 5, 6, 7];
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

    //There are 7 red books that need to appear randomly. Array and then random the elements
    var object3 = [1, 2, 3, 4, 5, 6, 7];
    object3.sort(function() {
        return Math.random() - .23
    });
    var object3Numbers = [2, 3, 4];
    object3Numbers.sort(function() {
        return Math.random() - .3
    });

    var object3Counter = 0;
    var check_object3 = 0;
    var guess_object3 = 0;
    var true_object3 = 0;


    //There are 7 yellow books that need to appear randomly. Array and then random the elements
    var object4 = [1, 2, 3, 4, 5, 6];
    object4.sort(function() {
        return Math.random() - .23
    });
    var object4Numbers = [2, 3, 4];
    object4Numbers.sort(function() {
        return Math.random() - .3
    });

    var object4Counter = 0;
    var check_object4 = 0;
    var guess_object4 = 0;
    var true_object4 = 0;


    //Creating the init function so I don't use the $(document).ready function all the time
    //also, when i do changes to variables will be usuable withing the scope, because I'm having problems
    //working with them outside the function

    function init() {

        //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
        for (var k = 1; k <= 7; k++) {
            $("<div>" + "</div>").attr("id", "object1" + k).appendTo("#object1");
            $("<div>" + "</div>").attr("id", "object1" + k + "_transparent").appendTo("#object1_transparent");

            $("<div>" + "</div>").attr("id", "object2" + k).appendTo("#object2");
            $("<div>" + "</div>").attr("id", "object2" + k + "_transparent").appendTo("#object2_transparent");

            //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
            $("<div>" + "</div>").attr("id", "object3" + k).appendTo("#object3");
            $("<div>" + "</div>").attr("id", "object3" + k + "_transparent").appendTo("#object3_transparent");

            //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
            $("<div>" + "</div>").attr("id", "object4" + k).appendTo("#object4");
            $("<div>" + "</div>").attr("id", "object4" + k + "_transparent").appendTo("#object4_transparent");
        };

        for (var k = 1; k <= 11; k++) {};


        //Hiding every book element that I've created in the body
        for (var i = 1; i <= 7; i++) {
            $("#object1" + i).hide();
            $("#object1" + i + "_transparent").hide();
            $("#object3" + i).hide();
            $("#object3" + i + "_transparent").hide();
            $("#object4" + i).hide();
            $("#object4" + i + "_transparent").hide();
        };
        for (var i = 1; i <= 11; i++) {
            $("#object2" + i).hide();
            $("#object2" + i + "_transparent").hide();
        };

        //create the divs with the little boxes to guess how many shirts were there and adding to 'numbers' div
        for (var k = 1; k <= 4; k++) {
            $("<div>" + k + "</div>").attr("id", "da_object1" + k).appendTo("#numbers1");
            $("<div>" + k + "</div>").attr("id", "da_object2" + k).appendTo("#numbers2");
            $("<div>" + k + "</div>").attr("id", "da_object3" + k).appendTo("#numbers3");
            $("<div>" + k + "</div>").attr("id", "da_object4" + k).appendTo("#numbers4");
        };

        $("#object1_guess").hide();
        $("#object2_guess").hide();
        $("#object3_guess").hide();
        $("#object4_guess").hide();

        //creating the divs for tries after the user has guessed
        for (var k = 1; k <= 5; k++) {
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
        for (var i = 1; i <= object1Numbers[0]; i++) {
            $("#object1" + object1[i]).show();
            $("#object1" + object1[i] + "_transparent").show().css({
                "color": "red",
                "left": daTransparent[i - 1] + "px"
            });

            $("#object1" + object1[i]).draggable({
                stack: "#object1",
                revert: true,
                cursor: "move"
            }).animate({
                top: "550px",
                left: dacopy[i] + "px"
            }, 2000);

            $("#object1" + object1[i] + "_transparent").droppable({
                accept: "#object1" + object1[i],
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    object1Counter = object1Counter + 1;
                    element_Check();
                    $(this).droppable('disable');
                    ui.draggable.draggable({
                        revert: false,
                    }).unbind().position({
                        of: $(this),
                        my: "center",
                        at: "center"
                    });
                }
            });
        };

        //--------------------------------------------------------------------------------
        //object2s
        for (var i = 1; i <= object2Numbers[0]; i++) {
            $("#object2" + object2[i]).show();
            $("#object2" + object2[i] + "_transparent").show().css({
                "color": "red",
                "left": daTransparent[i - 1] + "px"
            });

            $("#object2" + object2[i]).draggable({
                stack: "#object2",
                revert: true,
                cursor: "move"
            }).animate({
                top: "450px",
                left: dacopy[i] + "px"
            }, 2000);

            $("#object2" + object2[i] + "_transparent").droppable({
                accept: "#object2" + object2[i],
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    object2Counter = object2Counter + 1;
                    element_Check();
                    $(this).droppable('disable');
                    ui.draggable.draggable({
                        revert: false,
                    }).unbind().position({
                        of: $(this),
                        my: "center",
                        at: "center"
                    });
                }
            });
        };

        //--------------------------------------------------------------------------------
        //object3s
        for (var i = 1; i <= object3Numbers[0]; i++) {
            $("#object3" + object3[i]).show();
            $("#object3" + object3[i] + "_transparent").show().css({
                "color": "red",
                "left": daTransparent[i - 1] + "px"
            });

            $("#object3" + object3[i]).draggable({
                stack: "#object3",
                revert: true,
                cursor: "move"
            }).animate({
                top: "350px",
                left: dacopy[i] + "px"
            }, 2000);

            $("#object3" + object3[i] + "_transparent").droppable({
                accept: "#object3" + object3[i],
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    object3Counter = object3Counter + 1;
                    element_Check();
                    $(this).droppable('disable');
                    ui.draggable.draggable({
                        revert: false,
                    }).unbind().position({
                        of: $(this),
                        my: "center",
                        at: "center"
                    });
                }
            });
        };

        //--------------------------------------------------------------------------------
        //object4s
        for (var i = 1; i <= object4Numbers[0]; i++) {
            $("#object4" + object4[i]).show();
            $("#object4" + object4[i] + "_transparent").show().css({
                "color": "red",
                "left": daTransparent[i - 1] + "px"
            });

            $("#object4" + object4[i]).draggable({
                stack: "#object4",
                revert: true,
                cursor: "move"
            }).animate({
                top: "250px",
                left: dacopy[i] + "px"
            }, 2000);

            $("#object4" + object4[i] + "_transparent").droppable({
                accept: "#object4" + object4[i],
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    object4Counter = object4Counter + 1;
                    element_Check();
                    $(this).droppable('disable');
                    ui.draggable.draggable({
                        revert: false,
                    }).unbind().position({
                        of: $(this),
                        my: "center",
                        at: "center"
                    });
                }
            });
        };


        //creating a function where it checks if the draggable items are as same as the droppable
        //then show the other elements
        function element_Check() {
            if ((object1Counter == object1Numbers[0]) && (object2Counter == object2Numbers[0]) &&
                (object3Counter == object3Numbers[0]) && (object4Counter == object4Numbers[0])) {
                for (var i = 1; i <= 4; i++) {
                    $("#test" + i).fadeIn(3000);
                    //            $("#howMany").fadeIn(3000);
                    $("#numbers" + i).fadeIn(3000);
                };

                $("#object1_guess").fadeIn(3000);
                $("#object2_guess").fadeIn(3000);
                $("#object3_guess").fadeIn(3000);
                $("#object4_guess").fadeIn(3000);

                for (var i = 1; i <= 4; i++) {
                    $("#da_airplan" + i).fadeIn(3000);
                    $("#da_object2" + i).fadeIn(3000);
                    $("#da_object3" + i).fadeIn(3000);
                    $("#da_object4" + i).fadeIn(3000);
                };
            };
        };

        //after the Blue books elements are dropped into their places, the next elements are shown
        //these new elements will be draggable
        //object1s
        for (var i = 1; i <= 4; i++) {
            check_object1 = check_object1 + 1;
            $("#da_object1" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_object1 = guess_object1 + 1;
                    if (guess_object1 != object1Numbers[0] && guess_object1 == 2) {
                        $("#da_object1" + object1Numbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (object1Numbers[0] == 2 && guess_object1 != object1Numbers[0] && guess_object1 == 1) {
                        $("#da_object1" + object1Numbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_object1 == 3) {
                        $("#numbers1").hide(50);
                        true_object1 = 1;
                        checkAllGuess();
                        $("#guessMe1").show().text(object1Numbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_object1 == object1Numbers[0]) {
                $("#test1").droppable({
                    accept: "#da_object1" + i,
                    drop: function(ev, ui) {
                        true_object1 = 1;
                        checkAllGuess();
                        $("#guessMe1").show().text(object1Numbers[0]);
                        $(this).droppable("disable");
                        $("#numbers1").hide();
                        ui.draggable.draggable({
                            revert: false,
                        }).unbind().position({
                            of: $(this),
                            my: "center",
                            at: "center"
                        });
                    }
                });
            };
        };

        //Green Books
        for (var i = 1; i <= 4; i++) {
            check_object2 = check_object2 + 1;
            $("#da_object2" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_object2 = guess_object2 + 1;
                    if (guess_object2 != object2Numbers[0] && guess_object2 == 2) {
                        $("#da_object2" + object2Numbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (object2Numbers[0] == 2 && guess_object2 != object2Numbers[0] && guess_object2 == 1) {
                        $("#da_object2" + object2Numbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_object2 == 3) {
                        $("#numbers2").hide(50);
                        true_object2 = 1;
                        checkAllGuess();
                        $("#guessMe2").show().text(object2Numbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_object2 == object2Numbers[0]) {
                $("#test2").droppable({
                    accept: "#da_object2" + i,
                    drop: function(ev, ui) {
                        true_object2 = 1;
                        checkAllGuess();
                        $("#guessMe2").show().text(object2Numbers[0]);
                        $(this).droppable("disable");
                        $("#numbers2").hide();
                        ui.draggable.draggable({
                            revert: false,
                        }).unbind().position({
                            of: $(this),
                            my: "center",
                            at: "center"
                        });
                    }
                });
            };
        };

        //Red Books
        for (var i = 1; i <= 4; i++) {
            check_object3 = check_object3 + 1;
            $("#da_object3" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_object3 = guess_object3 + 1;
                    if (guess_object3 != object3Numbers[0] && guess_object3 == 2) {
                        $("#da_object3" + object3Numbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (object3Numbers[0] == 2 && guess_object3 != object3Numbers[0] && guess_object3 == 1) {
                        $("#da_object3" + object3Numbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_object3 == 3) {
                        $("#numbers3").hide(50);
                        true_object3 = 1;
                        checkAllGuess();
                        $("#guessMe3").show().text(object3Numbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_object3 == object3Numbers[0]) {
                $("#test3").droppable({
                    accept: "#da_object3" + i,
                    drop: function(ev, ui) {
                        true_object3 = 1;
                        checkAllGuess();
                        $("#guessMe3").show().text(object3Numbers[0]);
                        $(this).droppable("disable");
                        $("#numbers3").hide();
                        ui.draggable.draggable({
                            revert: false,
                        }).unbind().position({
                            of: $(this),
                            my: "center",
                            at: "center"
                        });
                    }
                });
            };
        };

        //Yellow Books
        for (var i = 1; i <= 4; i++) {
            check_object4 = check_object4 + 1;
            $("#da_object4" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_object4 = guess_object4 + 1;
                    if (guess_object4 != object4Numbers[0] && guess_object4 == 2) {
                        $("#da_object4" + object4Numbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (object4Numbers[0] == 2 && guess_object4 != object4Numbers[0] && guess_object4 == 1) {
                        $("#da_object4" + object4Numbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_object4 == 3) {
                        $("#numbers4").hide(50);
                        true_object4 = 1;
                        checkAllGuess();
                        $("#guessMe4").show().text(object4Numbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_object4 == object4Numbers[0]) {
                $("#test4").droppable({
                    accept: "#da_object4" + i,
                    drop: function(ev, ui) {
                        true_object4 = 1;
                        checkAllGuess();
                        $("#guessMe4").show().text(object4Numbers[0]);
                        $(this).droppable("disable");
                        $("#numbers4").hide();
                        ui.draggable.draggable({
                            revert: false,
                        }).unbind().position({
                            of: $(this),
                            my: "center",
                            at: "center"
                        });
                    }
                });
            };
        };

        function checkAllGuess() {
            if ((true_object1 == 1) && (true_object2 == 1) && (true_object3 == 1) &&
                (true_object4 == 1)) {
                $("#object1_transparent").hide();
                $("#object1").hide();
                $("#object2_transparent").hide();
                $("#object2").hide();
                $("#object3_transparent").hide();
                $("#object3").hide();
                $("#object4_transparent").hide();
                $("#object4").hide();
                $("#object1_guess").hide();
                $("#object2_guess").hide();
                $("#object3_guess").hide();
                $("#object4_guess").hide();

                $("#popUp").fadeIn(3000);
                $("#score").fadeIn(3000);
            };
        };

    };



    $(init);


    //if the person wants to restart the game, i'm using the reload function.
    //have to check if the score can be kept


})();