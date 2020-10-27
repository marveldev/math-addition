const addNumbers = () => {
  const firstValue = document.querySelector('#firstValue');
  const secondValue = document.querySelector('#secondValue');
  const result = parseFloat(firstValue.innerText) + parseFloat(secondValue.innerText);
  return result;
}

const generateNumbers = () => {
  const firstValue = document.querySelector('#firstValue');
  const secondValue = document.querySelector('#secondValue')
  const input = document.querySelector('#input');
  const newFirstValue = Math.floor((Math.random() * 1000) + 1);
  firstValue.innerText = newFirstValue;
  const newSecondValue = Math.floor((Math.random() * 1000) + 1);
  secondValue.innerText = newSecondValue;
  input.focus();
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.input-form');
  const correctMessage = document.querySelector('#correctMessage')
  const wrongMessage = document.querySelector('#wrongMessage')
  const nextQuestionButton = document.querySelector('#nextQtnButton');
  const repeatQtnButton = document.querySelector('#repeatButton');
  const showAnswerButton = document.querySelector('#answerButton');
  const input = document.querySelector('#input');
  input.focus();
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value == addNumbers()) {
      correctMessage.style.display = 'block';
      nextQuestionButton.style.display = 'inline-block';
      showAnswerButton.style.display = 'none';
      nextQuestionButton.focus();
    } else {
      wrongMessage.style.display = 'block';
      repeatQtnButton.style.display = 'inline-block';
      showAnswerButton.style.display = 'inline-block';
    }
  })

  nextQuestionButton.addEventListener('click', () => {
    input.value = '';
    generateNumbers();
    correctMessage.style.display = 'none';
    nextQuestionButton.style.display = 'none';
  })
  
  repeatQtnButton.addEventListener('click', () => {
    wrongMessage.style.display = 'none';
    repeatQtnButton.style.display = 'none';
    showAnswerButton.style.display = 'inline-block';
  })
  
  showAnswerButton.addEventListener('click', () => {
    input.value = addNumbers();
    wrongMessage.style.display = 'none';
    repeatQtnButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    nextQuestionButton.style.display = 'inline-block';
  })
})

module.exports = { addNumbers, generateNumbers };
