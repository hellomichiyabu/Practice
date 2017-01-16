$(function() {
    $('#language-wrapper').hover(
    function() {
      $(this).find('.language-text').fadeIn();
    },
    function() {
      $(this).find('.language-text').fadeOut();
    }
  );
});
