/* Prompt for grid size */
let answer = parseInt(window.prompt('Enter grid size up to 100:'));

while (answer > 100) {
  answer = parseInt(window.prompt('Grid size must be less than or equal to 100:'));
};

console.log(answer);
/* Setting up variable for DOM */
