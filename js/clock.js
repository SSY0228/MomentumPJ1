

const clock = document.querySelector("h2#clock");

function getAclock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if ( hours >= 0, hours < 12 ) {
    clock.innerText = `${hours}:${minutes}:${seconds}` + " AM"
  } else if ( hours == 12 ) {
    clock.innerText = `${hours}:${minutes}:${seconds}` + " PM"
  } else if ( hours > 12 ) {
    clock.innerText = `${hours - 12}:${minutes}:${seconds}` + " PM"
  }

  // clock.innerText = (`${hours}:${minutes}:${seconds}`);

}

getAclock();
setInterval(getAclock, 1000);
