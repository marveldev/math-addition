const { addNumbers, generateNumbers } = require('./index');

test('sum of two numbers', () => {
  document.body.innerHTML  = `
    <section class="content">
      <p id="correctMessage">correct</p>
      <p id="wrongMessage">wrong</p>
      <span id="firstValue">2</span>
      <span class="plus sign">+</span>
      <span id="secondValue">2</span>
      <span class="equals sign">=</span>
      <form class="input-form">
        <input type="number" id="input" placeholder="result..." required></input>
        <button id="confirmButton">Check</button>
      </form>
      <div class="button-container">
        <button id="repeatButton">Try Again</button>
        <button id="answerButton">Show Answer</button>
        <button id="nextQtnButton">Next Question</button>
      </div> 
    </section>
  `
  expect(addNumbers()).not.toBeNull();
})

test('generate random numbers', () => {
  expect(generateNumbers()).not.toBeNull();
})
