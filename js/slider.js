// ファースト画面ロゴフェードイン //
$(function () {
  setTimeout(function () {
    $('.start p').fadeIn(1600);
  }, 500);//0.5秒後にロゴフェードイン
  setTimeout(function () {
    $('.start').fadeOut(1600);
  }, 4000);//
});

//Vegas全体の設定
 var responsiveImage = [//PC用の画像
      { src: './imgs/header/mv_bg01.jpg'},
      { src: './imgs/header/mv_bg02.jpg'},
      { src: './imgs/header/mv_bg03.jpg'},
      { src: './imgs/header/mv_bg04.jpg'}
    ];
$('header').vegas({
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 8000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'kenburns',
    timer: false,
    slides: responsiveImage,//画像設定を読む
});
  

//cafe-slider
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
  speed:1000,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  pauseOnFocus: false,//フォーカスで一時停止を無効
  pauseOnHover: false,//マウスホバーで一時停止を無効
  pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  });

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
  $('.slider').slick('slickPlay');
});
