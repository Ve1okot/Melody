$(document).ready(function () {
    var currentFloor = 2; //переменная с текущим этажом
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); // кнопка увеличения этажа
    var counterDown = $(".counter-down"); // кнопка уменьшения этажа

    // функция при наведении мышью на этаж
    floorPath.on('mouseover', function () {
        floorPath.removeClass("current-floor"); //удалить активный класс у всех этажей
        currentFloor = $(this).attr("data-floor"); // получить значение текущего этажа
        $(".counter").text(currentFloor); //записать значение этажа в счётичик справа
    });

    //отслеживание клика по кнопке вверх
    counterUp.on("click", function () {
        //проверка значения этажа. Не должно быть больше 18
        if (currentFloor < 18) {
            currentFloor++; //прибавление одного этажа
        usCurrentFloor = currentFloor.toLocaleString("en-US", {
            minimumIntegerDigits: 2, useGroupping: false }); // форматирование переменной этажом, чтобы было 02, а не 2
        $(".counter").text(usCurrentFloor); //записать значение этажа в счётичик справа
        floorPath.removeClass("current-floor"); //удалить активный класс у всех этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсветка текущего этажа
        }
    });

    //отслеживание клика по кнопке вниз
    counterDown.on("click", function () {
        //проверка значения этажа. Не должно быть меньше 2
        if (currentFloor > 2) {
            currentFloor--; //вычитание одного этажа
        usCurrentFloor = currentFloor.toLocaleString("en-US", {
            minimumIntegerDigits: 2, useGroupping: false }); // форматирование переменной этажом, чтобы было 02, а не 2
        $(".counter").text(usCurrentFloor); //записать значение этажа в счётичик справа
        floorPath.removeClass("current-floor"); //удалить активный класс у всех этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсветка текущего этажа
        }
    });
});