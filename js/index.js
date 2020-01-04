function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();


$('.slide').slick({
  autoplay: true,
  slidesToShow:1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1, 
    }
  }]
});


$('.slide--ranking').slick({
  autoplay: false,
  slidesToShow:5,
  slidesToScroll: 1,
  adaptiveHeight: true,
  infinite: false,
  arrows: true,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1, 
    }
  }]
});

$(function(){
  $('.item__detail__tab__item').click(function(){
      const group = $(this).parents('.item__detail'); 
      group.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
      group.find('.is-show').removeClass('is-show');
      // クリックしたタブからインデックス番号を取得
      const index = $(this).index();
      // クリックしたタブと同じインデックス番号をもつコンテンツを表示
      group.find(".item__detail__tab__txt").eq(index).addClass('is-show');
  });
});