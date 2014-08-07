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
    dacopy = [-60, 100, 200, 300];
    dacopy.sort(function() {
        return Math.random() - .25
    });

    var smths = daXpos[0] + "px";
    var othersmths = daXpos[1] + "px";
    var counter = 0;
    var checkMe = 0;
    var score = 0;
    var guess = 0;

    //There are 7 blue books that need to appear randomly. Array and then random the elements
    var b_books = [1, 2, 3, 4, 5, 6, 7];
    b_books.sort(function() {
        return Math.random() - .23
    });
    var b_booksNumbers = [2, 3, 4];
    b_booksNumbers.sort(function() {
        return Math.random() - .3
    });

    var b_booksCounter = 0;
    var check_b_Books = 0;
    var guess_b_Books = 0;
    var true_b_Books = 0;

    //There are 7 green books that need to appear randomly. Array and then random the elements
    var g_books = [1, 2, 3, 4, 5, 6, 7];
    g_books.sort(function() {
        return Math.random() - .23
    });
    var g_booksNumbers = [2, 3, 4];
    g_booksNumbers.sort(function() {
        return Math.random() - .3
    });

    var g_booksCounter = 0;
    var check_g_Books = 0;
    var guess_g_Books = 0;
    var true_g_Books = 0;

    //There are 7 red books that need to appear randomly. Array and then random the elements
    var r_books = [1, 2, 3, 4, 5, 6, 7];
    r_books.sort(function() {
        return Math.random() - .23
    });
    var r_booksNumbers = [2, 3, 4];
    r_booksNumbers.sort(function() {
        return Math.random() - .3
    });

    var r_booksCounter = 0;
    var check_r_Books = 0;
    var guess_r_Books = 0;
    var true_r_Books = 0;


    //There are 7 yellow books that need to appear randomly. Array and then random the elements
    var y_books = [1, 2, 3, 4, 5, 6];
    y_books.sort(function() {
        return Math.random() - .23
    });
    var y_booksNumbers = [2, 3, 4];
    y_booksNumbers.sort(function() {
        return Math.random() - .3
    });

    var y_booksCounter = 0;
    var check_y_Books = 0;
    var guess_y_Books = 0;
    var true_y_Books = 0;


    //Creating the init function so I don't use the $(document).ready function all the time
    //also, when i do changes to variables will be usuable withing the scope, because I'm having problems
    //working with them outside the function

    function init() {

        //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
        for (var k = 1; k <= 7; k++) {
            $("<li>" + "</li>").attr("id", "b_books" + k).appendTo("#b_books");

            //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
            $("<li>" + "</li>").attr("id", "g_books" + k).appendTo("#g_books");

            //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
            $("<li>" + "</li>").attr("id", "r_books" + k).appendTo("#r_books");
        };
        for (var k = 1; k <= 6; k++) {
            //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
            $("<li>" + "</li>").attr("id", "y_books" + k).appendTo("#y_books");
        };


        //Hiding every book element that I've created in the body
        for (var i = 1; i <= 7; i++) {
            $("#b_books" + i).hide();
            $("#b_books" + i + "_transparent").hide();
            $("#g_books" + i).hide();
            $("#g_books" + i + "_transparent").hide();
            $("#r_books" + i).hide();
            $("#r_books" + i + "_transparent").hide();
        };
        for (var i = 1; i <= 6; i++) {
            $("#y_books" + i).hide();
            $("#y_books" + i + "_transparent").hide();
        };

        //create the divs with the little boxes to guess how many shirts were there and adding to 'numbers' div
        for (var k = 1; k <= 4; k++) {
            $("<div>" + k + "</div>").attr("id", "da_b_books" + k).appendTo("#numbers1");
            $("<div>" + k + "</div>").attr("id", "da_g_books" + k).appendTo("#numbers2");
            $("<div>" + k + "</div>").attr("id", "da_r_books" + k).appendTo("#numbers3");
            $("<div>" + k + "</div>").attr("id", "da_y_books" + k).appendTo("#numbers4");
        };

        $("#b_books_guess").hide();
        $("#g_books_guess").hide();
        $("#r_books_guess").hide();
        $("#y_books_guess").hide();

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
        //Blue Books
        myBlueBookPosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= b_booksNumbers[0]; i++) {
            $("#b_books" + b_books[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "500px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#b_books_transparent").droppable({
                accept: "#b_books > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    b_booksCounter = b_booksCounter + 1;
                    books_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: myBlueBookPosition + "px",
                    }).appendTo("#b_books_transparent");
                    myBlueBookPosition = myBlueBookPosition + 100;
                }
            });
        };

        // //--------------------------------------------------------------------------------
        // //Green Books

        myGreenBookPosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= g_booksNumbers[0]; i++) {
            $("#g_books" + g_books[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "450px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#g_books_transparent").droppable({
                accept: "#g_books > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    g_booksCounter = g_booksCounter + 1;
                    books_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: myGreenBookPosition + "px",
                    }).appendTo("#g_books_transparent");
                    myGreenBookPosition = myGreenBookPosition + 100;
                }
            });
        };

        // //--------------------------------------------------------------------------------
        // //Red Books

        myRedBookPosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= r_booksNumbers[0]; i++) {
            $("#r_books" + r_books[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "380px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#r_books_transparent").droppable({
                accept: "#r_books > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    r_booksCounter = r_booksCounter + 1;
                    books_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: myRedBookPosition + "px",
                    }).appendTo("#r_books_transparent");
                    myRedBookPosition = myRedBookPosition + 100;
                }
            });
        };

        // //--------------------------------------------------------------------------------
        // //Yellow Books

        myYellowBookPosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= y_booksNumbers[0]; i++) {
            $("#y_books" + y_books[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "300px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#y_books_transparent").droppable({
                accept: "#y_books > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    y_booksCounter = y_booksCounter + 1;
                    books_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: myYellowBookPosition + "px",
                    }).appendTo("#y_books_transparent");
                    myYellowBookPosition = myYellowBookPosition + 100;
                }
            });
        };

        //creating a function where it checks if the draggable items are as same as the droppable
        //then show the other elements
        function books_Check() {
            if ((b_booksCounter == b_booksNumbers[0]) && (g_booksCounter == g_booksNumbers[0]) &&
                (r_booksCounter == r_booksNumbers[0]) && (y_booksCounter == y_booksNumbers[0])) {
                for (var i = 1; i <= 4; i++) {
                    $("#test" + i).fadeIn(3000);
                    //            $("#howMany").fadeIn(3000);
                    $("#numbers" + i).fadeIn(3000);
                };

                $("#b_books_guess").fadeIn(3000);
                $("#g_books_guess").fadeIn(3000);
                $("#r_books_guess").fadeIn(3000);
                $("#y_books_guess").fadeIn(3000);

                for (var i = 1; i <= 4; i++) {
                    $("#da_b_books" + i).fadeIn(3000);
                    $("#da_g_books" + i).fadeIn(3000);
                    $("#da_r_books" + i).fadeIn(3000);
                    $("#da_y_books" + i).fadeIn(3000);
                };
            };
        };

        //after the Blue books elements are dropped into their places, the next elements are shown
        //these new elements will be draggable
        //Blue Books
        for (var i = 1; i <= 4; i++) {
            check_b_Books = check_b_Books + 1;
            $("#da_b_books" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_b_Books = guess_b_Books + 1;
                    if (guess_b_Books != b_booksNumbers[0] && guess_b_Books == 2) {
                        $("#da_b_books" + b_booksNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (b_booksNumbers[0] == 2 && guess_b_Books != b_booksNumbers[0] && guess_b_Books == 1) {
                        $("#da_b_books" + b_booksNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_b_Books == 3) {
                        $("#numbers1").hide(50);
                        true_b_Books = 1;
                        checkAllGuess();
                        $("#guessMe1").show().text(b_booksNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_b_Books == b_booksNumbers[0]) {
                $("#test1").droppable({
                    accept: "#da_b_books" + i,
                    drop: function(ev, ui) {
                        true_b_Books = 1;
                        checkAllGuess();
                        $("#guessMe1").show().text(b_booksNumbers[0]);
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
            check_g_Books = check_g_Books + 1;
            $("#da_g_books" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_g_Books = guess_g_Books + 1;
                    if (guess_g_Books != g_booksNumbers[0] && guess_g_Books == 2) {
                        $("#da_g_books" + g_booksNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (g_booksNumbers[0] == 2 && guess_g_Books != g_booksNumbers[0] && guess_g_Books == 1) {
                        $("#da_g_books" + g_booksNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_g_Books == 3) {
                        $("#numbers2").hide(50);
                        true_g_Books = 1;
                        checkAllGuess();
                        $("#guessMe2").show().text(g_booksNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_g_Books == g_booksNumbers[0]) {
                $("#test2").droppable({
                    accept: "#da_g_books" + i,
                    drop: function(ev, ui) {
                        true_g_Books = 1;
                        checkAllGuess();
                        $("#guessMe2").show().text(g_booksNumbers[0]);
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
            check_r_Books = check_r_Books + 1;
            $("#da_r_books" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_r_Books = guess_r_Books + 1;
                    if (guess_r_Books != r_booksNumbers[0] && guess_r_Books == 2) {
                        $("#da_r_books" + r_booksNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (r_booksNumbers[0] == 2 && guess_r_Books != r_booksNumbers[0] && guess_r_Books == 1) {
                        $("#da_r_books" + r_booksNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_r_Books == 3) {
                        $("#numbers3").hide(50);
                        true_r_Books = 1;
                        checkAllGuess();
                        $("#guessMe3").show().text(r_booksNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_r_Books == r_booksNumbers[0]) {
                $("#test3").droppable({
                    accept: "#da_r_books" + i,
                    drop: function(ev, ui) {
                        true_r_Books = 1;
                        checkAllGuess();
                        $("#guessMe3").show().text(r_booksNumbers[0]);
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
            check_y_Books = check_y_Books + 1;
            $("#da_y_books" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_y_Books = guess_y_Books + 1;
                    if (guess_y_Books != y_booksNumbers[0] && guess_y_Books == 2) {
                        $("#da_y_books" + y_booksNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (y_booksNumbers[0] == 2 && guess_y_Books != y_booksNumbers[0] && guess_y_Books == 1) {
                        $("#da_y_books" + y_booksNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_y_Books == 3) {
                        $("#numbers4").hide(50);
                        true_y_Books = 1;
                        checkAllGuess();
                        $("#guessMe4").show().text(y_booksNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_y_Books == y_booksNumbers[0]) {
                $("#test4").droppable({
                    accept: "#da_y_books" + i,
                    drop: function(ev, ui) {
                        true_y_Books = 1;
                        checkAllGuess();
                        $("#guessMe4").show().text(y_booksNumbers[0]);
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
            if ((true_b_Books == 1) && (true_g_Books == 1) && (true_r_Books == 1) &&
                (true_y_Books == 1)) {
                $("#b_books_transparent").hide();
                $("#b_books").hide();
                $("#g_books_transparent").hide();
                $("#g_books").hide();
                $("#r_books_transparent").hide();
                $("#r_books").hide();
                $("#y_books_transparent").hide();
                $("#y_books").hide();
                $("#b_books_guess").hide();
                $("#g_books_guess").hide();
                $("#r_books_guess").hide();
                $("#y_books_guess").hide();

                $("#popUp").fadeIn(3000);
                $("#score").fadeIn(3000);
            };
        };

    };



    $(init);


    //if the person wants to restart the game, i'm using the reload function.
    //have to check if the score can be kept


})();