const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  let hexNumber = '#';
  for (let i = 0; i < 6; i++) {
    hexNumber += hex[getRandomNumber()];
  }
  color.textContent = hexNumber;
  document.body.style.backgroundColor = hexNumber;
});

function getRandomNumber() {
  return Math.trunc(Math.random() * hex.length);
}

// Ovo vec nisam potpuno sam odradio bio sam malo zbunjen. Ali na kraju generise mi opet random broj po duzini hex niza(0-16) i uzima vrijednost koja se nalazi na indexu random broja i samo dodaje na hexNumber varijablu i tako stvara brojeve. Zaustavlja se na 6(tj na 5 kako je array 0 based). Mali fuck up ali jednostavno poprilicno :D
