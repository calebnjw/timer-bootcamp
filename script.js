// global variables
let startTime = 0; // global variable to store the start time in ms
let interval;
// const lapTime = 0; // variable to store current lap time
// let lapTimes = []; // array to store list of laps

let timerRunning = false;

// function to format time in ms to min:s.ms properly
const formatTime = (duration) => {
  // the remainder after dividing by 1000
  let milliseconds = parseInt(duration % 1000, 10);
  // divide by 1000 to get seconds, then get the remainder from dividing by 60.
  let seconds = Math.floor((duration / 1000) % 60);
  // divide by 1000*60 to get minutes, then get the remainder from dividing by 60.
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  // divide by 1000*60*60 to get hours, then get the remainder from dividing by 24.
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  milliseconds = milliseconds.toString().padStart(3, '0');

  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};

// functions to set and reset start time
const setStartTime = () => {
  startTime = Date.now();
};

const resetStartTime = () => {
  startTime = 0;
};

// timer function
const timer = () => {
  const timeElapsed = Date.now() - startTime;
  console.log('time elapsed:', timeElapsed);
  timerDisplay.innerText = formatTime(timeElapsed);
};

// start timer
const startTimer = () => {
  if (timerRunning === true) {
    return; // if timer is already running, don't create more intervals
  }

  console.log('START!');

  setStartTime(); // set the startTime for timer function to run
  timerRunning = true;

  interval = setInterval(timer, 10); // setInterval with timer function to run every 10ms
};

// stop timer
const stopTimer = () => {
  console.log('STOP!');

  clearInterval(interval); // clear interval to stop it from running timer function
  resetStartTime(); // reset the value of startTime
  timerRunning = false;
};

// reset timer to 0
const resetTimer = () => {
  console.log('RESET!');

  clearInterval(interval); // reset function will also stop timer from running
  resetStartTime(); // reset startTime
  timerRunning = false;

  timerDisplay.innerText = formatTime(0); // reset to 0:0:0.000
  lapDisplay.innerText = ''; // clear the lap display
  // lapTimes = []; // empty lapTimes list
};

// record a lap
// const lapTimer = () => {
// }

// eventslisteners for DOM objects
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
// lapButton.addEventListener('click', lapTimer);

// initialise the game with
timerDisplay.innerText = formatTime(0);