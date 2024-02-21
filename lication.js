const quizData = [
    {
        question: "1. Artificial Intelligence is About?",
        a: "Playing a game on Computer",
        b: "Making a Machine Intelligent",
        c: "Programming on Machine with your Own Intelligence",
        d: "Putting your Intelligence in Machiine",
        correct: "b",
    },
    {
        question: "2. Who is known as the -Father of AI?",
        a: "Fisher Ada",
        b: "Alan Turing",
        c: "John McCarthy",
        d: "Allen Newell",
        correct: "c",
    },
    {
        question: "3. Select the most appropriate situation for that a blind search can be used?",
        a: "Real-life situation",
        b: "Small Search Space",
        c: "Complex Game",
        d: "All of the Above",
        correct: "b",
    },
    {
        question: "4. The Application/Applications of the Artificial Intelligence is/are?",
        a: "Expert Systems",
        b: "Gaming",
        c: "Vision Systems",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "5. Among the given options, which search algorithm requirs less memory?",
        a: "Optimal Search",
        b: "Depth First Search",
        c: "Breadth First Search",
        d: "Linear Search",
        correct: "b",
    },
    {
        question: "6. if a robot is able to change its own trajectory as per the external condition, then the robot is considered as the__",
        a: "Mobile",
        b: "Non-Servo",
        c: "Open Loop",
        d: "Intelligence",
        correct: "d",
    },
    {
        question: "7. Which of the given language is not commonly used for AI",
        a: "LISP",
        b: "PROLOG",
        c: "Python",
        d: "Perl",
        correct: "d",
    },
    {
        question: "8. The Component of an Expert System is____",
        a: "Knowledge Base",
        b: "Inference Engine",
        c: "User Interface",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "9. Which algorithm is used in the Game tree to make decisions of Win/Lose?",
        a: "Heuritic Search Algorithm",
        b: "DFS/BFS Algorithm",
        c: "Greedy Search Algorithm",
        d: "Min-Max Algorithm",
        correct: "d",
    },
    {
        question: "10. The Available ways to solve a problem of state-space-search",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "b",
    },
    
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})