(function() {
    function init() {
	    $("#girly").hide();
	    $("#boyish").hide();
	    
    	storage.get('girly');
    	storage.get('boyish');

        console.log(storage.get('girly'));
        console.log(storage.get('boyish'));

		if((storage.get("girly")) == true ){
		     $("#girly").show();
		};

		if((storage.get("boyish")) == true ){
		     $("#boyish").show();
		};

	};
    
    $(init);

})();