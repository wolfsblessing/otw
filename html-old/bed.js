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
    dacopy = [-70, 120, 220,330];
    dacopy.sort(function() {
        return Math.random() - .25
    });

    var smths = daXpos[0] + "px";
    var othersmths = daXpos[1] + "px";
    var counter = 0;
    var checkMe = 0;
    var score = 0;
    var guess = 0;

    //There are 6 types of pillow1 that need to appear randomly. Array and then random the elements
    var pillow1 = [1, 2, 3, 4, 5];
    pillow1.sort(function() {
        return Math.random() - .23
    });
    var pillow1Numbers = [2, 3, 4];
    pillow1Numbers.sort(function() {
        return Math.random() - .3
    });

    var pillow1Counter = 0;
    var check_pillow1 = 0;
    var guess_pillow1 = 0;
    var true_pillow1 = 0;

    //There are 6 types of dolls that need to appear randomly. Array and then random the elements
    //There are 6 types of pillow1 that need to appear randomly. Array and then random the elements
    var pillow2 = [1, 2, 3, 4, 5];
    pillow2.sort(function() {
        return Math.random() - .23
    });
    var pillow2Numbers = [2, 3, 4];
    pillow2Numbers.sort(function() {
        return Math.random() - .3
    });

    var pillow2Counter = 0;
    var check_pillow2 = 0;
    var guess_pillow2 = 0;
    var true_pillow2 = 0;

    //There are 6 types of pillow3 that need to appear randomly. Array and then random the elements
    var pillow3 = [1, 2, 3, 4, 5];
    pillow3.sort(function() {
        return Math.random() - .23
    });
    var pillow3Numbers = [2, 3, 4];
    pillow3Numbers.sort(function() {
        return Math.random() - .3
    });

    var pillow3Counter = 0;
    var check_pillow3 = 0;
    var guess_pillow3 = 0;
    var true_pillow3 = 0;

    //There are 6 pillow4s of pillow3 that need to appear randomly. Array and then random the elements
    var pillow4 = [1, 2, 3, 4, 5];
    pillow4.sort(function() {
        return Math.random() - .23
    });
    var pillow4Numbers = [2, 3, 4];
    pillow4Numbers.sort(function() {
        return Math.random() - .3
    });

    var pillow4Counter = 0;
    var check_pillow4 = 0;
    var guess_pillow4 = 0;
    var true_pillow4 = 0;

    //Creating the init function so I don't use the $(document).ready function all the time
    //also, when i do changes to variables will be usuable withing the scope, because I'm having problems
    //working with them outside the function

    function init() {

        //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
        for (var k = 1; k <= 5; k++) {
            $("<li>" + "</li>").attr("id", "pillow1" + k).appendTo("#pillow1");
            $("<li>" + "</li>").attr("id", "pillow2" + k).appendTo("#pillow2");
            $("<li>" + "</li>").attr("id", "pillow3" + k).appendTo("#pillow3");
            $("<li>" + "</li>").attr("id", "pillow4" + k).appendTo("#pillow4");
        };

        //Hiding every book element that I've created in the body
        for (var i = 1; i <= 6; i++) {
            $("#pillow1" + i).hide();
            $("#pillow2" + i).hide();
            $("#pillow3" + i).hide();
            $("#pillow4" + i).hide();
        };

        //create the divs with the little boxes to guess how many shirts were there and adding to 'numbers' div
        for (var k = 1; k <= 4; k++) {
            $("<div>" + k + "</div>").attr("id", "da_pillow1" + k).appendTo("#numbers1");
            $("<div>" + k + "</div>").attr("id", "da_pillow2" + k).appendTo("#numbers2");
            $("<div>" + k + "</div>").attr("id", "da_pillow3" + k).appendTo("#numbers3");
            $("<div>" + k + "</div>").attr("id", "da_pillow4" + k).appendTo("#numbers4");
        };

        $("#pillow1_guess").hide();
        $("#pillow_guess").hide();
        $("#pillow3_guess").hide();
        $("#pillow4_guess").hide();

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
        //pillow1

        mypillow11Position = 0;
        for (var i = 1; i <= 1; i++) {
            $("#pillow1" + pillow1[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "500px",
                left: dacopy[0] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#pillow1_transparent").droppable({
                accept: "#pillow1 > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
//                    b_booksCounter = b_booksCounter + 1;
//                    books_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: mypillow11Position + "px",
                    }).appendTo("#pillow1_transparent");
                }
            });
        };

        mypillow2Position = 0;
        for (var i = 1; i <= 1; i++) {
            $("#pillow2" + pillow2[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "500px",
                left: dacopy[1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#pillow2_transparent").droppable({
                accept: "#pillow2 > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
//                    b_booksCounter = b_booksCounter + 1;
//                    books_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: mypillow2Position + "px",
                    }).appendTo("#pillow2_transparent");
                    mypillow2Position = mypillow2Position + 100;
                }
            });
        };

        mypillow3Position = 0;
        for (var i = 1; i <= 1; i++) {
            $("#pillow3" + pillow3[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "500px",
                left: dacopy[2] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#pillow3_transparent").droppable({
                accept: "#pillow3 > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
//                    b_booksCounter = b_booksCounter + 1;
//                    books_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: mypillow3Position + "px",
                    }).appendTo("#pillow3_transparent");
                    mypillow3Position = mypillow3Position + 100;
                }
            });
        };

        mypillow4Position = 0;
        for (var i = 1; i <= 1; i++) {
            $("#pillow4" + pillow4[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "500px",
                left: dacopy[3] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#pillow4_transparent").droppable({
                accept: "#pillow4 > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
//                    b_booksCounter = b_booksCounter + 1;
//                    books_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: mypillow4Position + "px",
                    }).appendTo("#pillow4_transparent");
                    mypillow4Position = mypillow4Position + 100;
                }
            });
        };



        // //--------------------------------------------------------------------------------
        // //pillow4s
        // for (var i = 1; i <= pillow4Numbers[0]; i++) {
        //     $("#pillow4" + pillow4[i]).show();
        //     $("#pillow4" + pillow4[i] + "_transparent").show().css({
        //         "color": "red",
        //         "left": daTransparent[i - 1] + "px"
        //     });

        //     $("#pillow4" + pillow4[i]).draggable({
        //         stack: "#pillow4",
        //         revert: true,
        //         cursor: "move"
        //     }).animate({
        //         top: "250px",
        //         left: dacopy[i] + "px"
        //     }, 2000);

        //     $("#pillow4" + pillow4[i] + "_transparent").droppable({
        //         accept: "#pillow4" + pillow4[i],
        //         drop: function(ev, ui) {
        //             ui.draggable.addClass("correct");
        //             pillow4Counter = pillow4Counter + 1;
        //             element_Check();
        //             $(this).droppable('disable');
        //             ui.draggable.draggable({
        //                 revert: false,
        //             }).unbind().position({
        //                 of: $(this),
        //                 my: "center",
        //                 at: "center"
        //             });
        //         }
        //     });
        // };

        // //creating a function where it checks if the draggable items are as same as the droppable
        // //then show the other elements
        // function element_Check() {
        //     if ((pillow1Counter == pillow1Numbers[0]) && (dollsCounter == dollsNumbers[0]) &&
        //         (pillow3Counter == pillow3Numbers[0]) && (pillow4Counter == pillow4Numbers[0])) {
        //         for (var i = 1; i <= 4; i++) {
        //             $("#test" + i).fadeIn(3000);
        //             //            $("#howMany").fadeIn(3000);
        //             $("#numbers" + i).fadeIn(3000);
        //         };

        //         $("#pillow1_guess").fadeIn(3000);
        //         $("#dolls_guess").fadeIn(3000);
        //         $("#pillow3_guess").fadeIn(3000);
        //         $("#pillow4_guess").fadeIn(3000);

        //         for (var i = 1; i <= 4; i++) {
        //             $("#da_pillow1" + i).fadeIn(3000);
        //             $("#da_dolls" + i).fadeIn(3000);
        //             $("#da_pillow3" + i).fadeIn(3000);
        //             $("#da_pillow4" + i).fadeIn(3000);
        //         };
        //     };
        // };

        // //after the Blue books elements are dropped into their places, the next elements are shown
        // //these new elements will be draggable

        // //pillow1
        // for (var i = 1; i <= 4; i++) {
        //     check_pillow1 = check_pillow1 + 1;
        //     $("#da_pillow1" + i).draggable({
        //         revert: true,
        //         cursor: "move",
        //         stop: function() {
        //             guess_pillow1 = guess_pillow1 + 1;
        //             if (guess_pillow1 != pillow1Numbers[0] && guess_pillow1 == 2) {
        //                 $("#da_pillow1" + pillow1Numbers[0]).animate({
        //                     "background-color": "red"
        //                 }, 2000);
        //             };
        //             if (pillow1Numbers[0] == 2 && guess_pillow1 != pillow1Numbers[0] && guess_pillow1 == 1) {
        //                 $("#da_pillow1" + pillow1Numbers[0]).animate({
        //                     "background-color": "red"
        //                 }, 2000);
        //             };
        //             if (guess_pillow1 == 3) {
        //                 $("#numbers1").hide(50);
        //                 true_pillow1 = 1;
        //                 checkAllGuess();
        //                 $("#guessMe1").show().text(pillow1Numbers[0]).unbind();
        //             };
        //         }
        //     });

        //     //if the person put the correct number into the box then make the draggable disabled
        //     //also show the pop up message

        //     if (check_pillow1 == pillow1Numbers[0]) {
        //         $("#test1").droppable({
        //             accept: "#da_pillow1" + i,
        //             drop: function(ev, ui) {
        //                 true_pillow1 = 1;
        //                 checkAllGuess();
        //                 $("#guessMe1").show().text(pillow1Numbers[0]);
        //                 $(this).droppable("disable");
        //                 $("#numbers1").hide();
        //                 ui.draggable.draggable({
        //                     revert: false,
        //                 }).unbind().position({
        //                     of: $(this),
        //                     my: "center",
        //                     at: "center"
        //                 });
        //             }
        //         });
        //     };
        // };

        // //Dolls
        // for (var i = 1; i <= 4; i++) {
        //     check_dolls = check_dolls + 1;
        //     $("#da_dolls" + i).draggable({
        //         revert: true,
        //         cursor: "move",
        //         stop: function() {
        //             guess_dolls = guess_dolls + 1;
        //             if (guess_dolls != dollsNumbers[0] && guess_dolls == 2) {
        //                 $("#da_dolls" + dollsNumbers[0]).animate({
        //                     "background-color": "red"
        //                 }, 2000);
        //             };
        //             if (dollsNumbers[0] == 2 && guess_dolls != dollsNumbers[0] && guess_dolls == 1) {
        //                 $("#da_dolls" + dollsNumbers[0]).animate({
        //                     "background-color": "red"
        //                 }, 2000);
        //             };
        //             if (guess_dolls == 3) {
        //                 $("#numbers2").hide(50);
        //                 true_dolls = 1;
        //                 checkAllGuess();
        //                 $("#guessMe2").show().text(dollsNumbers[0]).unbind();
        //             };
        //         }
        //     });

        //     //if the person put the correct number into the box then make the draggable disabled
        //     //also show the pop up message

        //     if (check_dolls == dollsNumbers[0]) {
        //         $("#test2").droppable({
        //             accept: "#da_dolls" + i,
        //             drop: function(ev, ui) {
        //                 true_dolls = 1;
        //                 checkAllGuess();
        //                 $("#guessMe2").show().text(dollsNumbers[0]);
        //                 $(this).droppable("disable");
        //                 $("#numbers2").hide();
        //                 ui.draggable.draggable({
        //                     revert: false,
        //                 }).unbind().position({
        //                     of: $(this),
        //                     my: "center",
        //                     at: "center"
        //                 });
        //             }
        //         });
        //     };
        // };

        // //pillow3
        // for (var i = 1; i <= 4; i++) {
        //     check_pillow3 = check_pillow3 + 1;
        //     $("#da_pillow3" + i).draggable({
        //         revert: true,
        //         cursor: "move",
        //         stop: function() {
        //             guess_pillow3 = guess_pillow3 + 1;
        //             if (guess_pillow3 != pillow3Numbers[0] && guess_pillow3 == 2) {
        //                 $("#da_pillow3" + pillow3Numbers[0]).animate({
        //                     "background-color": "red"
        //                 }, 2000);
        //             };
        //             if (pillow3Numbers[0] == 2 && guess_pillow3 != pillow3Numbers[0] && guess_pillow3 == 1) {
        //                 $("#da_pillow3" + pillow3Numbers[0]).animate({
        //                     "background-color": "red"
        //                 }, 2000);
        //             };
        //             if (guess_pillow3 == 3) {
        //                 $("#numbers3").hide(50);
        //                 true_pillow3 = 1;
        //                 checkAllGuess();
        //                 $("#guessMe3").show().text(pillow3Numbers[0]).unbind();
        //             };
        //         }
        //     });

        //     //if the person put the correct number into the box then make the draggable disabled
        //     //also show the pop up message

        //     if (check_pillow3 == pillow3Numbers[0]) {
        //         $("#test3").droppable({
        //             accept: "#da_pillow3" + i,
        //             drop: function(ev, ui) {
        //                 true_pillow3 = 1;
        //                 checkAllGuess();
        //                 $("#guessMe3").show().text(pillow3Numbers[0]);
        //                 $(this).droppable("disable");
        //                 $("#numbers3").hide();
        //                 ui.draggable.draggable({
        //                     revert: false,
        //                 }).unbind().position({
        //                     of: $(this),
        //                     my: "center",
        //                     at: "center"
        //                 });
        //             }
        //         });
        //     };
        // };

        // //pillow4
        // for (var i = 1; i <= 4; i++) {
        //     check_pillow4 = check_pillow4 + 1;
        //     $("#da_pillow4" + i).draggable({
        //         revert: true,
        //         cursor: "move",
        //         stop: function() {
        //             guess_pillow4 = guess_pillow4 + 1;
        //             if (guess_pillow4 != pillow4Numbers[0] && guess_pillow4 == 2) {
        //                 $("#da_pillow4" + pillow4Numbers[0]).animate({
        //                     "background-color": "red"
        //                 }, 2000);
        //             };
        //             if (pillow4Numbers[0] == 2 && guess_pillow4 != pillow4Numbers[0] && guess_pillow4 == 1) {
        //                 $("#da_pillow4" + pillow4Numbers[0]).animate({
        //                     "background-color": "red"
        //                 }, 2000);
        //             };
        //             if (guess_pillow4 == 3) {
        //                 $("#numbers4").hide(50);
        //                 true_pillow4 = 1;
        //                 checkAllGuess();
        //                 $("#guessMe4").show().text(pillow4Numbers[0]).unbind();
        //             };
        //         }
        //     });

        //     //if the person put the correct number into the box then make the draggable disabled
        //     //also show the pop up message

        //     if (check_pillow4 == pillow4Numbers[0]) {
        //         $("#test4").droppable({
        //             accept: "#da_pillow4" + i,
        //             drop: function(ev, ui) {
        //                 true_pillow4 = 1;
        //                 checkAllGuess();
        //                 $("#guessMe4").show().text(pillow4Numbers[0]);
        //                 $(this).droppable("disable");
        //                 $("#numbers4").hide();
        //                 ui.draggable.draggable({
        //                     revert: false,
        //                 }).unbind().position({
        //                     of: $(this),
        //                     my: "center",
        //                     at: "center"
        //                 });
        //             }
        //         });
        //     };
        // };

        // function checkAllGuess() {
        //     if ((true_pillow1 == 1) && (true_dolls == 1) && (true_pillow3 == 1) && (true_pillow4 == 1)) {
        //         $("#pillow1_transparent").hide();
        //         $("#pillow1").hide();
        //         $("#pillow1_guess").hide();

        //         $("#dolls_transparent").hide();
        //         $("#dolls").hide();
        //         $("#dolls_guess").hide();

        //         $("#pillow3_transparent").hide();
        //         $("#pillow3").hide();
        //         $("#pillow3_guess").hide();

        //         $("#pillow4_transparent").hide();
        //         $("#pillow4").hide();
        //         $("#pillow4_guess").hide();

        //         $("#popUp").fadeIn(3000);
        //         $("#score").fadeIn(3000);
        //     };
        // };

    };


    $(init);

})();