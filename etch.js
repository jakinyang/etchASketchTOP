/* Prompt for grid size */
let answer = parseInt(window.prompt('Enter grid size up to 100:'));

while (answer > 100) {
  answer = parseInt(window.prompt('Grid size must be less than or equal to 100:'));
};

// console.log(answer);

/* Setting up variable for DOM */
const container = document.querySelector('#gridContainer');

// Variable for equal w/h distribution
let dimension = parseFloat(Math.sqrt(95 * 95 / answer));

// Function to append no. of squares based on user input

const appendDiv = () => {
  const newDiv = document.createElement('div');
  newDiv.className = 'gridDiv';
  newDiv.style.width = `${dimension}vw`;
  newDiv.style.height = `${dimension}vw`;
  newDiv.style.backgroundColor = 'red';
  newDiv.style.margin = '0.1vw';
  newDiv.style.border = 'white';
  container.appendChild(newDiv);
}

// Will only run if an input given to the prompt

if (answer) {
  for (let i = 0; i < answer; i++) {
    appendDiv();
  }
}

/* Hover effect */
const gridDiv = document.querySelectorAll('.gridDiv');

const glow = (e) => {
  e.target.style.backgroundColor = 'blue';
}

gridDiv.forEach(div => {
  div.addEventListener('mouseover', glow);
})