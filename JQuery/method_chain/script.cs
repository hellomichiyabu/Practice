$(function() {
  $('.btn').click(function() {
    var $title=$('#title');


    $title.css('color', 'red');
    $title.html('こんばんは、にんじゃわんこさん');
    $title.fadeOut(1000);

    $('#text').css('color', 'blue').html('<h3>jQueryをマスターしましょう！</h3>').fadeOut(1000);

  });
});
