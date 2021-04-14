$(document). ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, nav').toggleClass('active');
		// $('body').toggleClass('lock'); без заданных id/адреса ссылкам при клике не убирает класс .lock
	})
});
let menu=document.querySelector('nav');
	menu.onclick=function(){
		$('.header__burger, nav').toggleClass('active');
	};