function changeColor() {
  const buttonBg = document.getElementById("button-bg");
  const newColor = getRandomColor();
  buttonBg.setAttribute("fill", newColor);

  // Remove the class and re-add it to trigger the animation again
  buttonBg.classList.remove("change-color-animation");
  void buttonBg.offsetWidth; // Force reflow
  buttonBg.classList.add("change-color-animation");
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
