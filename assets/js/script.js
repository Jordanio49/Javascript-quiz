// Getting elements from HTML to be used dynamically in js
const questionTitle = document.getElementById('question-title')
const quizBox = document.getElementById('quiz-box');
const intro = document.getElementById('intro-info');
const startBtn = document.getElementById('start-btn');
const answers = document.getElementById('answers');
const submission = document.getElementById('submission');

// Created current question and counter as global variables
let currentQuestion = 0;
let counter = 60;

// Added an array with questions as well as answer choices to be checked true or false
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

// Call start quiz function on startBtn click
startBtn.addEventListener('click', startQuiz);

// showSubmission function for user to enter name and score
function showSubmission(textContent) {
    // Stops displaying the quizBox div and begins displaying the submission div
    quizBox.style.display = 'none'

    submission.style.display = 'block'

    // Creates a form for the user to enter their name and final score and takes you to the HighScores page.
    let scoreForm = document.createElement("form");
    scoreForm.setAttribute('method', "post");
    scoreForm.setAttribute('action', "./HighScores.HTML");

    let info = document.createElement("input");
    info.setAttribute('type', "text");
    info.setAttribute('name', "username");

    let submit = document.createElement("input");
    submit.setAttribute('type', "submit");
    submit.setAttribute('value', "Submit");

    scoreForm.appendChild(info);
    scoreForm.appendChild(submit);

    document.getElementById('submission').appendChild(scoreForm)
    // Event listener to save to localStorage on click of submit button
    submit.addEventListener(
        'click',
        window.localStorage.setItem('name', textContent),
    );
};

// Created next question function
function NextQuestion() {
    // Set answers did to blank so it repopulates with new buttons for each question instead of displaying every button from every question
    document.getElementById('answers').innerHTML = ""
    questionTitle.innerHTML = questions[currentQuestion].question;

    // Loops through the questions, creates buttons for the options 1-4, and fills them with the option text from the current question
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        let optionBtn = document.createElement("button");
        document.getElementById('answers').appendChild(optionBtn);
        optionBtn.textContent = questions[currentQuestion].choices[i].option;
        // Add eventlisteners for a click on any of the 4 buttons
        optionBtn.addEventListener('click', checkTrue);
    }
};

// Function called when the option buttons are clicked
function checkTrue(e) {
    // Compares question.option to the user selection (the button they clicked)
    let userSelection = e.target.textContent

    let correctAnswer = questions[currentQuestion].choices.find(function (question) {
        return question.option === userSelection
    })
    // If the answer is incorrect subtract 10 seconds and right or wrong go to the next question
    if (!correctAnswer.answer) {
        counter -= 10;
    }
    currentQuestion++;
    // If less than the length of the questions array go to next question. Otherwise showSubmission
    if (currentQuestion < questions.length) {
        NextQuestion();
    }
    else {
        showSubmission();
    }

};

function startQuiz() {
    // Removes displayed startButton and introInfo when start-btn is clicked
    startBtn.style.display = 'none'

    intro.style.display = 'none'
    // Displays quizBox when startButton is clicked

    quizBox.style.display = 'block'

    currentQuestion = 0;
    NextQuestion();

    // Create a countdown clock that the user will be racing against to get a highscore
    function Timer() {
        let myTimer = setInterval(function () {
            //Get the element and fill the html with the counter
            document.getElementById('seconds').innerHTML = counter;
            // At 0 seconds stop counting down and call showSubmission function
            if (counter === 0) {
                clearInterval(myTimer);
                showSubmission();
            }
            // If current index is less than the total length keep counting down. Otherwise stop the timer
            if (currentQuestion < questions.length) {
                counter--;
            }
            else {
                clearInterval(myTimer);
            }
            // Counting down 1000 milliseconds at a time
        }, 1000);
    }
    // call Timer function
    Timer();
};