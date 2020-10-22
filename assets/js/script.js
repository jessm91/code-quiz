const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let timer = 75;
let availableQuestions = [];

let questions = [
    {
        question: 'What is the first thing you should do before writing a single line of HTML code?',
             choice1: 'Sketch out what the webpage should look like',
             choice2: 'Write all of your CSS code',
             choice3: 'Download the latest version of VS Code',
             choice4: 'Publish your webpage on GitHub',
             answer: 1
    },
    {
        question: 'On a technical level, what is the difference between a <section> element and a <div>?',
             choice1: 'There is no difference',
             choice2: 'A <div> element takes up more width on the page',
             choice3: 'A <section> element has bold text by default',
             choice4: 'A <section> element takes up more height on the page',
             answer: 1
    },
    {
        question: 'How do you leave hidden comments in HTML code?',
            choice1: '/* */',
            choice2: '<!-- -->',
            choice3: '{{ }}',
            choice4: '//',
            answer: 2
    },
    {
        question: 'How do you add a message to a git commit?',
            choice1: 'Upload and attach a file to git commit',
            choice2: 'Add -m "message" at the end of git commit',
            choice3: 'Both A & B',
            choice4: 'None of the above',
            answer: 2
    },
    {
        question: 'Which of the following is NOT a good reason for version control?', 
             choice1: 'Version control allows the codebase to be modified and tested without interrupting the user experience',
             choice2: 'Version control allows changes to the codebase to be tested individually',
             choice3: 'Version control allows teams to work on individual features synchronously',
             choice4: 'Version control allows features to ship directly to the main branch',
             answer: 4
    },
    {
        question: 'What is the correct syntax to close the <title> element?',
            choice1: '</title>',
            choice2: '<!title>',
            choice3: '<?title>',
            choice4: '<endtitle>',
            answer: 1
    },
    {
        question: 'What does CSS stand for?',
            choice1: 'Cascading Style Sheets',
            choice2: 'Colorful Style Sheets',
            choice3: 'Computer Style Sheets',
            choice4: 'Creative Style Sheets',
            answer: 1
    },
    {   
        question: 'What is the purpose of the alt attribute for images?',
            choice1: 'To make the image load faster',
            choice2: 'To make it easier to style the image with CSS',
            choice3: 'To prevent search engines from indexing the image',
            choice4: 'To provide context for the image',
            answer: 4
    },
    {
        question: 'How can you add more than one class to an HTML element?',
            choice1: 'Add a second class attribute',
            choice2: 'Add a comma between the class names',
            choice3: 'Add a space between the class names',
            choice4: 'Add a class-2 attribute',
            answer: 3
    },
    {
        question: 'What CSS delcaration could you add to a 50%-width <div> to center it?',
            choice1: 'text-align: center',
            choice2: 'margin: 0 auto',
            choice3: 'float: center',
            choice4: 'align: center',
            answer: 2
    },
    {
        question: 'Which CSS property allows the parent element to display its CSS properties by stretching its dimensions to physically contain its child elements?',
            choice1: 'text-align: center;',
            choice2: 'overflow: auto;',
            choice3: 'margin: auto;',
            choice4: 'display: inline-block;',
            answer: 2
    },
    {
        question: 'If I wish to align an element to the top of its container, which CSS property should I use?',
            choice1: 'text-align: top;',
            choice2: 'margin-align: top;',
            choice3: 'overflow: top;',
            choice4: 'vertical-align: top;',
            answer: 4
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

