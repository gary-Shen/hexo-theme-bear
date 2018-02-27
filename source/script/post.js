(function($){
  var $header = $('#header');
  if (window.innerWidth < 480 && !$header.hasClass('slide-hide')) {
    $header.addClass('slide-hide');
  }
})(jQuery);
