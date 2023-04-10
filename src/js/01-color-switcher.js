function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
btnStopEl.disabled = true;
let interval = null;
 
btnStartEl.addEventListener('click', handleBtnStartElClick);
function handleBtnStartElClick(event) {
    interval = setInterval(changeBodyColor, 1000);
    console.log(interval)
    function changeBodyColor() {
       bodyEl.style.backgroundColor = getRandomHexColor(); 
    }
   
    event.currentTarget.disabled = true;
    btnStopEl.disabled = false;
    
}

btnStopEl.addEventListener('click', handleBtnStopElClick);
function handleBtnStopElClick(event) {
    clearInterval(interval);
    event.currentTarget.disabled = true;
    btnStartEl.disabled = false;
    interval = 1;
}
