function setDate() {
  const secondsHand = document.querySelector(".second-hand");

  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);
}

setInterval(setDate, 1000);
