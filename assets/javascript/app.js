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
        question: "The first mechanical computer designed by Charles Babage was called -1 ?",
        choice0: "Abacus",
        choice1: "Analytical engine",
        choice2: "calculator",
        choice3: "processor",
        imgSrc: "assets/images/favicon.ico",
        correct: "2"
    }, {
        question: "The first mechanical computer designed by Charles Babage was called -2 ?",
        choice0: "Abacus",
        choice1: "Analytical engine",
        choice2: "calculator",
        choice3: "processor",
        imgSrc: "assets/images/favicon.ico",
        correct: "1"
    }, {
        question: "The first mechanical computer designed by Charles Babage was called -3 ?",
        choice0: "Abacus",
        choice1: "Analytical engine",
        choice2: "calculator",
        choice3: "processor",
        imgSrc: "assets/images/favicon.ico",
        correct: "3"
    }, {
        question: "The first mechanical computer designed by Charles Babage was called -4 ?",
        choice0: "Abacus",
        choice1: "Analytical engine",
        choice2: "calculator",
        choice3: "processor",
        imgSrc: "assets/images/favicon.ico",
        correct: "4"
    }, {
        question: "The first mechanical computer designed by Charles Babage was called -5 ?",
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
let count = 0;
const questionTime = 10;
const gaudgeWidth = 150;
const gaugeUnit = gaudgeWidth/questionTime;
let TIMER;
let score = 0;

//render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    q.question;
    question.html(`${q.question}`);
    choice0.html(`${q.choice0}`);
    choice1.html(`${q.choice1}`);
    choice2.html(`${q.choice2}`);
    choice3.html(`${q.choice3}`);
    
}
//renderQuestion();

function startQuiz(){
    $(document).ready(() => {
        const start = $("#start");
        const quiz = $("#quiz");
    
        start.on('click', () => {
            quiz.show();
            renderQuestion();
            start.hide();
        })
        
    })
    renderProgress();
    renderCounter();
}
startQuiz();

function renderProgress(){
    for(let qIndex=0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += `<div class='prog' id= " ${qIndex}> </div>`;
    }
}
//console.log(renderProgress());

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML= (`${count}`);
        timeGauge.style.width = count * gaugeUnit + "px";
        count ++;
    }
    else {
        count =0;
        //change progress color to red 
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            //end the quiz & show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


//check answer
function checkAnswer(answer){
    if(answer === question[runningQuestion].correct){
        //answer is correct
        score++;
        //change progress color to green
        answerIsCorrect();
    }
    else{
        //answer is wrong
        //change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion <lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        //end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

//answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0F0";
}
//answer is wrong
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0569";
}

function scoreRender(){
    scoreDiv.style.display = "block";
}

//calculate the amount of Question
const scorePercent = Math.round(100 * score/questions.length);




