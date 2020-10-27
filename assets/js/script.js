// Questions & Answers

var questions = [
    {
        question: 'What is the first thing you should do before writing a single line of HTML code?',
             choices: ['Sketch out what the webpage should look like', 'Write all of your CSS code', 'Download the latest version of VS Code', 'Publish your webpage on GitHub'],
             answer: 'Sketch out what the webpage should look like'
    },
    {
        question: 'On a technical level, what is the difference between a <section> element and a <div>?',
             choices: ['There is no difference', 'A <div> element takes up more width on the page', 'A <section> element has bold text by default', 'A <section> element takes up more height on the page'],
             answer: 'There is no difference'
    },
    {
        question: 'How do you leave hidden comments in HTML code?',
            choices: ['/* */', '<!-- -->', '{{ }}', '//'],
            answer: '<!-- -->'
    },
    {
        question: 'How do you add a message to a git commit?',
            choices: ['Upload and attach a file to git commit', 'Add -m "message" at the end of git commit', 'Both A & B', 'None of the above'],
            answer: 'Add -m "message" at the end of git commit'
    },
    {
        question: 'Which of the following is NOT a good reason for version control?', 
             choices: ['Version control allows the codebase to be modified and tested without interrupting the user experience', 'Version control allows changes to the codebase to be tested individually', 'Version control allows teams to work on individual features synchronously', 'Version control allows features to ship directly to the main branch'],
             answer: 'Version control allows features to ship directly to the main branch'
    },
    {
        question: 'What is the correct syntax to close the <title> element?',
            choices: ['</title>', '<!title>', '<?title>','<endtitle>'],
            answer: '</title>'
    },
    {
        question: 'What does CSS stand for?',
            choices: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets'],
            answer: 'Cascading Style Sheets'
    },
    {   
        question: 'What is the purpose of the alt attribute for images?',
            choices: ['To make the image load faster', 'To make it easier to style the image with CSS', 'To prevent search engines from indexing the image', 'To provide context for the image'],
            answer: 'To provide context for the image'
    },
    {
        question: 'How can you add more than one class to an HTML element?',
            choices: ['Add a second class attribute', 'Add a comma between the class names', 'Add a space between the class names', 'Add a class-2 attribute'],
            answer: 'Add a space between the class names'
    },
    {
        question: 'What CSS delcaration could you add to a 50%-width <div> to center it?',
            choices: ['text-align: center', 'margin: 0 auto', 'float: center', 'align: center'],
            answer: 'margin: 0 auto'
    },
    {
        question: 'Which CSS property allows the parent element to display its CSS properties by stretching its dimensions to physically contain its child elements?',
            choices: ['text-align: center;', 'overflow: auto;', 'margin: auto;', 'display: inline-block;'],
            answer: 'overflow: auto;'
    },
    {
        question: 'If I wish to align an element to the top of its container, which CSS property should I use?',
            choices: ['text-align: top;', 'margin-align: top;', 'overflow: top;', 'vertical-align: top;'],
            answer: 'vertical-align: top;'
    },
];

// other variables
var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startButton")
var questionsContainer = document.querySelector("#questionsContainer");
var container = document.querySelector("#container");

var timeLeft = 75;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

// timer
timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0) {
        clearInterval(holdInterval);
        allDone();
        currentTime.textContent = "Time's up!";
        }
    }, 1000);
    }
    render(questionIndex);
});

// display questions on page

function render (questionIndex) {
    questionsContainer.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].question;
        var userChoices = questions[questionIndex].choices;
        questionsContainer.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsContainer.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
function compare(event) {
    var element = event.target;

        if (element.matches("li")) {
            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "createDiv");

        if (element.textContent === questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct!";
        } else {
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Wrong!";
        }
    }

    questionIndex++;

    if (questionIndex >= questions.length) {
        allDone();
        createDiv.textContent = "End of quiz!";
    } else {
        render(questionIndex);
    }
    questionsContainer.appendChild(createDiv);
}

function allDone() {
    questionsContainer.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All done!"

    questionsContainer.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsContainer.appendChild(createP);

    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsContainer.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsContainer.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsContainer.appendChild(createInput);

    // submit button

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsContainer.appendChild(createSubmit);

    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {
            console.log("No value entered!");
        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);

        window.location.replace("./highscores.html");
    }
});
}
