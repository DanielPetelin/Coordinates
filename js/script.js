// задание отловить координаты мыши относительно блока на экране.
// и выводить их на экран.

// создаём функцию, которая будет показывать координаты.
document.querySelector('#test').onmousemove = function(event) {
    event = event || window.event;
    // console.log(event);
    // выводим координаты x
    // на экран с помощью innerHTML.
    document.querySelector('#offx').innerHTML = event.offsetX;
    // выводим коорлинаты y
    // на экран с помощью innerHTML.
    document.querySelector('#offy').innerHTML = event.offsetY;
}