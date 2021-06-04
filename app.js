const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', 'blue', 'gray'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const randomNumber = Math.trunc(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// Colors array sam prepisao od njega a funkcionalnost ovoga sam odradio prije pa odgledao video.
