jQuery('document').ready(function(){
  
    jQuery('button').on('click',function(){
	  var value1, value2, value3;
	  value1 = jQuery('#One').val();
	  value2 = jQuery('#Two').val();
	  value1 = parseInt(value1);
	  value2 = parseInt(value2);
	  value3 = value1 + value2;
	  jQuery('#Res').html(value3);
    });
   var Nickname;
   
   Nickname = prompt('Введите ваш никнейм','')
   jQuery('#Nick').html(Nickname);

});

