// main.js
$(function(){
  // 모바일 gnb 열기
  $('#toggle').on('click', function(){
    $('#gnb').addClass('show');
  });

  // 모바일 gnb 닫기
  $('.btn_close').on('click', function(){
    $('#gnb').removeClass('show');
  })

  // PC화면으로 넘어가면 모바일 메뉴 닫기
  $(window).on('resize', function(){
    var x = window.matchMedia("(min-width: 768px)");
    if(x.matches) { $('#gnb').removeClass('show');}
  })

}) // end$


// vegas bg slider
$(function(){
  var title = [
    'title 1',
    'title 2',
    'title 3'
  ]

  $("#main_visual").vegas({
    slides: [
      { src: "http://placeimg.com/1200/400/tech/1" },
      { src: "http://placeimg.com/1200/400/tech/2" },
      { src: "http://placeimg.com/1200/400/tech/3" },
    ],
    walk: function (index, slideSettings) {
      $('h1').html(title[index])
      console.log("Slide index " + index + " image " + slideSettings.src);
    }
  });
})