function setDate() {
  const secondsHand = document.querySelector(".second-hand");
  const hourHand = document.querySelector(".hour-hand");
  const minutesHand = document.querySelector(".min-hand");

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

setInterval(setDate, 1000);
