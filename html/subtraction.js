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
        }

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
                        $("#number" + the_result).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guessResult == 3) {
                        $("#inResult").show().text(the_result);
                        $("#result").droppable("disable");
                        $("#choseNumbers").fadeOut(500);
                        $("#popUp").fadeIn(3000);
                        $("#score").fadeIn(3000);
                    }
                }
            });

            if (checkNumber == the_result) {
                $("#result").droppable({
                    accept: "#number" + k,
                    drop: function(ev, ui) {
                        $(this).droppable('disable');
                        $("#choseNumbers").fadeOut(500);
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
                        $("#popUp").fadeIn(3000);
                        $("#score").fadeIn(3000);
                    }
                });
            };
        };


    };


    $(init);

})();