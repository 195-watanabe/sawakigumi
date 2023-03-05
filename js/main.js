// // スムーススクロール
// var scroll = new SmoothScroll('a[href*="#"]', {
// speedAsDuration:true,
// speed:1000,
// easing:'easeInOutQuad' // イージング
// });

// ハンバーガーメニュー

$(".openbtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('_active');//ボタン自身に activeクラスを付与し
    $(".gnav").toggleClass('_active');//ナビゲーションに_activeクラスを付与
});


/* ナビゲーション
-----------------------------*/
$(window).scroll(function () {
  $('#company01').each(function () {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    var customTop = 80;
    if (typeof $(this).data('effect') !== 'undefined') {
      // data-effect="任意の値" が設定されている場合
      customTop = $(this).data('effect');
    }
    if (hit + customTop < wHeight + scroll) {
      $('.main_menu li').removeClass("_current");
      $('#nav01').addClass("_current");
    }
  });
  $('#company02').each(function () {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    var customTop = 80;
    if (typeof $(this).data('effect') !== 'undefined') {
      // data-effect="任意の値" が設定されている場合
      customTop = $(this).data('effect');
    }
    if (hit + customTop < wHeight + scroll) {
      $('.main_menu li').removeClass("_current");
      $('#nav02').addClass("_current");
    }
  });
  $('#company03').each(function () {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    var customTop = 80;
    if (typeof $(this).data('effect') !== 'undefined') {
      // data-effect="任意の値" が設定されている場合
      customTop = $(this).data('effect');
    }
    if (hit + customTop < wHeight + scroll) {
      $('.main_menu li').removeClass("_current");
      $('#nav03').addClass("_current");
    }
  });
  $('#company04').each(function () {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    var customTop = 80;
    if (typeof $(this).data('effect') !== 'undefined') {
      // data-effect="任意の値" が設定されている場合
      customTop = $(this).data('effect');
    }
    if (hit + customTop < wHeight + scroll) {
      $('.main_menu li').removeClass("_current");
      $('#nav04').addClass("_current");
    }
  });
  $('#company05').each(function () {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    var customTop = 80;
    if (typeof $(this).data('effect') !== 'undefined') {
      // data-effect="任意の値" が設定されている場合
      customTop = $(this).data('effect');
    }
    if (hit + customTop < wHeight + scroll) {
      $('.main_menu li').removeClass("_current");
      $('#nav05').addClass("_current");
    }
  });
});



