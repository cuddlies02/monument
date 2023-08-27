var total_pics_num = 6; // колличество изображений
var interval = 3000; // задержка между изображениями
var time_out = 1; // задержка смены изображений
var i = 0;
var timeout;
var opacity = 100; // прозрачность
function fade_to_next() {
opacity--;
var k = i + 1;
var image_now = 'image_' + i;
if (i == total_pics_num) k = 1;
var image_next = 'image_' + k;
document.getElementById(image_now).style.opacity = opacity/100;
document.getElementById(image_now).style.filter = 'alpha(opacity='+ opacity +')';
document.getElementById(image_next).style.opacity = (100-opacity)/100;
document.getElementById(image_next).style.filter = 'alpha(opacity='+ (100-opacity) +')';
timeout = setTimeout("fade_to_next()",time_out);
if (opacity==1) {
opacity = 100;
clearTimeout(timeout);
}
}
setInterval (
function() {
i++;
if (i > total_pics_num) i=1;
fade_to_next();
}, interval
);











/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtЗначение = a[i].textСодержание || a[i].innerText;
    if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}




'use strict';
 
// Модуль каталога для работы с БД
var catalogDB = (function($) {
 
    var ui = {
        $prices: $('#prices'),
        $pricesLabel: $('#prices-label'),
        $minPrice: $('#min-price'),
        $maxPrice: $('#max-price')
    };
 
    // Инициализация модуля
    function init() {
        _initPrices({
            minPrice: 5000,
            maxPrice: 50000
        });
    }
 
    // Изменение диапазона цен
    function _onSlidePrices(event, elem) {
        var minPrice = elem.values[0],
            maxPrice = elem.values[1];
        ui.$pricesLabel.html(minPrice + ' - ' + maxPrice + ' руб.');
        ui.$minPrice.val(minPrice);
        ui.$maxPrice.val(maxPrice);
    }
 
    // Инициализация цен с помощью jqueryUI
    function _initPrices(options) {
        ui.$prices.slider({
            range: true,
            min: options.minPrice,
            max: options.maxPrice,
            values: [options.minPrice, options.maxPrice],
            slide: _onSlidePrices
        });
    }
 
    // Экспортируем наружу
    return {
        init: init
    }
     
})(jQuery);