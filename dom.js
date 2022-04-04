// DOM variables
// divs to store timer output and stopwatch buttons
const timerDisplay = document.createElement('div');
timerDisplay.className = 'timer-div';
const lapDisplay = document.createElement('div');
lapDisplay.className = 'lap-div';
const buttonDisplay = document.createElement('div');
buttonDisplay.className = 'btn-div';

// buttons for stopwatch
const startButton = document.createElement('button');
startButton.className = 'btn';
startButton.innerText = 'start';
const stopButton = document.createElement('button');
stopButton.className = 'btn';
stopButton.innerText = 'stop';
const resetButton = document.createElement('button');
resetButton.className = 'btn';
resetButton.innerText = 'reset';
const lapButton = document.createElement('button');
lapButton.className = 'btn';
lapButton.innerText = 'lap';
lapButton.setAttribute('disabled', true); // button is disabled because it's not working

buttonDisplay.append(startButton, stopButton, resetButton, lapButton);

const renderDOM = () => {
  document.body.appendChild(timerDisplay);
  document.body.appendChild(buttonDisplay);
  document.body.appendChild(lapDisplay);
};

renderDOM();