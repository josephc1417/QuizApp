
// each question is going to be an obj literal within the array 

const quizData = [
    {
        question: 'How old is Linda',
        a_1:'10',
        a_2:'17',
        a_3:'26',
        a_4:'110',
        correct:'c'
    }, {
        question: 'What is the most used programming language in 2023?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'JavaScript',
        correct:'d'
    },{
        question: "Who is the president of the US?",
        a:'Trump',
        b:'Sleepy Joe',
        c:'Obama',
        d:'Jason Kid',
        correct:'a'
    },{
        question: "What does HTML stand for?",
        a:'Hypertext Markup Language',
        b:'Happytimes making Love',
        c:'Hypertext moveable Language',
        d:'Hexadecimal-text Multi-variable Language',
        correct:'a'
    },{
        question: "What year was JavaScript Launched?",
        a:'1995',
        b:'1996',
        c:'1994',
        d:'none of the above',
        correct:'a'
    }


]

const questionEl = document.getElementById('question')

//selecting label elements 
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')





// we want to keep track of the current Question being asked
//currentQuestion is give an index value of 0
let currentQuiz = 0;
loadQuiz()

// create a function that load the quiz and the reloads every time that the submit button is clicked.
function loadQuiz() {
//Starting of with the first object being the first quiz
//the first question is located at quizData[0] = currentQuestion
    const currentQuizData = quizData[currentQuiz];

    //assigning the contents fo the first question of the first obj to the innerText of the h2 element
    questionEl.innerText = currentQuizData.question;
    
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
    
    
    
    
    currentQuestion++;
}
