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
    dacopy = [-100, 50, 130, 250];
    dacopy.sort(function() {
        return Math.random() - .25
    });

    var smths = daXpos[0] + "px";
    var othersmths = daXpos[1] + "px";
    var counter = 0;
    var checkMe = 0;
    var score = 0;
    var guess = 0;

    //There are 7 types of airplanes that need to appear randomly. Array and then random the elements
    var airplane = [1, 2, 3, 4, 5, 6, 7];
    airplane.sort(function() {
        return Math.random() - .23
    });
    var airplaneNumbers = [2, 3, 4];
    airplaneNumbers.sort(function() {
        return Math.random() - .3
    });

    var airplaneCounter = 0;
    var check_airplane = 0;
    var guess_airplane = 0;
    var true_airplane = 0;

    //There are 7 green books that need to appear randomly. Array and then random the elements
    var animal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    animal.sort(function() {
        return Math.random() - .23
    });
    var animalNumbers = [2, 3, 4];
    animalNumbers.sort(function() {
        return Math.random() - .3
    });

    var animalCounter = 0;
    var check_animal = 0;
    var guess_animal = 0;
    var true_animal = 0;

    //There are 7 red books that need to appear randomly. Array and then random the elements
    var ball = [1, 2, 3, 4, 5, 6, 7];
    ball.sort(function() {
        return Math.random() - .23
    });
    var ballNumbers = [2, 3, 4];
    ballNumbers.sort(function() {
        return Math.random() - .3
    });

    var ballCounter = 0;
    var check_ball = 0;
    var guess_ball = 0;
    var true_ball = 0;


    //There are 7 yellow books that need to appear randomly. Array and then random the elements
    var car = [1, 2, 3, 4, 5, 6];
    car.sort(function() {
        return Math.random() - .23
    });
    var carNumbers = [2, 3, 4];
    carNumbers.sort(function() {
        return Math.random() - .3
    });

    var carCounter = 0;
    var check_car = 0;
    var guess_car = 0;
    var true_car = 0;


    //Creating the init function so I don't use the $(document).ready function all the time
    //also, when i do changes to variables will be usuable withing the scope, because I'm having problems
    //working with them outside the function

    function init() {

        //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
        for (var k = 1; k <= 7; k++) {
            $("<li>" + "</li>").attr("id", "airplane" + k).appendTo("#airplane");

            //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
            $("<li>" + "</li>").attr("id", "ball" + k).appendTo("#ball");

            //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
            $("<li>" + "</li>").attr("id", "car" + k).appendTo("#car");
        };

        for (var k = 1; k <= 11; k++) {
            //create the divs with the cap name and with the attr. add id's to all divs, and add them to main one
            $("<li>" + "</li>").attr("id", "animal" + k).appendTo("#animal");
        };


        //Hiding every book element that I've created in the body
        for (var i = 1; i <= 7; i++) {
            $("#airplane" + i).hide();
            $("#airplane" + i + "_transparent").hide();
            $("#ball" + i).hide();
            $("#ball" + i + "_transparent").hide();
            $("#car" + i).hide();
            $("#car" + i + "_transparent").hide();
        };
        for (var i = 1; i <= 11; i++) {
            $("#animal" + i).hide();
            $("#animal" + i + "_transparent").hide();
        };

        //create the divs with the little boxes to guess how many shirts were there and adding to 'numbers' div
        for (var k = 1; k <= 4; k++) {
            $("<div>" + k + "</div>").attr("id", "da_airplane" + k).appendTo("#numbers1");
            $("<div>" + k + "</div>").attr("id", "da_animal" + k).appendTo("#numbers2");
            $("<div>" + k + "</div>").attr("id", "da_ball" + k).appendTo("#numbers3");
            $("<div>" + k + "</div>").attr("id", "da_car" + k).appendTo("#numbers4");
        };

        $("#airplane_guess").hide();
        $("#animal_guess").hide();
        $("#ball_guess").hide();
        $("#car_guess").hide();

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
        //Airplanes
        myAirplanePosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= airplaneNumbers[0]; i++) {
            $("#airplane" + airplane[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "280px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#airplane_transparent").droppable({
                accept: "#airplane > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    airplaneCounter = airplaneCounter + 1;
                    element_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: myAirplanePosition + "px",
                    }).appendTo("#airplane_transparent");
                    myAirplanePosition = myAirplanePosition + 100;
                }
            });
        };


        // //--------------------------------------------------------------------------------
        // //Animals
        myAnimalPosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= animalNumbers[0]; i++) {
            $("#animal" + animal[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "270px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#animal_transparent").droppable({
                accept: "#animal > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    animalCounter = animalCounter + 1;
                    element_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: myAnimalPosition + "px",
                    }).appendTo("#animal_transparent");
                    myAnimalPosition = myAnimalPosition + 100;
                }
            });
        };

        // //--------------------------------------------------------------------------------
        // //Balls

        myBallPosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= ballNumbers[0]; i++) {
            $("#ball" + ball[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "220px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#ball_transparent").droppable({
                accept: "#ball > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    ballCounter = ballCounter + 1;
                    element_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: myBallPosition + "px",
                    }).appendTo("#ball_transparent");
                    myBallPosition = myBallPosition + 100;
                }
            });
        };

        // //--------------------------------------------------------------------------------
        // //Cars

        myCarPosition = 0;
        //        function showMyAlph() {
        for (var i = 1; i <= carNumbers[0]; i++) {
            $("#car" + car[i]).show().draggable({
                cursor: "move",
                revert: true
            }).animate({
                top: "190px",
                left: dacopy[i - 1] + "px"
            }, 2000).css({
                "position": "absolute"
            });
            $("#car_transparent").droppable({
                accept: "#car > li",
                drop: function(ev, ui) {
                    ui.draggable.addClass("correct");
                    carCounter = carCounter + 1;
                    element_Check();
                    ui.draggable.draggable({
                        cursor: "default",
                        revert: false
                    }).unbind().css({
                        position: "absolute",
                        top: "5px",
                        left: myCarPosition + "px",
                    }).appendTo("#car_transparent");
                    myCarPosition = myCarPosition + 100;
                }
            });
        };

        //creating a function where it checks if the draggable items are as same as the droppable
        //then show the other elements
        function element_Check() {
            if ((airplaneCounter == airplaneNumbers[0]) && (animalCounter == animalNumbers[0]) &&
                (ballCounter == ballNumbers[0]) && (carCounter == carNumbers[0])) {
                for (var i = 1; i <= 4; i++) {
                    $("#test" + i).fadeIn(3000);
                    //            $("#howMany").fadeIn(3000);
                    $("#numbers" + i).fadeIn(3000);
                };

                $("#airplane_guess").fadeIn(3000);
                $("#animal_guess").fadeIn(3000);
                $("#ball_guess").fadeIn(3000);
                $("#car_guess").fadeIn(3000);

                for (var i = 1; i <= 4; i++) {
                    $("#da_airplan" + i).fadeIn(3000);
                    $("#da_animal" + i).fadeIn(3000);
                    $("#da_ball" + i).fadeIn(3000);
                    $("#da_car" + i).fadeIn(3000);
                };
            };
        };

        //after the Blue books elements are dropped into their places, the next elements are shown
        //these new elements will be draggable
        //Airplanes
        for (var i = 1; i <= 4; i++) {
            check_airplane = check_airplane + 1;
            $("#da_airplane" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_airplane = guess_airplane + 1;
                    if (guess_airplane != airplaneNumbers[0] && guess_airplane == 2) {
                        $("#da_airplane" + airplaneNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (airplaneNumbers[0] == 2 && guess_airplane != airplaneNumbers[0] && guess_airplane == 1) {
                        $("#da_airplane" + airplaneNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_airplane == 3) {
                        $("#numbers1").hide(50);
                        true_airplane = 1;
                        checkAllGuess();
                        $("#guessMe1").show().text(airplaneNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_airplane == airplaneNumbers[0]) {
                $("#test1").droppable({
                    accept: "#da_airplane" + i,
                    drop: function(ev, ui) {
                        true_airplane = 1;
                        checkAllGuess();
                        $("#guessMe1").show().text(airplaneNumbers[0]);
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
            check_animal = check_animal + 1;
            $("#da_animal" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_animal = guess_animal + 1;
                    if (guess_animal != animalNumbers[0] && guess_animal == 2) {
                        $("#da_animal" + animalNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (animalNumbers[0] == 2 && guess_animal != animalNumbers[0] && guess_animal == 1) {
                        $("#da_animal" + animalNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_animal == 3) {
                        $("#numbers2").hide(50);
                        true_animal = 1;
                        checkAllGuess();
                        $("#guessMe2").show().text(animalNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_animal == animalNumbers[0]) {
                $("#test2").droppable({
                    accept: "#da_animal" + i,
                    drop: function(ev, ui) {
                        true_animal = 1;
                        checkAllGuess();
                        $("#guessMe2").show().text(animalNumbers[0]);
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
            check_ball = check_ball + 1;
            $("#da_ball" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_ball = guess_ball + 1;
                    if (guess_ball != ballNumbers[0] && guess_ball == 2) {
                        $("#da_ball" + ballNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (ballNumbers[0] == 2 && guess_ball != ballNumbers[0] && guess_ball == 1) {
                        $("#da_ball" + ballNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_ball == 3) {
                        $("#numbers3").hide(50);
                        true_ball = 1;
                        checkAllGuess();
                        $("#guessMe3").show().text(ballNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_ball == ballNumbers[0]) {
                $("#test3").droppable({
                    accept: "#da_ball" + i,
                    drop: function(ev, ui) {
                        true_ball = 1;
                        checkAllGuess();
                        $("#guessMe3").show().text(ballNumbers[0]);
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
            check_car = check_car + 1;
            $("#da_car" + i).draggable({
                revert: true,
                cursor: "move",
                stop: function() {
                    guess_car = guess_car + 1;
                    if (guess_car != carNumbers[0] && guess_car == 2) {
                        $("#da_car" + carNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (carNumbers[0] == 2 && guess_car != carNumbers[0] && guess_car == 1) {
                        $("#da_car" + carNumbers[0]).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guess_car == 3) {
                        $("#numbers4").hide(50);
                        true_car = 1;
                        checkAllGuess();
                        $("#guessMe4").show().text(carNumbers[0]).unbind();
                    };
                }
            });

            //if the person put the correct number into the box then make the draggable disabled
            //also show the pop up message

            if (check_car == carNumbers[0]) {
                $("#test4").droppable({
                    accept: "#da_car" + i,
                    drop: function(ev, ui) {
                        true_car = 1;
                        checkAllGuess();
                        $("#guessMe4").show().text(carNumbers[0]);
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
            if ((true_airplane == 1) && (true_animal == 1) && (true_ball == 1) &&
                (true_car == 1)) {
                $("#airplane_transparent").hide();
                $("#airplane").hide();
                $("#airplane_outline").hide();
                $("#animal_transparent").hide();
                $("#animal").hide();
                $("#animal_outline").hide();
                $("#ball_transparent").hide();
                $("#ball").hide();
                $("#ball_outline").hide();
                $("#car_transparent").hide();
                $("#car").hide();
                $("#car_outline").hide();
                $("#airplane_guess").hide();
                $("#animal_guess").hide();
                $("#ball_guess").hide();
                $("#car_guess").hide();
                $("#container").hide();

                for (var i = 1; i <= 4; i++) {
                    $("#test" + i).hide();
                    $("#numbers" + i).hide();
                };

                $("#popUp").fadeIn(3000);
                $("#score").fadeIn(3000);
            };
        };

    };



    $(init);


    //if the person wants to restart the game, i'm using the reload function.
    //have to check if the score can be kept


})();