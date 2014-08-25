(function() {

    var firstNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    firstNumber.sort(function() {
        return Math.random() - .3
    });

    var secondNumber = [];

    for (m = 0; m <= firstNumber[0]; m++) {
        secondNumber.push(m);
    }

    secondNumber.sort(function() {
        return Math.random() - .3
    });

    var the_result = firstNumber[0] - secondNumber[0];
    checkNumber = -1;
    guessResult = 0;

    function init() {

        //        $("#showThird").text(thirdNumber[0]);
        //        $("#showFourth").text(fourthNumber);
        //       $("#showFifth").text(fifthNumber[0]);

        for (k = 0; k <= 10; k++) {
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
        $("#secondNumber").text(secondNumber[0]);
        $("#inResult").hide();
        $("#popUp").hide();
        $("#score").hide();

        for (k = 0; k <= 10; k++) {
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
                        for (k = 1; k <= secondNumber[0]; k++) {
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
//                        $("#toShowResult0").fadeIn(3000).text(the_result);
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
                        $("#showFirst").fadeIn();
                        $("#the_Plus_2").fadeIn();
                        $("#showSecond").fadeIn();
                        $("#the_equal_2").fadeIn();
                        $("#result_2").fadeIn();
                    //creating the objects for the first number
                        for (m = 1; m <= firstNumber[0]; m++) {
                            $("#toShowFirst" + m).show();
                        };
                        for (k = 1; k <= secondNumber[0]; k++) {
                            $("#toShowSecond" + k).show();
                        };
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
//                        $("#toShowResult0").fadeIn(3000).text(the_result);
                        $("#popUp").fadeIn(3000);
                        $("#score").fadeIn(3000);
                    }
                });
            };
        };


    };


    $(init);

})();