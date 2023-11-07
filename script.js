var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var viewHighScore = document.querySelector(".view-score");
var questions = document.querySelector('.questions');
var answers = document.querySelector('.answers');


var quizTime;
var currentHighScore;
var questionH = document.createElement('<h3></h3>');
var currentQuestion = document.createElement('<div></div>', { class: 'question-h' }).append(querySelector('.questions'));
var answersDiv = document.createElement('<div></div>', {class: 'answers-div'}).append(querySelector('.answers'));
var currentAnswer = document.createElement('<div></div>', { class: 'answer-columns' }).append(answersDiv);
var answerAButton = document.createElement('<button></button>', { class: 'answer-buttons', type: 'button'});
var answerBButton = document.createElement('<button></button>', { class: 'answer-buttons', type: 'button'});
var answerCButton = document.createElement('<button></button>', { class: 'answer-buttons', type: 'button'});
var answerDButton = document.createElement('<button></button>', { class: 'answer-buttons', type: 'button'});
var answerEButton = document.createElement('<button></button>', { class: 'answer-buttons', type: 'button'});

var questions = {
    questionA: 'Commonly Used Data types do not include:',
    questionB: 'The condition of an if/else statement is enclosed within ___.',
    questionC: 'Arrays in javascript can used to store ___.',
    questionD: 'String values must be enclose within ___ when being assigned to a variable',
    questionE: 'A very useful tool used during development for debugging and printing content to the debugger is:',
} 

var rightAnswers = {
    answerA: 'alerts',
    answerB: 'parantheses',
    answerC: 'all of the above',
    answerD: 'commas',
    answerE: 'console.log',
}


var wrongChoices = {
    wrongA2: 'boolean',
    wrongA3: 'integer',
    wrongA4: 'string',

    wrongB2: 'curly braces',
    wrongB3: 'brackets',
    wrongB4: 'curly brackets',

    wrongC2: 'local storage',
    wrongC3: 'css',
    wrongC4: 'elements',

    wrongD2: 'parantheses',
    wrongD3: 'array',
    wrongD4: ';',

    wrongE2: 'window',
    wrongE3: 'DOM',
    wrongE4: 'objects',
}

function init() {
    setHighScore();
}

function startQuiz() {
    quizTime = 30;
    currentHighScore = 0;
    startButton.disabled = true;
    quizQuestions()
    startTimer()
}

function nextQuestion() {
    for (var i = 0; i < questions; i++)
     (questions === rightAnswers)
}


function startTimer() {
    timer = setInterval(function() {
        quizTime--;
        timerElement.textContent = quizTime;
        if (rightAnswers) {
            nextQuestion()
        }
        else (wrongChoice === quizTime - 5) 
            nextQuestion();
        
        if (quizTime === 0) {
            clearInterval(timer);
            quizOver();
        }
    });
}

function quizOver() {
    wordBlank.textContent = "Quiz Over";
    rightAnswers === currentHighScore;
    startButton.disabled = false;
    getInitials();
}

document.body.addEventListener("click", '.answer-buttons', function(event) {
    if (userInput === wrongChoices)
    nextQuestion()
});

function quizQuestions() {
    if (nextQuestion)
    questionGenerator;
}

var questionGenerator = questions.i;

function getInitials() {
    var userInitials = prompt('Enter initials');
    if (userInitials = '') {
        return;
    } else {
        currentHighScore = JSON.parse(localStorage.getItem('currentHighScore'));
        var userScore = {
            userInitials,
            currentHighScore
        };
        currentHighScore.push(userScore);
        localStorage.setItem('currentHighScore', JSON.stringify(currentHighScore));
    }
}


function setHighScore() {
score.textContent = currentHighScore;
localStorage.setItem("currentHighScore", currentHighScore);
}


startButton.addEventListener("click", startQuiz)
viewHighScore.addEventListener("click", setHighScore)