
const questionTitle = document.getElementById('question-title')
const quizBox = document.getElementById('quiz-box');
const intro = document.getElementById('intro-info');
const startBtn = document.getElementById('start-btn');
const answers = document.getElementById('answers')

let currentQuestion = 0;
let score = 0;
let counter = 60;

const questions = [
    {
        question: "Which of the following is not a data type in javascript?",
        choices: [
            {option1: "Number", answer: false},
            {option2: "Color", answer: true},
            {option3: "String", answer: false},
            {option4: "Boolean", answer: false}
        ],
    },
    {
        question: "What does === compare in javascript?",
        choices: [
            {option1: "Type", answer: false},
            {option2: "Value", answer: false},
            {option3: "Type and value", answer: true},
            {option4: "8 and D", answer: false}
        ],
    },
    {
        question:  "What is the index for the first element of an array?",
        choices: [
            {option1: "1", answer: false},
            {option2: "2", answer: false},
            {option3: "3", answer: false},
            {option4: "0", answer: true}
        ],
    },
    {
        question: "How do you write Hello in an alert box?",
        choices: [
            {option1: "alert=Hello", answer: false},
            {option2: "alert{Hello}", answer: false},
            {option3: "text('Hello')", answer: false},
            {option4: "alert('Hello')", answer:true}
        ],
    },
    {
        question: "How do you call a function named 'myFunction' in Javascript?",
        choices: [
            {option1: "myFunction()", answer: true},
            {option2: "call myFunction", answer: false},
            {option3: "myFunction=", answer: false},
            {option4: "Hey you! myFunction!", answer: false}
        ],
    }
];


startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    // removes displayed startButton and introInfo when start-btn is clicked
    if (startBtn.style.display === 'block') {
        startBtn.style.display = 'none'
    };
    if (intro.style.display === 'block'){
        intro.style.display = 'none'
    };
    // displays hidden questions and choices when startButton is clicked
    if(quizBox.style.display === 'none'){
        quizBox.style.display = 'block'
    };


    currentQuestion = 0;
    questionTitle.innerHTML = questions[currentQuestion].question;
    // create buttons for the options 1-4 and fill them with the option text from the current question
    let optionBtn1 = document.createElement("button");
    optionBtn1.textContent = questions[currentQuestion].choices[0].option1;
    document.getElementById('answers').appendChild(optionBtn1);

    let optionBtn2 = document.createElement("button");
    optionBtn2.textContent = questions[currentQuestion].choices[1].option2;
    document.getElementById('answers').appendChild(optionBtn2);
    
    let optionBtn3 = document.createElement("button");
    optionBtn3.textContent = questions[currentQuestion].choices[2].option3;
    document.getElementById('answers').appendChild(optionBtn3);

    let optionBtn4 = document.createElement("button");
    optionBtn4.textContent = questions[currentQuestion].choices[3].option4;
    document.getElementById('answers').appendChild(optionBtn4);

    // add eventlisteners for a click on any of the 4 buttons
    optionBtn1.addEventListener('click', checkTrue);
    optionBtn2.addEventListener('click', checkTrue);
    optionBtn3.addEventListener('click', checkTrue);
    optionBtn4.addEventListener('click', checkTrue);
    
    
    // adding a function to check if the answer choice is true or not
    function checkTrue() {
        // run through the choices and create a response. if true go to the next question, else go to the next question and remove 10 seconds from their time
        for(let i = 0; i < questions[currentQuestion].choices[0].length; i++)
        if (questions[currentQuestion].choices[i].answer = true) {
            currentQuestion++;
        }
        else {
            currentQuestion++;
            counter -= 10; // I know this is using a variable within another function. How could I fix this?
        }
    }
    
    // create a countdown clock that the user will be racing against to get a highscore
    function Timer() {
         // set count to start at 60

        let myTimer = setInterval(function() {
             //get the element and fill the html with the counter
            document.getElementById('seconds').innerHTML = counter;
            // counting down 1000 milliseconds at a time
            counter--;
            // at 0 seconds stop counting down and alert the user that their time has run out
            if (counter <= 0) {
                alert("You have run out of time!")
                clearInterval(myTimer);
            }
         }, 1000);
       }
       Timer();
};