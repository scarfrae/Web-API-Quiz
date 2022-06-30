//method to delete info on first page
//function to display question cards 
    //options is radio form  and then submit button (onclick events)
        //boolin function to determine if question was correct or incorrect 
        //function to move onto next question
    
        var displayQuestions = document.getElementById("question");
        var displayButtons = document.getElementById("choicesContainer");
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
    // countdownTimer();
// function iterateQuestions {
//     //Get question 
//     var displayQuestion = document.getElementById("question");

//     displayQuestions.innerHTML = questions
// }
// var displayQuestions = document.getElementById("question");
// var displayButtons = document.getElementById("choicesContainer");

//function to display questions array




function startGame() {

    //gets buttons from html 

    var button1 = document.getElementById('choices1')
    var button2 = document.getElementById('choices2')
    var button3 = document.getElementById('choices3')
    var button4 = document.getElementById('choices4')
    var i = 0;
    //while loop iterates through questions array
    while(i < questions.length){
        //attach onclick events to each of list item created
        var currentQuestions = questions[i].title;
        displayQuestions.innerHTML = currentQuestions;
        //second four loop iterates through options array
    
        //grabs options info based on index
        button1.innerHTML = questions[i].options[0];
        button2.innerHTML = questions[i].options[1];
        button3.innerHTML = questions[i].options[2];
        button4.innerHTML = questions[i].options[3];
        
    i++;
        // displayQuestions.innerHTML = currentOptions;
    }
    //loop through questions
    //use for loop/foreach loop
    //create buttons for each option in javascript or make in html 
    //click event for buttons so when it is clicked will go to next question (use button.text content) 
}
startGame();

//function used to remove start page from dom and trigger timer
function start_button() {
    startPage.remove();
    countdownTimer();
}
// var startPageHidden = document.getElementsByClassName("startPage");
// startPageHidden.remove();


