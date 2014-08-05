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

    //There are 6 types of pillow that need to appear randomly. Array and then random the elements
    var pillow = [1, 2, 3, 4, 5, 6];
    pillow.sort(function() {
        return Math.random() - .23
    });
    var pillowNumbers = [2, 3, 4];
    pillowNumbers.sort(function() {
        return Math.random() - .3
    });

    var pillowCounter = 0;
    var check_pillow = 0;
    var guess_pillow = 0;
    var true_pillow = 0;

    //There are 6 types of dolls that need to appear randomly. Array and then random the elements
    var dolls = [1, 2, 3, 4, 5, 6];
    dolls.sort(function() {
        return Math.random() - .23
    });
    var dollsNumbers = [2, 3, 4];
    dollsNumbers.sort(function() {
        return Math.random() - .3
    });

    var dollsCounter = 0;
    var check_dolls = 0;
    var guess_dolls = 0;
    var true_dolls = 0;


    //There are 6 types of doors that need to appear randomly. Array and then random the elements
    var doors = [1, 2, 3, 4, 5, 6];
    doors.sort(function() {
        return Math.random() - .23
    });
    var doorsNumbers = [2, 3, 4];
    doorsNumbers.sort(function() {
        return Math.random() - .3
    });

    var doorsCounter = 0;
    var check_doors = 0;
    var guess_doors = 0;
    var true_doors = 0;

    //There are 6 helmets of doors that need to appear randomly. Array and then random the elements
    var helmet = [1, 2, 3, 4, 5, 6];
    helmet.sort(function() {
        return Math.random() - .23
    });
    var helmetNumbers = [2, 3, 4];
    helmetNumbers.sort(function() {
        return Math.random() - .3
    });

    var helmetCounter = 0;
    var check_helmet = 0;
    var guess_helmet = 0;
    var true_helmet = 0;

    //Creating the init function so I don't use the $(document).ready function all the time
    //also, when i do changes to variables will be usuable withing the scope, because I'm having problems
    //working with them outside the function

    function init() {

        //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
        for (var k = 1; k <= 6; k++) {
            $("<div>" + "</div>").attr("id", "pillow" + k).appendTo("#pillow");
            $("<div>" + "</div>").attr("id", "pillow" + k + "_transparent").appendTo("#pillow_transparent");

            $("<div>" + "</div>").attr("id", "dolls" + k).appendTo("#dolls");
            $("<div>" + "</div>").attr("id", "dolls" + k + "_transparent").appendTo("#dolls_transparent");

            $("<div>" + "</div>").attr("id", "doors" + k).appendTo("#doors");
            $("<div>" + "</div>").attr("id", "doors" + k + "_transparent").appendTo("#doors_transparent");

            $("<div>" + "</div>").attr("id", "helmet" + k).appendTo("#helmet");
            $("<div>" + "</div>").attr("id", "helmet" + k + "_transparent").appendTo("#helmet_transparent");
        };

        //Hiding every book element that I've created in the body
        for (var i = 1; i <= 6; i++) {
            $("#pillow" + i).hide();
            $("#pillow" + i + "_transparent").hide();

            $("#dolls" + i).hide();
            $("#dolls" + i + "_transparent").hide();

            $("#doors" + i).hide();
            $("#doors" + i + "_transparent").hide();

            $("#helmet" + i).hide();
            $("#helmet" + i + "_transparent").hide();
        };

        //create the divs with the little boxes to guess how many shirts were there and adding to 'numbers' div
        for (var k = 1; k <= 4; k++) {
            $("<div>" + k + "</div>").attr("id", "da_pillow" + k).appendTo("#numbers1");
            $("<div>" + k + "</div>").attr("id", "da_dolls" + k).appendTo("#numbers2");
            $("<div>" + k + "</div>").attr("id", "da_doors" + k).appendTo("#numbers3");
            $("<div>" + k + "</div>").attr("id", "da_helmet" + k).appendTo("#numbers4");
        };

        $("#pillow_guess").hide();
        $("#dolls_guess").hide();
        $("#doors_guess").hide();
        $("#helmet_guess").hide();

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
        //Pillow
        for (var i = 1; i <= pillowNumbers[0]; i++) {
            $("#pillow" + pillow[i]).show();
            $("#pillow" + pillow[i] + "_transparent").show().css({
                "color": "red",
                "left": daTransparent[i - 1] + "px"
            });

            $("#pillow" + pillow[i]).draggable({
                stack: "#pillow",
                revert: true,
                cursor: "move"
            }).animate({
                top: "550px",
                left: dacopy[i] + "px"
            }, 2000);

            $("#pillow" + pillow[i] + "_transparent").droppable({
                accept: "#pillow" + pillow[i],
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    pillowCounter = pillowCounter + 1;
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
        //Dolls
        for (var i = 1; i <= dollsNumbers[0]; i++) {
            $("#dolls" + dolls[i]).show();
            $("#dolls" + dolls[i] + "_transparent").show().css({
                "color": "red",
                "left": daTransparent[i - 1] + "px"
            });

            $("#dolls" + dolls[i]).draggable({
                stack: "#dolls",
                revert: true,
                cursor: "move"
            }).animate({
                top: "450px",
                left: dacopy[i] + "px"
            }, 2000);

            $("#dolls" + dolls[i] + "_transparent").droppable({
                accept: "#dolls" + dolls[i],
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    dollsCounter = dollsCounter + 1;
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
        //Doors
        for (var i = 1; i <= doorsNumbers[0]; i++) {
            $("#doors" + doors[i]).show();
            $("#doors" + doors[i] + "_transparent").show().css({
                "color": "red",
                "left": daTransparent[i - 1] + "px"
            });

            $("#doors" + doors[i]).draggable({
                stack: "#doors",
                revert: true,
                cursor: "move"
            }).animate({
                top: "350px",
                left: dacopy[i] + "px"
            }, 2000);

            $("#doors" + doors[i] + "_transparent").droppable({
                accept: "#doors" + doors[i],
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    doorsCounter = doorsCounter + 1;
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
        //Helmets
        for (var i = 1; i <= helmetNumbers[0]; i++) {
            $("#helmet" + helmet[i]).show();
            $("#helmet" + helmet[i] + "_transparent").show().css({
                "color": "red",
                "left": daTransparent[i - 1] + "px"
            });

            $("#helmet" + helmet[i]).draggable({
                stack: "#helmet",
                revert: true,
                cursor: "move"
            }).animate({
                top: "250px",
                left: dacopy[i] + "px"
            }, 2000);

            $("#helmet" + helmet[i] + "_transparent").droppable({
                accept: "#helmet" + helmet[i],
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    helmetCounter = helmetCounter + 1;
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
            if ((pillowCounter == pillowNumbers[0]) && (dollsCounter == dollsNumbers[0]) &&
                (doorsCounter == doorsNumbers[0]) && (helmetCounter == helmetNumbers[0])) {
                for (var i = 1; i <= 4; i++) {
                    $("#test" + i).fadeIn(3000);
                    //            $("#howMany").fadeIn(3000);
                    $("#numbers" + i).fadeIn(3000);
                };

                $("#pillow_guess").fadeIn(3000);
                $("#dolls_guess").fadeIn(3000);
                $("#doors_guess").fadeIn(3000);
                $("#helmet_guess").fadeIn(3000);

                for (var i = 1; i <= 4; i++) {
                    $("#da_pillow" + i).fadeIn(3000);
                    $("#da_dolls" + i).fadeIn(3000);
                    $("#da_doors" + i).fadeIn(3000);
                    $("#da_helmet" + i).fadeIn(3000);
                };
            };
        };

        //after the Blue books elements are dropped into their places, the next elements are shown
        //these new elements will be draggable

        //Pillow
        for (var i = 1; i <= 4; i++) {
            check_pillow = check_pillow + 1;
            $("#da_pillow" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_pillow = guess_pillow + 1;
                    if (guess_pillow != pillowNumbers[0] && guess_pillow == 2) {
                        $("#da_pillow" + pillowNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (pillowNumbers[0] == 2 && guess_pillow != pillowNumbers[0] && guess_pillow == 1) {
                        $("#da_pillow" + pillowNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_pillow == 3) {
                        $("#numbers1").hide(50);
                        true_pillow = 1;
                        checkAllGuess();
                        $("#guessMe1").show().text(pillowNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_pillow == pillowNumbers[0]) {
                $("#test1").droppable({
                    accept: "#da_pillow" + i,
                    drop: function(ev, ui) {
                        true_pillow = 1;
                        checkAllGuess();
                        $("#guessMe1").show().text(pillowNumbers[0]);
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

        //Dolls
        for (var i = 1; i <= 4; i++) {
            check_dolls = check_dolls + 1;
            $("#da_dolls" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_dolls = guess_dolls + 1;
                    if (guess_dolls != dollsNumbers[0] && guess_dolls == 2) {
                        $("#da_dolls" + dollsNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (dollsNumbers[0] == 2 && guess_dolls != dollsNumbers[0] && guess_dolls == 1) {
                        $("#da_dolls" + dollsNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_dolls == 3) {
                        $("#numbers2").hide(50);
                        true_dolls = 1;
                        checkAllGuess();
                        $("#guessMe2").show().text(dollsNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_dolls == dollsNumbers[0]) {
                $("#test2").droppable({
                    accept: "#da_dolls" + i,
                    drop: function(ev, ui) {
                        true_dolls = 1;
                        checkAllGuess();
                        $("#guessMe2").show().text(dollsNumbers[0]);
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

        //Doors
        for (var i = 1; i <= 4; i++) {
            check_doors = check_doors + 1;
            $("#da_doors" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_doors = guess_doors + 1;
                    if (guess_doors != doorsNumbers[0] && guess_doors == 2) {
                        $("#da_doors" + doorsNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (doorsNumbers[0] == 2 && guess_doors != doorsNumbers[0] && guess_doors == 1) {
                        $("#da_doors" + doorsNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_doors == 3) {
                        $("#numbers3").hide(50);
                        true_doors = 1;
                        checkAllGuess();
                        $("#guessMe3").show().text(doorsNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_doors == doorsNumbers[0]) {
                $("#test3").droppable({
                    accept: "#da_doors" + i,
                    drop: function(ev, ui) {
                        true_doors = 1;
                        checkAllGuess();
                        $("#guessMe3").show().text(doorsNumbers[0]);
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

        //Helmet
        for (var i = 1; i <= 4; i++) {
            check_helmet = check_helmet + 1;
            $("#da_helmet" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_helmet = guess_helmet + 1;
                    if (guess_helmet != helmetNumbers[0] && guess_helmet == 2) {
                        $("#da_helmet" + helmetNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (helmetNumbers[0] == 2 && guess_helmet != helmetNumbers[0] && guess_helmet == 1) {
                        $("#da_helmet" + helmetNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_helmet == 3) {
                        $("#numbers4").hide(50);
                        true_helmet = 1;
                        checkAllGuess();
                        $("#guessMe4").show().text(helmetNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_helmet == helmetNumbers[0]) {
                $("#test4").droppable({
                    accept: "#da_helmet" + i,
                    drop: function(ev, ui) {
                        true_helmet = 1;
                        checkAllGuess();
                        $("#guessMe4").show().text(helmetNumbers[0]);
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
            if ((true_pillow == 1) && (true_dolls == 1) && (true_doors == 1) && (true_helmet == 1)) {
                $("#pillow_transparent").hide();
                $("#pillow").hide();
                $("#pillow_guess").hide();

                $("#dolls_transparent").hide();
                $("#dolls").hide();
                $("#dolls_guess").hide();

                $("#doors_transparent").hide();
                $("#doors").hide();
                $("#doors_guess").hide();

                $("#helmet_transparent").hide();
                $("#helmet").hide();
                $("#helmet_guess").hide();

                $("#popUp").fadeIn(3000);
                $("#score").fadeIn(3000);
            };
        };

    };


    $(init);

})();