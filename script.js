function crearNieve() {
  const copo = document.createElement("div");
  copo.classList.add("snowflake");
  copo.textContent = "❄";
  copo.style.left = Math.random() * window.innerWidth + "px";
  copo.style.animationDuration = (Math.random() * 3 + 2) + "s";
  copo.style.fontSize = (Math.random() * 10 + 10) + "px";
  document.body.appendChild(copo);

  setTimeout(() => {
    copo.remove();
  }, 5000);
}

setInterval(crearNieve, 200);
