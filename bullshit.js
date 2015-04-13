$(document).ready(function() {

	$('img').mouseover(function(){
		$('img').removeClass();
		$('img').addClass('image1');
	});
	$('img').mouseout(function(){
		$('img').removeClass();
		$('img').addClass('image2');
	});
	$('img').click(function(){
		alert("Tu t'est fait avoir Abruti !");
	});
});