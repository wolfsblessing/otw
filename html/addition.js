
(function() {
    remember_my_count = 0;

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

/*==========================================================*/

    first_five = [1, 2, 3, 4, 5];

    first_five.sort(function() {
        return Math.random() - .32
    });

    var second_five = 5 - first_five[0];

    var third_five = [];
    for (m = 0; m <= second_five; m++) {
        third_five.push(m);
    };

    third_five.sort(function() {
        return Math.random() - .32
    });

    var five_result = first_five[0] + third_five[0];
/*==========================================================*/

    first_seven = [1, 2, 3, 4, 5, 6, 7];

    first_seven.sort(function() {
        return Math.random() - .32
    });

    var second_seven = 7 - first_seven[0];

    var third_seven = [];
    for (m = 0; m <= second_seven; m++) {
        third_seven.push(m);
    };

    third_seven.sort(function() {
        return Math.random() - .32
    });

    var seven_result = first_seven[0] + third_seven[0];

/*==========================================================*/

            first_random = first_five[0];
            second_random = third_five[0];
            result_random = five_result;
            length_random = first_five.length;

/*==========================================================*/


    function init() {

        $("#showCheckMe").text(store.get("remember_my_count"));

        for (k = 1; k <= 10; k++) {
            $("<div>" + k + "</div>").attr("id", "number" + k).appendTo("#choseNumbers");
            $("<div>" + "</div>").attr("id", "toShowFirst" + k).appendTo("#showFirst");
            $("<div>" + "</div>").attr("id", "toShowSecond" + k).appendTo("#showSecond");
            $("<div>" + "</div>").attr("id", "toShowResult" + k).appendTo("#result_2");
        }

        for (k = 1; k <= 10; k++) {
            $("#number"+ k).hide();
            $("#toShowFirst"+ k).hide();
            $("#toShowSecond"+ k).hide();
            $("#toShowResult"+ k).hide();
        }

        $("#showFirst").hide();
        $("#the_Plus_2").hide();
        $("#showSecond").hide();
        $("#the_equal_2").hide();
        $("#result_2").hide();
        $("#popUp2").hide();


        $("<div>" + "</div>").attr("id", "inResult").appendTo("#result");

         if (store.get("remember_my_count") > 3){
            first_random = first_seven[0];
            second_random = third_seven[0];
            result_random = seven_result;
            length_random = first_seven.length;
        };

         if (store.get("remember_my_count") > 7){
            first_random = firstNumber[0];
            second_random = thirdNumber[0];
            result_random = the_result;
            length_random = firstNumber.length;
        };

        $("#firstNumber").text(first_random);
        $("#secondNumber").text(second_random);
        $("#inResult").hide();
        $("#popUp").hide();
        $("#score").hide();

        for (k = 1; k <= length_random; k++) {
            checkNumber = checkNumber + 1;
            $("#number" + k).show().draggable({
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
                        for (m = 1; m <= first_random; m++) {
                            $("#toShowFirst" + m).show();
                        };
                    //creating the objects for the second number
                        for (k = 1; k <= second_random; k++) {
                            $("#toShowSecond" + k).show();
                        };
                        $("#number" + result_random).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guessResult == 3) {
                        $("#wholeRoom").animate({
                            "width":"1000px"
                        });
                        $("#inResult").show().text(result_random);
                        $("#result").droppable("disable");
//                        $("#choseNumbers").fadeOut(500);
                        $("#popUp").fadeIn(3000);
                        $("#score").fadeIn(3000);

                        for (m = 0; m <= result_random; m++) {
                            $("#toShowResult" + m).show();
                        };
                    }
                }
            });

            if (checkNumber == result_random) {
                $("#result").droppable({
                    accept: "#number" + k,
                    drop: function(ev, ui) {
                //creating the objects for the first number
                        for (m = 1; m <= first_random; m++) {
                            $("#toShowFirst" + m).show();
                        };
                    //creating the objects for the second number
                        for (k = 1; k <= second_random; k++) {
                            $("#toShowSecond" + (first_random + k)).show();
                        };

                        var currentCount = store.get("remember_my_count");
                        var newCount = currentCount + 1
                        store.set("remember_my_count", newCount);

                        if (store.get("remember_my_count") > 10){
                            $("#firstNumber").fadeOut(1000);
                            $("#the_Plus").fadeOut(1000);
                            $("#secondNumber").fadeOut(1000);
                            $("#the_equal").fadeOut(1000);
                            $("#result").fadeOut(1000);
                            $("#popUp").hide();
                            $("#popUp2").show();
                        };

                        $("#showCheckMe").text(store.get("remember_my_count"));

                        $("#showFirst").fadeIn();
                        $("#the_Plus_2").fadeIn();
                        $("#showSecond").fadeIn();
                        $("#the_equal_2").fadeIn();
                        $("#result_2").fadeIn();
                        for (m = 0; m <= result_random; m++) {
                            $("#toShowResult" + m).show();
                        };
                        $(this).droppable('disable');
//                        $("#choseNumbers").fadeOut(500);
                        $("#inResult").show().text(result_random);
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

                        if (store.get("remember_my_count") < 11){
                            $("#popUp").fadeIn(3000);
                            $("#score").fadeIn(3000);
                            $("#previous").hide();
                        };

                    }
                });
            };
        };

        $(".reset2").click(function() {
            store.set("remember_my_count", 1);
            $("#firstNumber").fadeIn(1000);
            $("#the_Plus").fadeIn(1000);
            $("#secondNumber").fadeIn(1000);
            $("#the_equal").fadeIn(1000);
            $("#result").fadeIn(1000);
        });

        $(".back2").click(function() {
            store.set("remember_my_count", 1);
        });

        $("#previous").click(function() {
            store.set("remember_my_count", 1);
        });

        $(".back").click(function() {
            store.set("remember_my_count", 1);
        });

//the end of init()         
    };


    $(init);

})();