let currentQuestion = 0;
let startQuestion = 1;
let rightQuestions = 0;
let start = 1;
let timeout;
let AUDIO_SUCESS = new Audio('audio/success.mp3')
let AUDIO_FAIL = new Audio('audio/fail.mp3')

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showEndscreen();
        document.getElementById('rightquestions').innerHTML = rightQuestions;
        document.getElementById('questionlenght2').innerHTML += questions.length;
    } else {
        renderQuestions();
    }
}

function renderQuestions() {
    let question = questions[currentQuestion]
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    if (selectedQuestionNumber == question['right_answer']) {
        rightAnswer(selection);
    } else {
        wrongAnswer(selection);
    }
    enableNextButton();

}


function rightAnswer(selection) {
    AUDIO_SUCESS.play();
    document.getElementById('color' + selection).classList.add('bg-success');
    document.getElementById('letter' + selection).classList.add('background-letter');
    rightQuestions++;
}

function wrongAnswer(selection) {
    let question = questions[currentQuestion];
    let idOfRightAnswer = `answer_${question['right_answer']}`
    AUDIO_FAIL.play();
    document.getElementById('color' + selection).classList.add('bg-danger');
    document.getElementById('letter' + selection).classList.add('background-letterred');
    document.getElementById('color' + idOfRightAnswer).classList.add('bg-success');
    document.getElementById('letter' + idOfRightAnswer).classList.add('background-letter');
}


function enableNextButton() {
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    startQuestion++;
    document.getElementById('currentQuestion').innerHTML = startQuestion;
    let questionPercent = start / questions.length * 100;
    document.getElementById('questionprogress').style.width = questionPercent + `%`;
    start++;
    resetColors();
    showQuestion();
}


function resetColors() {
    document.getElementById('coloranswer_1').classList.remove('bg-danger', 'bg-success');
    document.getElementById('letteranswer_1').classList.remove('background-letterred', 'background-letter');
    document.getElementById('coloranswer_2').classList.remove('bg-danger', 'bg-success', 'background-letter');
    document.getElementById('letteranswer_2').classList.remove('background-letterred', 'background-letter');
    document.getElementById('coloranswer_3').classList.remove('bg-danger', 'bg-success');
    document.getElementById('letteranswer_3').classList.remove('background-letterred', 'background-letter');
    document.getElementById('coloranswer_4').classList.remove('bg-danger', 'bg-success');
    document.getElementById('letteranswer_4').classList.remove('background-letterred', 'background-letter');
}


function startGame() {
    document.getElementById('startscreen').classList.add('hide-startscreen');
    document.getElementById('questionscreen').classList.add('hide-questionscreen');
    document.getElementById('headinghtml').classList.add = ('noevent');
    document.getElementById('headingcss').classList.add = ('noevent');
    document.getElementById('headingjs').classList.add = ('noevent');
    document.getElementById('headingjava').classList.add = ('noevent');
}


function showEndscreen() {
    document.getElementById('startscreen').classList.add('hide-startscreen');
    document.getElementById('questionscreen').classList.remove('hide-questionscreen');
    document.getElementById('endscreen').classList.add('hide-endscreen');
}


function newGame() {
    location.reload();
    document.getElementById('headinghtml').classList.remove = ('noevent');
    document.getElementById('headingcss').classList.remove = ('noevent');
    document.getElementById('headingjs').classList.remove = ('noevent');
    document.getElementById('headingjava').classList.remove = ('noevent');
}