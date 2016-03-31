/**
 * Created by denis on 27.03.16.
 */
$(function () {

    // глобальные переменные
    var interval, stepCounter= 0;


    // обработчики
    $('.btn-begin').on('click', beginGame);
    $('.btn-pause').on('click', pauseGame);
    $('.dino').on('click', jumpDino);


    // объявления функций
    function beginGame(){
        interval = setInterval(function(){
            $('.road').animate({right:"+=100px"},1000);
            stepCounter++;
            $('.value-text').text(stepCounter);
        },1000);
    }

    function pauseGame(){
        clearInterval(interval);
    }

    function jumpDino(){
        $(this).animate({top:"285px"}).delay(1000).animate({top:"413px"})
    }

    //Техническое задание
        //написать игру Динозавр

        //входные данные:
        // -динозавр(создать иконку);
        // - вырезать фон;
        // - счетчик шагов
        // - кнопка прыжков
        // - перезагрузить игру
        // - вырезать кактусы (три вида);

    //основная задача:
        // - продержаться как можно дольше (максимальное значение счетчика шагов)
        // подзадачи:

        /* навесить обработчики
        *   1 кнопка - перезагрузить игру
        *       1 - обнуление счетчика шагов
        *       2 - отрисовка анимации фона и кактусов заново
        *   2 кнопка - старт игры:
        *       1 - анимация фона
        *       2 - увеличение счетчика
        *       3 - анимация кактусов
        *   3 прыжок динозавра:
        *       1 - прыжок вверх
        *       2 - прыжок вниз
        * */
        //













    //var container = $('<div>', {
    //    id:'container'
    //})
    //$('body')
    //    .append(container)
    //    .width(600)
    //    .height(600)
    //    .css({
    //        "border-width": 1,
    //        "border-style":'solid',
    //        "border-color":'grey'
    //        });
    //
    //
    //$('<div>')
    //    .appendTo('#container-road')
    //    .addClass('road');
    //$('<div>')
    //    .appendTo('#container-road')
    //    .addClass('road');
    ////$('<div>')
    ////    .appendTo('#container')
    ////    .addClass('road-next');
    //
    //$('<div>')
    //    .appendTo('#container')
    //    .addClass('dino')
    //setInterval (function(){
    //    //$('.dino').animate({left:"+=100px"},1000)
    //    //$('.road').animate({right:"+=100px"},1000);
    //
    //}, 1000)
    //
    //
    //$('.dino').on('click', function(){
    //    $(this)
    //        .animate({bottom:"128px"})
    //        .animate({left:"+=100px"})
    //        .animate({bottom:"28px"})
    //})




})


