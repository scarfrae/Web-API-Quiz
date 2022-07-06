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
// function interateGame() {
//     gets buttons from html 
function interateGame(questionIndex) {
    var currentQuestion = questions[questionIndex];
        // var currentQuestions = questions[Q].title;
    displayQuestions.textContent = currentQuestion.title;

    function nextQuestion() {
        currentQuestion.options.forEach(function (option, i){
            
            //button created
            var buttonCreated = document.createElement('button');
            //create attributes associated with button
            buttonCreated.setAttribute('class', 'choiceBtnAttr')
            // buttonCreated.setAttribute("class", "button")
            buttonCreated.innerText = option;
            buttonChoices.appendChild(buttonCreated);
            //to create list of buttons rather than inline buttons
            buttonChoices.appendChild(document.createElement("br"));
    
            console.log(buttonChoices.appendChild(buttonCreated));
            buttonCreated.onclick = callComparisonFunction;
        });
        



    }
    nextQuestion();
}
var result = document.getElementById('results')
//function compares result to right answer
function callComparisonFunction (event) {
    console.log(event.target.innerText);
    var currentQuestion = questions[questionIndex];
    console.log(currentQuestion.correct_answer)



    // console.log(currentQuestion.correct_answer);

    if (event.target.innerText == currentQuestion.correct_answer){
        //this means user got answer correct
        interateGame(questionIndex + 1);
    }
    else{
        //this means user got question wrong
        interateGame(questionIndex + 1);
    }
    //if(currentQuestion.correct_answer == )
    
}

//add onclick event to buttonChoices
//compare onclick to right answer


//function used to remove start page from dom and trigger timer
function start_button() {
    startPage.innerHTML = "";
    countdownTimer();
    interateGame(questionIndex);


    // interateGame();
    // nextQuestion();
}
// var startPageHidden = document.getElementsByClassName("startPage");
// startPageHidden.remove();


