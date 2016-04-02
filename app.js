$(function(){

//глобальные переменные
var counter = 0;



//обработчики

$('.btn-begin').on('click', beginGame);


    function beginGame(){
        stepsCounter();
        moveRoad();

        $('.dino').on('click', function(){
            $('.dino').animate({top:'-=200'}, 700).animate({top:'+=200'},700)           //прыжок Дино
        });
    }

    function stepsCounter(){
        setInterval(function() {
            counter += 1;                       //счетчик шагов
            $('.value-text').text(counter);
        }, 1000);
    }


    function moveRoad(){
        setInterval(function() {
            $('.road').animate({right:'+=100'},1000);                               //движение фона, убрать задержки между движениями
            var shift = parseInt($('.road:first').css('right'));
//            console.log(shift);
            if (shift > 600){
            $('.road:first').remove();                                                  //удаляет див в начале списка
            $('<div class="road"></div>').insertAfter('.road:last');                   //добавляет див в конце списка

            }
        }, 1000);
    };




});


