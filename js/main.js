$(".hero-block__tab").tabs();
$(".header__menu a").on("click", function () {
  $(".hero-block__tab").tabs("option", "active", $(this).data("tab"));

});




$('.header__menu-item').click(function () {
  if (!$(this).hasClass('active')) {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  }
});

var slider = tns({
  loop: false,
  container: '.slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  navContainer: ".slider-dots"
});
var slider = tns({
  loop: false,
  container: '.slider2',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  navContainer: ".slider-dots2"
});
var slider = tns({
  loop: false,
  container: '.slider3',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  navContainer: ".slider-dots3"
});
var slider = tns({
  loop: false,
  container: '.slider4',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  navContainer: ".slider-dots4"
});
var slider = tns({
  loop: false,
  container: '.slider5',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  navContainer: ".slider-dots5"
});
var slider = tns({
  loop: false,
  container: '.slider6',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  navContainer: ".slider-dots6"
});
var slider = tns({
  loop: false,
  container: '.slider7',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  navContainer: ".slider-dots7"
});

$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function () {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".tab").on("click", function () {
  $(".tabs").toggleClass('active');
  let tabFirst = document.querySelector('.tab--first');
  tabFirst.textContent = $(".tab.active").text();
})
$(".header__burger").on("click", function () {
  $(".tabs").toggleClass('active');
})