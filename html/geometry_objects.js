(function() {

        function init() {}
    $('#to_room').mouseenter(function(e) {
//        $(this).animate({ height: '100', left: '0', top: '0', width: '100'}, 100);
        $(this).animate({ 
        	height: '75', 
        	width: '140', 
        	top: '280', 
        	left: '360', 
        	'padding-top': '40'}, 100);
    }).mouseleave(function(e) {
//        $(this).animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(this).animate({ 
        	height: '65', 
        	width: '100', 
        	top: '300', 
        	left: '380',
        	'padding-top': '30'}, 100);
    });

    $(init);
    //if the person wants to restart the game, i'm using the reload function.
    //have to check if the score can be kept
    function reloadPage() {
        location.reload();
    }


})();