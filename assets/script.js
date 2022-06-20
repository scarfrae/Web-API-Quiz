
var questionIndex = 0;
//Array of objects (questions)
    var questions = [
        {
            title: "Here is where question 1 text goes",
            options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correct_answer: "Answer 1",
        }, 

        {
            title: "Here is where question 1 text goes",
            options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correct_answer: "Answer 1",
        },

        {
            title: "Here is where question 1 text goes",
            options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correct_answer: "Answer 1",
        },
    ];

//function to display questions array
function questionFormat() {
    var displayQuestions = document.getElementById("questions");
    var displayButtons = document.getElementById("buttons");

    var currentQuestions = questions[questionIndex];
    console.log(currentQuestions);
    //loop through questions
    //use for loop/foreach loop
    //create buttons for each option in javascript or make in html 
    //click event for buttons so when it is clicked will go to next question (use button.text content) 
}
questionFormat();

//timer