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
$(window).scroll(function () {

  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $('#page-top').addClass('on');
  } else {
    if ($('#page-top').hasClass('on')) {
      $('#page-top').removeClass('on');
    }
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



