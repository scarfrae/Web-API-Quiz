//method to delete info on first page
//function to display question cards 
    //options is radio form  and then submit button (onclick events)
        //boolin function to determine if question was correct or incorrect 
        //function to move onto next question
    

    

var questionIndex = 0;
//Array of objects (questions)
    var questions = [
        {
            title: "Commonly used data types do NOT incude:",
            options: ["strings", "booleans", "alerts", "numbers"],
            correct_answer: "alerts",
        }, 
    
        {   
            title: "Arrays in Javascript can be used to store",
            options: ["numbers", "other arrays", "booleans", "all of the above"],
            correct_answer: "all the above",
        },
    
        {
            title: "A very useful tool used during development and debugging for printing content to the debugger is: ",
            options: ["Javascript", "terminal/bash", "for loops", "console.log"],
            correct_answer: "console.log",
        },
    ];

    var displayQuestions = document.getElementById("question");
    var displayButtons = document.getElementById("choicesContainer");

//function to display questions array
function startGame() {

    var currentQuestions = questions[questionIndex].title;
    displayQuestions.innerHTML = currentQuestions;

    console.log(currentQuestions);

    for(var i = 0; i < 4; i++){
        currentQuestions = questions[questionIndex].options
        displayQuestions.innerHTML = currentQuestions;
    }
    //loop through questions
    //use for loop/foreach loop
    //create buttons for each option in javascript or make in html 
    //click event for buttons so when it is clicked will go to next question (use button.text content) 
}
startGame();


var timerEl = document.querySelector("#timer");
//timer 
//seconds left at start of quiz
var timeLeft = 5;
// function to countdown
function countdownTimer(){

    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if(timeLeft == 0) {
            clearInterval(timeInterval);
            //go to results
        }
    }, 1000);
}
countdownTimer();
