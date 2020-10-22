var questions = [
    {
        question: 'What is the first thing you should do before writing a single line of HTML code?',
        answers: [
            { text: 'Sketch out what the webpage should look like', correct: true },
            { text: 'Write all of your CSS code', correct: false },
            { text: 'Download the latest version of VS Code', correct: false },
            { text: 'Publish your webpage on GitHub', correct: false }
        ]
    },
    {
        question: 'On a technical level, what is the difference between a <section> element and a <div>?',
        answers: [
            { text: 'There is no difference', correct: true },
            { text: 'A <div> element takes up more width on the page', correct: false },
            { text: 'A <section> element has bold text by default', correct: false },
            { text: 'A <section> element takes up more height on the page', correct: false }
        ]
    },
    {
        question: 'How do you leave hidden comments in HTML code?',
        answers: [
            { text: '/* */', correct: false },
            { text: '<!-- -->', correct: true },
            { text: '{{ }}', correct: false },
            { text: '//', correct: false }
        ]
    },
    {
        question: 'How do you add a message to a git commit?',
        answers: [
            { text: 'Upload and attach a file to git commit', correct: false },
            { text: 'Add -m "message" at the end of git commit', correct: true },
            { text: 'Both A & B', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        question: 'Which of the following is NOT a good reason for version control?',
        answers: [
            { text: 'Version control allows the codebase to be modified and tested without interrupting the user experience', correct: false },
            { text: 'Version control allows changes to the codebase to be tested individually', correct: false },
            { text: 'Version control allows teams to work on individual features synchronously', correct: false},
            { text: 'Version control allows features to ship directly to the main branch', correct: true }
        ]
    },
    {
        question: 'What is the correct syntax to close the <title> element?',
        answers: [
            { text: '</title>', correct: true },
            { text: '<!title>', correct: false },
            { text: '<?title>', correct: false },
            { text: '<endtitle>', correct: false }
        ]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Colorful Style Sheets', correct: false },
            { text: 'Computer Style Sheets', correct: false },
            { text: 'Creative Style Sheets', correct: false}
        ]
    },
    {   
        question: 'What is the purpose of the alt attribute for images?',
        answers: [
            { text: 'To make the image load faster', correct: false },
            { text: 'To make it easier to style the image with CSS', correct: false},
            { text: 'To prevent search engines from indexing the image', correct: true},
            { text: 'To provide context for the image', correct: true }
        ]
    },
    {
        question: 'How can you add more than one class to an HTML element?',
        answers: [
            { text: 'Add a second class attribute', correct: false },
            { text: 'Add a comma between the class names', correct: false },
            { text: 'Add a space between the class names', correct: true },
            { text: 'Add a class-2 attribute', correct: false }
        ]
    },
    {
        question: 'What CSS delcaration could you add to a 50%-width <div> to center it?',
        answers: [
            { text: 'text-align: center', correct: false },
            { text: 'margin: 0 auto', correct: true },
            { text: 'float: center', correct: false },
            { text: 'align: center', correct: false }
        ]
    },
    {
        question: 'Which CSS property allows the parent element to display its CSS properties by stretching its dimensions to physically contain its child elements?',
        answers: [
            { text: 'text-align: center;', correct: false },
            { text: 'overflow: auto;', correct: true },
            { text: 'margin: auto;', correct: false },
            { text: 'display: inline-block;', correct: false }
        ]
    },
    {
        question: 'If I wish to align an element to the top of its container, which CSS property should I use?',
        answers: [
            { text: 'text-align: top;', correct: false },
            { text: 'margin-align: top;', correct: false },
            { text: 'overflow: top;', correct: false },
            { text: 'vertical-align: top;', correct: true }
        ]
    },
];

var score = 0;
var questionIndex = 0;

var container = document.querySelector("#container");
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionContainer = document.querySelector("#questionContainer");

startButton.addEventListener("click", startGame)

function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

