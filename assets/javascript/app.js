//Global Variables
const question = $("#question");

//create questions
let questions = [
    {
        question: "The first mechanical computer designed by Charles Babage was called ?",
        choice0: "Abacus",
        choice1: "Analytical engine",
        choice2: "calculator",
        choice3: "processor",
        imgSrc: "assets/images/favicon.ico",
        correct: "2"
    }, {
        question: "The first mechanical computer designed by Charles Babage was called ?",
        choice0: "Abacus",
        choice1: "Analytical engine",
        choice2: "calculator",
        choice3: "processor",
        imgSrc: "assets/images/favicon.ico",
        correct: "1"
    }, {
        question: "The first mechanical computer designed by Charles Babage was called ?",
        choice0: "Abacus",
        choice1: "Analytical engine",
        choice2: "calculator",
        choice3: "processor",
        imgSrc: "assets/images/favicon.ico",
        correct: "3"
    }, {
        question: "The first mechanical computer designed by Charles Babage was called ?",
        choice0: "Abacus",
        choice1: "Analytical engine",
        choice2: "calculator",
        choice3: "processor",
        imgSrc: "assets/images/favicon.ico",
        correct: "4"
    }, {
        question: "The first mechanical computer designed by Charles Babage was called ?",
        choice0: "Abacus",
        choice1: "Analytical engine",
        choice2: "calculator",
        choice3: "processor",
        imgSrc: "assets/images/favicon.ico",
        correct: "1"
    },
]

//create some variables
const lastQuestion = questions.length -1;
let runningQuestion = 0;

//render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    q.question;
    //question.innerHTML = q.question;

}

$(document).ready(() => {
    const start = $("#start");
    const quiz = $("#quiz");

    start.on('click', () => {
        quiz.show();
        start.hide();
    })
})

