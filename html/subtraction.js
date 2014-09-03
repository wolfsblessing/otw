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

/*==========================================================*/

    var first_five = [1, 2, 3, 4, 5];

    first_five.sort(function() {
        return Math.random() - .3
    });

    var second_five= [];

    for (m = 0; m <= first_five[0]; m++) {
        second_five.push(m);
    }

    second_five.sort(function() {
        return Math.random() - .3
    });

    var five_result = first_five[0] - second_five[0];

/*==========================================================*/

    var first_seven = [1, 2, 3, 4, 5, 6, 7];

    first_seven.sort(function() {
        return Math.random() - .3
    });

    var second_seven = [];

    for (m = 0; m <= first_seven[0]; m++) {
        second_seven.push(m);
    }

    second_seven.sort(function() {
        return Math.random() - .3
    });
 
    var seven_result = first_seven[0] - second_seven[0];
/*==========================================================*/

    first_random = first_five[0];
    second_random = second_five[0];
    result_random = five_result;
    length_random = first_five.length;

/*==========================================================*/

    function init() {

//        $("#showCheckMe").text(store.get("remember_my_count"));

        for (k = 0; k <= 10; k++) {
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
            second_random = second_seven[0];
            result_random = seven_result;
            length_random = first_seven.length;
        };

         if (store.get("remember_my_count") > 7){
            first_random = firstNumber[0];
            second_random = secondNumber[0];
            result_random = the_result;
            length_random = firstNumber.length;
        };


        $("#firstNumber").text(first_random);
        $("#secondNumber").text(second_random);
        $("#inResult").hide();
        $("#popUp").hide();
        $("#score").hide();
        $("#starMe1").hide();
        $("#starMe2").hide();
        $("#starMe3").hide();
        $("#starMe4").hide();
        $("#starMe5").hide();
        $("#starMe6").hide();

        for (k = 0; k <= length_random; k++) {
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
                        for (k = 1; k <= second_random; k++) {
                            $("#toShowSecond" + k).show();
                        };
                        $("#number" + result_random).animate({
                            "background-color": "red"
                        }, 2000);
                    };
                    if (guessResult == 3) {
                        $("#previous").hide();
                        $("#wholeRoom").animate({
                            "width":"1000px"
                        });
                        $("#inResult").show().text(result_random);
                        $("#result").droppable("disable");
//                        $("#choseNumbers").fadeOut(500);
                        $("#popUp").fadeIn(3000);
//                        $("#score").fadeIn(3000);

                        for (m = 1; m <= result_random; m++) {
                            $("#toShowResult" +(second_random + m)).show();
//                            $("#toShowResult" + m).show();
                        };

                //Checking the amount of times it's dropped on correct place so it increases the number
                //numbers to calculate, i.e. from 5 numbers to 7, and then lastly to 10
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
                            $("#previous").hide();

                            if(store.get("check_success") <= 5){
                                $("#text_me").text("Задачата е завршена. Си доби 1 ѕвезда!");
                                $("#text_me_sq").text("Detyra ka mbaruar. Ke fituar 1 Yll!");
                                $("#starMe6").fadeIn();
                            };

                            if(store.get("check_success") >= 6){
                                $("#text_me").text("Браво. Успешно заврши " + store.get("check_success") + " задачи. Си доби две ѕвезди!");
                                $("#text_me_sq").text("Bravo. Me sukses ke mbaruar " + store.get("check_success") + " detyra. Ke fituar dy Yje!");
                                $("#starMe4").fadeIn();
                                $("#starMe5").fadeIn();
                            };

                            if(store.get("check_success") >= 8){
                                $("#text_me").text("Браво за добро извршената задача. Си доби три ѕвезди!");
                                $("#text_me_sq").text("Bravo për detyrën e mbaruar me sukses. Ke fituar tre yje!");
                                $("#starMe1").fadeIn();
                                $("#starMe2").fadeIn();
                                $("#starMe3").fadeIn();
                                $("#starMe4").hide();
                                $("#starMe5").hide();
                                $("#starMe6").hide();
                            };

                        };

                    }
                }
            });

            if (checkNumber == result_random) {
                $("#result").droppable({
                    accept: "#number" + k,
                    drop: function(ev, ui) {
                        $("#previous").hide();
                        $("#showFirst").fadeIn();
                        $("#the_Plus_2").fadeIn();
                        $("#showSecond").fadeIn();
                        $("#the_equal_2").fadeIn();
                        $("#result_2").fadeIn();
                    //creating the objects for the first number
                        for (m = 1; m <= first_random; m++) {
                            $("#toShowFirst" + m).show();
                        };
                        for (k = 1; k <= second_random; k++) {
                            $("#toShowSecond" + k).show();
                        };

                //Checking the successfull score so the price at the end will be accordingly to 
                        var current_check_success = store.get("check_success");
                        var new_check = current_check_success + 1;
                        store.set("check_success", new_check);
                //Checking the amount of times it's dropped on correct place so it increases the number
                //numbers to calculate, i.e. from 5 numbers to 7, and then lastly to 10 
                        var currentCount = store.get("remember_my_count");
                        var newCount = currentCount + 1
                        store.set("remember_my_count", newCount);

                        if (store.get("remember_my_count") > 10){
                            $("#previous").hide();
                            $("#firstNumber").fadeOut(1000);
                            $("#the_Plus").fadeOut(1000);
                            $("#secondNumber").fadeOut(1000);
                            $("#the_equal").fadeOut(1000);
                            $("#result").fadeOut(1000);
                            $("#popUp").hide();
                            $("#popUp2").show();

                            if(store.get("check_success") <= 5){
                                $("#text_me").text("Задачата е завршена. Си доби 1 ѕвезда!");
                                $("#text_me_sq").text("Detyra ka mbaruar. Ke fituar 1 Yll!");
                                $("#starMe6").fadeIn();
                            };

                            if(store.get("check_success") >= 6){
                                $("#text_me").text("Браво. Успешно заврши " + store.get("check_success") + " задачи. Си доби две ѕвезди!");
                                $("#text_me_sq").text("Bravo. Me sukses ke mbaruar " + store.get("check_success") + " detyra. Ke fituar dy Yje!");
                                $("#starMe4").fadeIn();
                                $("#starMe5").fadeIn();
                            };

                            if(store.get("check_success") >= 8){
                                $("#text_me").text("Браво за добро извршената задача. Си доби три ѕвезди!");
                                $("#text_me_sq").text("Bravo për detyrën e mbaruar me sukses. Ke fituar tre yje!");
                                $("#starMe1").fadeIn();
                                $("#starMe2").fadeIn();
                                $("#starMe3").fadeIn();
                                $("#starMe4").hide();
                                $("#starMe5").hide();
                                $("#starMe6").hide();
                            };

                        };

//                        $("#showCheckMe").text(store.get("remember_my_count"));

                        $("#showFirst").fadeIn();
                        $("#the_Plus_2").fadeIn();
                        $("#showSecond").fadeIn();
                        $("#the_equal_2").fadeIn();
                        $("#result_2").fadeIn();

                        for (m = 1; m <= result_random; m++) {
                            $("#toShowResult" +(second_random + m)).show();
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
//                        $("#toShowResult0").fadeIn(3000).text(the_result);
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
            store.set("check_success", 0);
            $("#firstNumber").fadeIn(1000);
            $("#the_Plus").fadeIn(1000);
            $("#secondNumber").fadeIn(1000);
            $("#the_equal").fadeIn(1000);
            $("#result").fadeIn(1000);
        });

        $(".back2").click(function() {
            store.set("remember_my_count", 1);
            store.set("check_success", 0);
        });

        $("#previous").click(function() {
            store.set("remember_my_count", 1);
            store.set("check_success", 0);
        });

        $(".back").click(function() {
            store.set("remember_my_count", 1);
            store.set("check_success", 0);
        });

    };


    $(init);

})();