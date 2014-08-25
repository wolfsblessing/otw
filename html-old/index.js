(function() {
    function init() {

       $("#chose_mk_page").hide();
       $("#chose_sq_page").hide();

       $("#front_page").hide();
       $("#welcome").hide();

       $("#front_page_sq").hide();
       $("#welcome_sq").hide();

       $("#chose_mk_page").fadeIn(3000);
       $("#chose_sq_page").fadeIn(3000);

        $("#goToIndexMK").click(function() {
            $("#front_page").fadeIn(2000);
            $("#welcome").fadeIn(2000);

            $("#front_page_sq").hide();
            $("#welcome_sq").hide();
        });

        $("#goToIndexSQ").click(function() {
            $("#front_page_sq").fadeIn(2000);
            $("#welcome_sq").fadeIn(2000);

            $("#front_page").hide();
            $("#welcome").hide();
        });


    }
    
    $(init);

})();