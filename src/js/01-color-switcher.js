const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

stopBtn.addEventListener('click', onStopBtnClick);
startBtn.addEventListener('click', onStartBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function switchColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function onStartBtnClick() {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');

  timerId = setInterval(switchColor, 1000);
}

function onStopBtnClick() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);

  clearInterval(timerId);
}
