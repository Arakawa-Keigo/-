$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 200){
              $(this).addClass('scrollin');
          }
      });
  });

  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    
    // 1. 変数slideIndexに「.active」要素のインデックス番号を代入してください
    var slideIndex=$('.slide').index($('.active'));
    
    // 3. change-btn要素を表示してください
    $('.change-btn').show();
    
    // 2. ifとelse ifを用いて、「.change-btn」の表示/非表示をおこなってください
    if (slideIndex == 0){
      $('.prev-btn').hide();
    } else if (slideIndex == 3){
      $('.next-btn').hide();
    }
    
    
  });
  
  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    
    // 「.index-btn」のクリックイベントと同様の処理を記述してください
    var slideIndex=$('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0){
      $('.prev-btn').hide();
    }else if (slideIndex == 3){
      $('.next-btn').hide();
    }
    
  });

  $('.work-high').click(function() {
    $('.library-high').fadeIn();
  });
  

  $('.close-modal').click(function() {
    $('.library-high').fadeOut();
  });


  $('.work-club').click(function() {
    $('.library-club').fadeIn();
  });
  

  $('.close-modal').click(function() {
    $('.library-club').fadeOut();
  });
  
  $('.work-cafe').click(function() {
    $('.library-cafe').fadeIn();
  });
  

  $('.close-modal').click(function() {
    $('.library-cafe').fadeOut();
  });

  $('.work-travel').click(function() {
    $('.library-travel').fadeIn();
  });
  

  $('.close-modal').click(function() {
    $('.library-travel').fadeOut();
  });

  $('.work-red').click(function() {
    $('.library-red').fadeIn();
  });
  

  $('.close-modal').click(function() {
    $('.library-red').fadeOut();
  });
 
  $('.work-acu').click(function() {
    $('.library-acu').fadeIn();
  });
  

  $('.close-modal').click(function() {
    $('.library-acu').fadeOut();
  });

  $(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function() {
       // スクロールの速度
       var speed = 400; // ミリ秒
       // アンカーの値取得
       var href= $(this).attr("href");
       // 移動先を取得
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先を数値で取得
       var position = target.offset().top;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
 });

});