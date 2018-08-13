var minNav = document.getElementById("min-nav"),
    nav = document.getElementById("nav"),
	navClose = document.getElementById("nav-close"),
	upButton = document.getElementById("button-up"),
	upBtn = document.getElementById("btn-up"),
	search = document.getElementById("search"),
	 searchDiv = document.getElementById("search-div"),
	 ulNav = document.getElementById("ul-nav"),
	ara = document.getElementById("ara"),
	eng = document.getElementById("eng"),
	hen = document.getElementById("hen"),
	arabic = document.getElementById("arabic"),
	english = document.getElementById("english"),
	hendy = document.getElementById("hendy");


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
	searchDiv.style.transition = ".3s ease-in";
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
}


window.onscroll = function () {
	if(window.pageYOffset >= 175){
		ulNav.classList.add("ul-nav-toggle");
	}else{
		ulNav.classList.remove("ul-nav-toggle");
	}
}
ara.onclick = function() {
	arabic.style.display = "flex";
	english.style.display = "none";
	hendy.style.display = "none";
}
eng.onclick = function() {
	english.style.display = "flex";
	arabic.style.display = "none";
	hendy.style.display = "none";
}
hen.onclick = function() {
	hendy.style.display = "flex";
    arabic.style.display = "none";
	english.style.display = "none";	
}