let ansDB = [
    {
        question: "Which type of JavaScript language is ___",
        a : "Object-Oriented",
        b : "Object-Based",
        c: "Assembly-language",
        d : "High-level",
        ans: "ans2",
    },
    {
        question: `Which of the following is the correct output for the following JavaScript code:
        <pre>
        var x=5,y=1  
        var obj ={ x:10}  
        with(obj)  
        {  
            alert(y)  
        }</pre>`,
        a : "1",
        b : "Error",
        c: "10",
        d : "5",
        ans: "ans1",
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        a : "Alternative to if-else",
        b : "Switch statement",
        c: "If-then-else statement",
        d : "immediate if",
        ans: "ans4",
    }
]

let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let question = document.querySelector("#question");

let submit = document.querySelector("#submit");
let i=0;
let score=0;
let selectedValue;
function getQuestion(){
    console.log(ansDB[i]);
    question.innerHTML = ansDB[i].question;
    option1.innerHTML = ansDB[i].a;
    option2.innerHTML = ansDB[i].b;
    option3.innerHTML = ansDB[i].c;
    option4.innerHTML = ansDB[i].d;
    
}
function checkAnswer(){
    let ans = document.querySelectorAll('input[name="answer"]');
        for(const a of ans){
            if(a.checked){
                selectedValue = a.value;
                break;
            }
        }
        return selectedValue;
}
function uncheckAnswer(){
    let ans = document.querySelectorAll('input[name="answer"]');
        for(const a of ans){
            if(a.checked){
                a.checked = false;
                break;
            }
        }
}
getQuestion(0);
submit.addEventListener('click',()=>{
    let checkedAnswer = checkAnswer();
    if(checkedAnswer == ansDB[i].ans){
        score++;
    }
    i++;
    if(i<ansDB.length){
        getQuestion();
        uncheckAnswer();
    }
    else{
        console.log(score);
        let scoreBoard = document.querySelector(".scoreArea");
        scoreBoard.innerHTML = `
        <h1>Score Board:</h1>
        <h2 class="center">Your get ${score} outof ${ansDB.length}.<h2>
        <div class="center">
        <button class="btn" id="submit" onclick="location.reload()">Play Again</button>
        </div>
        `
        scoreBoard.classList.remove('scoreArea');
    }
})