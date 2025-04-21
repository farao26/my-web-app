window.addEventListener('click', () => {
  const audio = document.getElementById("bgm");
  if (audio.paused) {
    audio.play();
  }
});

window.addEventListener('load', () => {
  setTimeout(() => {
    window.location.href = "main.html";
  }, 20000);
});
