$(document).ready(function () {
    var currentFloor = 2; //переменная с текущим этажом
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); // кнопка увеличения этажа
    var counterDown = $(".counter-down"); // кнопка уменьшения этажа
    var modal = $(".modal"); // модальное окно
    var modalDialog = $(".modal-dialog"); // модальное окно в границах. Для определения клика за его пределами и закрытия этого окна
    var modalCloseButton = $(".modal-close-button"); //кнопка закрытия модального окна
    var viewFlatsButton = $(".view-flats"); //кнопка внизу "Смотреть квартиры на этаже"
    var flatActive = $(".modal-image path"); //каждая отдельная квартира на картинке
    var currentFlat = 2; //Переменная текущей подсвеченной квартиры

    // функция при наведении мышью на этаж
    floorPath.on('mouseover', function () {
        floorPath.removeClass("current-floor"); //удалить активный класс у всех этажей
        currentFloor = $(this).attr("data-floor"); // получить значение текущего этажа
        $(".counter").text(currentFloor); //записать значение этажа в счётичик справа
    });

    floorPath.on('click', toggleModal); //клик по этажу вызывает окно
    modalCloseButton.on('click', toggleModal); //клик по крестику закрывает окно
    viewFlatsButton.on("click", toggleModal); //клик по кнопке внизу открывает модальное окно

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

    //функция переключения класса видимости для модального окна
    function toggleModal () {
        modal.toggleClass('is-open');
    };

    // функция при наведении мышью на квартиру
    flatActive.on('mouseover', function () {
        flatActive.removeClass("flat-link-active"); //удалить активный класс у всех квартир
        currentFlat = $(this).attr("flat-link-active"); // получить значение текущей квартиры
        $(`[data-flat=${usFlatActive}]`).toggleClass("flat-link-active");
        
    });
});