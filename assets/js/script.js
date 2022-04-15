const questions = [
    {
        question: "Which of the following is not a data type in javascript?",
        choices: ["Number", "Color", "String", "Boolean"],
        answer: "Color"
    },
    {
        question: "What does === compare in javascript?",
        choices: ["Type", "Value", "Type and value", "8 and D"],
        answer: "Type and value"
    },
    {
        question:  "What is the index for the first element of an array?",
        choices: ["1", "2", "3", "0"],
        answer: "0"
    },
    {
        question: "How do you write Hello in an alert box?",
        choices: ["alert=Hello", "alert{Hello}", "text('Hello')", "alert('Hello')"],
        answer: "alert('Hello')"
    },
    {
        question: "How do you call a function named 'myFunction' in Javascript?",
        choices: ["myFunction()", "call myFunction", "myFunction=", "Hey you! myFunction!"],
        answer: "myFunction()" 
    }
];

const quiz = document.getElementById('quiz-box');

const intro = document.getElementById('intro-info');
// get the start-btn element and add an event listener to call startQuiz function on click
const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startQuiz);

function startQuiz() {

    // removes displayed startButton and introInfo when start-btn is clicked
    if (startButton.style.display === 'block') {
        startButton.style.display = 'none'
    };
    if (intro.style.display === 'block'){
        intro.style.display = 'none'
    };
    // displays hidden questions and choices when startButton is clicked
    if(quiz.style.display === 'none'){
        quiz.style.display = 'block'
    };

   // create a countdown clock that the user will be racing against to get a highscore
    function Timer() {
        // set count to start at 60
        var counter = 60;
        var myTimer = setInterval(function() {
            //get the element and fill the html with the counter
          document.getElementById('seconds').innerHTML = counter;
          // counting down 1000 milliseconds at a time
          counter--;
          // at 0 seconds stop counting down. I'll eventually add answer button functionality to reduce by 10 seconds on wrong selection and alert that you failed to complete the quiz in time if 0 is reached
          if (counter < 0) {
            clearInterval(myTimer);
          }
        }, 1000);
      }
      Timer();
};