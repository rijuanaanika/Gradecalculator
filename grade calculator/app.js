// Your solution goes here.
// Hints:
// -> Handle the onsubmit function using attribute or js event listener.
// -> Take the value of input, calculate the grade and update ui.
// -> Maximum number can be 100
// -> Clear the input field after value submission

// for input
let form = document.getElementById('iits-formSubmit');
let input = document.getElementById('iits-inp');

let countA = 0;
let countBP = 0;
let countB = 0;
let countBM = 0;
let countC = 0;
let countF = 0;

// counting grade
let aCount = document.getElementById('iits-a_count');
let bpCount = document.getElementById('iits-bp_count');
let bCount = document.getElementById('iits-b_count');
let bmCount = document.getElementById('iits-bm_count');
let cCount = document.getElementById('iits-c_count');
let fCount = document.getElementById('iits-f_count');


function chngGrade(event) {
  event.preventDefault(); //  for preventing auto submission

  // Get the input value
  let inputNumber = (input.value);

  //  grade calculation
  let grade = '';
  if (inputNumber>=81 && inputNumber<=100) {
    grade = 'A';
    countA++;
  } else if (inputNumber>=71 && inputNumber<=80) {
    grade = 'B+';
    countBP++;
  } else if (inputNumber>=61 && inputNumber<=70) {
    grade = 'B';
    countB++;
  } else if (inputNumber>=51 && inputNumber<=60) {
    grade = 'B-';
    countBM++;
  } else if (inputNumber>=40 && inputNumber<=50) {
    grade = 'C';
    countC++;
  } else if (inputNumber<40) {
    grade = 'F';
    countF++;
  }

  // Update grade
  aCount.textContent = countA;
  bpCount.textContent = countBP;
  bCount.textContent = countB;
  bmCount.textContent = countBM;
  cCount.textContent = countC;
  fCount.textContent = countF;

  // Reset input
  input.value = '';
}

// event listener 
form.addEventListener('submit', chngGrade);
