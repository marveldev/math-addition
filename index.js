const form = document.querySelector('.input-form');
const input = document.querySelector('#input');
const nextQuestionButton = document.querySelector('#nextQtnButton');
const repeatQtnButton = document.querySelector('#repeatButton');
const showAnswerButton = document.querySelector('#answerButton');


const firstValue = document.querySelector('#firstValue');
const secondValue = document.querySelector('#secondValue');

const addNumbers = () => {
  const result = parseFloat(firstValue.innerText) + parseFloat(secondValue.innerText);
  return result;
}

const generateNumbers = () => {
  const newFirstValue = Math.floor((Math.random() * 1000) + 1);
  firstValue.innerText = newFirstValue;
  const newSecondValue = Math.floor((Math.random() * 1000) + 1);
  secondValue.innerText = newSecondValue;
}

const correctMessage = document.querySelector('#correctMessage')
const wrongMessage = document.querySelector('#wrongMessage')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value == addNumbers()) {
      correctMessage.style.display = 'block';
      nextQuestionButton.style.display = 'inline-block';
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

  // revealAnswerButton.style.visibility = 'hidden';
  // nextQuestionButton.style.visibility = 'hidden';
  // repeatQuestionButton.style.visibility = 'hidden';
  // input.style.backgroundColor = 'white';
})



// revealAnswerButton.addEventListener('click', () => {
//   const result = parseFloat(firstValue.innerHTML) + parseFloat(secondValue.innerHTML);
//   input.value = result;
//   input.style.backgroundColor = '#99ff13f5';
//   document.querySelector('.wrong').style.display = 'none';
//   document.querySelector('.correct').style.display = 'none';
//   nextQuestionButton.style.visibility = 'visible';
// })

// repeatQuestionButton.addEventListener('click', () => {
//   input.style.backgroundColor = 'white';
//   revealAnswerButton.style.visibility = 'hidden';
//   document.querySelector('.wrong').style.display = 'none';
//   nextQuestionButton.style.visibility = 'hidden';
//   repeatQuestionButton.style.visibility = 'hidden';
//   input.value = '';
// })
