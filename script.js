// let timer;
// let isRunning = false;
// let lapCounter = 0;
// let lapTimes = [];

// function startStop() {
//   let startStopButton = document.getElementById('startStop');
//   if (!isRunning) {
//     timer = setInterval(updateDisplay, 10);
//     startStopButton.innerHTML = '<i class="fas fa-pause"></i>';
//     startStopButton.classList.remove('start');
//     startStopButton.classList.add('stop');
//     isRunning = true;
//   } else {
//     clearInterval(timer);
//     startStopButton.innerHTML = '<i class="fas fa-play"></i>';
//     startStopButton.classList.remove('stop');
//     startStopButton.classList.add('start');
//     isRunning = false;
//   }
// }

// function reset() {
//   clearInterval(timer);
//   document.getElementById('display').textContent = '00:00:00';
//   let startStopButton = document.getElementById('startStop');
//   startStopButton.innerHTML = '<i class="fas fa-play"></i>';
//   startStopButton.classList.remove('stop');
//   startStopButton.classList.add('start');
//   isRunning = false;
//   lapCounter = 0;
//   lapTimes = [];
//   document.getElementById('lapTimes').innerHTML = '';
// }

// function updateDisplay() {
//   let display = document.getElementById('display');
//   let currentTime = display.textContent.split(':');
//   let j = parseInt(currentTime[0])
//   let hours = parseInt(currentTime[1]);
//   let minutes = parseInt(currentTime[2]);
//   let seconds = parseInt(currentTime[3]);

//   seconds++;


//   if (seconds >= 60) {
//     seconds = 0;
//     minutes++;
//     if (minutes >= 60) {
//       minutes = 0;
//       hours++;
//       if (hours >= 60) {
//         hours = 0;
//         j++;
//       }
//     }
//   }

//   display.textContent =
//     (j < 10 ? '0' + j : j) + ':' + 
//     (hours < 10 ? '0' + hours : hours) + ':' +
//     (minutes < 10 ? '0' + minutes : minutes) + ':' +
//     (seconds < 10 ? '0' + seconds : seconds);

// }

// function lap() {
//   lapCounter++;
//   let lapTime = document.getElementById('display').textContent;
//   lapTimes.push(lapTime);
//   let lapList = document.getElementById('lapTimes');
//   let li = document.createElement('li');
//   li.textContent = 'Lap ' + lapCounter + ': ' + lapTime;
//   lapList.appendChild(li);
// }
// let timer;
// let isRunning = false;
// let lapCounter = 0;
// let lapTimes = [];

// function startStop() {
//   let startStopButton = document.getElementById('startStop');
//   if (!isRunning) {
//     timer = setInterval(updateDisplay, 1000); // Update every second
//     startStopButton.innerHTML = '<i class="fas fa-pause"></i>';
//     startStopButton.classList.remove('start');
//     startStopButton.classList.add('stop');
//     isRunning = true;
//   } else {
//     clearInterval(timer);
//     startStopButton.innerHTML = '<i class="fas fa-play"></i>';
//     startStopButton.classList.remove('stop');
//     startStopButton.classList.add('start');
//     isRunning = false;
//   }
// }

// function reset() {
//   clearInterval(timer);
//   document.getElementById('display').textContent = '00:00:00';
//   let startStopButton = document.getElementById('startStop');
//   startStopButton.innerHTML = '<i class="fas fa-play"></i>';
//   startStopButton.classList.remove('stop');
//   startStopButton.classList.add('start');
//   isRunning = false;
//   lapCounter = 0;
//   lapTimes = [];
//   document.getElementById('lapTimes').innerHTML = '';
// }

// function updateDisplay() {
//   let display = document.getElementById('display');
//   let currentTime = display.textContent.split(':');
//   let hours = parseInt(currentTime[0]);
//   let minutes = parseInt(currentTime[1]);
//   let seconds = parseInt(currentTime[2]);
//   let milliseconds = parseInt(currentTime[3]);

//   milliseconds++;

//   if (milliseconds >= 1000) {
//     milliseconds = 0;
//     seconds++;
//     if (seconds >= 60) {
//       seconds = 0;
//       minutes++;
//       if (minutes >= 60) {
//         minutes = 0;
//         hours++;
//       }
//     }
//   }

//   display.textContent = 
//     (hours < 10 ? '0' + hours : hours) + ':' +
//     (minutes < 10 ? '0' + minutes : minutes) + ':' +
//     (seconds < 10 ? '0' + seconds : seconds) + ':' +
//     (milliseconds < 10 ? '00' + milliseconds : (milliseconds < 100 ? '0' + milliseconds : milliseconds));
// }

  

// function lap() {
//   lapCounter++;
//   let lapTime = document.getElementById('display').textContent;
//   lapTimes.push(lapTime);
//   let lapList = document.getElementById('lapTimes');
//   let li = document.createElement('li');
//   li.textContent = 'Lap ' + lapCounter + ': ' + lapTime;
//   lapList.appendChild(li);
// }

let timer;
let isRunning = false;
let lapCounter = 0;
let lapTimes = [];

function startStop() {
  let startStopButton = document.getElementById('startStop');
  if (!isRunning) {
    timer = setInterval(updateDisplay, 10);
    startStopButton.innerHTML = '<i class="fas fa-pause"></i>';
    startStopButton.classList.remove('start');
    startStopButton.classList.add('stop');
    isRunning = true;
  } else {
    clearInterval(timer);
    startStopButton.innerHTML = '<i class="fas fa-play"></i>';
    startStopButton.classList.remove('stop');
    startStopButton.classList.add('start');
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  document.getElementById('display').textContent = '00:00:00:00';
  let startStopButton = document.getElementById('startStop');
  startStopButton.innerHTML = '<i class="fas fa-play"></i>';
  startStopButton.classList.remove('stop');
  startStopButton.classList.add('start');
  isRunning = false;
  lapCounter = 0;
  lapTimes = [];
  document.getElementById('lapTimes').innerHTML = '';
}

function updateDisplay() {
  let display = document.getElementById('display');
  let currentTime = display.textContent.split(':');
  let hours = parseInt(currentTime[0]);
  let minutes = parseInt(currentTime[1]);
  let seconds = parseInt(currentTime[2]);
  let milliseconds = parseInt(currentTime[3]);

  milliseconds += 10;

  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  display.textContent =
    (hours < 10 ? '0' + hours : hours) + ':' + 
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds) + ':' +
    (milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds);
}

function lap() {
  lapCounter++;
  let lapTime = document.getElementById('display').textContent;
  lapTimes.push(lapTime);
  let lapList = document.getElementById('lapTimes');
  let li = document.createElement('li');
  li.textContent = 'Lap ' + lapCounter + ': ' + lapTime;
  lapList.appendChild(li);
}
``
