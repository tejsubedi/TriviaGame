let questions = [
    {
        question: "What is Michael Jackson's hometown?",
        qImage: "assets/images/michael-01.gif",
        choiceA: "Gary, IN",
        choiceB: "New Orleans, LA",
        choiceC: "Philadelphia, PA",
        choiceD: "Buffalo, NY",
        correct: "A"
    },
    {
        question: "How many copies has the album Thriller sold worldwide?",
        qImage: "assets/images/michael-02.gif",
        choiceA: "20 million",
        choiceB: "50 million",
        choiceC: "75 million",
        choiceD: "over 100 million",
        correct: "C"
    },
    {
        question:
            "What is the name of the skin condition that Michael Jackson said he had?",
        qImage: "assets/images/michael-03.gif",
        choiceA: "Dermatitis",
        choiceB: "Vitiligo",
        choiceC: "Skin cancer",
        choiceD: "Rosacea",
        correct: "B"
    },
    {
        question:
            "During which performance did Michael Jackson do the moonwalk for the first time?",
        qImage: "assets/images/michael-04.gif",
        choiceA: "Smooth Criminal",
        choiceB: "Beat It",
        choiceC: "Billie Jean",
        choiceD: "Bad",
        correct: "C"
    },
    {
        question: "Whom did Michael Jackson teach to dance in the video for Jam?",
        qImage: "assets/images/michael-05.gif",
        choiceA: "Eddie Murphy",
        choiceB: "John Travolta",
        choiceC: "Bill Cosby",
        choiceD: "Michael Jordan",
        correct: "D"
    },
    {
        question: "How many Grammys did Michael Jackson win for Thriller in 1984?",
        qImage: "assets/images/michael-06.gif",
        choiceA: "Two",
        choiceB: "Five",
        choiceC: "Eight",
        choiceD: "Eleven",
        correct: "C"
    },
    {
        question:
            "The Michael Jackson movie Captain EO could be seen where during the late 80s?",
        qImage: "assets/images/michael-07.gif",
        choiceA: "Disneyland/Epcot Center",
        choiceB: "Seaworld",
        choiceC: "Busch Gardens",
        choiceD: "Six Flags",
        correct: "A"
    },
    {
        question: "With whom did Michael Jackson co-write We Are The World?",
        qImage: "assets/images/michael-08.gif",
        choiceA: "Lionel Richie",
        choiceB: "Stevie Wonder",
        choiceC: "Billy Joel",
        choiceD: "Aretha Franklin",
        correct: "A"
    },
    {
        question:
            "What happened to Michael Jackson during the filming of a Pepsi commercial in 1984?",
        qImage: "assets/images/michael-09.gif",
        choiceA: "Broke his ankle",
        choiceB: "Hair caught on fire",
        choiceC: "Collapsed from exhaustion",
        choiceD: "Shot by a fan",
        correct: "B"
    },
    {
        question: "Michael Jackson was raised under which religious denomination?",
        qImage: "assets/images/michael-10.gif",
        choiceA: "Episcopalian",
        choiceB: "Catholic",
        choiceC: "Jehova's Witness",
        choiceD: "Baptist",
        correct: "C"
    }
];

//Element Selector 
let question = $("#question");
let choicesButton = $(".choices");
let choiceA = $("#A");
let choiceB = $("#B");
let choiceC = $("#C");
let choiceD = $("#D");
let imageCard = $("#imagecard");
let scoreCard = $("#scorecard");
let startPage = $(".inner");
let quiz = $(".quiz");
let timeCard = $("#timecard");
let startButton = $(".start-btn");


//Global Variables
let TIMER;
let counter = 0;
const questionTime = 10; // 10s
let currentPosition = 0;
let score = 0;
let index = 10;

$(document).ready(() => {
    quiz.hide();
    imageCard.hide();
    scoreCard.hide();

    startButton.on("click", () => {
        startPage.hide();
        quiz.show();
        renderQuestion();
        checkCounter();
        TIMER = setInterval(checkCounter, 1000);
    });
    
    
    scoreDisplay();
});



function renderQuestion() {
    let q = questions[currentPosition];
    question.html(`${q.question}`);
    choiceA.html(`${q.choiceA}`);
    choiceB.html(`${q.choiceB}`);
    choiceC.html(`${q.choiceC}`);
    choiceD.html(`${q.choiceD}`);
}

function checkAnswer(answer) {
    if (answer === questions[currentPosition].correct) {
        //answer is correct
        score++;
        imageCard.html(`<h1 class="imageheader">You Select Right Answer!!!</h1><span>
        <button class ="image-button"> Play Again </span></button>`);
        imageCard.append(`<img src = "${questions[currentPosition].qImage}">`);
        imageCard.show();
    } else {
        //answer is wrong
        imageCard.html(`<h1 class="imagewrong">You Select Wrong Answer!!!</h1><span>
        <button class ="image-button"> Play Again </span></button>`);
        imageCard.append(`<img src = "${questions[currentPosition].qImage}">`);
        imageCard.show();
    }

    counter = 0;
    if (currentPosition < questions.length - 1) {
        currentPosition++;
        renderQuestion();
    } else {
        //end the quiz and show the score
        clearInterval(TIMER);
        scoreDisplay();
    }
}

//score display counter
function scoreDisplay() {
    const scorePercent = Math.round((100 * score) / questions.length);
    scoreCard.html(`Total Score:<br> ${scorePercent} %.`);
}

//counter render
function checkCounter() {
    if (counter <= questionTime) {
        timeCard.html(
            `<h1 class="time">${currentPosition + 1} of ${
            questions.length
            } Questions(10 sec each question) <br><br> ${counter} sec`
        );
        counter++;
        renderQuestion();
    } else {
        counter = 0;
        if (currentPosition < questions.length - 1) {
            currentPosition++;
            renderQuestion();
        } else {
            //end the quiz
            clearInterval(TIMER);
            scoreDisplay();
        }
    }
}
