(function() {

        function init() {}
    $('#to_room').mouseenter(function(e) {
//        $(this).animate({ height: '100', left: '0', top: '0', width: '100'}, 100);
        $(this).animate({ 
        	height: '75', 
        	width: '210', 
        	top: '290', 
        	left: '410', 
        	'padding-top': '40'}, 100);
    }).mouseleave(function(e) {
//        $(this).animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(this).animate({ 
        	height: '65', 
        	width: '200', 
        	top: '300', 
        	left: '420',
        	'padding-top': '30'}, 100);
    });

    $(init);
    //if the person wants to restart the game, i'm using the reload function.
    //have to check if the score can be kept
    function reloadPage() {
        location.reload();
    }


})();