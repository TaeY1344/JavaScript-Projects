const adviceText = document.querySelector('.text');
const btn = document.querySelector('.btn');

btn.addEventListener('click', advice);
function advice() {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      adviceText.innerHTML = data.slip.advice;
    })
    .catch(err => console.log(err));
}

