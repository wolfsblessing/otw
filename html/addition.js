(function() {

    firstNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    firstNumber.sort(function() {
        return Math.random() - .3
    });

    var secondNumber = 10 - firstNumber[0];

    var thirdNumber = [];
    for (m = 0; m <= secondNumber; m++) {
        thirdNumber.push(m);
    };

    thirdNumber.sort(function() {
        return Math.random() - .3
    });

    var the_result = firstNumber[0] + thirdNumber[0];
    checkNumber = 0;
    guessResult = 0;

    function init() {

        //        $("#showfirst").text(firstNumber[0]);
        //        $("#showsecond").text(secondNumber);
        //       $("#showthird").text(thirdNumber[0]);

        for (k = 1; k <= 10; k++) {
            $("<div>" + k + "</div>").attr("id", "number" + k).appendTo("#choseNumbers");
            $("<div>" + "</div>").attr("id", "toShowFirst" + k).appendTo("#showFirst");
            $("<div>" + "</div>").attr("id", "toShowSecond" + k).appendTo("#showSecond");
            $("<div>" + "</div>").attr("id", "toShowResult" + k).appendTo("#result_2");
        }

        for (k = 1; k <= 10; k++) {
            $("#toShowFirst"+ k).hide();
            $("#toShowSecond"+ k).hide();
            $("#toShowResult"+ k).hide();
        }

        $("#showFirst").hide();
        $("#the_Plus_2").hide();
        $("#showSecond").hide();
        $("#the_equal_2").hide();
        $("#result_2").hide();



        $("<div>" + "</div>").attr("id", "inResult").appendTo("#result");

        $("#firstNumber").text(firstNumber[0]);
        $("#secondNumber").text(thirdNumber[0]);
        $("#inResult").hide();
        $("#popUp").hide();
        $("#score").hide();

        for (k = 1; k <= 10; k++) {
            checkNumber = checkNumber + 1;
            $("#number" + k).draggable({
                revert: true,
                stop: function() {
                    guessResult = guessResult + 1;
                    if (guessResult == 2) {
                        $("#showFirst").fadeIn();
                        $("#the_Plus_2").fadeIn();
                        $("#showSecond").fadeIn();
                        $("#the_equal_2").fadeIn();
                        $("#result_2").fadeIn();
                //creating the objects for the first number
                        for (m = 1; m <= firstNumber[0]; m++) {
                            $("#toShowFirst" + m).show();
                        };
                    //creating the objects for the second number
                        for (k = 1; k <= thirdNumber[0]; k++) {
                            $("#toShowSecond" + k).show();
                        };
                        $("#number" + the_result).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guessResult == 3) {
                        $("#wholeRoom").animate({
                            "width":"1000px"
                        });
                        $("#inResult").show().text(the_result);
                        $("#result").droppable("disable");
//                        $("#choseNumbers").fadeOut(500);
                        $("#popUp").fadeIn(3000);
                        $("#score").fadeIn(3000);

                        for (m = 0; m <= the_result; m++) {
                            $("#toShowResult" + m).show();
                        };
                    }
                }
            });

            if (checkNumber == the_result) {
                $("#result").droppable({
                    accept: "#number" + k,
                    drop: function(ev, ui) {
                //creating the objects for the first number
                        for (m = 1; m <= firstNumber[0]; m++) {
                            $("#toShowFirst" + m).show();
                        };
                    //creating the objects for the second number
                        for (k = 1; k <= thirdNumber[0]; k++) {
                            $("#toShowSecond" + k).show();
                        };
                        $("#showFirst").fadeIn();
                        $("#the_Plus_2").fadeIn();
                        $("#showSecond").fadeIn();
                        $("#the_equal_2").fadeIn();
                        $("#result_2").fadeIn();
                        for (m = 0; m <= the_result; m++) {
                            $("#toShowResult" + m).show();
                        };
                        $(this).droppable('disable');
//                        $("#choseNumbers").fadeOut(500);
                        $("#inResult").show().text(the_result);
                        trueOrfalse = true;
                        ui.draggable.addClass("correct");
                        ui.draggable.draggable({
                            revert: false,
                        }).unbind().position({
                            of: $(this),
                            my: "center",
                            at: "center"
                        }).css({
                            "background-color": "red"
                        }).hide();
                        $("#wholeRoom").animate({
                            "width":"1000px"
                        });
                        $("#popUp").fadeIn(3000);
                        $("#score").fadeIn(3000);
                    }
                });
            };
        };



//the end of init()         
    };


    $(init);

})();