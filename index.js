const button = document.getElementById('irritatingButton');
const html = document.querySelector('html');

button.addEventListener('click', () => {
  alert('Hello world!')
})

setTimeout(startGame, 10000);

function startGame() {
  let speed = 80;

  let timerId = setInterval(() => {
    speed -= 0.1;

    console.log(speed);

    if (speed <= 0.3) {
      clearInterval(timerId)
      speed = 0.3;
    }

    button.style.setProperty('--button-speed', speed + 's');
  }, 1000);

  html.addEventListener('mousemove', function (event) {
    const x = event.clientX;
    const y = event.clientY;
  
    button.style.top = y + "px";
    button.style.left = x + "px";
  });
}