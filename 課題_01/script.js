$("#jqs-1 button").click(function () {
  $("#jqs-1 img").show('slow');
});

$("#jqs-2 button").click(function () {
  $("#jqs-2 img").show('slow');
});

$("#jqs-3 button").click(function () {
  $("#jqs-3 img").show('slow');
});

// -------------------------------------------------
topボタン
// ------------------------------------------------

$(function () {
  // 変数にクラスを入れる
  var btn = $('.button');

  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function () {
    if ($(this).scrollTop() > 100) {
      btn.addClass('active');
    } else {
      btn.removeClass('active');
    }
  });

  //フッターの手前でボタンを止める
  $(window).on('load scroll', function () {
    var height = $(document).height(), //ドキュメントの高さ 
      position = window.innerHeight + $(window).scrollTop(), //ページトップから現在地までの高さ
      footer = $('footer').height(); //フッターの高さ
    if (height - position < footer) {
      btn.addClass('absolute');
    } else {
      btn.removeClass('absolute');
    }
  });


  //スクロールしてトップへ戻る
  btn.on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});