var upButton = document.getElementById("button-up"),
	upBtn = document.getElementById("btn-up"),
	roll = document.getElementById("roll");



upButton.onclick = function(){
var scrollToTop = window.setInterval(function() {
    var pos = window.pageYOffset;
    if ( pos > 0 ) {
        window.scrollTo(0, pos - 60 );
    } else {
        window.clearInterval( scrollToTop );
    }
},10 );
}; 
upBtn.onclick = function(){
var scrollToTop = window.setInterval(function() {
    var pos = window.pageYOffset;
    if ( pos > 0 ) {
        window.scrollTo(0, pos - 60 );
    } else {
        window.clearInterval( scrollToTop );
    }
},10 );
}; 
roll.onclick = function() {
	var scroll = window.setInterval(function() {
		var pos = window.pageYOffset;
		if ( pos < 700 ) {
        window.scrollTo(0, pos + 15 );
    } else {
        window.clearInterval( scroll );
    }
	});
	
}  