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

$(function () {
  $('.faq_1').on('click', function () { //faq_1を押すと
     $('.question1').next().slideToggle();
    $('.question1').toggleClass('open'); //openクラスをつける
    $('.question2,.question3,.question4').removeClass('open');//クリックされていないquestionのopenクラスを取る
    $('.faq_btn1').toggleClass('add'); //addクラスをつける
    $('.faq_btn2,.faq_btn3,.faq_btn4').removeClass('add');//クリックされていないquestionのopenクラスを取る

    $('.ans2,.ans3,.ans4').slideUp();
    });

  $('.faq_2').on('click', function () { //faq_2を押すと
     $('.question2').next().slideToggle();
    $('.question2').toggleClass('open'); //openクラスをつける
    $('.question1,.question3,.question4').removeClass('open');//クリックされていないquestionのopenクラスを取る
    $('.faq_btn2').toggleClass('add'); //addクラスをつける
    $('.faq_btn1,.faq_btn3,.faq_btn4').removeClass('add');//クリックされていないquestionのopenクラスを取る
    
    $('.ans1,.ans3,.ans4').slideUp();
  });

    $('.faq_3').on('click', function () { //faq_3を押すと
     $('.question3').next().slideToggle();
    $('.question3').toggleClass('open'); //openクラスをつける
    $('.question2,.question1,.question4').removeClass('open');//クリックされていないquestionのopenクラスを取る
    $('.faq_btn3').toggleClass('add'); //addクラスをつける
    $('.faq_btn2,.faq_btn1,.faq_btn4').removeClass('add');//クリックされていないquestionのopenクラスを取る

    $('.ans2,.ans1,.ans4').slideUp();
    });
  
  $('.faq_4').on('click', function () { //faq_4を押すと
     $('.question4').next().slideToggle();
    $('.question4').toggleClass('open'); //openクラスをつける
    $('.question2,.question1,.question3').removeClass('open');//クリックされていないquestionのopenクラスを取る
    $('.faq_btn4').toggleClass('add'); //addクラスをつける
    $('.faq_btn2,.faq_btn1,.faq_btn3').removeClass('add');//クリックされていないquestionのopenクラスを取る

    $('.ans2,.ans1,.ans3').slideUp();
    });
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

