
// each question is going to be an obj literal within the array 

const quizData = [
    {
        question: 'How old is Linda',
        a:'10',
        b:'17',
        c:'26',
        d:'110',
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
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')





// we want to keep track of the current Question being asked
//currentQuestion is give an index value of 0
// this will allow it to grab the first obj from the array.
let currentQuiz = 0;
loadQuiz()





// create a function that load the quiz and the reloads every time that the submit button is clicked.
//everytime that the quiz loads the next obj element within the array  will load 
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
}


function getSelected(){
    console.log("hi there ")
    const answers = document.querySelectorAll('.answer');
    answers.forEach((answer) => {
      console.log(answer.value);
    })
}



submitBtn.addEventListener("click",() => {
    currentQuiz++;

    getSelected();

    // //create a condition for loading the # of quizzes within the array
    // if(currentQuiz <quizData.length) {
    //     loadQuiz();
    // } else {
    //     alert("Congratulations, You finished!! ")
    // }
    
});

        

