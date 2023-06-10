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

        "question": "Was bedeutet HTML ?",
        "answer_1": "Home Tool Markup Language",
        "answer_2": "Hyperlinks and Text Markup Language",
        "answer_3": "Hyper Text Markup Language",
        "answer_4": "Hyper Text Modified Language",
        "right_answer": 3,
    },
    {

        "question": "Wer macht die Web Standards ?",
        "answer_1": "Mozilla",
        "answer_2": "Microsoft",
        "answer_3": "Google",
        "answer_4": "World Wide Web Consortium",
        "right_answer": 4,
    },

    {

        "question": "Welches HTML Element ist für die größte Überschrift ?",
        "answer_1": "&lt;h1&gt;",
        "answer_2": "&lt;h6&gt;",
        "answer_3": "&lt;head&gt;",
        "answer_4": "&lt;heading&gt;",
        "right_answer": 1,
    },

    {

        "question": "Was ist das korrekte HTML Element für einen Zeilenumbruch ?",
        "answer_1": "&lt;break&gt;",
        "answer_2": "&lt;br&gt;",
        "answer_3": "&lt;lb&gt;",
        "answer_4": "&lt;b&gt;",
        "right_answer": 2,
    },
  
]


function init() {
    document.getElementById('questionlenght').innerHTML = questions.length;
    document.getElementById('currentQuestion').innerHTML = startQuestion;
    showQuestion();
}

function initHTML() {
    document.getElementById('headinghtml').classList.add('headingsidebar:focus');
    questions.splice(0,questions.length);
    questions.push( {
        "question": "Wer hat HTML erfunden ?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {

        "question": "Was bedeutet HTML ?",
        "answer_1": "Home Tool Markup Language",
        "answer_2": "Hyperlinks and Text Markup Language",
        "answer_3": "Hyper Text Markup Language",
        "answer_4": "Hyper Text Modified Language",
        "right_answer": 3,
    },
    {

        "question": "Wer macht die Web Standards ?",
        "answer_1": "Mozilla",
        "answer_2": "Microsoft",
        "answer_3": "Google",
        "answer_4": "World Wide Web Consortium",
        "right_answer": 4,
    },

    {

        "question": "Welches HTML Element ist für die größte Überschrift ?",
        "answer_1": "&lt;h1&gt;",
        "answer_2": "&lt;h6&gt;",
        "answer_3": "&lt;head&gt;",
        "answer_4": "&lt;heading&gt;",
        "right_answer": 1,
    },

    {

        "question": "Was ist das korrekte HTML Element für einen Zeilenumbruch ?",
        "answer_1": "&lt;break&gt;",
        "answer_2": "&lt;br&gt;",
        "answer_3": "&lt;lb&gt;",
        "answer_4": "&lt;b&gt;",
        "right_answer": 2,
    },
    )

    init();
}


function initCSS() {
    document.getElementById('headingcss').classList.add('headingsidebar:focus');
    questions.splice(0,questions.length);
    questions.push( {
        "question": "Was bedeutet CSS ?",
        "answer_1": "Cascading Style Sheets",
        "answer_2": "Creative Style Sheets",
        "answer_3": "Colorful Style Sheets",
        "answer_4": "Computer Style Sheets",
        "right_answer": 1,
    },

    {

        "question": "Welches HTML Attribut definiert inline Styles ?",
        "answer_1": "styles",
        "answer_2": "class",
        "answer_3": "font",
        "answer_4": "style",
        "right_answer": 4,
    },
    {

        "question": "Welche Syntax ist korrekt ?",
        "answer_1": "{body:color=black;}",
        "answer_2": "{body;color:black;}",
        "answer_3": "body:color=black;",
        "answer_4": "body {color: black;}",
        "right_answer": 4,
    },

    {

        "question": "Wie kommentiert man in CSS ?",
        "answer_1": "/*this is a comment*/",
        "answer_2": "//this is a comment",
        "answer_3": "'this is a comment*/",
        "answer_4": "//this is a comment//",
        "right_answer": 1,
    },

    {

        "question": "Welche CSS Eigenschaft verändert die Schriftgröße ?",
        "answer_1": "text-style",
        "answer_2": "font-size",
        "answer_3": "text-size",
        "answer_4": "font-style",
        "right_answer": 2,
    },
    )

    init();
}

function initJS() {
    document.getElementById('headingcss').classList.add('headingsidebar:focus');
    questions.splice(0,questions.length);
    questions.push( {
        "question": "In welches HTML Element kommt das JavaScript ?",
        "answer_2": "&ltscript&gt;",
        "answer_1": "&ltscripting&gt;",
        "answer_3": "&ltjavascript&gt;",
        "answer_4": "&ltjs&gt;",
        "right_answer": 2,
    },

    {

        "question": "Wie schreibt man ein If Statement ?",
        "answer_1": "if(i==5)",
        "answer_2": "if i==5",
        "answer_3": "if i=5 then",
        "answer_4": "if i==5 then",
        "right_answer": 1,
    },
    {

        "question": "Wie weist man eine Funktion einem HTML Element zu ?",
        "answer_1": "onchange",
        "answer_2": "onclick",
        "answer_3": "onmouseclick",
        "answer_4": "onmouseover",
        "right_answer": 2,
    },

    {

        "question": "Wie deklariert man eine Variable in JS ?",
        "answer_1": "let name = Michael",
        "answer_2": "name = Michael",
        "answer_3": "let Michael",
        "answer_4": "let = Michael",
        "right_answer": 1,
    },

    {

        "question": "Wie schreibt man ein If Statement wenn i NICHT gleich 5 sein soll ?",
        "answer_1": "if(i<>5)",
        "answer_2": "if(i!=5)",
        "answer_3": "if i<>5",
        "answer_4": "ifi=!5 then",
        "right_answer": 2,
    },
    )

    init();
}

function initJAVA() {
    document.getElementById('headingcss').classList.add('headingsidebar:focus');
    questions.splice(0,questions.length);
    questions.push( {
        "question": "Wie erstellt man eine Variable die Text speichert ?",
        "answer_1": "myString",
        "answer_2": "String",
        "answer_3": "string",
        "answer_4": "Txt",
        "right_answer": 3,
    },

    {

        "question": "Wie definiert man eine Variable mit dem Wert 5 ?",
        "answer_1": "int x =5;",
        "answer_2": "num x = 5",
        "answer_3": "float x = 5;",
        "answer_4": "x = 5;",
        "right_answer": 1,
    },
    {

        "question": "Mit welcher Methode ermittelt man die Länge eines Strings ?",
        "answer_1": "length()",
        "answer_2": "len()",
        "answer_3": "getLength()",
        "answer_4": "getSize()",
        "right_answer": 1,
    },

    {

        "question": "Wie gibt man einen String mit Großbuchstaben wieder ?",
        "answer_1": "tuc()",
        "answer_2": "upperCase",
        "answer_3": "touppercase()",
        "answer_4": "toUpperCase()",
        "right_answer": 4,
    },

    {

        "question": "Welchen Operator benutzt man um zwei Werte zu vergleichen ?",
        "answer_1": "><",
        "answer_2": "==",
        "answer_3": "=",
        "answer_4": "<>",
        "right_answer": 2,
    },
    )

    init();
}
