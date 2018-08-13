var minNav = document.getElementById("min-nav"),
    nav = document.getElementById("nav"),
    logo = document.getElementById("logo"),
	navClose = document.getElementById("nav-close"),
	upButton = document.getElementById("button-up"),
	upBtn = document.getElementById("btn-up"),
	search = document.getElementById("search"),
	 searchDiv = document.getElementById("search-div"),
	sir = document.getElementById("ser"),
	fun = document.getElementById("fun"),
	one = document.getElementById("one"),
    two = document.getElementById("two"),
    three = document.getElementById("three"),
	four = document.getElementById("four"),
	five = document.getElementById("five"),
	sex = document.getElementById("sex"),
	bigShow = document.getElementById("big-show"),
	seriousLayer = document.getElementById("layer"),
	video = document.getElementById("video"),
	play = document.getElementById("play");

minNav.onclick= function() {
 nav.style.height = "400px";
 nav.style.transition = ".4s ease";
 navClose.style.opacity = "1";
 minNav.style.opacity = "0";
 minNav.style.visibility = "hidden";
 minNav.style.transition = "transform .3s ease";	
 navClose.style.transition = "transform .3s ease";	
 navClose.style.transform = "rotate(360deg)";	
 minNav.style.transform = "rotate(180deg)";
}
navClose.onclick = function () {
	nav.style.height = "0";
    nav.style.transition = ".2s ease-in";	
	minNav.style.opacity = "1";
	minNav.style.visibility = "visible";
	navClose.style.opacity = "0";	
	navClose.style.transform = "rotate(-360deg)";	
    minNav.style.transform = "rotate(-180deg)";	
    minNav.style.transition = "transform .3s ease";	
    navClose.style.transition = "transform .3s ease";	    
	
};
search.onclick = function () {
	searchDiv.classList.toggle("fixed-search-toggle");
}	

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


  sir.onclick = function() {
	var scroll = window.setInterval(function() {
		var pos = window.pageYOffset;
		if ( pos < 1200 ) {
        window.scrollTo(0, pos + 15 );
    } else {
        window.clearInterval( scroll );
    }
	});
}  
  fun.onclick = function() {
	var scroll = window.setInterval(function() {
		var pos = window.pageYOffset;
		if ( pos < 2200 ) {
        window.scrollTo(0, pos + 15 );
    } else {
        window.clearInterval( scroll );
    }
	});
}

window.onscroll = function () {
 	
    if(window.pageYOffset >= 200){
        bigShow.style.opacity = "1";	
		bigShow.style.transition = "3s ease-in-out";	
	}
	if(window.pageYOffset >= 1400){
		seriousLayer.style.visibility = "hidden";
		seriousLayer.style.opacity = "0";	
		seriousLayer.style.transition = "1s ease-in-out";	
	}
		
};


one.onclick = function() {
	play.src ='videos/trillers/mission.mp4';
}
two.onclick = function() {
	play.src ='videos/trillers/rampage.mp4';
}
three.onclick = function() {
	play.src ='videos/trillers/qalb-omo.mp4';
}
four.onclick = function() {
	play.src ='videos/trillers/pairate.mp4';
}
five.onclick = function() {
	play.src ='videos/trillers/harb.mp4';
}
sex.onclick = function() {
	play.src ='videos/trillers/khalia.mp4';
}




   


   