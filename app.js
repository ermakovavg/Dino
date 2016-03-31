$(function(){

//глобальные переменные
var counter = 0;



//обработчики

$('.btn-begin').on('click', beginGame);


function beginGame(){

    setInterval(function() {
        counter += 1;                       //счетчик шагов
        $('.value-text').text(counter);

        $('.road').css('right', '+=100px'); //движение фона - добавить плавность смещения

    }, 1000);


}


});