
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

//CONSTANTS

const CORRECT_BONUS = 5;
const MAX_QUESTIONS = 12;

startGame = () => {
    questionCounter = 0;
    score = 0;
    timer = 75;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS || timer ==== 0) {
        // go to the end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach (choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);

        getNewQuestion();
    });
});

startGame();

