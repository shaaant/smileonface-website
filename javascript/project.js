const pickUpLines = [

  `Are you made of stars, {name}? Because your presence lights up my world.`,

  `Are you a magician, {name}? Whenever I see you, everyone else disappears.`,

  `Do you have a map, {name}? Because I just got lost in your eyes.`,

  `Are you a camera, {name}? Every time I look at you, I smile.`,

  `If we were in a dictionary, {name}, I'm pretty sure we'd be defined as 'perfect match.`,

  `Are you a dream, {name}? Because being with you feels too good to be true.`,

  `Do you believe in enchantment, {name}? Because ever since I met you, my world has been magical.`

];

let index = 0;

document.querySelector('.js-button-class')
  .addEventListener('click', submitButton);

document.body
  .addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      submitButton();
    }
  });

function submitButton() {
  const inputElement = document.querySelector('.js-input-class');
  const name = inputElement.value;

  document.querySelector('.js-para1-class')
    .innerHTML = 
      `${index + 1}. ` + 
        pickUpLines[index].replace('{name}', name);

  if (index < pickUpLines.length - 1) {
    let html = `
      <p>
        Interested in more? 
          <button onclick="
            submitButton();
          ">Yes
          </button> 
          <button onclick="
            stopTheProcess();
          ">No
          </button>
      </p>
    `;
    document.querySelector('.js-div-class')
      .innerHTML = html;
    index++;
  } else {
    document.querySelector('.js-div-class')
      .innerHTML = '';
    document.querySelector('.js-para2-class')
      .innerHTML = 'Thanks for joining in!';
  }
}

function stopTheProcess() {
  document.querySelector('.js-div-class')
    .innerHTML = '';
  document.querySelector('.js-para1-class')
    .innerHTML = '';
  document.querySelector('.js-para2-class')
    .innerHTML = `Thanks for joining in!`;
}