const quizData = [
    {
        question: "What is the most used programming language in 2022?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What is the full form of CSS",
        a: "Cascaded Style Sheets",
        b: "CSS",
        c: "Cascade Style Sheet",
        d: "Cascading Style Sheets",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const container = document.querySelector(".container");
const queTitle = document.getElementById("queTitle");
const ansEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("submit");

let queCount = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    clearAns();
    const currentData = quizData[queCount];

    queTitle.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

function clearAns(){
    ansEls.forEach((ans) => {
        ans.checked = false;
    });
}

function selectedAns(){
    let answer = undefined;
    ansEls.forEach(answerEl => {
        if(answerEl.checked == true)
        answer = answerEl.id;
    });
    return answer;
}

btn.addEventListener("click", () => {
    const answer = selectedAns();

    if(answer){
        if(answer === quizData[queCount].correct){
            score++;
        }

        queCount++;

        if(queCount < quizData.length)
        loadQuiz();

        else
        {
            container.innerHTML=`
            <h2>You have correctly answered ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }   
    }
});