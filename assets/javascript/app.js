//Global Variables
const start = $("#start");
const question = $("#question");
const quiz = $("#quiz");
const choice0 = $("#choice0");
const choice1 = $("#choice1");
const choice2 = $("#choice2");
const choice3 = $("#choice3");
const counter = $("#counter");
const timeGauge = $("#timeGauge");
const progress = $("#progress");
const scoreDiv = $("#scoreContainer");


//create questions
let questions = [
    {
        question: "What does HTML stand for?",
        choice0: "Home Tool Markup Language",
        choice1: "Hyper Text Markup Language",
        choice2: "Hyperlinks and Text Markup Language",
        choice3: "All of the above",
        imgSrc: "assets/images/favicon.ico",
        correct: "choice1"
    }, {
        question: "Who is making the Web standards?",
        choice0: "The World Wide Web Consortium",
        choice1: "Google",
        choice2: "Microsoft",
        choice3: "Mozilla",
        imgSrc: "assets/images/favicon.ico",
        correct: "choice0"
    }, {
        question: "What does CSS stand for?",
        choice0: "Colorful Style Sheets",
        choice1: "Cascading Style Sheets",
        choice2: "Computer Style Sheets",
        choice3: "Creative Style Sheets",
        imgSrc: "assets/images/favicon.ico",
        correct: "choice1"
    }, {
        question: "Inside which HTML element do we put the JavaScript?",
        choice0: "<Scripting>",
        choice1: "<js>",
        choice2: "<script>",
        choice3: "<javascript>",
        imgSrc: "assets/images/favicon.ico",
        correct: "choice2"
    }, {
        question: "What is the correct HTML element for the largest heading?",
        choice0: "<h1>",
        choice1: "<heading>",
        choice2: "<h6>",
        choice3: "<head>",
        imgSrc: "assets/images/favicon.ico",
        correct: "choice0"
    },
]

//create some variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaudgeWidth = 150;
const gaugeUnit = gaudgeWidth / questionTime;
let TIMER;
let score = 0;

//render a question
$(document).ready(() => {
    const start = $("#start");
    const quiz = $("#quiz");

    start.on('click', () => {
        quiz.show();
        start.hide();
    })

    function renderQuestion() {
        let q = questions[runningQuestion];
        q.question;
        question.html(`${q.question}`);
        choice0.html(`${q.choice0}`);
        choice1.html(`${q.choice1}`);
        choice2.html(`${q.choice2}`);
        choice3.html(`${q.choice3}`);

    }

    function renderProgress() {
        for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
            progress.innerHTML += "<div class='prog' id= " + qIndex + "> </div>";
        }
    }

    renderQuestion();
    renderProgress();
})







//console.log(renderProgress());

// function renderCounter(){
//     if(count <= questionTime){
//         counter.innerHTML= (`${count}`);
//         timeGauge.style.width = count * gaugeUnit + "px";
//         count ++;
//     }
//     else {
//         count =0;
//         //change progress color to red 
//         answerIsWrong();
//         if(runningQuestion < lastQuestion){
//             runningQuestion++;
//             renderQuestion();
//         }else{
//             //end the quiz & show the score
//             clearInterval(TIMER);
//             scoreRender();
//         }
//     }
// }


//check answer
function checkAnswer(answer) {
    if (answer === question[runningQuestion].correct) {
        //answer is correct
        score++;
        //change progress color to green
        answerIsCorrect();
    }
    else {
        //answer is wrong
        //change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        //end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

 //answer is correct
 // function answerIsCorrect(){
 //     document.getElementById(runningQuestion).style.backgroundColor = "#0F0";
 // }
 //answer is wrong
 // function answerIsCorrect(){
 //     document.getElementById(runningQuestion).style.backgroundColor = "#0569";
 // }

 // function scoreRender(){
 //     scoreDiv.style.display = "block";
 // }

 //calculate the amount of Question
 //const scorePercent = Math.round(100 * score/questions.length);

