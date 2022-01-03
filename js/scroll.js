/* ヘッダーページリンク */
$('.page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;  //idの上部の距離を取得
  $('body,html').animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});


/* ヘッダースクロールボタン */
$(window).on('load resize', function () {
  //ウィンドウの高さを取得する
  var targetY = $(window).height();

  //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
  $('.scrolldown').on('click', function () {
    $("html, body").stop().animate({ scrollTop: targetY }, 500, 'swing');
    return false;
  });
});


/* 下スクロールによるロゴボタン出現 */
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 100){//上から200pxスクロールしたら
    $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
  }else{
    if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
      $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
      $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
    }
  }
}
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

var scrollStart = $('#page-top').offset().top; //ページ上部からの距離を取得
var scrollEnd = $('#footer').offset().top; //ページ上部からの距離を取得
var windowHeight = $(window).height(); //ウインドウの高さを取得
var distance = 0;

$(document).scroll(function () {
  distance = $(this).scrollTop(); //スクロールした距離を取得

  if (scrollEnd <= distance + windowHeight/1.4) { //スクロール距離がendの位置を超えたら
    $('#page-top').fadeOut(); //フェードアウト
  } else {
    $('#page-top').fadeIn(); //endより上部に戻ったらフェードイン
  }
});

/* フッターロゴクリックするとトップページへ */
// #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
    scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});

$('#logo-area').click(function () {
  $('body,html').animate({
    scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});



