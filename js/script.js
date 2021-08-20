window.onunload = function() {};

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();

$(function () {

  if (w > 769) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .navbar').fadeToggle(200);
    });

  $("header li a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .navbar').fadeToggle(200);
    });
  }
}); 


//ロード画面//

$(window).on('load',function(){
  $("#loading").delay(3000).fadeOut('slow');//ローディング画面を3.0秒（3000ms）待機してからフェードアウト
  $("#loading_box").delay(1000).fadeOut('slow');//ローディングテキストを1.0秒（1000ms）待機してからフェードアウト

});

setTimeout('stopload()', 6000);

// フェードイン
function fadeIn(){
  // フェードアップ
  $('.fadeUpTrigger').each(function(){// fadeUpTriggerに対して
    let scroll = $(window).scrollTop();// スクロール位置取得
    let triTop = $(this).offset().top + 100;// 要素の上部より100px下取得
    let winHeight = $(window).height();// ウィンドウの高さを取得
    if (scroll >= triTop - winHeight){ // 画面内に要素が入ったかを判断
      $(this).addClass('fadeUp');// fadeUpクラスを付与
    }else{
      $(this).removeClass('fadeUp');// fadeUpクラスを削除
    }
  });
  // ローリング
    $('.faderotateTrigger').each(function(){// fadeUpTriggerに対して
    let scroll = $(window).scrollTop();// スクロール位置取得
    let triTop = $(this).offset().top + 100;// 要素の上部より100px下取得
    let winHeight = $(window).height();// ウィンドウの高さを取得
    if (scroll >= triTop - winHeight){ // 画面内に要素が入ったかを判断
      $(this).addClass('faderotate');// fadeUpクラスを付与
    }else{
      $(this).removeClass('faderotate');// fadeUpクラスを削除
    }
  });
}
$(window).scroll(function () {// スクロールしたら
  fadeIn();// 関数を実行
});

//アコーディオン//
//
//$(function () {
//    $('.js-menu__item__link1, .js-menu__item__link2, .js-menu__item__link3, .//js-menu__item__link4').on('click', function () {
//      $("+.submenu", this).slideToggle();
//      return false;
//  });
//});
$(function () {
  $('.question').on('click', function () {
    $(this).next().slideToggle();
    //openクラスをつける
    $(this).toggleClass('open');
    //クリックされていないparentのopenクラスを取る
    $('.question').not(this).removeClass('open');

    // 一つ開くと他は閉じるように
    $('.question').not($(this)).next('.ans').slideUp();
  });
});

  $('.faq_1').click(function(){
    $('.faq_btn1').toggleClass('add');

  });

    $('.faq_2').click(function(){
      $('.faq_btn2').toggleClass('add');

    });

    $('.faq_3').click(function(){
      $('.faq_btn3').toggleClass('add');

    });

    $('.faq_4').click(function(){
      $('.faq_btn4').toggleClass('add');

  });

//スムーズスクロール//
$('#js-nav a').on('click', function () {
  let hrefElement = $(this).attr('href');
  let headerHeight = $('#header').outerHeight(true);
  let position = $(hrefElement).offset().top - headerHeight;
  $('body,html').animate({
    scrollTop: position
  }, 1500);
  return false;
});

