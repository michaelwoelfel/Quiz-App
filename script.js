let questions = [
    {
        "question": "Wer hat HTML erfunden ?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {

        "question": "Wie definiert man eine Variable in Javascript ?",
        "answer_1": "let welt",
        "answer_2": "Antwort 2",
        "answer_3": "Antwort 3",
        "answer_4": "Antwort 4",
        "right_answer": 4,
    },
    {

        "question": "Wie definiert man eine Variable in Javascript ?",
        "answer_1": "let welt",
        "answer_2": "Antwort 2",
        "answer_3": "Antwort 3",
        "answer_4": "Antwort 4",
        "right_answer": 4,
    },
    
]


let currentQuestion = 0;
let startQuestion = 1

function init() {
    document.getElementById('questionlenght').innerHTML = questions.length;
    document.getElementById('currentQuestion').innerHTML = startQuestion;
    showQuestion();
}

function showQuestion() {
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

    let idOfRightAnswer = `answer_${question['right_answer']}`

        if (selectedQuestionNumber == question['right_answer'] ) {
            document.getElementById('color' + selection).classList.add('bg-success');
            document.getElementById('letter' + selection).classList.add('background-letter');
         } else {
                document.getElementById( 'color' + selection).classList.add('bg-danger');
                document.getElementById('letter' + selection).classList.add('background-letterred');
                document.getElementById('color' + idOfRightAnswer).classList.add('bg-success');
                document.getElementById('letter' + idOfRightAnswer).classList.add('background-letter');
        }
        document.getElementById('next-button').disabled = false;
        if (startQuestion == questions.length) {
            document.getElementById('next-button').disabled = true;
        } 
    }

    function nextQuestion() {
        
       
            currentQuestion ++;
            startQuestion ++;
            document.getElementById('currentQuestion').innerHTML = startQuestion;
            resetColors();
            showQuestion();
            
          
      
        
     
    }

    function resetColors() {
        document.getElementById( 'coloranswer_1').classList.remove('bg-danger','bg-success' );
        document.getElementById('letteranswer_1').classList.remove('background-letterred', 'background-letter');
        document.getElementById( 'coloranswer_2').classList.remove('bg-danger','bg-success', 'background-letter');
        document.getElementById('letteranswer_2').classList.remove('background-letterred', 'background-letter');
        document.getElementById( 'coloranswer_3').classList.remove('bg-danger','bg-success');
        document.getElementById('letteranswer_3').classList.remove('background-letterred', 'background-letter');
        document.getElementById( 'coloranswer_4').classList.remove('bg-danger','bg-success');
        document.getElementById('letteranswer_4').classList.remove('background-letterred', 'background-letter');    
    }
