$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__body_menu').toggleClass('active');
		$('body').toggleClass('lock')
	})
});