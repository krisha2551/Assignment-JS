
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");


setInterval(() => {
  
  const now = new Date();

  
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  
  const hourRotation = 30 * hours + minutes / 2;
  const minuteRotation = 6 * minutes;
  const secondRotation = 6 * seconds;

  
  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
