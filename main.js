$("#header").prepend(
  '<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>'
);
$(".dropdown").prepend('<div class="arrow-down">▼</div>');//создаем стрелочку в верхнем li
$(".box").prepend('<div class="arrow-down-second">▼</div>');// создаем стрелочку в дочернем li
$("#menu-icon").on("click", function () {//открытие меню по клику
  $("nav").slideToggle();
  $(this).toggleClass("active");
});
$(".arrow-down").on("click", function () {// открытие подменю при нажатии стрелочки
  let div = $(this).parent();// обращаемся к родителю
  let ul = div.siblings();// обращаемся к сестре
  for (i = 0; i < ul.find(".secondChild").length; i++) {//проходим по всем элементам которые нужно открыть 
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
