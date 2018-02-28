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
        $(li).wrapInner('<span class="li-inner"></span>');
      }
    });
  });

  $('.article input[type="checkbox"]').each(function (i, elem) {
    var $elem = $(elem);
    var checked = elem.checked;
    var dom = '<span class="checkbox-wrap ' + (checked ? 'checked' : '') + '"></span>';

    if (!$elem.parent().hasClass('checkbox-wrap')) {
      // $elem.wrap(dom);
      var $parent = $elem.parent().parent();
      var text = $parent.text();

      $parent.html(dom + '<span class="check-content ' + (checked ? 'checked' : '') + '">' + text + '</span>');
    }
  });

  // avatar
  var $mask = $('.about-me-mask');
  $('.avatar').on('click', function () {
    if (!$mask.hasClass('open')) {
      $mask.addClass('open');
    }
  });

  $mask.on('click', function (e) {
    if (e.target.classList.contains('about-me-mask')) {
      $mask.removeClass('open');
    }
  });
})(jQuery);
