
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
            { option: "Number", answer: false },
            { option: "Color", answer: true },
            { option: "String", answer: false },
            { option: "Boolean", answer: false }
        ],
    },
    {
        question: "What does === compare in javascript?",
        choices: [
            { option: "Type", answer: false },
            { option: "Value", answer: false },
            { option: "Type and value", answer: true },
            { option: "8 and D", answer: false }
        ],
    },
    {
        question: "What is the index for the first element of an array?",
        choices: [
            { option: "1", answer: false },
            { option: "2", answer: false },
            { option: "3", answer: false },
            { option: "0", answer: true }
        ],
    },
    {
        question: "How do you write Hello in an alert box?",
        choices: [
            { option: "alert=Hello", answer: false },
            { option: "alert{Hello}", answer: false },
            { option: "text('Hello')", answer: false },
            { option: "alert('Hello')", answer: true }
        ],
    },
    {
        question: "How do you call a function named 'myFunction' in Javascript?",
        choices: [
            { option: "myFunction()", answer: true },
            { option: "call myFunction", answer: false },
            { option: "myFunction=", answer: false },
            { option: "Hey you! myFunction!", answer: false }
        ],
    }
];


startBtn.addEventListener('click', startQuiz);

function NextQuestion() {
    document.getElementById('answers').innerHTML = ""
    questionTitle.innerHTML = questions[currentQuestion].question;

    // create buttons for the options 1-4 and fill them with the option text from the current question
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        let optionBtn = document.createElement("button");
        document.getElementById('answers').appendChild(optionBtn);
        optionBtn.textContent = questions[currentQuestion].choices[i].option;
        
        // add eventlisteners for a click on any of the 4 buttons
        optionBtn.addEventListener('click', checkTrue);
    }
};

function checkTrue(e) {
    console.log(e.target.textContent)
    let userSelection = e.target.textContent

    let correctAnswer = questions[currentQuestion].choices.find(function (question) {
        return question.option === userSelection
    })
    console.log(correctAnswer);

    if (!correctAnswer.answer) {
        counter -= 10;
    }
    currentQuestion++;
    NextQuestion();
};

function startQuiz() {
    // removes displayed startButton and introInfo when start-btn is clicked
    if (startBtn.style.display === 'block') {
        startBtn.style.display = 'none'
    };
    if (intro.style.display === 'block') {
        intro.style.display = 'none'
    };
    // displays hidden questions and choices when startButton is clicked
    if (quizBox.style.display === 'none') {
        quizBox.style.display = 'block'
    };

    currentQuestion = 0;
    NextQuestion();

    // create a countdown clock that the user will be racing against to get a highscore
    function Timer() {
        let myTimer = setInterval(function () {
            //get the element and fill the html with the counter
            document.getElementById('seconds').innerHTML = counter;
            // counting down 1000 milliseconds at a time
            counter--;
            // at 0 seconds stop counting down
            if (counter < 0) {
                clearInterval(myTimer);
            }
        }, 1000);
    }
    Timer();
};