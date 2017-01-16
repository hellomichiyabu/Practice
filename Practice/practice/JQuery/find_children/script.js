$(function() {
  $('#find-method').click(function() {
    $('#wrapper').find('a').css('color','red');
  });

  $('#children-method').click(function() {
    $('#wrapper').children('a').fadeOut();
  });
});
