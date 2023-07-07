
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
        b:'Hay-times making Love',
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
const savedAnswers = []
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')






// we want to keep track of the current Question being asked
//currentQuestion is given an index value of 0
// this will allow it to grab the first obj from the array.
let currentQuiz = 0;

//!score variable will keep track of how my question were answered correctly
let score = 0

// !function call to load questions (conditional)
loadQuiz()



//!Creating a function to load Quiz from obj array
function loadQuiz() {
    deselectAnswers()
    
    //Starting of with the first object being the first quiz
    //the first question is located at quizData[0] = currentQuestion
    const currentQuizData = quizData[currentQuiz];
    
    //assigning the contents of the first question of the first obj to the innerText of the h2 element
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

//!Creating a function for answers that are selected
function getSelected(){
    const answerEls = document.querySelectorAll(".answer");
    
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
    }
});
return answer
}


//!Creating a function that deselects answers when next question is loaded
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

//!Event listener for when the submit button is clicked
submitBtn.addEventListener("click",() => {
    
    //** this will be the returned value from the getSelected() */
    const answer = getSelected();
    
    console.log(answer)

    if(answer) {
        if(answer) {
           if(answer === quizData[currentQuiz].correct) {
           savedAnswers.push(answer)
            score++;
           }
            currentQuiz++;
            //create a condition for loading the # of quizzes within the array
            if(currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                // alert("you fucking finished bitch")   
                quiz.style.textAlign = "center";
                quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} question.</h2> <button class="newbtn" onclick="location.reload()">Reload</button>`;
            }

        }
    }
    
});

        
