var startButton = document.getElementsById(".start-btn");
var continueButton = docment.getElementsById(".continue-btn");
var submitButton = document.getElementsById(".subtmit-btn")
var timeLeft = document.getElementsByClassName('timeLeft');
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
function startQuiz() {
    secondsLeft();
var questions = [
    {
        question: "What does JS stand for?",
        answer: "JavaScript",
        choices: [
            "JavaScript",
            "Just Studying",
            "Joe Stewart"
        ]
    },
    {
        question: "What is an event handler do?",
        answer: "it's what your code does when an event happens",
        choices: [
            "it changes the event before it",
            "it's what your code does when an event happens",
            ""
        ]
    },
    {
        question: "What is Javascript?",
        answer: "a programming language",
        choices: [
            "a programming language",
            "a standard markup language",
            "style sheet langauge"
        ]
    },
];
}
   
