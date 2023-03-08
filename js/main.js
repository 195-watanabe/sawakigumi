
/* ハンバーガーメニュー
-----------------------------*/
$(function () {
  // チェックボックスをチェックしたら発動
  $('.hamburger_btn').click(function () {
    $("body").toggleClass("_fixed");
  })
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



