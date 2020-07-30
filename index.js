const buttonNext = document.querySelector('.button-next');
const firstValue = document.querySelector('.first-value');
const secondValue = document.querySelector('.second-value');
const button = document.querySelector('.button');
const buttonCheck = document.querySelector('.button-check');
const buttonReveal = document.querySelector('.button-reveal');
const input = document.querySelector('.input');

buttonNext.addEventListener('click', () => {
  input.value = '';
  const newFirstValue = Math.floor((Math.random() * 1000) + 1);
  firstValue.innerHTML = newFirstValue;
  const newSecondValue = Math.floor((Math.random() * 1000) + 1);
  secondValue.innerHTML = newSecondValue;
  document.querySelector('.span-correct').style.display = 'none';
  buttonReveal.style.visibility = 'hidden';
  buttonNext.style.visibility = 'hidden';
  button.style.visibility = 'hidden';
  input.style.backgroundColor = 'white';
})

buttonCheck.addEventListener('click', () => {
  if (input.value.length >= 1) {
    const result = parseFloat(firstValue.innerHTML) + parseFloat(secondValue.innerHTML);
    if (input.value == result) {
      document.querySelector('.span-correct').style.display = 'block';
      buttonNext.style.visibility = 'visible';
      buttonReveal.style.visibility = 'hidden';
      document.querySelector('.span-wrong').style.display = 'none';
      button.style.visibility = 'hidden';
      input.style.backgroundColor = 'white';
    } else {
      document.querySelector('.span-wrong').style.display = 'block';
      buttonReveal.style.visibility = 'visible';
      button.style.visibility = 'visible';
      input.style.backgroundColor = 'white';
    }
  } else {
    alert('please enter a value.');
  }
})

buttonReveal.addEventListener('click', () => {
  const result = parseFloat(firstValue.innerHTML) + parseFloat(secondValue.innerHTML);
  input.value = result;
  input.style.backgroundColor = '#99ff13f5';
  document.querySelector('.span-wrong').style.display = 'none';
  document.querySelector('.span-correct').style.display = 'none';
  buttonNext.style.visibility = 'visible';
})

button.addEventListener('click', () => {
  input.style.backgroundColor = 'white';
  buttonReveal.style.visibility = 'hidden';
  document.querySelector('.span-wrong').style.display = 'none';
  buttonNext.style.visibility = 'hidden';
  button.style.visibility = 'hidden';
  input.value = '';
})
