$(function () {

//глобальные переменные
        var counter = 0,
            intervalSteps,
            intervalRoad,
            addRoad,
            button = $('<button class="btn-bestgamer">Показать лучшего игрока</button>');


//обработчики

        $('.btn-begin').on('click', beginGame);
        $('.btn-restart').on('click', restartGame);

        $('.dino').on('click', function () {
            $('.dino').animate({top: '-=200'}, 700).animate({top: '+=200'}, 700);          //прыжок Дино
        });

        $('.btn-pause').on('click', function () {
            var isInprogress = true;
            return function () {
                isInprogress ? pauseGame() : beginGame();                                   //пауза
                isInprogress = !isInprogress;
            }
        }());

        $('.save-score').on('click', saveScore);

        button.on('click', showBestGamer);
       //$('body').on('click', '.btn-bestgamer', function(){alert(11111)});


//функции

        function beginGame() {
            stepsCounter();
            moveRoad();


        }

        function stepsCounter() {
            intervalSteps = setInterval(function () {
                counter += 1;                       //счетчик шагов
                $('.value-text').text(counter);
            }, 1000);
        }


        function moveRoad() {
            intervalRoad = setInterval(function () {
                $('.road').animate({'right': '+=100'}, 1000, "linear");                        //движение фона, убрать разрывы при добавлении фона
                /* попробовать добавлять сотку только первому блоку, а сдвиг остальных делать равным "сдвиг первого блока - 600"  */
            }, 1000);
            addRoad = setInterval(function () {
                $('.road:first').remove();                                                  //удаляет див в начале списка
                $('<div class="road"></div>').insertAfter('.road:last');                   //добавляет див в конце списка

            }, 6000);
        }

        function restartGame() {
            clearInterval(intervalRoad);
            clearInterval(addRoad);
            clearInterval(intervalSteps);
            $('.road').stop();
            $('.Dino').attr('top', '0px');                                           //начать игру заново
            counter = 0;
            $('.value-text').text(counter);
            //$('.road').attr('style', 'right: 0px');

            setTimeout(function () {
                $('.road').css({right: 0});

            }, 100);
            beginGame();
        }


        function pauseGame() {
            clearInterval(intervalSteps);
            clearInterval(intervalRoad);                                        //пауза
            clearInterval(addRoad);
        }


        function saveScore() {
            pauseGame();
            var userCounter = reduce(localStorage);                             //сохранить счет
            userCounter++;
            localStorage.setItem(userCounter, counter);
            showScore(localStorage);

        }


        function reduce(obj) {
            var maxValue = 0;
            for (var prop in obj) {                                             //определение порядкового номера юзера
                if (maxValue < Number(prop)) {
                    maxValue = Number(prop);
                }
            }
            return maxValue;
        }


        function showScore(obj) {
            $('.score-table').detach();
            $('body').append('<ul class="score-table"></ul>');
            var bestScore = 0;
            for (var prop in obj) {
                var line = '<li> Пользователь №' + prop + ' Количество шагов ' + obj[prop] + '</li>';         //вывод таблицы счета на экран
                $('.score-table').append(line);
                //debugger;
                if (bestScore < Number(obj[prop])) {
                    bestScore = Number(obj[prop]);
                    $('li').removeClass('best-score');
                    $('li:last').addClass('best-score');
                }
            }
            $('body').append(button);
            //$('body').append('<button class="btn-bestgamer">Показать лучшего игрока</button>');
        }

        function showBestGamer() {
        $('.best-score').css('color', 'red');
        }



    });


