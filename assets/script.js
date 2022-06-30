//method to delete info on first page
//function to display question cards 
    //options is radio form  and then submit button (onclick events)
        //boolin function to determine if question was correct or incorrect 
        //function to move onto next question

// var displayButtons = document.getElementById("choicesContainer");
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
var displayQuestions = document.getElementById("question");
var questionIndex = 0;
var buttonChoices = document.getElementById("choicesContainer");
function startGame() {
    //gets buttons from html 
    function nextQuestion(){
        //first object in questions array variable for index
        var currentQuestion = questions[questionIndex];
        // var currentQuestions = questions[Q].title;
        displayQuestions.textContent = currentQuestion.title;
        
        // currentQuestion.options.forEach(function (option, i){
        //     //button created
        //     var buttonCreated = document.createElement('button');
        //     // buttonCreated.setAttribute("class", "button")
        //     buttonCreated.innerText = option;
        //     console.log(option);
        //     document.buttonChoices.appendChild(buttonCreated);
        //     console.log(buttonChoices.appendChild(buttonCreated));
        //     document.getElementById
            
            

        // });


    }
    nextQuestion();
}


//function used to remove start page from dom and trigger timer
function start_button() {
    startPage.innerHTML = "";
    countdownTimer();
    startGame();
}
// var startPageHidden = document.getElementsByClassName("startPage");
// startPageHidden.remove();


