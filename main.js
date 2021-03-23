$("#header").prepend(
  '<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>'
);

$(".dropdown").prepend('<div class="arrow-down">▼</div>');
//create an arrow in the parent li

$(".box").prepend('<div class="arrow-down-second">▼</div>');
//create an arrow in the child li

$("#menu-icon").on("click", function () {
  //open menu on click
  $("nav").slideToggle();
  $(this).toggleClass("active");
});

$(".arrow-down").on("click", function () {
  // opening a submenu by pressing the arrow
  let div = $(this).parent(); // contact the parent
  let ul = div.siblings(); // contact the syblings
  for (i = 0; i < ul.find(".second-сhild").length; i++) {
    //go through all the elements that need to be opened
    $(ul.find(".second-сhild")[i]).toggleClass("expand");
  }
});

$(".arrow-down-second").on("click", function () {
  //works like method before
  let div = $(this).parent();
  let ul = div.siblings();
  for (i = 0; i < ul.find(".third-сhild").length; i++) {
    $(ul.find(".third-сhild")[i]).toggleClass("expand");
  }
});
