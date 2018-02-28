(function($){
  $('.article').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Change ol\ul list style
  $('.article ul, .article ol').each(function (i, elem) {
    $(elem).find('li').each(function(index, li) {
      if (!$(li).children().hasClass('li-inner')) {
        $(li).wrapInner('<span class="li-inner"><span>');
      }
    });
  });

  $('.article input[type="checkbox"]').each(function (i, elem) {
    var $elem = $(elem);
    var checked = elem.checked;
    var dom = '<span class="checkbox-wrap ' + (checked ? 'checked' : '') + '"></span>';

    if (!$elem.parent().hasClass('checkbox-wrap')) {
      $elem.wrap(dom);
    }
  });
})(jQuery);
