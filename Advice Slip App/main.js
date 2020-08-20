const adviceText = document.querySelector('.text');
const btn = document.querySelector('.btn');
const adviceArea = document.getElementById('advice-area');

btn.addEventListener('click', advice);

function advice() {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      adviceArea.style.display = 'block';
      adviceText.innerHTML = data.slip.advice;
    })
    .catch(err => console.log(err));
}

