const nextQuestionButton = document.querySelector('.next-button');
const firstValue = document.querySelector('.first');
const secondValue = document.querySelector('.second');
const repeatQuestionButton = document.querySelector('.repeat-button');
const confirmButton = document.querySelector('.confirm-button');
const revealAnswerButton = document.querySelector('.reveal-button');
const input = document.querySelector('.input');

nextQuestionButton.addEventListener('click', () => {
  input.value = '';
  const newFirstValue = Math.floor((Math.random() * 1000) + 1);
  firstValue.innerHTML = newFirstValue;
  const newSecondValue = Math.floor((Math.random() * 1000) + 1);
  secondValue.innerHTML = newSecondValue;
  document.querySelector('.correct').style.display = 'none';
  revealAnswerButton.style.visibility = 'hidden';
  nextQuestionButton.style.visibility = 'hidden';
  repeatQuestionButton.style.visibility = 'hidden';
  input.style.backgroundColor = 'white';
})

confirmButton.addEventListener('click', () => {
  if (input.value.length >= 1) {
    const result = parseFloat(firstValue.innerHTML) + parseFloat(secondValue.innerHTML);
    if (input.value == result) {
      document.querySelector('.correct').style.display = 'block';
      nextQuestionButton.style.visibility = 'visible';
      revealAnswerButton.style.visibility = 'hidden';
      document.querySelector('.wrong').style.display = 'none';
      repeatQuestionButton.style.visibility = 'hidden';
      input.style.backgroundColor = 'white';
    } else {
      document.querySelector('.wrong').style.display = 'block';
      revealAnswerButton.style.visibility = 'visible';
      repeatQuestionButton.style.visibility = 'visible';
      input.style.backgroundColor = 'white';
    }
  } else {
    alert('please enter a value.');
  }
})

revealAnswerButton.addEventListener('click', () => {
  const result = parseFloat(firstValue.innerHTML) + parseFloat(secondValue.innerHTML);
  input.value = result;
  input.style.backgroundColor = '#99ff13f5';
  document.querySelector('.wrong').style.display = 'none';
  document.querySelector('.correct').style.display = 'none';
  nextQuestionButton.style.visibility = 'visible';
})

repeatQuestionButton.addEventListener('click', () => {
  input.style.backgroundColor = 'white';
  revealAnswerButton.style.visibility = 'hidden';
  document.querySelector('.wrong').style.display = 'none';
  nextQuestionButton.style.visibility = 'hidden';
  repeatQuestionButton.style.visibility = 'hidden';
  input.value = '';
})
