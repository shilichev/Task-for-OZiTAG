$("#header").prepend(
  '<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>'
);
$(".dropdown").prepend('<div class="arrow-down">▼</div>');
$(".box").prepend('<div class="arrow-down-second">▼</div>');
$("#menu-icon").on("click", function () {
  $("nav").slideToggle();
  $(this).toggleClass("active");
});
$(".arrow-down").on("click", function () {
  let div = $(this).parent();
  let ul = div.siblings();
  for (i = 0; i < ul.find(".secondChild").length; i++) {
    $(ul.find(".secondChild")[i]).toggleClass("expand");
  }
});
$(".arrow-down-second").on("click", function () {
  let div = $(this).parent();
  let ul = div.siblings();
  for (i = 0; i < ul.find(".thirdChild").length; i++) {
    $(ul.find(".thirdChild")[i]).toggleClass("expand");
  }
});
