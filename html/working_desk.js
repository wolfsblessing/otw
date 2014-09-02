(function() {

        function init() {}
    $('#to_room').mouseenter(function(e) {
//        $(this).animate({ height: '100', left: '0', top: '0', width: '100'}, 100);
        $(this).animate({ 
            height: '35', 
            width: '210', 
            top: '610', 
            left: '600', 
            'padding-top': '10'}, 100);
    }).mouseleave(function(e) {
//        $(this).animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(this).animate({ 
            height: '25', 
            width: '200', 
            top: '620', 
            left: '610',
            'padding-top': '5'}, 100);
    });

    $("#add").click(function() {
        store.set("remember_my_count", 1);
    });

    $("#subtraction").click(function() {
        store.set("remember_my_count", 1);
    });


    $("#add").click(function() {
        store.set("check_success", 0);
    });



    $(init);

})();