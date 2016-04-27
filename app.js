var main = function() {
  $('#top-text').keyup(function(){
  	var $input = $('#top-text').val();
  		$('.top-caption').text($input);
  });
  $('#bottom-text').keyup(function(){
  	var $input = $('#bottom-text').val();
  		$('.bottom-caption').text($input);
  });
  $('#image-url').keyup(function(){
  	var $input = $('#image-url').val();
  		$('#imgg').attr("src",$input);
  });




}

$(document).ready(main);