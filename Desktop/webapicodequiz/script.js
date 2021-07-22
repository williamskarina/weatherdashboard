var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start-button');
var timeLeft = document.getElementById('timeLeft');
var questionOne = document.getElementsByClassName('question-one');
var questionTwo = document.getElementsByClassName('question-two');
var questionThree = document.getElementsByClassName('question-three');

startButton.addEventListener('click', secondsLeft);

function secondsLeft() {
    var timeRemaining = 60;

    var timeInterval = setInterval(function (){
        if (timeRemaining > 0) {
            timeLeft.textContent = timeRemaining + 'seconds remaining';
            timeRemaining--;
        }
    }, 1000);
}



function firstQuestion() {
    var numberOne = 'What does JS Stand for';
}