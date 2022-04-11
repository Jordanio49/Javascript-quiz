let questions = [
    {
        qnum: 1,
        question: "Which of the following is not a data type in javascript?",
        answers: [
            {text: "Number", isCorrect: false},
            {text: "Color", isCorrect: true},
            {text: "String", isCorrect: false},
            {text: "Boolean", isCorrect: false}
        ]
    },

    {
        qnum: 2,
        question: "What does === compare in javascript?",
        choices: [
            {text: "Type", isCorrect: false},
            {text: "Value", isCorrect: false},
            {text: "Type and value", isCorrect: true},
            {text: "8 and D", isCorrect: false}
       ]
    },

    {
        qnum: 3,
        question: "What is the index for the first element of an array?",
        choices: [
            {text: "1", isCorrect: false},
            {text: "2", isCorrect: false},
            {text: "3", isCorrect: false},
            {text: "0", isCorrect: true}

        ]
    },

    {
        qnum: 4,
        question: "How do you write Hello in an alert box?",
        choices: [
            {text: "alert=Hello", isCorrect: false},
            {text: "alert{Hello}", isCorrect: false},
            {text: "text('Hello')", isCorrect: false},
            {text: "alert('Hello');", isCorrect: true}
        ]
    },

    {
        qnum: 5,
        question: "How do you call a function named 'myFunction' in Javascript?",
        choices: [
            {text: "myFunction()", isCorrect: true},
            {text: "call myFunction", isCorrect: false},
            {text: "myFunction=", isCorrect: false},
            {text: "Hey you! myFunction!", isCorrect: false}
       ]
    }
];

var start = true;

function iterate(qnum) {

    //getting question and text
    const question = document.getElementById("question");
        question.innerText = Questions[qnum].question;

    // getting answer options and providing text
    const op1 = document.getElementById("op1");
    const op2 = document.getElementById("op2");
    const op3 = document.getElementById("op3");
    const op4 = document.getElementById("op4");

    op1.innerText = Questions[qnum].choices[0].text; 
    op2.innerText = Questions[qnum].choices[1].text; 
    op3.innerText = Questions[qnum].choices[2].text; 
    op4.innerText = Questions[qnum].choices[3].text; 

    // giving the options a true or false value
    op1.value = Questions[qnum].choices[0].isCorrect;
    op2.value = Questions[qnum].choices[1].isCorrect;
    op3.value = Questions[qnum].choices[2].isCorrect;
    op4.value = Questions[qnum].choices[3].isCorrect;

    
};