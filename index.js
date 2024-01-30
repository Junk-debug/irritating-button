const button = document.getElementById('irritatingButton');

const html = document.querySelector('html'); 

html.addEventListener('mousemove', function (event) {
  // добавляем обработчик события "mousemove"
  const x = event.clientX; // получаем координату X мыши
  const y = event.clientY; // получаем координату Y мыши

  button.style.top = y + "px";
  button.style.left = x + "px";
  console.log(`Координаты мыши: x=${x}, y=${y}`); // выводим координаты мыши в консоль
});